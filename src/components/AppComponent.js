import { BlankLayout, CoreLayoutItem } from "@wrappid/core";

import AppComponentContent from "./AppComponentContent";

function AppComponent() {

  return (
    <>
      <CoreLayoutItem id={BlankLayout.PLACEHOLDER.NAME}>
        <AppComponentContent />
      </CoreLayoutItem>
    </>
  );
}

export default AppComponent;