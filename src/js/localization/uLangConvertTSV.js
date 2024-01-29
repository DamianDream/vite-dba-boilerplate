// Convert `TSV` file with multi-language translation in to separate multi-JSON files.
// TODO:finish loc parse workflow

import fs from 'fs'
// import rawDataImport from '../../resources/lang/i18n_raw_Example.tsv'

const tsvFIlePath = import.meta.glob('../../resources/lang/i18n_raw_Example.tsv', { eager: false, as: "url" });
console.log(tsvFIlePath);

// const rawData = rawDataImport

export const parseTSV = (doc) => {
    // console.log(rawData);
}
