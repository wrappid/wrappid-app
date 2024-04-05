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
  CoreTypographyBody2,
  coreUseNavigate
} from "@wrappid/core";

export default function AppComponentSection(props) {
  const navigate = coreUseNavigate();
  const handleClickMain = () => {
    navigate(props.mainPath);
  };
  const handleClickLearn = () => {
    navigate(props.learnMorePath);
  };

  return (
    <CoreGrid styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.MARGIN.MB1, CoreClasses.FLEX.DIRECTION_COLUMN]}>
      <CoreCard gridProps={{ gridSize: { md: 9 } }} styleClasses={[CoreClasses.PADDING.P1]}>
        <CoreGrid
          styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.HEIGHT.MIN_VH_50]}
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

              <CoreLink>Release Notes</CoreLink>

              <CoreSpan>
                {" | "}
              </CoreSpan>

              <CoreLink>Attributions</CoreLink>

              <CoreSpan>
                {" | "}
              </CoreSpan>

              <CoreLink>Contributors</CoreLink>

              <CoreSpan>
                {" | "}
              </CoreSpan>

              <CoreLink>Issue Board</CoreLink>
            </CoreBox>
          </CoreBox>

          <CoreGrid
            gridProps={{
              gridSize    : { md: 8, sm: 10, xs: 10 },
              styleClasses: [CoreClasses.PADDING.PL0],
            }}
          >
            <CoreContainedButton
              gridProps={{ gridSize: { md: 4 } }}
              styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
              onClick={handleClickMain}
            >
          How to Customize
            </CoreContainedButton>

            <CoreContainedButton
              gridProps={{ gridSize: { md: 4 } }}
              styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
              onClick={handleClickLearn}
            >
          Learn more
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
