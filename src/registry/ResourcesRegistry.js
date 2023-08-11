import modulesResourcesRegistry from "../modules/modules.resources.registry";

export const ResourcesRegistry = {
    appLogo     : require("./images/logo.png"),
    appLogoDark : require("./images/logo_dark.png"),
    appLogoLight: require("./images/logo_light.png"),
    ...modulesResourcesRegistry 
};