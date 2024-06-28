import İnsan from "./insan";

export interface iPersonel { //personel yalnızca doktor hemşire ve laborant olabilir
  ad: string;
  soyad: string;
  maaş: number;
}

export default class Personel extends İnsan {
  private maaş: number;
  constructor({ ad, soyad, maaş }: iPersonel) {
    super({ ad, soyad });
    this.maaş = maaş;
  }
  get ücret() {
    return this.maaş;
  }

  set ücret(maaş: number) {
    this.maaş = maaş;
  }
}
