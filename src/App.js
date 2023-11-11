import { CoreApp } from "@wrappid/core";

import rxIconJson from "./customFonts/rxicon-config.json";
import { ApplicationRegistry } from "./registry/ApplicationRegistry";
import { ComponentsRegistry } from "./registry/ComponentsRegistry";
import { FunctionsRegistry } from "./registry/FunctionsRegistry";
import { MenusRegistry } from "./registry/MenusRegistry";
import { ReducersRegistry } from "./registry/ReducersRegistry";
import { ResourcesRegistry } from "./registry/ResourcesRegistry";
import { RoutesRegistry } from "./registry/RoutesRegistry";
import { ValidationsRegistry } from "./registry/ValidationsRegistry";
import appStyles from "./styles";

function App() {
    return (
        <CoreApp
            applicationRegistry={ApplicationRegistry}
            componentRegistry={ComponentsRegistry}
            functionsRegistry={FunctionsRegistry}
            menuRegistry={MenusRegistry}
            reducers={ReducersRegistry}
            resourceRegistry={ResourcesRegistry}
            routesRegistry={RoutesRegistry}
            validationsRegistry={ValidationsRegistry}
            customIcons={{ rxi: rxIconJson }}
            appStyles={appStyles}
        />
    );
}

export default App;
