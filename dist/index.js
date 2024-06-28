"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const insan_1 = __importDefault(require("./insan"));
const personel_1 = __importDefault(require("./personel"));
class Hasta extends insan_1.default {
    constructor({ ad, soyad, hastalık }) {
        super({ ad, soyad });
        this.sick = hastalık;
    }
    get hastalığı() {
        return this.sick;
    }
    set hastalığı(hastalık) {
        this.sick = hastalık;
    }
}
class Doktor extends personel_1.default {
    constructor({ ad, soyad, maaş }) {
        super({ ad, soyad, maaş });
    }
    doktorukim(hasta) {
        console.log(` ${hasta.isim} ${hasta.soyisim}'in doktoru ${this.isim}`);
    }
    hastalikne(hasta){
        console.log(`${hasta.isim} ${hasta.soyisim}'in ${hasta.hastalık} hastalığı bulunuyor.`);
    }
}
class Hemşire extends personel_1.default {
    constructor({ ad, soyad, maaş }) {
        super({ ad, soyad, maaş });
    }
    kimkavgaediyor(laborant) {
        console.log(`${this.isim} adlı hemşire ${laborant.isim} ${laborant.soyisim} ile kavga ediyor.`);
    }
}
class Laborant extends personel_1.default {
    constructor({ ad, soyad, maaş }) {
        super({ ad, soyad, maaş });
    }
    neyapiyor(hasta){
        console.log(`${this.isim} adlı laborant ${hasta.isim} ${hasta.soyisim}'in kanını alıyor.`);
    }
}
const insan = new insan_1.default({
    ad: "Ayşe",
    soyad: "Tunç",
});
const hasta = new Hasta({
    ad: "Mehmet",
    soyad: "Demir",
    hastalık: "Kanser",
});
const doktor = new Doktor({
    ad: "Fatma",
    soyad: "Ağaç",
    maaş: 30000,
});
const hemşire = new Hemşire({
    ad: "Sultan",
    soyad: "Kaya",
    maaş: 30000,
});
const laborant = new Laborant({
    ad: "Ahmet",
    soyad: "Gök",
    maaş: 100000,
});


//yazdırdık
console.log(insan);
console.log(hasta);
console.log(doktor);
console.log(hemşire);
console.log(laborant);
//cümle halinde yazdırdık
doktor.doktorukim(hasta);
doktor.hastalikne(hasta);
laborant.neyapiyor(hasta);
hemşire.kimkavgaediyor(laborant);