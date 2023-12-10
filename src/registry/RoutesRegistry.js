import modulesRoutesRegistry from "../modules/modules.routes.registry";

export const RoutesRegistry = {
  defaultAppRoute: {
    Page        : { appComponent: "AppComponent", layout: "WrappidAppLayout" },
    authRequired: false,
    entityRef   : "defaultAppRoute",
    url         : "defaultAppRoute"
  }, 
  ...modulesRoutesRegistry
};