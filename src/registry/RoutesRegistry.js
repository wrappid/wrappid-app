import modulesRoutesRegistry from "../modules/modules.routes.registry";

export const RoutesRegistry = {
    defaultAppRoute: {
        Page        : { appComponent: "AppComponent" },
        authRequired: false,
        entityRef   : "defaultAppRoute",
        url         : "defaultAppRoute"
    }, 
    ...modulesRoutesRegistry
};