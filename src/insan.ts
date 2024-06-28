export interface iİnsan { // İnterfacemiz burada insan interfacesen exportlanıyor
  ad: string;
  soyad: string;
}

export default class İnsan implements iİnsan { //insanımızın temel özellikleri herkes insan olabilir
  private isim: string;
  private soyisim: string;
  constructor({ ad, soyad }: iİnsan) {
    this.isim = ad;
    this.soyisim = soyad;
  }

  get ad() {
    return this.isim;
  }
  set ad(isim: string) {
    this.isim = isim;
  }

  get soyad() {
    return this.soyisim;
  }

  set soyad(soyisim: string) {
    this.soyisim = soyisim;
  }
}
