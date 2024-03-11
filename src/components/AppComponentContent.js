import {
  CoreBox,
  CoreClasses,
  CoreDivider,
  CoreGrid,
  CoreH3,
  CoreH5,
  CoreImage,
  CoreLayoutItem,
  CoreLink,
  CoreTypographyBody1
} from "@wrappid/core";

import AppComponentSection from "./AppComponentSection";
import data from "../../package.json";
import logo from "../resources/images/logo_dark.png";

function AppComponentContent() {
  // Capitalize all first letters of words
  const words = data.name.replaceAll("-", " ").split(" ");
  // Join the capitalized words back with spaces
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return (
    <>
      <CoreLayoutItem>
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
              styleClasses={[CoreClasses.WIDTH.W_75, CoreClasses.MARGIN.M5, CoreClasses.DISPLAY.INLINE_FLEX]}
            />

            <CoreH5>Built with Wrappid. One code, Endless possibilities.</CoreH5>

            <CoreBox>
              <CoreTypographyBody1>
                {`Version: ${data.version}`}
              </CoreTypographyBody1>

              <CoreLink>Release Notes</CoreLink>

              {" | "}

              <CoreLink>Attributions</CoreLink>

              {" | "}

              <CoreLink>Contributors</CoreLink>

              {" | "}

              <CoreLink>Issue Board</CoreLink>
            </CoreBox>
          </CoreBox>

          {/* -----------------Themes------------------- */}
          <AppComponentSection
            title="Themes"
            about="Themes related page for demo"
            mainPath="/createTheme"
            learnMorePath="/guide/components"
            sourcePath="https://github.com/wrappid"        
          />

          {/* -----------------Themes Section------------------- */}
          <AppComponentSection title="Themes" about="This is a theme viewer" mainPath="/createTheme"/>

          {/* -----------------Styles Library Section------------------- */}
          <AppComponentSection title="Styles Library" about="It integrates seamlessly with popular styling libraries, using MIUI for web styling and React Native Paper for mobile styling, ensuring a consistent look and feel across platforms." mainPath="/guide/styles" />

          {/* -----------------Custom Component Flexibility Section------------------- */}
          <AppComponentSection title="Custom Component Flexibility" about="While you can leverage the CoreComponents, Wrappid also gives you the flexibility to create your own custom components as needed to tailor your applications to specific requirements." mainPath="/guide/components" />

          {/* -----------------Full-Stack Development Support------------------- */}
          <AppComponentSection
            title="Full-Stack Development Support"
            about="Wrappid supports building both frontend and backend components of applications, including API middleware, database handling, and business-specific modules."
            mainPath="/guide/styles"
            learnMorePath="/guide/components"
            sourcePath="https://github.com/wrappid" 
          />

          <CoreDivider styleClasses={[CoreClasses.MARGIN.MT5]} />
        </CoreGrid>
      </CoreLayoutItem>
      
    </>
  );
}

export default AppComponentContent;
