import {
  CoreBox,
  CoreClasses,
  CoreContainedButton,
  CoreDivider,
  CoreGrid,
  CoreH3,
  CoreH5,
  CoreImage,
  CoreLink,
  CoreTypographyBody1,
  CoreTypographyBody2,
  coreUseNavigate
} from "@wrappid/core";

import data from "../../package.json";
import logo from "../resources/images/logo_dark.png";

function StaticWebPageContent() {
  const navigate = coreUseNavigate();
  const handleClick1 = () => {
    navigate("/guide/styles");
  };
  const handleClick2 = () => {
    navigate("/guide/components");
  };
  // Capitalize all first letters of words
  const words = data.name.replaceAll("-", " ").split(" ");
  // Join the capitalized words back with spaces
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return (
    <CoreGrid styleClasses={[CoreClasses.PADDING.P2, CoreClasses.PADDING.MD.P0]}>
      <CoreGrid
        rowSpacing="32"
        styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
      >
        <CoreBox
          gridProps={{ styleClasses: [CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER] }}
        >
          <CoreImage width={100} src={logo} alt="logo" />
        </CoreBox>

        <CoreBox
          styleClasses={[CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.TEXT.TEXT_CENTER]}
        >
          <CoreH3>{capitalizedWords.join(" ")}</CoreH3>

          <CoreH5 styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
            {data.description ? data.description : "Description not provided"}
          </CoreH5>

          <CoreDivider
            styleClasses={[CoreClasses.WIDTH.W_75, CoreClasses.MARGIN.M5]}
          />

          <CoreH5>Built with Wrappid. One code, Endless possibilities</CoreH5>

          <CoreBox>
            <CoreTypographyBody1>
              {`Version: ${data.version}`}
            </CoreTypographyBody1>

            <CoreLink>Release Notes</CoreLink>

            <CoreTypographyBody1>{" | "}</CoreTypographyBody1>

            <CoreLink>Attributions</CoreLink>

            <CoreTypographyBody1>{" | "}</CoreTypographyBody1>

            <CoreLink>Contributors</CoreLink>

            <CoreTypographyBody1>{" | "}</CoreTypographyBody1>

            <CoreLink>Issue Board</CoreLink>
          </CoreBox>
        </CoreBox>

        <CoreGrid
          rowSpacing="8"
          gridProps={{ gridSize: { md: 4, sm: 6, xs: 10 } }}
          styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
        >
          <CoreContainedButton
            gridProps={{ gridSize: { md: 4 } }}
            styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
            OnClick={handleClick1}
          >
            How to Customize
          </CoreContainedButton>

          <CoreContainedButton
            gridProps={{ gridSize: { md: 4 } }}
            styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
            OnClick={handleClick2}
          >
            Learn more
          </CoreContainedButton>

          <CoreContainedButton
            gridProps={{ gridSize: { md: 4 } }}
            styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
            href={"https://github.com/wrappid"}
          >
            Source
          </CoreContainedButton>
        </CoreGrid>
      </CoreGrid>

      {/* -----------------Styles Library------------------- */}
      <CoreGrid rowSpacing="32" styleClasses={[CoreClasses.PADDING.MD.PX5, CoreClasses.HEIGHT.MIN_VH_75, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.MD.JUSTIFY_CONTENT_FLEX_START]}>
        <CoreDivider
          styleClasses={[CoreClasses.MARGIN.MT5]}
        />

        <CoreBox styleClasses={[CoreClasses.FLEX.DIRECTION_COLUMN]}>
          <CoreH3>Styles Library</CoreH3>

          <CoreH5>
            It integrates seamlessly with popular styling libraries, using MIUI
            for web styling and React Native Paper for mobile styling, ensuring
            a consistent look and feel across platforms.
          </CoreH5>

        </CoreBox>

        <CoreBox>
          <CoreH5>@wrappid/styles package</CoreH5>

          <CoreTypographyBody1>
            {`Version: ${data.version}`}
          </CoreTypographyBody1>

          <CoreLink>Release Notes</CoreLink>

          <CoreTypographyBody1>{" | "}</CoreTypographyBody1>

          <CoreLink>Attributions</CoreLink>

          <CoreTypographyBody1>{" | "}</CoreTypographyBody1>

          <CoreLink>Contributors</CoreLink>

          <CoreTypographyBody1>{" | "}</CoreTypographyBody1>

          <CoreLink>Issue Board</CoreLink>
        </CoreBox>

        <CoreGrid
          gridProps={{ gridSize: { md: 8, sm: 6, xs: 10 }, styleClasses: [CoreClasses.PADDING.PL0] }}
          
        >
          <CoreContainedButton
            gridProps={{ gridSize: { md: 4 } }}
            styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
            OnClick={handleClick1}
          >
            How to Customize
          </CoreContainedButton>

          <CoreContainedButton
            gridProps={{ gridSize: { md: 4 } }}
            styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
            OnClick={handleClick2}
          >
            Learn more
          </CoreContainedButton>

          <CoreContainedButton
            gridProps={{ gridSize: { md: 4 } }}
            styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
            href={"https://github.com/wrappid"}
          >
            Source
          </CoreContainedButton>
        </CoreGrid>

        <CoreTypographyBody2 styleClasses={[CoreClasses.MARGIN.MT5]}>
        Courtesy: MUI & React Native Paper
        </CoreTypographyBody2>
      </CoreGrid>

      {/* -----------------Custom Component Flexibility------------------- */}
      <CoreGrid rowSpacing="32" styleClasses={[CoreClasses.PADDING.MD.PX5, CoreClasses.HEIGHT.MIN_VH_75, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.MD.JUSTIFY_CONTENT_FLEX_START]}>
        <CoreDivider
          styleClasses={[CoreClasses.MARGIN.MT5]}
        />

        <CoreBox styleClasses={[CoreClasses.FLEX.DIRECTION_COLUMN]}>
          <CoreH3>Custom Component Flexibility</CoreH3>

          <CoreH5>
          While you can leverage the CoreComponents, Wrappid also gives you the flexibility to create your own custom components as needed to tailor your applications to specific requirements.
          </CoreH5>

        </CoreBox>

        <CoreBox>
          <CoreH5>@wrappid/styles package</CoreH5>

          <CoreTypographyBody1>
            {`Version: ${data.version}`}
          </CoreTypographyBody1>

          <CoreLink>Release Notes</CoreLink>

          <CoreTypographyBody1>{" | "}</CoreTypographyBody1>

          <CoreLink>Attributions</CoreLink>

          <CoreTypographyBody1>{" | "}</CoreTypographyBody1>

          <CoreLink>Contributors</CoreLink>

          <CoreTypographyBody1>{" | "}</CoreTypographyBody1>

          <CoreLink>Issue Board</CoreLink>
        </CoreBox>

        <CoreGrid
          rowSpacing="8"
          gridProps={{ gridSize: { md: 8, sm: 6, xs: 10 }, styleClasses: [CoreClasses.PADDING.PL0] }}
          
        >
          <CoreContainedButton
            gridProps={{ gridSize: { md: 4 } }}
            styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
            OnClick={handleClick1}
          >
            How to Customize
          </CoreContainedButton>

          <CoreContainedButton
            gridProps={{ gridSize: { md: 4 } }}
            styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
            OnClick={handleClick2}
          >
            Learn more
          </CoreContainedButton>

          <CoreContainedButton
            gridProps={{ gridSize: { md: 4 } }}
            styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
            href={"https://github.com/wrappid"}
          >
            Source
          </CoreContainedButton>
        </CoreGrid>

        <CoreTypographyBody2 styleClasses={[CoreClasses.MARGIN.MT5]}>
        Courtesy: MUI & React Native Paper
        </CoreTypographyBody2>
      </CoreGrid>

      {/* -----------------Full-Stack Development Support------------------- */}
      <CoreGrid rowSpacing="32" styleClasses={[CoreClasses.PADDING.MD.PX5, CoreClasses.HEIGHT.MIN_VH_75, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.MD.JUSTIFY_CONTENT_FLEX_START]}>
        <CoreDivider
          styleClasses={[CoreClasses.MARGIN.MT5]}
        />

        <CoreBox styleClasses={[CoreClasses.FLEX.DIRECTION_COLUMN]}>
          <CoreH3>Full-Stack Development Support</CoreH3>

          <CoreH5>
          Wrappid supports building both frontend and backend components of applications, including API middleware, database handling, and business-specific modules.
          </CoreH5>

        </CoreBox>

        <CoreBox>
          <CoreH5>@wrappid/styles package</CoreH5>

          <CoreTypographyBody1>
            {`Version: ${data.version}`}
          </CoreTypographyBody1>

          <CoreLink>Release Notes</CoreLink>

          <CoreTypographyBody1>{" | "}</CoreTypographyBody1>

          <CoreLink>Attributions</CoreLink>

          <CoreTypographyBody1>{" | "}</CoreTypographyBody1>

          <CoreLink>Contributors</CoreLink>

          <CoreTypographyBody1>{" | "}</CoreTypographyBody1>

          <CoreLink>Issue Board</CoreLink>
        </CoreBox>

        <CoreGrid
          rowSpacing="8"
          gridProps={{ gridSize: { md: 8, sm: 6, xs: 10 }, styleClasses: [CoreClasses.PADDING.PL0] }}
          
        >
          <CoreContainedButton
            gridProps={{ gridSize: { md: 4 } }}
            styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
            OnClick={handleClick1}
          >
            How to Customize
          </CoreContainedButton>

          <CoreContainedButton
            gridProps={{ gridSize: { md: 4 } }}
            styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
            OnClick={handleClick2}
          >
            Learn more
          </CoreContainedButton>

          <CoreContainedButton
            gridProps={{ gridSize: { md: 4 } }}
            styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
            href={"https://github.com/wrappid"}
          >
            Source
          </CoreContainedButton>
        </CoreGrid>

        <CoreTypographyBody2 styleClasses={[CoreClasses.MARGIN.MT5]}>
        Courtesy: MUI & React Native Paper
        </CoreTypographyBody2>
      </CoreGrid>

      <CoreDivider
        styleClasses={[CoreClasses.MARGIN.MT5]}
      />
    </CoreGrid>
  );
}

export default StaticWebPageContent;
