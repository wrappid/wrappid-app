import { CoreApp } from "@wrappid/core";

import { ComponentRegistry } from "./ComponetRegistry";
import rootReducer from "./store/reducer";
import AppClasses from "./styles/AppClasses";
import { defaultAppStyles } from "./styles/DefaultAppStyles";
import { smallAppStyles } from "./styles/SmallAppStyles";
import { mediumAppStyles } from "./styles/MediumAppStyles";
import { largeAppStyles } from "./styles/LargeAppStyles";
import { xXLargeAppStyles } from "./styles/XXLargeAppStyles";

function App() {
  return (
    <CoreApp
      reducers={rootReducer}
      componentRegistry={ComponentRegistry}
      appStyles={{
        classes: AppClasses,
        styles: {
          default: defaultAppStyles,
          small: smallAppStyles,
          medium: mediumAppStyles,
          large: largeAppStyles,
          xLarge: xXLargeAppStyles,
          xxLarge: xXLargeAppStyles,
        },
      }}
    />
  );
}

export default App;
