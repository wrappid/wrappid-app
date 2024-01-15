/* eslint-disable etc/no-commented-out-code */
import modulesResourcesRegistry from "../modules/modules.resources.registry";
import logo from "../resources/images/logo.png";
// import logo_dark from "../resources/images/logo_dark.png";
// import logo_light from "../resources/images/logo_light.png";

export const ResourcesRegistry = {
  appLogo     : logo,
  appLogoDark : require("../resources/images/logo_dark.png"),
  appLogoLight: require("../resources/images/logo_light.png"),
  ...modulesResourcesRegistry 
};
