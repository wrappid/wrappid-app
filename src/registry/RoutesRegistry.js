import About from "../components/About";
import AppComponent from "../components/AppComponent";
import WrappidAppLayout from "../components/layouts/WrappidAppLayout";
import modulesRoutesRegistry from "../modules/modules.routes.registry";

export const RoutesRegistry = {
  About: {
    Page        : { appComponent: About.name, layout: WrappidAppLayout.name },
    authRequired: false,
    entityRef   : "about",
    url         : "about"
  }, 
  defaultAuthRoute: {
    Page        : { appComponent: AppComponent.name, layout: WrappidAppLayout.name },
    authRequired: true,
    entityRef   : "defaultAuthRoute",
    url         : "defaultAuthRoute"
  },  
  defaultRoute: {
    Page        : { appComponent: AppComponent.name, layout: WrappidAppLayout.name },
    authRequired: false,
    entityRef   : "defaultAppRoute",
    url         : "defaultAppRoute"
  },
  testLayout: {
    Page        : { appComponent: "LMTest", layout: WrappidAppLayout.name },
    authRequired: false,
    entityRef   : "testLayout",
    url         : "test/layout"
  },  
  ...modulesRoutesRegistry
};