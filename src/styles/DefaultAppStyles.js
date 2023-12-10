import { DefaultCoreStyles } from "@wrappid/core";

export class DefaultAppStyles extends DefaultCoreStyles {
  constructor(){
    super();
    this.style = {
      /**************************************************
               * Using defaultUtilityStyles example
               *************************************************/
      usingDefaultUtilityStyles: { ...this.defaultUtilityStyles.anyUtlityStyles },

    };
  }
}
