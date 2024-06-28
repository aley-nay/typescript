"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class İnsan {
    constructor({ ad, soyad }) {
        this.isim = ad;
        this.soyisim = soyad;
    }
    get ad() {
        return this.isim;
    }
    set ad(isim) {
        this.isim = isim;
    }
    get soyad() {
        return this.soyisim;
    }
    set soyad(soyisim) {
        this.soyisim = soyisim;
    }
}
exports.default = İnsan;
