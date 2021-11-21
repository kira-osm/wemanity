import { AgedBrie } from "./models/agedbrie";
import { Backstage } from "./models/backstage";
import { Conjured } from "./models/conjured";
import { Item } from "./models/item";
import { NormalItem } from "./models/normal-item";
import { Sulfuras } from "./models/sulfuras";
import { CalculationUtil } from "./utils/calculation-util";

export class GildedRose {
  //List of polymorphic items
  items: Array<Item>;

  calculation: CalculationUtil = new CalculationUtil();

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  //exemple
  initItems() {
    this.items.push(new AgedBrie(Name.AGEDBRIE, 12, 4));
    this.items.push(new Conjured(Name.CONJURED, 12, 4));
    this.items.push(new Backstage(Name.BACKSTAGE, 12, 4));
    this.items.push(new Sulfuras(Name.SULFURAS, 12, 4));
    this.items.push(new NormalItem("", 12, 4));
  }

  updateQuality() {
    this.items.forEach((thisItem) => {
      thisItem.updateQuality();
    });
  }
}
