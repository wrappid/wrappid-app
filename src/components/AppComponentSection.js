import {
  CoreBox,
  CoreCard,
  CoreClasses,
  CoreContainedButton,
  CoreGrid,
  CoreH5,
  CoreLink,
  CoreSpan,
  CoreTypographyBody1,
  CoreTypographyBody2
} from "@wrappid/core";

export default function AppComponentSection(props) {

  return (
    <CoreGrid styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.MARGIN.MB1, CoreClasses.FLEX.DIRECTION_COLUMN]}>
      <CoreCard gridProps={{ gridSize: { md: 9 } }} styleClasses={[CoreClasses.PADDING.P1]}>
        <CoreGrid
          styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.MD.JUSTIFY_CONTENT_FLEX_START, CoreClasses.HEIGHT.MIN_VH_50]}
        >
          <CoreBox styleClasses={[CoreClasses.FLEX.DIRECTION_COLUMN]}>
            <CoreH5>{props.title}</CoreH5>

            <CoreTypographyBody1>{props.about}</CoreTypographyBody1>
          </CoreBox>

          <CoreBox>
            <CoreTypographyBody1>{props.name}</CoreTypographyBody1>

            <CoreBox>
              <CoreSpan>
                {props.version ? `Version: ${props.version}` : null}
              </CoreSpan>
            </CoreBox>

            <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_ROW]}>

              <CoreLink href={props.sourcePath + "/releases"} >Release Notes</CoreLink>

              <CoreSpan>
                {" | "}
              </CoreSpan>

              <CoreLink href={props.sourcePath + "/blob/main/ATTRIBUTIONS.md"}>Attributions</CoreLink>

              <CoreSpan>
                {" | "}
              </CoreSpan>

              <CoreLink href={props.sourcePath + "/graphs/contributors"}>Contributors</CoreLink>

              <CoreSpan>
                {" | "}
              </CoreSpan>

              <CoreLink href={props.sourcePath + "/issues"}>Issue Board</CoreLink>
            </CoreBox>
          </CoreBox>

          <CoreGrid
            gridProps={{
              gridSize    : { md: 8, sm: 6, xs: 12 },
              styleClasses: [CoreClasses.MARGIN.MR2],
            }}
          >
            <CoreContainedButton
              gridProps={{ gridSize: { md: 4 } }}
              styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
              href={props.customizePath}
            >
          How to Customize
            </CoreContainedButton>

            <CoreContainedButton
              gridProps={{ gridSize: { md: 4 } }}
              styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
              href={props.sourcePath}
            >
          Source
            </CoreContainedButton>
          </CoreGrid>

          <CoreTypographyBody2 styleClasses={[CoreClasses.MARGIN.MT5]}>
        Courtesy: MUI & React Native Paper
          </CoreTypographyBody2>
        </CoreGrid>
      </CoreCard>
    </CoreGrid>
  );
}
