import { CoreApp } from "@wrappid/core";

// eslint-disable-next-line import/order
import packageJson from "../package.json";
import applicationConfig from "./config.json";
import rxIconJson from "./customFonts/rxicon-config.json";
import { ApplicationRegistry } from "./registry/ApplicationRegistry";
import { ComponentsRegistry } from "./registry/ComponentsRegistry";
import { FunctionsRegistry } from "./registry/FunctionsRegistry";
import { MenusRegistry } from "./registry/MenusRegistry";
import { ReducersRegistry } from "./registry/ReducersRegistry";
import { ResourcesRegistry } from "./registry/ResourcesRegistry";
import { RoutesRegistry } from "./registry/RoutesRegistry";
import { ThemesRegistry } from "./registry/ThemesRegistry";
import { ValidationsRegistry } from "./registry/ValidationsRegistry";
import appStyles from "./styles";

function App() {
  return (
    <CoreApp
      applicationConfig={{ ...applicationConfig, ...applicationConfig?.wrappid, packageInfo: { ...packageJson } }}
      appStyles={appStyles}
      customIcons={{ rxi: rxIconJson }}
      applicationRegistry={ApplicationRegistry}
      themesRegistry={ThemesRegistry}
      routesRegistry={RoutesRegistry}
      menusRegistry={MenusRegistry}
      componentsRegistry={ComponentsRegistry}
      reducersRegistry={ReducersRegistry}
      resourcesRegistry={ResourcesRegistry}
      functionsRegistry={FunctionsRegistry}
      validationsRegistry={ValidationsRegistry}
    />
  );
}

export default App;
