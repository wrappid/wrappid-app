import About from "../components/About";
import AppComponent from "../components/AppComponent";
import modulesComponentsRegistry from "../modules/modules.components.registry";

export const ComponentsRegistry = {
  ...modulesComponentsRegistry,
  About       : { comp: About },
  AppComponent: { comp: AppComponent },
};
