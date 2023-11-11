import AppClasses from "./AppClasses";
import { defaultAppStyles } from "./DefaultAppStyles";
import { largeAppStyles } from "./LargeAppStyles";
import { mediumAppStyles } from "./MediumAppStyles";
import { defaultModulesStyles } from "./modules/DefaultModulesStyles";
import { largeModulesStyles } from "./modules/LargeModulesStyles";
import { mediumModulesStyles } from "./modules/MediumModulesStyles";
import ModulesClasses from "./modules/ModulesClasses";
import { smallModulesStyles } from "./modules/SmallModulesStyles";
import { xLargeModulesStyles } from "./modules/XLargeModulesStyles";
import { xXLargeModulesStyles } from "./modules/XXLargeModulesStyles";
import { smallAppStyles } from "./SmallAppStyles";
import { xLargeAppStyles } from "./XLargeAppStyles";
import { xXLargeAppStyles } from "./XXLargeAppStyles";

const appStyles = {
    classes: { ...AppClasses, ...ModulesClasses },
    styles : {
        default: [...defaultAppStyles, ...defaultModulesStyles],
        large  : [...largeAppStyles, ...largeModulesStyles],
        medium : [...mediumAppStyles, ...mediumModulesStyles],
        small  : [...smallAppStyles, ...smallModulesStyles],
        xLarge : [...xLargeAppStyles, ...xLargeModulesStyles],
        xxLarge: [...xXLargeAppStyles, ...xXLargeModulesStyles],
    },
};

export default appStyles;