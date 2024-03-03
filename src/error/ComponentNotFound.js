// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { CoreClasses, CoreH6 } from "@wrappid/core";

import BlankLayout from "../components/layouts/_system/BlankLayout";
import CoreLayoutItem from "../layout/CoreLayoutItem";

export default function ComponentNotFound(props) {
  const { componentName, layout = false } = props;

  return (
    <>
      <CoreLayoutItem id={BlankLayout.PLACEHOLDER.CONTENT}>
        <CoreH6 styleClasses={[CoreClasses.COLOR.TEXT_DANGER]}>{`${layout ? "Layout" : "Page"} component${componentName && (" " + componentName)} not found.`}</CoreH6>
      </CoreLayoutItem>
    </>
  );
}
