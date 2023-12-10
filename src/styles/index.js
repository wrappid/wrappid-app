import AppClasses from "./AppClasses";
import { DefaultAppStyles } from "./DefaultAppStyles";
import { largeAppStyles } from "./LargeAppStyles";
import { mediumAppStyles } from "./MediumAppStyles";
import ModulesClasses from "./modules/ModulesClasses";
import { smallAppStyles } from "./SmallAppStyles";
import { xLargeAppStyles } from "./XLargeAppStyles";
import { xXLargeAppStyles } from "./XXLargeAppStyles";

/**
 * @todo
 * module registry needs to be added here
 */
const appStyles = {
  classes: { ...AppClasses, ...ModulesClasses },
  styles : {
    default: { ...new DefaultAppStyles().style },
    large  : { ...largeAppStyles },
    medium : { ...mediumAppStyles },
    small  : { ...smallAppStyles },
    xLarge : { ...xLargeAppStyles },
    xxLarge: { ...xXLargeAppStyles },
  },
};

export default appStyles;