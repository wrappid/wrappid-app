import About from "../components/About";
import LayoutManagerTester from "../components/LayoutManagerTester";
import Layouts from "../components/Layouts";
import AppDrawerLayout from "../components/layouts/AppDrawerLayout";
import LMLayout from "../components/layouts/LMLayout";
import WrappidAppLayout from "../components/layouts/WrappidAppLayout";
import StaticWebPage from "../components/StaticWebPage";
import LMTestPage from "../components/temp/LMTestPage";
import modulesComponentsRegistry from "../modules/modules.components.registry";

export const ComponentsRegistry = {
  ...modulesComponentsRegistry,
  About              : { comp: About },
  AppComponent       : { comp: StaticWebPage },
  AppDrawerLayout    : { comp: AppDrawerLayout, layout: true },
  LMLayout           : { comp: LMLayout, layout: true },
  LMTestPage         : { comp: LMTestPage },
  LayoutManagerTester: { comp: LayoutManagerTester },
  Layouts            : { comp: Layouts },
  WrappidAppLayout   : { comp: WrappidAppLayout, layout: true }
};
