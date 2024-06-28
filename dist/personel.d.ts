import İnsan from "./insan";
export interface iPersonel {
    ad: string;
    soyad: string;
    maaş: number;
}
export default class Personel extends İnsan {
    private maaş;
    constructor({ ad, soyad, maaş }: iPersonel);
    get ücret(): number;
    set ücret(maaş: number);
}
