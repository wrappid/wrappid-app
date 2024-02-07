import WrappidAppLayout from "../components/layouts/WrappidAppLayout";
import PackageList from "../components/PackageList";
import StaticWebPage from "../components/StaticWebPage";
import modulesComponentsRegistry from "../modules/modules.components.registry";

export const ComponentsRegistry = {
  ...modulesComponentsRegistry,
  AppComponent    : { comp: StaticWebPage },
  PackageList     : { comp: PackageList },
  WrappidAppLayout: { comp: WrappidAppLayout, layout: true }
};
