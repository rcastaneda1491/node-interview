"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const dataAraay = require("./app.data");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async getCSVDataAndUpload({ path }) {
        return this.appService.getCSVDataAndUpload(path);
    }
    async filterData(type, minPrice, maxPrice, roomsQuantity) {
        if (type == 1)
            return dataAraay.data.data.filter(function (item) {
                if (Number(item.Precio) > Number(minPrice) && Number(item.Precio) < Number(maxPrice)) {
                    return item;
                }
            });
        if (type == 2)
            return dataAraay.data.data.filter(function (item) {
                if (Number(item.Habitaciones) == Number(roomsQuantity)) {
                    return item;
                }
            });
        throw new common_1.BadRequestException();
    }
};
__decorate([
    (0, common_1.Post)('/uploadData'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getCSVDataAndUpload", null);
__decorate([
    (0, common_1.Get)('/filter/:type'),
    __param(0, (0, common_1.Param)('type')),
    __param(1, (0, common_1.Query)('minPrice')),
    __param(2, (0, common_1.Query)('maxPrice')),
    __param(3, (0, common_1.Query)('roomsQuantity')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "filterData", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map