"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const insan_1 = __importDefault(require("./insan"));
class Personel extends insan_1.default {
    constructor({ ad, soyad, maaş }) {
        super({ ad, soyad });
        this.maaş = maaş;
    }
    get ücret() {
        return this.maaş;
    }
    set ücret(maaş) {
        this.maaş = maaş;
    }
}
exports.default = Personel;
