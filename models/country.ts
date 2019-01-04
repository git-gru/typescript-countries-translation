export interface ICountryModel {
    name: IName;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    currency: string[];
    callingCode: string[];
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: ILanguages;
    translations: ITranslations;
    latlng: number[];
    demonym: string;
    landlocked: boolean;
    borders: string[];
    area: number;
    flag: string;
}

export interface ICountryName {
    official: string;
    common: string;
    native: ICountryNativeNames;
}

export interface ICountryNativeNames {
    [key: string]: IName;
}

export interface ILanguages {
    [key: string]: string;
}

export interface IName {
    official: string;
    common: string;
}

export interface ITranslations {
    ces: IName;
    cym: IName;
    deu: IName;
    fra: IName;
    hrv: IName;
    ita: IName;
    jpn: IName;
    nld: IName;
    por: IName;
    rus: IName;
    slk: IName;
    spa: IName;
    fin: IName;
    est: IName;
    zho: IName;
    pol: IName;
    urd: IName;
    kor: IName;
}