import { CalculationUtil } from "@/utils/calculation-util";
import { Item } from "./item";

export class NormalItem implements Item {

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
        CalculationUtil.updateItemQuality(this.quality, this.sellIn);
        this.sellIn -= 1;
    }
}