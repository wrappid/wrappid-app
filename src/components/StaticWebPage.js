import { CoreClasses, CoreH4, CoreImage, CoreStack, CoreTypographyBody1 } from "@wrappid/core";

function StaticWebPage() {
    return (
        <CoreStack direction="column" styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
            <CoreImage
                src="https://avatars.githubusercontent.com/u/128048526?s=200&v=4"
                alt="Wrappid Logo"
            />

            <CoreH4>Wrappid Framework</CoreH4>

            <CoreTypographyBody1>Wrappid Framework is a wrapper framework built to enable rapid development of applications based on React, React Native, Node, Express etc.</CoreTypographyBody1>
        </CoreStack>
    );
}

export default StaticWebPage;