
import Components from "./components/Components";
import FormPreview from "./components/FormPreview";
import FormsManager from "./components/FormsManager";
import PagesManager from "./components/PagesManager";
import RoutesManager from "./components/RoutesManager";
import StyleUtilities from "./components/StyleUtilities";

export const ComponentRegistry = {
    Components    : { comp: Components },
    FormPreview   : { comp: FormPreview },
    FormsManager  : { comp: FormsManager },
    Pages         : { comp: PagesManager },
    RoutesManager : { comp: RoutesManager },
    StyleUtilities: { comp: StyleUtilities },
};
