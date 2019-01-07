import { ICountryModel } from './models/country';
import * as data from './data/countries.json';
import * as functions from './functions/country';

const translation_keys = [
    "ces", "cym", "deu", "fra", "hrv", "ita", "jpn", "nld", "por", "rus", "slk", "spa", "fin", "est", "zho", "pol", "urd", "kor"
];

// get translation key
var translation_key = process.argv[2];

if (translation_key === undefined) {
    // if translation key is undefined, exit with failure code
    console.log("Please input translation key.");
    process.exit(1);
} else if (!translation_keys.includes(translation_key)) {
    // if translation key is not valid, exit with failure code
    console.log("Please input valid translation key.")
    process.exit(1);
}

// import data of countries
const countries: ICountryModel[] = data as any;

// get translation of official name of countries
const translations = functions.getTranslations(translation_key, countries);

// print translation of country names
translations.forEach(t => console.log(t));