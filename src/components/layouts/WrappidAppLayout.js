import { CoreBox, CoreClasses, CoreTypographyBody1 } from "@wrappid/core";

export default function WrappidAppLayout(props) {    
  return (
    <>
      <CoreBox styleClasses={[CoreClasses.PADDING.P2, CoreClasses.BG.BG_PRIMARY]}>
        <CoreTypographyBody1>{"Wrappid App Header"}</CoreTypographyBody1>
      </CoreBox>

      {props.children}

      <CoreBox styleClasses={[CoreClasses.PADDING.P2, CoreClasses.BG.BG_SECONDARY]}>
        <CoreTypographyBody1>{"Wrappid App Footer"}</CoreTypographyBody1>
      </CoreBox>
    </>
  );
}
