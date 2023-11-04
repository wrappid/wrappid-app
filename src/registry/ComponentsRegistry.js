import StaticWebPage from "../components/StaticWebPage";
import modulesComponentsRegistry from "../modules/modules.components.registry";

export const ComponentsRegistry = { ...modulesComponentsRegistry, AppComponent: StaticWebPage };
