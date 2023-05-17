
import { CoreJSONInput } from "@wrappid/core";

import Components from "./components/Components";
import FormsManager from "./components/FormsManager";
import PagesManager from "./components/PagesManager";
import RoutesManager from "./components/RoutesManager";
import StyleUtilities from "./components/StyleUtilities";

export const ComponentRegistry = {
    Components  : { comp: Components },
    FormsManager: { comp: FormsManager },
    
    Pages: { comp: PagesManager },
    
    RoutesManager : { comp: RoutesManager },
    // FormPreview  : { comp: FormPreview },
    StyleUtilities: { comp: StyleUtilities },
    formBuilder   : { comp: CoreJSONInput }, 
};
