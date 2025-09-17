import Masonry from "masonry-layout";
import { NgxMasonryI } from "./ngx-masonry-options";

export class NgxMasonry extends Masonry implements NgxMasonryI {
  items: unknown[] = [];

  constructor(options: Masonry.Options);
  constructor(selector: string | Element, options?: Masonry.Options);
  constructor(
    selectorOrOptions?: string | Element | Masonry.Options,
    options?: Masonry.Options
  ) {
    if (
      typeof selectorOrOptions === "string" ||
      selectorOrOptions instanceof Element
    ) {
      // Called with selector as first parameter
      super(selectorOrOptions, options);
    } else {
      // Called with options only or no parameters
      super(selectorOrOptions);
    }
  }
}
