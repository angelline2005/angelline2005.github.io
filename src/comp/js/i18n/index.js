// import { myConsoleLog } from "../../../globals.js";
import { supportedLanguages as supportedLocales } from "./lang/supported-languages";

const name = "i18n";

// The locale our app first shows
let defaultLocale = "en";
// The active locale
let locale;
// Gets filled with active locale translations
let translations = {};

let setLocale = async (newLocale) =>  {
  console.log(name, setLocale.name, newLocale)
  if (newLocale === locale) return;

  locale = newLocale;
  const newTranslations = 
    await fetchTranslationsFor(newLocale);

  translations = newTranslations;

  translatePage();
}
// Retrieve translations JSON object for the given
// locale over the network
async function fetchTranslationsFor(newLocale) {
  return import(`./lang/${locale}.json`);
  /* const response = await fetch(`./lang/${newLocale}.json`);
  return await response.json(); */
}
// Replace the inner text of each element that has a
// data-i18n-key attribute with the translation corresponding
// to its data-i18n-key
function translatePage() {
  console.log(name, translatePage.name)
  
  document
    .querySelectorAll("[data-i18n-key]")
    .forEach(translateElement);
}
// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
function translateElement(element) {
  // console.log(name, translateElement.name, element)  
  const key = element.getAttribute("data-i18n-key");
  const option = element.getAttribute("data-i18n-option");
  // console.log(name, translateElement.name, "option", option)
  __T(key, {...JSON.parse(option), element})
}
function isSupported(locale) {
  return supportedLocales.indexOf(locale) > -1;
}
function supportedOrDefault(locales) {
  return locales.find(isSupported) || defaultLocale;
}
function browserLocales(languageCodeOnly = false) {
  return navigator.languages.map((locale) =>
    languageCodeOnly ? locale.split("-")[0] : locale,
  );
}
let init = () => {
  console.log(name, init.name)
  const initialLocale = supportedOrDefault(browserLocales(true));
  setLocale(initialLocale)
};

export let __T = async (
  key,
  option = { subIdArr: null, interpolations: null, element: null }
) => {
  // console.log(name, __T.name, "option", option)

  await fetchTranslationsFor(locale);
  let result = "";
  if (!translations[key]) {
    console.log(name, __T.name, key, translations[key]);
    return
  }
  result = translations[key];
  const { subIdArr } = option;
  // subId
  if (subIdArr) {
    for (const subId of subIdArr) {
      let subIdResult = "";
      subIdResult = await __T(subId);
      // console.log(name, "subIdResult", subIdResult)
      result = result.replace(subId, subIdResult);
    }
  }
  // interpolations
  const { interpolations } = option;  
  if (interpolations) {
    result = Object.keys(interpolations).reduce(
      (interpolated, key) =>
        interpolated.replace(
          new RegExp(`{\s*${key}\s*}`, "g"),
          interpolations[key]
        ),
      result
    );
  }

  // console.log(name, "result", result, option);
  const { element } = option;
  if (element) {
    element.innerHTML = result;
    element.setAttribute("data-i18n-key", key);
    element.setAttribute(
      "data-i18n-option",
      JSON.stringify({ ...option, element: null })
    );
  }
  return result;
};


init();

// test
window.__setLocate = (value) => {
  setLocale(value)
}
// un-rem to test
// __T('STR_TUTORIAL_1').then(text => console.log(name, text))
// __T('testSubId_subStr').then(text => console.log(name, text))
// __T('testSubId_subStr', { interpolations: { '0': 0, '1': 11, '2': 22 }}).then(text => console.log(name, text))
// __T('testSubId_subStr', { subIdArr: ['testId', 'test-id'], interpolations: { '0': 0, '1': 11, '2': 22 }}).then(text => console.log(name, text))

