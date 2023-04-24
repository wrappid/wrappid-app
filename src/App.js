import { CoreApp } from "@wrappid/core";

import { ComponentRegistry } from "./ComponetRegistry";
import rootReducer from "./store/reducer";

function App() {
    return (
        <CoreApp
            reducers={rootReducer}
            componentRegistry={ComponentRegistry} />
    );
}

export default App;
