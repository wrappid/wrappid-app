import modulesRoutesRegistry from "../modules/modules.routes.registry";

export const RoutesRegistry = {
  PackageList: {
    Page        : { appComponent: "PackageList" },
    authRequired: false,
    entityRef   : "about",
    url         : "about"
  }, 
  defaultAppRoute: {
    Page        : { appComponent: "AppComponent", layout: "WrappidAppLayout" },
    authRequired: false,
    entityRef   : "defaultAppRoute",
    url         : "defaultAppRoute"
  }, 
  ...modulesRoutesRegistry
};