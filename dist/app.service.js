"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const dataAraay = require("./app.data");
const fs_1 = require("fs");
const csv = require("csv-parser");
let AppService = class AppService {
    async getCSVDataAndUpload(path) {
        const items = await new Promise((resolve, reject) => {
            const items2 = [];
            (0, fs_1.createReadStream)(path).pipe(csv({})).on('data', (data) => { items2.push(data); dataAraay.data.data.push(data); }).on('end', () => resolve(items2)).on('error', () => reject(null));
        });
        return dataAraay.data.data;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map