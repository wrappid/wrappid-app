import React from "react";

import { CoreContainedButton, CoreInput, CoreTypographyBody1 } from "@wrappid/core";

import CoreLayoutItem from "../../layout/CoreLayoutItem";
import LMLayout from "../layouts/LMLayout";

function LMTestPage() {
  
  const [clicked, setClicked] = React.useState(false);
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    setClicked(false);
  }, [text]);
  
  return (
    <>
      <CoreLayoutItem id={LMLayout.PLACEHOLDER.CONTENT}>
        {clicked && <CoreTypographyBody1>Button Clicked</CoreTypographyBody1>}

        <CoreInput
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }} />
          
        <CoreContainedButton
          OnClick={() => {
            setClicked(true);
          }} />
      </CoreLayoutItem>
    </>
  );
}

export default LMTestPage;