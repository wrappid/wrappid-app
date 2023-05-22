import { CoreApp } from "@wrappid/core";

import { ComponentRegistry } from "./ComponetRegistry";
import rxIconJson from "./customFonts/rxicon-config.json";
import { ReducerRegistry } from "./ReducerRegistry";
import AppClasses from "./styles/AppClasses";
import { defaultAppStyles } from "./styles/DefaultAppStyles";
import { largeAppStyles } from "./styles/LargeAppStyles";
import { mediumAppStyles } from "./styles/MediumAppStyles";
import { smallAppStyles } from "./styles/SmallAppStyles";
import { xLargeAppStyles } from "./styles/XLargeAppStyles";
import { xXLargeAppStyles } from "./styles/XXLargeAppStyles";

function App() {
    return (
        <CoreApp
            reducers={ReducerRegistry}
            componentRegistry={ComponentRegistry}
            customIcons={{ rxi: rxIconJson }}
            appStyles={{
                classes: AppClasses,
                styles : {
                    default: defaultAppStyles,
                    large  : largeAppStyles,
                    medium : mediumAppStyles,
                    small  : smallAppStyles,
                    xLarge : xLargeAppStyles,
                    xxLarge: xXLargeAppStyles,
                },
            }}
        />
    );
}

export default App;
