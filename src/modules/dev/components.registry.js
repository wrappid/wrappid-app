import { CoreH6, CoreIcon } from "@wrappid/core";

import Components from "./components/Components";
import StyleUtilities from "./components/StyleUtilities";

export const ComponentRegistry = {
    Components: { comp: <Components /> },
    Dashboard : {
        comp: (
            <CoreH6>Dashboard <CoreIcon type="rxi">alcohol</CoreIcon></CoreH6>
        ),
    },
    StyleUtilities: { comp: <StyleUtilities /> },
};
