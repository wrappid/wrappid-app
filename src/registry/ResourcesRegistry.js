import modulesResourcesRegistry from "../modules/modules.resources.registry";
import logo from "../resources/images/logo.png";

export const ResourcesRegistry = {
  appLogo     : logo,
  appLogoDark : require("../resources/images/logo_dark.png"),
  appLogoLight: require("../resources/images/logo_light.png"),
  ...modulesResourcesRegistry 
};
