import modulesRoutesRegistry from "../modules/modules.routes.registry";

export const RoutesRegistry = {
    defaultAppRoute: {
        Page        : { appComponent: "AppComponent" }, //required in page container
        authRequired: false,
        entityRef   : "defaultAppRoute", //required for routeregistry
        url         : "defaultAppRoute"
    }, 
    ...modulesRoutesRegistry
};