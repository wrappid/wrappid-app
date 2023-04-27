import AsyncStorage from "@react-native-async-storage/async-storage";
import { CoreApp } from "@wrappid/core";

import { ComponentRegistry } from "./ComponetRegistry";
import rootReducer from "./store/reducer";

function App() {
    return (
        <CoreApp
            reducers={rootReducer}
            storage={AsyncStorage}
            componentRegistry={ComponentRegistry} />
    );
}

export default App;
