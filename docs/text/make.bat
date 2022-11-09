@echo off
set BIN_DEBUG=%~dp0\..\..\tools\CC_StringExporter\bin\Debug
cd %BIN_DEBUG%
call CCStringExporter.exe -i %~dp0\"Sky Bridge x Huawei - LOC Campaign-2210.ods" -o %~dp0\output\ -startRow 1 -startCol 1 -idCol 0