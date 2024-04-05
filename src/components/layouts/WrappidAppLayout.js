// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import {
  CoreAppBar,
  CoreBox,
  CoreClasses,
  CoreCssBaseline,
  CoreLayoutPlaceholder,
  CoreLink,
  CoreResourceContext,
  CoreStack,
  CoreTypographyBody1
} from "@wrappid/core";

import packageData from "../../../package.json";

export default function WrappidAppLayout() {
  // eslint-disable-next-line no-unused-vars
  const resources = React.useContext(CoreResourceContext);

  return (
    <>
      <CoreLayoutPlaceholder id={WrappidAppLayout.PLACEHOLDER.CONTENT} />
      
      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX]}>
        <CoreCssBaseline/>

        <CoreAppBar logo={resources?.appLogo} leftMenuEnabled={false} />

      </CoreBox>

      <CoreBox
        styleClasses={[
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.FLEX.DIRECTION_ROW,
          CoreClasses.PADDING.P2,
          CoreClasses.BG.BG_PRIMARY,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
        ]}
      >
        <CoreTypographyBody1>{packageData.name}</CoreTypographyBody1>

        <CoreTypographyBody1>
          Wrappid ©{new Date().getFullYear()}
        </CoreTypographyBody1>

        <CoreStack direction="row">
          <CoreLink href={"/about"}>
            <CoreTypographyBody1>
              Version: {packageData.version}
            </CoreTypographyBody1>
          </CoreLink>
        </CoreStack>
      </CoreBox>
    </>
  );
}

WrappidAppLayout.PLACEHOLDER = { CONTENT: "content" };
