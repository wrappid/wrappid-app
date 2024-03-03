// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { CoreBox, CoreClasses, CoreContainedButton, CoreInput, CoreTypographyBody1 } from "@wrappid/core";

import CoreLayoutPlaceholder from "../../layout/CoreLayoutPlaceholder";

export default function LMLayout() {

  const [layoutClicked, setLayoutClicked] = React.useState(false);
  const [layoutText, setLayoutText] = React.useState("");

  React.useEffect(() => {
    setLayoutClicked(false);
  }, [layoutText]);
  
  return (
    <>
      <CoreBox styleClasses={[CoreClasses.PADDING.P2, CoreClasses.BG.BG_GRAY]}>
        {layoutClicked && <CoreTypographyBody1>Layout Button Clicked</CoreTypographyBody1>}

        <CoreInput
          value={layoutText}
          onChange={(event) => {
            setLayoutText(event.target.value);
          }} />
  
        <CoreContainedButton
          OnClick={() => {
            setLayoutClicked(true);
          }} />

      </CoreBox>

      <CoreLayoutPlaceholder 
        id={LMLayout.PLACEHOLDER.CONTENT} 
        styleClasses={[CoreClasses.LAYOUT.BLANK_CONTENT]} />
    </>
  );
}

LMLayout.PLACEHOLDER = { CONTENT: "content" };
