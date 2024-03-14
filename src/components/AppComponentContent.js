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
  coreUseNavigate
} from "@wrappid/core";
import corePackage from "@wrappid/core/package.json";
// eslint-disable-next-line import/no-unresolved
import nativePackage from "@wrappid/native/package.json";
import stylesPackage from "@wrappid/styles/package.json";

import AppComponentSection from "./AppComponentSection";
import packageJson from "../../package.json";
import logo from "../resources/images/logo_dark.png";

nativePackage.author;
stylesPackage.author;

function AppComponentContent() {
  const navigate = coreUseNavigate();
  const handleClick1 = () => {
    navigate("/guide/styles");
  };
  const handleClick2 = () => {
    navigate("/guide/components");
  };
  // Capitalize all first letters of words
  const words = packageJson.name.replaceAll("-", " ").split(" ");
  // Join the capitalized words back with spaces
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return (
    <CoreGrid
      styleClasses={[CoreClasses.PADDING.P2, CoreClasses.PADDING.MD.P0]}
    >
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
            {packageJson.description ? packageJson.description : "Description not provided"}
          </CoreH5>

          <CoreDivider
            styleClasses={[CoreClasses.WIDTH.W_75, CoreClasses.MARGIN.M5, CoreClasses.DISPLAY.INLINE_FLEX]}
          />

          <CoreH5>Built with Wrappid. One code, Endless possibilities.</CoreH5>

          <CoreBox>
            <CoreTypographyBody1>
              {`Version: ${packageJson.version}`}

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

      {/* -----------------Themes Section------------------- */}
      <AppComponentSection title="Themes" about="This is a theme viewer" mainPath="/theme/createTheme"/>

      {/* -----------------Styles Library Section------------------- */}
      <AppComponentSection
        title="Styles Library"
        about="It integrates seamlessly with popular styling libraries, using MIUI for web styling and React Native Paper for mobile styling, ensuring a consistent look and feel across platforms." 
        name={stylesPackage.name}
        version={stylesPackage.version}
        mainPath="/guide/styles" />

      {/* -----------------Custom Component Flexibility Section------------------- */}
      <AppComponentSection
        title="Custom Component Flexibility"
        about="While you can leverage the CoreComponents, Wrappid also gives you the flexibility to create your own custom components as needed to tailor your applications to specific requirements." 
        name={corePackage.name}
        version={corePackage.version}
        mainPath="/guide/components" />

      {/* -----------------Full-Stack Development Support------------------- */}
      <AppComponentSection
        title="Full-Stack Development Support"
        about="Wrappid supports building both frontend and backend components of applications, including API middleware, database handling, and business-specific modules."
        name={nativePackage.name}
        version={nativePackage.version}
        mainPath="/guide/styles"
        learnMorePath="/guide/components"
        sourcePath="https://github.com/wrappid" 
      />

      <CoreDivider styleClasses={[CoreClasses.MARGIN.MT5]} />
    </CoreGrid>
  );
}

export default AppComponentContent;
