// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { CoreTypographyBody1 } from "@wrappid/core";

import CoreLayoutItem from "./CoreLayoutItem";

export default function ComplexLayoutPage() {
  return (
    <>
      <CoreLayoutItem id="placeholder1">
        <CoreTypographyBody1>Layout Item - placeholder1</CoreTypographyBody1>

        <CoreLayoutItem id="column1">
          <CoreTypographyBody1>Two Column Layout - Layout Item - column1</CoreTypographyBody1>
        </CoreLayoutItem>

        <CoreLayoutItem id="column2">
          <CoreTypographyBody1>Two Column Layout - Layout Item - column2</CoreTypographyBody1>
        </CoreLayoutItem>

        <CoreLayoutItem id="placeholder4">
          <CoreTypographyBody1>Layout Item - placeholder4</CoreTypographyBody1>
        </CoreLayoutItem>

        <CoreLayoutItem id="placeholder5">
          <CoreTypographyBody1>Layout Item - placeholder5</CoreTypographyBody1>
        </CoreLayoutItem>

        <CoreLayoutItem id="placeholder7">
          <CoreTypographyBody1>Layout Item - placeholder7</CoreTypographyBody1>
        </CoreLayoutItem>
      </CoreLayoutItem>

      <CoreLayoutItem id="placeholder2">
        <CoreTypographyBody1>Layout Item - placeholder2</CoreTypographyBody1>

        <CoreLayoutItem id="placeholder6">
          <CoreTypographyBody1>Layout Item - placeholder6</CoreTypographyBody1>
        </CoreLayoutItem>

        <CoreLayoutItem id="placeholder8">
          <CoreTypographyBody1>Layout Item - placeholder8</CoreTypographyBody1>
        </CoreLayoutItem>
      </CoreLayoutItem>

      <CoreLayoutItem id="placeholder3">
        <CoreTypographyBody1>Layout Item - placeholder3</CoreTypographyBody1>
      </CoreLayoutItem>

      <CoreLayoutItem id="placeholder9">
        <CoreTypographyBody1>Layout Item - placeholder9</CoreTypographyBody1>
      </CoreLayoutItem>
    </>
  );
}
