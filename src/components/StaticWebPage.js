import {
  CoreClasses,
  CoreContainedButton,
  CoreH3,
  CoreH5,
  CoreImage,
  CoreDivider,
  CoreStack,
  CoreBox,
  coreUseNavigate,
  CoreTypographyBody1,
  CoreTypographyBody2,
  CoreLink,
  CoreButton,
  CoreIconText
} from "@wrappid/core";

import data from "../../package.json";
import logo from "../resources/images/logo_dark.png";

function StaticWebPage() {
  const navigate = coreUseNavigate();
  const handleClick1 = () => {
    navigate("/guide/styles");
  };
  const handleClick2 = () => {
    navigate("/guide/components");
  };
  // Capitalize all first letters of words
  const words = data.name.replaceAll("-", " ").split(" ");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Join the capitalized words back with spaces

  return (
    <CoreStack
      styleClasses={[CoreClasses.PADDING.P1, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
    >
      <CoreImage
        styleClasses={[CoreClasses.HEIGHT.VH_25, CoreClasses.PADDING.PB3]}
        src={logo}
        alt="logo"
      />

      <CoreH3>{capitalizedWords.join(" ")}</CoreH3>

      <CoreH5>
        {data.description ? data.description : "Description not provided"}
      </CoreH5>

      <CoreDivider
        styleClasses={[CoreClasses.WIDTH.W_75, CoreClasses.MARGIN.M5]}
      />

      <CoreH5>Built with Wrappid… One code, Endless possibilities</CoreH5>

      <CoreTypographyBody1>
        Version: {data.version}

        <CoreLink> Release Notes |</CoreLink>

        <CoreLink> Attributions |</CoreLink>

        <CoreLink> Contributors |</CoreLink>

        <CoreLink> Issue Board </CoreLink>
      </CoreTypographyBody1>

      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.FLEX_WRAP_WRAP, CoreClasses.GAP.ROW_GAP_1]}>
        <CoreContainedButton styleClasses={[CoreClasses.FLEX.FLEX_GROW_1, CoreClasses.TEXT.TEXT_TRANSFORM_LOWERCASE]} OnClick={handleClick1}>How to Customize</CoreContainedButton>

        <CoreContainedButton styleClasses={[CoreClasses.FLEX.FLEX_GROW_1]} OnClick={handleClick2}>
            Learn more...
        </CoreContainedButton>

        <CoreContainedButton styleClasses={[CoreClasses.FLEX.FLEX_GROW_1]} href={"https://github.com/wrappid"}>
          Source 
        </CoreContainedButton>
      </CoreBox>
      
      <CoreDivider styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.MARGIN.MT5]}/>

      <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.PADDING.PB5, CoreClasses.HEIGHT.MIN_VH_50]}>
        <CoreH3 styleClasses={[CoreClasses.TEXT.TEXT_JUSTIFY]}>Styles Library</CoreH3>

        <CoreH5 styleClasses={[CoreClasses.MARGIN.MB4, CoreClasses.TEXT.TEXT_JUSTIFY]}>
          It integrates seamlessly with popular styling libraries, using MIUI
          for web styling and React Native Paper for mobile styling, ensuring a
          consistent look and feel across platforms.
        </CoreH5>

        <CoreH5>@wrappid/styles package</CoreH5>

        <CoreTypographyBody2>
          Version: {data.version}&nbsp;

          <CoreLink>Release Notes</CoreLink>&nbsp;|&nbsp;

          <CoreLink>Attributions</CoreLink>&nbsp;|&nbsp;

          <CoreLink>Contributors</CoreLink>&nbsp;|&nbsp;

          <CoreLink>Issue Board</CoreLink>
        </CoreTypographyBody2>

        <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.FLEX_WRAP_WRAP, CoreClasses.GAP.ROW_GAP_1, CoreClasses.WIDTH.W_50]}>
          <CoreButton styleClasses={[CoreClasses.FLEX.FLEX_GROW_1]} OnClick={handleClick1}>How to Customize</CoreButton>

          <CoreContainedButton styleClasses={[CoreClasses.FLEX.FLEX_GROW_1]} OnClick={handleClick2}>
            Learn more...
          </CoreContainedButton>

          <CoreContainedButton styleClasses={[CoreClasses.FLEX.FLEX_GROW_1]} href={"https://github.com/wrappid"}>
            <CoreIconText icon="mail" text="Source"></CoreIconText>
          </CoreContainedButton>
        </CoreBox>

        <CoreTypographyBody2 styleClasses={[CoreClasses.MARGIN.MT5]}>
        Courtesy: MUI & React Native Paper
        </CoreTypographyBody2>
      </CoreBox>

      <CoreDivider styleClasses={[CoreClasses.WIDTH.W_100]}/>

      <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.PADDING.PB5, CoreClasses.HEIGHT.MIN_VH_50]}>
        <CoreH3 styleClasses={[CoreClasses.TEXT.TEXT_JUSTIFY]}>Custom Component Flexibility</CoreH3>

        <CoreH5 styleClasses={[CoreClasses.MARGIN.MB4]}>
        While you can leverage the CoreComponents, Wrappid also gives you the flexibility to create your own custom components as needed to tailor your applications to specific requirements.

        </CoreH5>

        <CoreH5>@wrappid/guide module</CoreH5>

        <CoreTypographyBody2>
          Version: {data.version}

          <CoreLink> Release Notes |</CoreLink>

          <CoreLink> Attributions |</CoreLink>

          <CoreLink> Contributors |</CoreLink>

          <CoreLink> Issue Board </CoreLink>
        </CoreTypographyBody2>

        <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.FLEX_WRAP_WRAP, CoreClasses.GAP.ROW_GAP_1, CoreClasses.WIDTH.W_50]}>
          <CoreButton styleClasses={[CoreClasses.FLEX.FLEX_GROW_1]} OnClick={handleClick1}>How to Customize</CoreButton>

          <CoreContainedButton styleClasses={[CoreClasses.FLEX.FLEX_GROW_1]} OnClick={handleClick2}>
            Learn more...
          </CoreContainedButton>

          <CoreContainedButton styleClasses={[CoreClasses.FLEX.FLEX_GROW_1]} href={"https://github.com/wrappid"}>
            <CoreIconText icon="mail" text="Source"></CoreIconText>
          </CoreContainedButton>
        </CoreBox>

        <CoreTypographyBody2 styleClasses={[CoreClasses.MARGIN.MT5]}>
        Courtesy: MUI & React Native Paper
        </CoreTypographyBody2>
      </CoreBox>

      <CoreDivider styleClasses={[CoreClasses.WIDTH.W_100]}/>

      <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.PADDING.PB5, CoreClasses.HEIGHT.MIN_VH_50]}>
        <CoreH3>Full-Stack Development Support</CoreH3>

        <CoreH5 styleClasses={[CoreClasses.MARGIN.MB4]}>
        Wrappid supports building both frontend and backend components of applications, including API middleware, database handling, and business-specific modules.

        </CoreH5>

        <CoreH5>@wrappid/guide module</CoreH5>

        <CoreTypographyBody2>
          Version: {data.version}

          <CoreLink> Release Notes |</CoreLink>

          <CoreLink> Attributions |</CoreLink>

          <CoreLink> Contributors |</CoreLink>

          <CoreLink> Issue Board </CoreLink>
        </CoreTypographyBody2>

        <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.FLEX_WRAP_WRAP, CoreClasses.GAP.ROW_GAP_1, CoreClasses.WIDTH.W_50]}>
          <CoreButton styleClasses={[CoreClasses.FLEX.FLEX_GROW_1]} OnClick={handleClick1}>How to Customize</CoreButton>

          <CoreContainedButton styleClasses={[CoreClasses.FLEX.FLEX_GROW_1]} OnClick={handleClick2}>
            Learn more...
          </CoreContainedButton>

          <CoreContainedButton styleClasses={[CoreClasses.FLEX.FLEX_GROW_1]} href={"https://github.com/wrappid"}>
            <CoreIconText icon="mail" text="Source"></CoreIconText>
          </CoreContainedButton>
        </CoreBox>

        <CoreTypographyBody2 styleClasses={[CoreClasses.MARGIN.MT5]}>
        Courtesy: MUI & React Native Paper
        </CoreTypographyBody2>
      </CoreBox>
    </CoreStack>
  );
}

export default StaticWebPage;
