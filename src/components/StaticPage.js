import { CoreLayoutItem } from "@wrappid/core";

import WrappidAppLayout from "./layouts/WrappidAppLayout";
import StaticPageContent from "./StaticPageContent";

function StaticPage() {

  return (
    <>
      <CoreLayoutItem id={WrappidAppLayout.PLACEHOLDER.CONTENT}>
        <StaticPageContent />
      </CoreLayoutItem>
    </>
  );
}

export default StaticPage;