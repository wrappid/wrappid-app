import {
  CoreBox, CoreClasses, CoreContainedButton, CoreContainer, CoreDivider, CoreGrid, CoreH3, CoreH5, CoreImage, CoreLink, CoreSection, CoreSpan, coreUseNavigate 
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

function StaticPageContent() {
  
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
    <CoreContainer>
      {/* Wrappid logo and other details */}
      <CoreGrid>
        {/* application Logo */}
        <CoreBox 
          gridProps={{ gridSize: { md: 4 } }}
          styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END]}>
          <CoreImage
            width={200}
            height={200}
            src={logo}
            alt="logo" />
        </CoreBox>
        
        <CoreBox 
          gridProps={{ gridSize: { md: 8 }, styleClasses: [CoreClasses.ALIGNMENT.ALIGN_SELF_CENTER] }}
          styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN]}>

          {/* application title */}
          <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_CENTER]}>
            <CoreH3>{capitalizedWords.join(" ")}</CoreH3>
          </CoreBox>

          {/* application About */}
          <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_CENTER]}>
            <CoreH5>
              {packageJson.description ? packageJson.description : "Description not provided"}
            </CoreH5>
          </CoreBox>
        </CoreBox>

        <CoreDivider
          styleClasses={[CoreClasses.WIDTH.W_75]}
        />

        {/* wrappid tagline, version and links */}
        <CoreBox>
          {/* wrappid tagline */}
          <CoreBox>
            <CoreH5>
              Built with Wrappid. One code, Endless possibilities.</CoreH5>
          </CoreBox>

          {/* wrappid Related links (Release Notes|Attributions|Contributors|Issue Board) */}
          <CoreBox>
            <CoreSpan>
              {`Version: ${packageJson.version}`}
            </CoreSpan>

            <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_ROW, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_CONTENT_CENTER]}>
              
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
        </CoreBox>

        {/* buttons for related links */}
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

      {/* Wrappid features and other details segmented into sections */}
      
      <CoreGrid>
        {/* Wrappid styles section */}
        <CoreSection
          gridProps={{ gridSize: { md: 4 } }}>
          <AppComponentSection
            title="Styles Library"
            about="It integrates seamlessly with popular styling libraries, using MIUI for web styling and React Native Paper for mobile styling, ensuring a consistent look and feel across platforms." 
            name={stylesPackage.name}
            version={stylesPackage.version}
            mainPath="/guide/styles" />        </CoreSection>

        {/* Wrappid Custom Component Flexibility Section section */}
        <CoreSection
          gridProps={{ gridSize: { md: 4 } }}>
          <AppComponentSection
            title="Custom Component Flexibility"
            about="While you can leverage the CoreComponents, Wrappid also gives you the flexibility to create your own custom components as needed to tailor your applications to specific requirements." 
            name={corePackage.name}
            version={corePackage.version}
            mainPath="/guide/components" />        </CoreSection>

        {/* wrappid layout section */}
        <CoreSection
          gridProps={{ gridSize: { md: 4 } }}>
          <AppComponentSection 
            title="Create Layouts"
            about="You can create layouts and use multiple layouts to style your page"/>
        </CoreSection>

        {/* Wrappid native section */}
        <CoreSection
          gridProps={{ gridSize: { md: 4 } }}>
          <AppComponentSection
            title="Full-Stack Development Support"
            about="Wrappid supports building both frontend and backend components of applications, including API middleware, database handling, and business-specific modules."
            name={nativePackage.name}
            version={nativePackage.version}
            mainPath="/guide/styles"
            learnMorePath="/guide/components"
            sourcePath="https://github.com/wrappid" 
          />        </CoreSection>

        {/* Wrappid utilities section */} 
        <CoreSection
          gridProps={{ gridSize: { md: 4 } }}>
          <AppComponentSection/>
        </CoreSection>

        {/* wrappid themes section */}
        <CoreSection
          gridProps={{ gridSize: { md: 4 } }}>
          <AppComponentSection title="Themes" about="This is a theme viewer" mainPath="/theme/createTheme"/>
        </CoreSection>

      </CoreGrid>
    </CoreContainer>

  );
}

export default StaticPageContent;
