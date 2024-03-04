import modulesRoutesRegistry from "../modules/modules.routes.registry";

export const RoutesRegistry = {
  About: {
    Page        : { appComponent: "About", layout: "WrappidAppLayout" },
    authRequired: false,
    entityRef   : "about",
    url         : "about"
  }, 
  defaultAuthRoute: {
    Page        : { appComponent: "AppComponent" },
    authRequired: true,
    entityRef   : "defaultAuthRoute",
    url         : "defaultAuthRoute"
  },  
  defaultRoute: {
    Page        : { appComponent: "AppComponent" },
    authRequired: false,
    entityRef   : "defaultAppRoute",
    url         : "defaultAppRoute"
  }, 
  ...modulesRoutesRegistry
};