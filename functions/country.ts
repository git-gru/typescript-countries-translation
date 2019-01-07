import { ICountryModel } from '../models/country';

export const getTranslations = (translation_key: string, countries: ICountryModel[]) => {
    return countries.map(c => {
        var translations = c.translations;

        if (translations[translation_key] && translations[translation_key].official) {
            return translations[translation_key].official;
        } else {
            return `Translation for ${translation_key} is not existing for "${c.name.official}"`;
        }
    });
}