import { Item } from "./item";
import { CalculationUtil } from "../utils/calculation-util";

export class AgedBrie implements Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name :string, sellIn:number, quality:number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
      }

    //Update
    updateQuality() {
        this.quality = CalculationUtil.upQuality(this.quality);
        this.quality =
         (this.sellIn < 0 )? CalculationUtil.upQuality(this.quality) : this.quality;
          
        this.sellIn -= 1;
    }


}