import { CoreBox, CoreClasses, CoreTypographyBody1 } from "@wrappid/core";

import data from "../../../package.json";

export default function WrappidAppLayout(props) {    
  return (
    <>
      {props.children}

      <CoreBox styleClasses={[
        CoreClasses.DISPLAY.FLEX,
        CoreClasses.FLEX.DIRECTION_ROW,
        CoreClasses.PADDING.P2,
        CoreClasses.BG.BG_PRIMARY,
        CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN
      ]}>
        <CoreTypographyBody1>{data.name}</CoreTypographyBody1>

        <CoreTypographyBody1>Wrappid ©{new Date().getFullYear()}</CoreTypographyBody1>

        <CoreTypographyBody1>Version: {data.version}</CoreTypographyBody1>
      </CoreBox>
    </>
  );
}
