using ICSharpCode.SharpZipLib.Zip;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Xml;

namespace CC_StringExporter
{
    class Program
    {
        static ArrayList s_odsSheetList;
        static Dictionary<string,Dictionary<string, Dictionary<string, string>>> s_textData;

        static bool s_odsValidColumn = false;
        static bool s_odsComment = false;
        static int s_odsNoRepeatingColumns = 0;

        static int startCol = -1;
        static int startRow = -1;
        static int idCol = -1;
        static string inputFile = "";
        static string outputFolder = "";

        static bool s_startP = false; // for adding <br> when starting a P
        static int s_nbP = 0;

        static void Main(string[] args)
        {

            // parse arguments
            if(args.Length < 5)
            {
                printHelp();
            }
            for(int argIdx = 0;  argIdx < args.Length; argIdx++)
            {
                if(args[argIdx] == "-i")
                {
                    argIdx++;
                    if(argIdx >= args.Length)
                    {
                        printHelp();
                    }
                    inputFile = args[argIdx];
                }
                else if (args[argIdx] == "-o")
                {
                    argIdx++;
                    if (argIdx >= args.Length)
                    {
                        printHelp();
                    }
                    outputFolder = args[argIdx];
                }
                else if (args[argIdx] == "-startCol")
                {
                    argIdx++;
                    if (argIdx >= args.Length)
                    {
                        printHelp();
                    }
                    if(!int.TryParse(args[argIdx], out startCol))
                    {
                        startCol = -1;
                    }
                }
                else if (args[argIdx] == "-startRow")
                {
                    argIdx++;
                    if (argIdx >= args.Length)
                    {
                        printHelp();
                    }
                    if (!int.TryParse(args[argIdx], out startRow))
                    {
                        startRow = -1;
                    }
                }
                else if (args[argIdx] == "-idCol")
                {
                    argIdx++;
                    if (argIdx >= args.Length)
                    {
                        printHelp();
                    }
                    if (!int.TryParse(args[argIdx], out idCol))
                    {
                        idCol = -1;
                    }
                }
            }

            // checked arguments
            if(inputFile == "" || outputFolder == "" || startCol == -1 || startRow == -1 || idCol == -1)
            {
                Console.WriteLine("Invalid argument");
                printHelp();
            }

            s_textData = new Dictionary<string, Dictionary<string, Dictionary<string, string>>>();
            string nfn =  "./" + Path.GetFileNameWithoutExtension(inputFile) +"_copy"+ Path.GetExtension(inputFile);
     
            System.IO.File.Copy(inputFile, nfn, true);
            OdsParse(nfn);
            Export();
            System.IO.File.Delete(nfn);
            Console.WriteLine("Export string Done!");
        }

        static void printHelp()
        {
            Console.WriteLine("Usage: CCStringExporter.exe -i <ods Input File> -o <output Folder> -startCol <number> -startRow <number> -idCol <number>");
            Console.WriteLine("\tods Input File: Ods text file to process");
            Console.WriteLine("\toutput Folder: Folder to output data");
            Console.WriteLine("\tstartCol: Column index that begin language set (start form 0)");
            Console.WriteLine("\tstartRow: Row index that begin language string (start form 0)");
            Console.WriteLine("\tidCol: Column index that string id set (start form 0)");

            Console.ReadKey();
            Environment.Exit(0);
        }

        static void Export()
        {
            // collect language support
            var langIds = new Dictionary<string, int>();
            DataTable sampleSheet = (DataTable)s_odsSheetList[0];
            for (int i = startCol; i < sampleSheet.Columns.Count; i++)
            {
                if(sampleSheet.Rows[0][i].ToString() != "")
                {
                    string lang = Regex.Replace(sampleSheet.Rows[0][i].ToString(), "[^0-9A-Za-z]+", "");
                    langIds[lang] = i;
                }
            }
            // collect string for all sheet
            foreach(string lang in langIds.Keys)
            {
                s_textData[lang] = new Dictionary<string, Dictionary<string, string>>();

                foreach (DataTable data in s_odsSheetList)
                {
                    s_textData[lang][data.TableName] = new Dictionary<string, string>();
                    for(int i = startRow; i < data.Rows.Count; i++)
                    {
                        if (data.Rows[i][idCol].ToString() != "")
                        {
                            s_textData[lang][data.TableName][data.Rows[i][idCol].ToString()] = data.Rows[i][langIds[lang]].ToString();
                        }
                    }
                }
            }

            // export suport languages            
            {
                var fileName = outputFolder + "/supported-languages.js";
                try
                {
                    using (StreamWriter outFile = new StreamWriter(new FileStream(fileName, FileMode.Create, FileAccess.Write)))
                    {
                        outFile.WriteLine("//// This file is auto generate by CCStringExporter tools, Do not direct modify");
                        outFile.WriteLine("");                        
                        outFile.WriteLine("export let supportedLanguages = [");

                        int i = 0;
                        foreach (string lang in langIds.Keys)
                        {
                            string delim = ",";
                            if(i == langIds.Keys.Count - 1)
                            {
                                delim = "\n";
                            }
                            outFile.Write(" '" + lang.ToLower() + "'" + delim);
                            i++;
                        }
                        outFile.WriteLine("];");
                    }

                }
                catch (Exception e)
                {
                    Console.WriteLine("ERROR when write file: " + fileName);
                }
            }

            // export string data
            foreach(string lang in s_textData.Keys)
            {
                var fileName = outputFolder + '/' + lang.ToLower() + ".json";
                try
                {                    
                    using (StreamWriter outFile = new StreamWriter(new FileStream(fileName, FileMode.Create, FileAccess.Write)))
                    {                        
                        outFile.WriteLine("{");

                        int s = 0;
                        foreach(string sheet in s_textData[lang].Keys)
                        {
                            //outFile.WriteLine("\t\"" + sheet.ToLower() + "\": {");

                            int t = 0;
                            foreach(var texts in s_textData[lang][sheet])
                            {
                                string temp = ",";
                                if(s_textData[lang][sheet].Keys.Count - 1 == t)
                                {
                                    temp = "";
                                }
                                outFile.WriteLine("\t\t\"" + texts.Key.Trim() + "\": " + " \"" + texts.Value.Replace("\"", "\\\"") + "\"" + temp);
                                t++;
                            }

                            /*if(s_textData[lang].Keys.Count - 1 == s)
                            {
                                outFile.WriteLine("\t}");
                            } else
                            {
                                outFile.WriteLine("\t},");
                            }*/
                            s++;
                        }

                        outFile.WriteLine("}");

                    }
                }catch(Exception e)
                {
                    Console.WriteLine("ERROR when write file: " + fileName);
                }
            }
        }

        static void OdsParse(string fileName)
        {
            var InFile = new FileStream(fileName, FileMode.Open, FileAccess.Read);
            s_odsSheetList = new ArrayList();

            ZipInputStream zip = new ZipInputStream(InFile);

            ZipEntry ze = null;

            do
            {
                ze = zip.GetNextEntry();
            }
            while (ze.Name.CompareTo("content.xml") != 0);

            using (XmlTextReader reader = new XmlTextReader(zip))
            {
                DataTable data = null;
                DataColumn column = null;
                DataRow row = null;
                IEnumerator it = null;

                for (reader.MoveToContent(); reader.Read();)
                {
                    // Console.Write("\nNodeType: " + reader.NodeType);
                    switch (reader.NodeType)
                    {
                        case XmlNodeType.Element:
                            OdsStartElement(reader, ref data, ref row, ref column, ref it);
                            break;

                        case XmlNodeType.EndElement:
                            OdsEndElement(reader, ref data, ref row, ref column, ref it, ref s_odsSheetList);
                            break;

                        case XmlNodeType.Text:

                            string str = reader.Value;

                            if (it != null && s_odsValidColumn && !s_odsComment)
                            {
                                column = (DataColumn)it.Current;
                                if (s_startP && !string.IsNullOrEmpty(row[column].ToString()))
                                {
                                    for (int i = 0; i< s_nbP; i++)
                                    {
                                        row[column] += "<br>";
                                    }
                                    s_startP = false;
                                    
                                }
                                s_nbP = 0;
                                row[column] += str;

                                // Console.Write("\nText. " + "column: " + column.ToString() + ". row[column] after: " + row[column]);
                                
                                if (s_odsNoRepeatingColumns != 0)
                                {
                                    for (int i = 1; i < s_odsNoRepeatingColumns; i++)
                                    {
                                        s_odsValidColumn = it.MoveNext();
                                        if (s_odsValidColumn)
                                        {
                                            column = (DataColumn)it.Current;
                                            row[column] += str;
                                        }
                                    }

                                    s_odsNoRepeatingColumns = 0;
                                }
                            }
                            break;

                        case XmlNodeType.Whitespace:

                            break;
                    }
                }
            }
        }

        static void OdsStartElement(XmlTextReader reader, ref DataTable data, ref DataRow row, ref DataColumn column, ref IEnumerator it)
        {
            // Console.Write("\nOdsStartElement: " + reader.Name);
            switch (reader.Name)
            {
                case "table:table":

                    data = new DataTable();
                    data.TableName = reader.GetAttribute("table:name");
                    break;
                case "table:table-source":
                    break;
                case "table:table-column":

                    if (data == null)
                        throw new Exception("column found but no workwsheet ");

                    string strColumns = reader.GetAttribute("table:number-columns-repeated");
                    if (strColumns != null)
                    {
                        int noColumns = int.Parse(strColumns);
                        for (int i = 0; i < noColumns; i++)
                        {
                            column = new DataColumn();
                            data.Columns.Add(column);
                        }
                    }
                    else
                    {
                        column = new DataColumn();
                        data.Columns.Add(column);
                    }

                    break;
                case "table:table-row":

                    if (data == null)
                        throw new Exception("row found but no workwsheet ");

                    //string strRowsRepeated = reader.GetAttribute("table:number-rows-repeated");
                    //if(strRowsRepeated != null)
                    //{
                    //    int rowsRepeat = int.Parse(strRowsRepeated);
                    //    for(int i = 0; i < rowsRepeat; i++)
                    //    {
                    //        row = data.NewRow();
                    //        data.Rows.Add(row);
                    //    }
                    //}
                    //else
                    {
                        row = data.NewRow();
                        data.Rows.Add(row);
                    }

                    it = data.Columns.GetEnumerator();
                    it.Reset();

                    s_odsNoRepeatingColumns = 0;

                    break;

                case "table:table-cell":
                case "table:covered-table-cell":
                    s_nbP = 0;

                    string strColumnsRepeated = reader.GetAttribute("table:number-columns-repeated");
                    if (strColumnsRepeated != null)
                    {
                        s_odsNoRepeatingColumns = int.Parse(strColumnsRepeated);

                        if (reader.IsEmptyElement)
                        {
                            if (s_odsNoRepeatingColumns != 0)
                            {
                                for (int i = 1; i < s_odsNoRepeatingColumns; i++)
                                {
                                    s_odsValidColumn = it.MoveNext();
                                }

                                s_odsNoRepeatingColumns = 0;
                            }
                        }
                    }
                    else
                    {
                        s_odsNoRepeatingColumns = 0;
                    }

                    s_odsValidColumn = it.MoveNext();


                    break;

                case "office:annotation":


                    s_odsComment = true;
                    break;
                case "text:p":

                    string str = reader.Value;
                    // Console.WriteLine("\ntext:p: " + str);

                    s_nbP++;
                    if (column.Ordinal >= 1 && column.Ordinal != 1010)
                    {
                        if (!row[column].ToString().Contains("::") && !string.IsNullOrEmpty(row[column].ToString()))
                        {
                            s_startP = true;
                            // Console.Write("\ncolumn.Ordinal: " + column.Ordinal + ". s_nbP: " + s_nbP);
                            // Console.Write("\nrow[column].ToString().Contains('::'): " + row[column].ToString().Contains("::"));
                            
                        }
                    }
                    
                    break;
                case "text:s":

                    String strNbRepeat = reader.GetAttribute("text:c");

                    int nbSpaceRepeat = 0;

                    if (strNbRepeat == null)
                        nbSpaceRepeat = 1;
                    else
                        nbSpaceRepeat = int.Parse(strNbRepeat);

                    if (row != null || column != null)
                    {
                        for (int i = 0; i < nbSpaceRepeat; i++)
                        {
                            row[column] += " ";
                        }
                    }

                    break;
                case "text:line-break":
                    break;
                case "text:tab-stop":
                    break;
            }
        }

        static void OdsEndElement(XmlTextReader reader, ref DataTable data, ref DataRow row, ref DataColumn column, ref IEnumerator it, ref ArrayList WorkSheetList)
        {
            // Console.Write("\nOdsEndElement: " + reader.Name);
            switch (reader.Name)
            {

                case "table:table-cell":

                    break;
                case "table:covered-table-cell":

                    break;
                case "office:annotation":

                    s_odsComment = false;

                    break;

                case "table:table":

                    if (data == null)
                    {
                        throw new Exception("Worksheet Ended but hasn't started");
                    }

                    WorkSheetList.Add(data);
                    data = null;

                    break;
                case "text:p":
                    break;
            }
        }

    }
}
