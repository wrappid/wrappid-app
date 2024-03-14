import {
  CoreBox,
  CoreClasses,
  CoreContainedButton,
  CoreDivider,
  CoreGrid,
  CoreH3,
  CoreH5,
  CoreLink,
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
    <CoreGrid
      rowSpacing="32"
      styleClasses={[CoreClasses.PADDING.MD.PX5, CoreClasses.HEIGHT.MIN_VH_75, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.MD.JUSTIFY_CONTENT_FLEX_START]}
    >
      <CoreDivider styleClasses={[CoreClasses.MARGIN.MT5]} />

      <CoreBox styleClasses={[CoreClasses.FLEX.DIRECTION_COLUMN]}>
        <CoreH3>{props.title}</CoreH3>

        <CoreH5>{props.about}</CoreH5>
      </CoreBox>

      <CoreBox>
        <CoreH5>{props.name}</CoreH5>

        <CoreTypographyBody1>
          {props.version ? `Version: ${props.version}` : null}

          <CoreLink>Release Notes</CoreLink>

          <CoreTypographyBody1>
            {" | "}
          </CoreTypographyBody1>

          <CoreLink>Attributions</CoreLink>

          <CoreTypographyBody1>
            {" | "}
          </CoreTypographyBody1>

          <CoreLink>Contributors</CoreLink>

          <CoreTypographyBody1>
            {" | "}
          </CoreTypographyBody1>

          <CoreLink>Issue Board</CoreLink>
        </CoreTypographyBody1>
      </CoreBox>

      <CoreGrid
        gridProps={{
          gridSize    : { md: 8, sm: 6, xs: 10 },
          styleClasses: [CoreClasses.PADDING.PL0],
        }}
      >
        <CoreContainedButton
          gridProps={{ gridSize: { md: 4 } }}
          styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
          OnClick={handleClickMain}
        >
          How to Customize
        </CoreContainedButton>

        <CoreContainedButton
          gridProps={{ gridSize: { md: 4 } }}
          styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
          OnClick={handleClickLearn}
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
  );
}
