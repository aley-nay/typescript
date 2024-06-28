export interface iİnsan {
    ad: string;
    soyad: string;
}
export default class İnsan implements iİnsan {
    private isim;
    private soyisim;
    constructor({ ad, soyad }: iİnsan);
    get ad(): string;
    set ad(isim: string);
    get soyad(): string;
    set soyad(soyisim: string);
}
