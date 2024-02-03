import { LargeCoreStyles } from "@wrappid/core";

export default class LargeAppStyles extends LargeCoreStyles {
  constructor() {
    super();
    this.style = {
      /**************************************************
       * Using LargeUtilityStyles example
       *************************************************/
      usingLargeUtilityStyles: { ...this.LargeUtilityStyles.anyUtilityStyle },
    };
  }
}