import React from "react";

import { CoreTypographyBody2, ComponentRegistryContext, CoreBox } from "@wrappid/core";

export default function Layouts() {
  const componentRegistry = React.useContext(ComponentRegistryContext);
  
  const layoutComponentRegistry = Object.fromEntries(Object.entries(componentRegistry).filter((value)=>{
    return value[1].layout === true;
  }));

  return (
    <>
      <CoreTypographyBody2>Layouts</CoreTypographyBody2>

      {Object.keys(layoutComponentRegistry).map(layoutName => (
        <CoreBox key={layoutName}>
          <CoreTypographyBody2>{layoutName}</CoreTypographyBody2>

          <CoreTypographyBody2>Layout: {layoutComponentRegistry[layoutName].layout.toString()}</CoreTypographyBody2>
        </CoreBox>
      ))}
    </>
  );
}