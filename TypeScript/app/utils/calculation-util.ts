const MAXQ = 50;
const MINQ = 0;

export class CalculationUtil {
  static lessMax(quality) {
    return quality < MAXQ;
  }

  static moreMax(quality) {
    return quality < MINQ;
  }

  static upQuality(quality) {
    return this.lessMax(quality) ? quality + 1 : quality;
  }

  static downQuality(quality) {
    return this.moreMax(quality) ? quality - 1 : quality;
  }

  static backstagePassesUpdate(
    itemQuality: number,
    itemSellIn: number
  ): number {
    let quality = this.upQuality(itemQuality);
    quality = itemSellIn < 11 ? this.upQuality(quality) : quality;
    quality = itemSellIn < 6 ? this.upQuality(quality) : quality;

    return quality;
  }

  static updateItemQuality(itemQuality: number, sellIn: number): number {
    itemQuality = CalculationUtil.downQuality(itemQuality);
    itemQuality =
      sellIn <= 0 ? CalculationUtil.downQuality(itemQuality) : itemQuality;
    return itemQuality;
  }
}
