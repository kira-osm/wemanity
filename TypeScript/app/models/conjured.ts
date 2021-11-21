import { CalculationUtil } from "../utils/calculation-util";
import { Item } from "./item";

export class Conjured implements Item {
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
    if (this.sellIn == 5) {
      this.quality -= 3;
    } else {
      CalculationUtil.updateItemQuality(this.quality, this.sellIn);
    }

    this.sellIn -= 1;
  }
}
