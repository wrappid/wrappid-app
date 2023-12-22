import {
  CoreClasses, CoreContainedButton, CoreH3, CoreH5, CoreImage, CoreStack 
} from "@wrappid/core";

function StaticWebPage() {
  return (
    <CoreStack styleClasses={[
      CoreClasses.WIDTH.W_100,
      CoreClasses.HEIGHT.H_100,
      CoreClasses.COLOR.TEXT_WHITE,
      CoreClasses.BG.BG_INFO_LIGHT,
      CoreClasses.GAP.GAP_3,
      CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
      CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER
    ]}>

      <CoreImage
        src={"/images/logo.png"}
        alt="logo"
        styleClasses={[CoreClasses.HEIGHT.H_25]}
      />

      <CoreH3>Wrappid Framework</CoreH3>

      <CoreH5>Wrapper Framework Built to Enable Rapid Development of Applications</CoreH5>

      <CoreContainedButton styleClasses={[CoreClasses.PADDING.PX4, CoreClasses.PADDING.PY2, CoreClasses.BG.BG_WARNING_LIGHT]} size="large" >Get started with Wrappid</CoreContainedButton>
    </CoreStack>
  );
}

export default StaticWebPage;