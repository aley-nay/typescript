import İnsan, { type iİnsan } from "./insan";
import Personel, { type iPersonel } from "./personel";

class Hasta extends İnsan { //hasta yalnızca insan olabilir o yüzden insandan export edildi ayrıca kendisine haz hasta özelliği var
  private sick: string;
  constructor({ ad, soyad, hastalık }: iİnsan & { hastalık: string }) {
    super({ ad, soyad });
    this.sick = hastalık;
  }

  get hastalığı() {
    return this.sick;
  }

  set hastalığı(hastalık: string) {
    this.sick = hastalık;
  }
}

class Doktor extends Personel {
  constructor({ ad, soyad, maaş }: iPersonel) {
    super({ ad, soyad, maaş });
  }
}

class Hemşire extends Personel {
  constructor({ ad, soyad, maaş }: iPersonel) {
    super({ ad, soyad, maaş });
  }
}

class Laborant extends Personel {
  constructor({ ad, soyad, maaş }: iPersonel) {
    super({ ad, soyad, maaş });
  }
}

const insan: İnsan = new İnsan({
  ad: "Ayşe",
  soyad: "Tunç",
});

const hasta: Hasta = new Hasta({
  ad: "Mehmet",
  soyad: "Demir",
  hastalık: "Kanser",
});

const doktor: Doktor = new Doktor({
  ad: "Fatma",
  soyad: "Ağaç",
  maaş: 50_000,
  
}

);

const hemşire: Hemşire = new Hemşire({
  ad: "Sultan",
  soyad: "Kaya",
  maaş: 20_000,
});

const laborant: Laborant = new Laborant({
  ad: "Ahmet",
  soyad: "Gök",
  maaş: 100_000,
});
