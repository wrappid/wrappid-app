import {
    CoreH4, CoreH6, CoreTypographyBody1, CoreBox, CoreGrid, CoreClasses
} from "@wrappid/core";

export default function StyleUtilities() {
    return getUtilitySamples();
}

const getUtilitySamples = () => {
    return (
        <>
            {getHeading("Style Utilities")}

            <CoreTypographyBody1>
        These are style utilities built using bootstrap flavour.
            </CoreTypographyBody1>

            {getBackgroundColorUtilitySamples()}

            {getBorderUtilitySamples()}

            {getColorUtilitySamples()}

            {getTextUtilitySamples()}
        </>
    );
};

const getBackgroundColorUtilitySamples = () => {
    return (
        <>
            {getTopicHeading("Background color")}

            <CoreTypographyBody1>
        Similar to the contextual text color classes, set the background of an
        element to any contextual class. Background utilities do not set color,
        so in some cases you’ll want to use .text-*
            </CoreTypographyBody1>

            <CoreGrid>
                {Object.keys(CoreClasses.BG).map((bgClass, index) => {
                    return (
                        <CoreBox
                            key={`bgClass-${index}`}
                            gridProps={{ gridSize: 4 }}
                            styleClasses={[CoreClasses.BG[bgClass], CoreClasses.PADDING.P2, CoreClasses.MARGIN.MB1]}
                        >
                            {bgClass}
                        </CoreBox>
                    );
                })}
            </CoreGrid>
        </>
    );
};

const getBorderUtilitySamples = () => {
    return (
        <>
            {getTopicHeading("Border")}

            <CoreTypographyBody1>
        In the examples the border-width is forcefully given 2px, so that
        examples are easily visible.
            </CoreTypographyBody1>

            <CoreGrid>
                {Object.keys(CoreClasses.BORDER).map((borderClass, index) => {
                    return (
                        <CoreBox
                            key={`borderClass-${index}`}
                            gridProps={{ gridSize: 3 }}
                            sx={{ backgroundColor: "#eee" }}
                            styleClasses={[
                                CoreClasses.BORDER.BORDER,
                                CoreClasses.BORDER.BORDER_2,
                                CoreClasses.BORDER[borderClass],
                                CoreClasses.PADDING.P2,
                                CoreClasses.MARGIN.MB1,
                            ]}
                        >
                            {borderClass}
                        </CoreBox>
                    );
                })}
            </CoreGrid>
        </>
    );
};

const getColorUtilitySamples = () => {
    return (
        <>
            {getTopicHeading("Color")}

            <CoreTypographyBody1>
        Colorize text with text color utilities.
            </CoreTypographyBody1>

            <CoreGrid>
                {Object.keys(CoreClasses.COLOR).map((colorClass, index) => {
                    return (
                        <CoreBox
                            key={`colorClass-${index}`}
                            gridProps={{ gridSize: 3 }}
                            styleClasses={[CoreClasses.COLOR[colorClass], CoreClasses.PADDING.PX2, CoreClasses.MARGIN.MB1]}
                        >
                            {colorClass}
                        </CoreBox>
                    );
                })}
            </CoreGrid>
        </>
    );
};
const getTextUtilitySamples = () => {
    return (
        <>
            {getTopicHeading("Text")}

            <CoreTypographyBody1></CoreTypographyBody1>

            <CoreGrid>
                {Object.keys(CoreClasses.TEXT).map((textClass, index) => {
                    return (
                        <CoreBox
                            key={`textClass-${index}`}
                            gridProps={{ gridSize: 3 }}
                            styleClasses={[CoreClasses.TEXT[textClass], CoreClasses.PADDING.PX2, CoreClasses.MARGIN.MB1]}
                        >
                            {textClass}
                        </CoreBox>
                    );
                })}
            </CoreGrid>
        </>
    );
};

const getHeading = (headingText) => {
    return (
        <CoreH4
            styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}
        >
            {headingText}
        </CoreH4>
    );
};

/* -- const getSubHeading = (subHeadingText) => {
    return (
        <CoreH5
            styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_SECONDARY, CoreClasses.TEXT.TEXT_UPPERCASE]}
        >
            {subHeadingText}
        </CoreH5>
    );
}; */

const getTopicHeading = (topicHeadingText) => {
    return (
        <CoreH6
            styleClasses={[CoreClasses.MARGIN.MY1, CoreClasses.COLOR.TEXT_INFO]}
        >
            {topicHeadingText}
        </CoreH6>
    );
};
