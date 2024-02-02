import { SmallCoreStyles } from "@wrappid/core";

export default class SmallAppStyles extends SmallCoreStyles {
  constructor() {
    super();
    this.style = {
      /**************************************************
       * Using smallUtilityStyles example
       *************************************************/
      usingSmallUtilityStyles: { ...this.smallUtilityStyles.anyUtilityStyle },
    };
  }
}