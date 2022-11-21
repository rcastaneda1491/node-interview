/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as dataAraay from "src/app.data";
import { createReadStream } from 'fs';
import * as csv from 'csv-parser';

@Injectable()
export class AppService {
    async getCSVDataAndUpload(path: string) {
        const items = await new Promise((resolve, reject) => {
            const items2 = [];
            createReadStream(path).pipe(csv({})).on('data', (data) => { items2.push(data); dataAraay.data.data.push(data) }).on('end', () => resolve(items2)).on('error', () => reject(null));
        })

        return dataAraay.data.data;
    }
}
