import About from "../components/About";
import Layouts from "../components/Layouts";
import AppDrawerLayout from "../components/layouts/AppDrawerLayout";
import WrappidAppLayout from "../components/layouts/WrappidAppLayout";
import StaticWebPage from "../components/StaticWebPage";
import modulesComponentsRegistry from "../modules/modules.components.registry";

export const ComponentsRegistry = {
  ...modulesComponentsRegistry,
  About           : { comp: About },
  AppComponent    : { comp: StaticWebPage },
  AppDrawerLayout : { comp: AppDrawerLayout, layout: true },
  Layouts         : { comp: Layouts },
  WrappidAppLayout: { comp: WrappidAppLayout, layout: true }
};
