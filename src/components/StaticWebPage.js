import { CoreClasses, CoreH4, CoreStack, CoreTypographyBody1 } from "@wrappid/core";
import Welcome from "./Welcome";

function StaticWebPage() {
    return (
        <>
        <CoreStack direction="column" styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
            <CoreH4>Wrappid Framework</CoreH4>
            <CoreTypographyBody1>Wrappid Framework is a wrapper framework built to enable rapid development of applications based on React, React Native, Node, Express etc.</CoreTypographyBody1>
        </CoreStack>
        <Welcome />
        </>
    );
}

export default StaticWebPage;