import { CalculationUtil } from "../utils/calculation-util";
import { Item } from "./item";

export class Backstage implements Item {
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
        this.quality =
          this.sellIn == 0 ? 0 : CalculationUtil.backstagePassesUpdate(this.quality, this.sellIn);
        this.sellIn -= 1;
    }

}