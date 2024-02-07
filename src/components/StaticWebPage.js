import {
  CoreClasses,
  CoreContainedButton,
  CoreH3,
  CoreH5,
  CoreImage,
  CoreStack,
  coreUseNavigate
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
      styleClasses={[
        CoreClasses.HEIGHT.VH_100,
        CoreClasses.COLOR.TEXT_WHITE,
        CoreClasses.BG.BG_INFO_LIGHT,
        CoreClasses.GAP.GAP_3,
        CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
        CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
      ]}
    >
      <CoreImage
        styleClasses={[CoreClasses.HEIGHT.VH_25]}
        src={logo}
        alt="logo"
      />

      <CoreH3>{capitalizedWords.join(" ")}</CoreH3>

      <CoreH5>{data.description}</CoreH5>

      <CoreH5>Built with Wrappid Framework</CoreH5>

      <CoreH5>
        A Wrapper Framework Built to Enable Rapid Development of Applications
      </CoreH5>

      <CoreStack direction={"row"}>
        <CoreContainedButton
          styleClasses={[CoreClasses.PADDING.PX4, CoreClasses.PADDING.PY2, CoreClasses.BG.BG_WARNING_LIGHT]}
          size="large"
          OnClick={handleClick1}
        >
          Styles
        </CoreContainedButton>

        <CoreContainedButton
          styleClasses={[CoreClasses.PADDING.PX4, CoreClasses.PADDING.PY2, CoreClasses.BG.BG_WARNING_LIGHT]}
          size="large"
          OnClick={handleClick2}
        >
          Components
        </CoreContainedButton>

        <CoreContainedButton
          styleClasses={[CoreClasses.PADDING.PX4, CoreClasses.PADDING.PY2, CoreClasses.BG.BG_WARNING_LIGHT]}
          size="large"
          href={"https://github.com/wrappid"}
        >
          Get Started
        </CoreContainedButton>
      </CoreStack>
    </CoreStack>
  );
}

export default StaticWebPage;
