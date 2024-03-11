import About from "../components/About";
import AppComponent from "../components/AppComponent";
// --------------------------------------
// testing purpose
import ComplexLayout from "../components/layouts/ComplexLayout";
import ComplexLayoutPage from "../components/layouts/ComplexLayoutPage";
import LayoutManagerTest from "../components/layouts/LayoutManagerTest";
// --------------------------------------
import WrappidAppLayout from "../components/layouts/WrappidAppLayout";
import modulesComponentsRegistry from "../modules/modules.components.registry";

export const ComponentsRegistry = {
  ...modulesComponentsRegistry,
  About       : { comp: About },
  AppComponent: { comp: AppComponent },
  
  /**
   * @todo
   * testing layout manager purpose
  */
  LMComplexLayout    : { comp: ComplexLayout, layout: true },
  LMComplexLayoutPage: { comp: ComplexLayoutPage },
  LMTest             : { comp: LayoutManagerTest },
  
  WrappidAppLayout: { comp: WrappidAppLayout, layout: true }
};
