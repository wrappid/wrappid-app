import {
  CoreAccordion,
  CoreAccordionDetail,
  CoreAccordionSummary,
  CoreAvatar,
  CoreBox,
  CoreClasses,
  CoreH5,
  CoreLink,
  CorePaper,
  CoreStack,
  CoreTypographyBody1
} from "@wrappid/core";
import corePackage from "@wrappid/core/package.json";
// eslint-disable-next-line import/no-unresolved
import nativePackage from "@wrappid/native/package.json";
import stylesPackage from "@wrappid/styles/package.json";

// most root package.json file
import packageJson from "../../package.json";
import applicationLogo from "../resources/images/logo_dark.png";

// eslint-disable-next-line no-console
console.log("corePackage, nativePackage", corePackage, nativePackage, stylesPackage);

const About = () => {
  const {
    name, version, description, repository, homepage, author, license, bugs, readme 
  } = packageJson; 

  const renderPackageDetails = (packageName, packageDetails) => {
    const {
      author, bugs, homepage, repository, version, description, license, name
    } = packageDetails;

    return (
      <CoreAccordion key={packageName} styleClasses={[CoreClasses.PADDING.P1]}>
        <CoreAccordionSummary styleClasses={[CoreClasses.PADDING.P1]}>
          <CoreTypographyBody1>{`${name ? name.replace("@", "") : "Name not found"} ${version ? version : "version not available"}`}</CoreTypographyBody1>
        </CoreAccordionSummary>
  
        <CoreAccordionDetail styleClasses={[CoreClasses.PADDING.P1]}>
          <CoreTypographyBody1>{`Name: ${name ? name.replace("@", "") : "Name not found"}`}</CoreTypographyBody1>

          <CoreTypographyBody1>{`Version: ${version ? version : "Version not found"}`}</CoreTypographyBody1>

          <CoreTypographyBody1>{`Author: ${author?.name ? author?.name : "Author not found"}`}</CoreTypographyBody1>

          <CoreTypographyBody1>{`Description: ${description ? description : "Description not found"}`}</CoreTypographyBody1>

          <CoreTypographyBody1>Homepage:                 
            <CoreLink href={homepage ? homepage : ""}>{`${homepage ? homepage : "Homepage not found"}`} </CoreLink>
          </CoreTypographyBody1>
          
          <CoreTypographyBody1>Repository:<CoreLink href={repository?.url ? repository?.url.replace("git+", "") : ""}>{` ${repository?.url ? repository?.url.replace("git+", "") : "Repository not found"}`}</CoreLink></CoreTypographyBody1>

          <CoreTypographyBody1>Bug report:<CoreLink href={bugs?.url ? bugs?.url : ""}>{` ${bugs?.url ? bugs?.url : "Bug report not found"}`}</CoreLink></CoreTypographyBody1>

          <CoreTypographyBody1>{`License: ${license ? license : "License not found"}`}</CoreTypographyBody1>
        </CoreAccordionDetail>
      </CoreAccordion>
    );
  };

  return (
    <CoreStack
      direction={"column"}
      spacing={2}
      styleClasses={[CoreClasses.HEIGHT.H_100, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
    >

      <CoreBox component={CorePaper} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.WIDTH.W_75, CoreClasses.SHADOW.SMALL]}>

        <CoreH5 styleClasses={[CoreClasses.PADDING.PB1]}>About</CoreH5>

        <CoreStack direction={"row"} styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.GAP.GAP_1]}>
          <CoreAvatar src={applicationLogo} />

          <CoreStack styleClasses={[CoreClasses.DISPLAY.TABLE_ROW]}>
            <CoreTypographyBody1 gutterBottom={false}>{`${name ? name : "Name not found"}`}</CoreTypographyBody1>

            <CoreTypographyBody1 gutterBottom={false}>{`Version: ${version ? version : "Version not found"}`}</CoreTypographyBody1>
          </CoreStack>
        </CoreStack>

        <CoreTypographyBody1>{`Description: ${description ? description : "Description not found"}`}</CoreTypographyBody1>

        <CoreTypographyBody1>{`Author: ${author?.email ? author?.email : "Author not found"}`}</CoreTypographyBody1>

        <CoreTypographyBody1>Homepage:                 
          <CoreLink href={homepage ? homepage : ""}>{`${homepage ? homepage : "Homepage not found"}`} </CoreLink>
        </CoreTypographyBody1>

        <CoreTypographyBody1>Repository:<CoreLink href={repository?.url ? repository?.url.replace("git+", "") : ""}>{` ${repository?.url ? repository?.url.replace("git+", "") : "Repository not found"}`}</CoreLink></CoreTypographyBody1>

        <CoreTypographyBody1>Bug report:<CoreLink href={bugs?.url ? bugs?.url : ""}>{` ${bugs?.url ? bugs?.url : "Bug report not found"}`}</CoreLink></CoreTypographyBody1>

        <CoreTypographyBody1>{`License: ${license ? license : "License not found"}`}</CoreTypographyBody1>

        <CoreTypographyBody1>Readmi: 
          <CoreLink href={readme ? readme : ""}>{`${readme ? readme : "Readmi not found"}`}</CoreLink>
        </CoreTypographyBody1>

      </CoreBox>

      <CoreBox component={CorePaper} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.WIDTH.W_75, CoreClasses.SHADOW.SMALL]}>
        <CoreTypographyBody1>Wrappid</CoreTypographyBody1>

        <CoreTypographyBody1>Copyright Wrappid ©2024. All rights reserved.</CoreTypographyBody1>

        <CoreTypographyBody1>
          {`${packageJson.name ? packageJson.name : "Name not found"}`} is made possible by the 

          <CoreLink href={"https://github.com/wrappid"}> wrappid</CoreLink> open source project and other open source software.</CoreTypographyBody1>
      </CoreBox>

      <CoreAccordion styleClasses={[CoreClasses.WIDTH.VW_75, CoreClasses.PADDING.P1, CoreClasses.SHADOW.SMALL]}>
        <CoreAccordionSummary styleClasses={[CoreClasses.PADDING.P1]}>
          <CoreTypographyBody1>Wrappid Packages</CoreTypographyBody1>
        </CoreAccordionSummary>

        <CoreAccordionDetail styleClasses={[CoreClasses.PADDING.P1]}>

          {renderPackageDetails("core", corePackage)}

          {renderPackageDetails("native", nativePackage)}

          {renderPackageDetails("styles", stylesPackage)}
        </CoreAccordionDetail>
      </CoreAccordion>
    </CoreStack>

  );
};

export default About;
