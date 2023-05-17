import { CoreH6, CoreIcon,CoreBox, CoreForm } from "@wrappid/core";

import modulesComponentsRegistry from "./modules/modules.components.registry";
import Dashboard from "./modules/dashboard/Dashboard";

export const ComponentRegistry = {
    Dashboard: {
        comp: Dashboard,
    },
    ...modulesComponentsRegistry
};
