import { Item } from "./item";

export class Sulfuras implements Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
      }

    //Update
    updateQuality() {
        this.quality = 80;
    }

}