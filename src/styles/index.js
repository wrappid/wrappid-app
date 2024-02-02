import AppClasses from "./AppClasses";
import DefaultAppStyles from "./DefaultAppStyles";
import LargeAppStyles from "./LargeAppStyles";
import MediumAppStyles from "./MediumAppStyles";
import DefaultModulesStyles from "./modules/DefaultModulesStyles";
import LargeModulesStyles from "./modules/LargeModulesStyles";
import MediumModulesStyles from "./modules/MediumModulesStyles";
import ModulesClasses from "./modules/ModulesClasses";
import SmallModulesStyles from "./modules/SmallModulesStyles";
import XLargeModulesStyles from "./modules/XLargeModulesStyles";
import XXLargeModulesStyles from "./modules/XXLargeModulesStyles";
import SmallAppStyles from "./SmallAppStyles";
import XLargeAppStyles from "./XLargeAppStyles";
import XXLargeAppStyles from "./XXLargeAppStyles";

/**
 * @todo
 * module registry needs to be added here
 */
const appStyles = {
  classes: { ...AppClasses, ...ModulesClasses },
  styles : {
    default: { ...new DefaultAppStyles().style, ...DefaultModulesStyles },
    large  : { ...new LargeAppStyles().style, ...LargeModulesStyles },
    medium : { ...new MediumAppStyles().style, ...MediumModulesStyles },
    small  : { ...new SmallAppStyles().style, ...SmallModulesStyles },
    xLarge : { ...new XLargeAppStyles().style, ...XLargeModulesStyles },
    xxLarge: { ...new XXLargeAppStyles().style, ...XXLargeModulesStyles },
  },
};

export default appStyles;