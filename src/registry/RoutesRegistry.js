import modulesRoutesRegistry from "../modules/modules.routes.registry";

export const RoutesRegistry = {
  About: {
    Page        : { appComponent: "About", layout: "WrappidAppLayout" },
    authRequired: false,
    entityRef   : "about",
    url         : "about"
  }, 
  defaultAuthRoute: {
    Page        : { appComponent: "AppComponent", layout: "WrappidAppLayout" },
    authRequired: true,
    entityRef   : "defaultAuthRoute",
    url         : "defaultAuthRoute"
  },  
  defaultRoute: {
    Page        : { appComponent: "AppComponent", layout: "WrappidAppLayout" },
    authRequired: false,
    entityRef   : "defaultAppRoute",
    url         : "defaultAppRoute"
  },  
  testLayout: {
    Page        : { appComponent: "LMTest" },
    authRequired: false,
    entityRef   : "testLayout",
    url         : "test/layout"
  },  
  ...modulesRoutesRegistry
};