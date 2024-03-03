// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import {
  CoreClasses,
  CoreH6
} from "@wrappid/core";

import CoreLayoutItem from "../layout/CoreLayoutItem";

export default function LayoutMismatch(props) {
  const { layoutName, pageName } = props || {};

  return (
    <>
      <CoreLayoutItem id="content">
        <CoreH6 styleClasses={[CoreClasses.COLOR.TEXT_DANGER]}>{`Page: ${pageName} content not supported Layout: ${layoutName}.`}</CoreH6>
      </CoreLayoutItem>
    </>
  );
}