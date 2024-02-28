import modulesRoutesRegistry from "../modules/modules.routes.registry";

export const RoutesRegistry = {
  About: {
    Page        : { appComponent: "About" },
    authRequired: false,
    entityRef   : "about",
    url         : "about"
  }, 
  Layouts: {
    Page        : { appComponent: "Layouts" },
    authRequired: false,
    entityRef   : "layouts",
    url         : "layouts"
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