import {
  CoreClasses,
  CoreContainedButton,
  CoreH3,
  CoreH4,
  CoreH5,
  CoreH6,
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

      <CoreH6>
        {data.description ? data.description : "Description not provided."}
      </CoreH6>

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

      <CoreStack direction={"row"} styleClasses={[CoreClasses.PADDING.PB5]}>
        <CoreContainedButton size="large" OnClick={handleClick1}>
          How to Customize
        </CoreContainedButton>

        <CoreContainedButton size="large" OnClick={handleClick2}>
          Learn more...
        </CoreContainedButton>

        <CoreContainedButton size="large" href={"https://github.com/wrappid"}>
          <CoreIconText icon="mail" text="Source"></CoreIconText>
        </CoreContainedButton>
      </CoreStack>

      <CoreDivider styleClasses={[CoreClasses.WIDTH.W_100]} />

      <CoreBox
        styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.PADDING.PB5, CoreClasses.HEIGHT.VH_50]}
      >
        <CoreH4>Styles Library</CoreH4>

        <CoreTypographyBody1>
          It integrates seamlessly with popular styling libraries, using MIUI
          for web styling and React Native Paper for mobile styling, ensuring a
          consistent look and feel across platforms.
        </CoreTypographyBody1>

        <CoreTypographyBody1>@wrappid/styles package</CoreTypographyBody1>

        <CoreTypographyBody2 gutter>
          Version: {data.version}&nbsp;

          <CoreLink>Release Notes</CoreLink>&nbsp;|&nbsp;

          <CoreLink>Attributions</CoreLink>&nbsp;|&nbsp;

          <CoreLink>Contributors</CoreLink>&nbsp;|&nbsp;

          <CoreLink>Issue Board</CoreLink>
        </CoreTypographyBody2>

        <CoreStack direction={"row"}>
          <CoreButton OnClick={handleClick1}>How to Customize</CoreButton>

          <CoreContainedButton OnClick={handleClick2}>
            Learn more...
          </CoreContainedButton>

          <CoreContainedButton href={"https://github.com/wrappid"}>
            <CoreIconText icon="mail" text="Source"></CoreIconText>
          </CoreContainedButton>
        </CoreStack>
      </CoreBox>

      <CoreDivider styleClasses={[CoreClasses.WIDTH.W_100]} />

      <CoreBox
        styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.PADDING.PB5, CoreClasses.HEIGHT.VH_50]}
      >
        <CoreH4>Custom Component Flexibility</CoreH4>

        <CoreTypographyBody2>
          While you can leverage the CoreComponents, Wrappid also gives you the
          flexibility to create your own custom components as needed to tailor
          your applications to specific requirements.
        </CoreTypographyBody2>

        <CoreH5>@wrappid/guide module</CoreH5>

        <CoreTypographyBody2 gutter>
          Version: {data.version}&nbsp;

          <CoreLink>Release Notes</CoreLink>&nbsp;|&nbsp;

          <CoreLink>Attributions</CoreLink>&nbsp;|&nbsp;

          <CoreLink>Contributors</CoreLink>&nbsp;|&nbsp;

          <CoreLink>Issue Board</CoreLink>
        </CoreTypographyBody2>

        <CoreStack direction={"row"}>
          <CoreButton OnClick={handleClick1}>How to Customize</CoreButton>

          <CoreContainedButton OnClick={handleClick2}>
            Learn more...
          </CoreContainedButton>

          <CoreContainedButton href={"https://github.com/wrappid"}>
            <CoreIconText icon="mail" text="Source"></CoreIconText>
          </CoreContainedButton>
        </CoreStack>
      </CoreBox>

      <CoreDivider styleClasses={[CoreClasses.WIDTH.W_100]} />

      <CoreBox
        styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.PADDING.PB5, CoreClasses.HEIGHT.VH_50]}
      >
        <CoreH4>Full-Stack Development Support</CoreH4>

        <CoreTypographyBody2>
          Wrappid supports building both frontend and backend components of
          applications, including API middleware, database handling, and
          business-specific modules.
        </CoreTypographyBody2>

        <CoreH5>@wrappid/guide module</CoreH5>

        <CoreTypographyBody2 gutter>
          Version: {data.version}&nbsp;

          <CoreLink>Release Notes</CoreLink>&nbsp;|&nbsp;

          <CoreLink>Attributions</CoreLink>&nbsp;|&nbsp;

          <CoreLink>Contributors</CoreLink>&nbsp;|&nbsp;

          <CoreLink>Issue Board</CoreLink>
        </CoreTypographyBody2>

        <CoreStack direction={"row"}>
          <CoreButton OnClick={handleClick1}>How to Customize</CoreButton>

          <CoreContainedButton OnClick={handleClick2}>
            Learn more...
          </CoreContainedButton>

          <CoreContainedButton href={"https://github.com/wrappid"}>
            <CoreIconText icon="mail" text="Source"></CoreIconText>
          </CoreContainedButton>
        </CoreStack>
      </CoreBox>
    </CoreStack>
  );
}

export default StaticWebPage;
