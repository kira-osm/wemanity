export interface Item {
    name: string;
    sellIn: number;
    quality: number;
  

    // function to be implemented by child items
    updateQuality();
  }