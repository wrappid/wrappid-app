import { CoreLayoutItem } from "@wrappid/core";

import AppComponentContent from "./AppComponentContent";
import WrappidAppLayout from "./layouts/WrappidAppLayout";

function AppComponent() {

  return (
    <>
      <CoreLayoutItem id={WrappidAppLayout.PLACEHOLDER.CONTENT}>
        <AppComponentContent />
      </CoreLayoutItem>
    </>
  );
}

export default AppComponent;