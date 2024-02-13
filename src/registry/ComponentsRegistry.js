import About from "../components/About";
import WrappidAppLayout from "../components/layouts/WrappidAppLayout";
import StaticWebPage from "../components/StaticWebPage";
import modulesComponentsRegistry from "../modules/modules.components.registry";

export const ComponentsRegistry = {
  ...modulesComponentsRegistry,
  About           : { comp: About },
  AppComponent    : { comp: StaticWebPage, layout: true },
  WrappidAppLayout: { comp: WrappidAppLayout, layout: true }
};
