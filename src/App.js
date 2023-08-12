import { CoreApp } from "@wrappid/core";

import rxIconJson from "./customFonts/rxicon-config.json";
import { ApplicationRegistry } from "./registry/ApplicationRegistry";
import { ComponentsRegistry } from "./registry/ComponentsRegistry";
import { FunctionsRegistry } from "./registry/FunctionsRegistry";
import { MenusRegistry } from "./registry/MenusRegistry";
import { ReducersRegistry } from "./registry/ReducersRegistry";
import { ResourcesRegistry } from "./registry/ResourcesRegistry";
import { ValidationsRegistry } from "./registry/ValidationsRegistry";
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
            applicationRegistry={ApplicationRegistry}
            componentRegistry={ComponentsRegistry}
            functionsRegistry={FunctionsRegistry}
            menuRegistry={MenusRegistry}
            reducers={ReducersRegistry}
            resourceRegistry={ResourcesRegistry}
            validationsRegistry={ValidationsRegistry}
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
