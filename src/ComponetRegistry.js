import { CoreH6, CoreIcon } from "@wrappid/core";

import modulesComponentsRegistry from "./modules/modules.components.registry";

export const ComponentRegistry = {
    Dashboard: {
        comp: (
            <CoreH6>Dashboard <CoreIcon type="rxi">alcohol</CoreIcon></CoreH6>
        ),
    },
    ...modulesComponentsRegistry
};
