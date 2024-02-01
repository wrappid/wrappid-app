
import corePackage from "@babel/core/package.json";
import {
  CoreStack, CoreClasses, CoreBox, CorePaper, CoreTypographyBody1, CoreLink, CoreAvatar, CoreH5, CoreAccordion, CoreAccordionSummary, CoreAccordionDetail
} from "@wrappid/core";

// most root package.json file
import packageJson from "../../package.json";
import applicationLogo from "../resources/images/logo_dark.png";
import webRuntimePackage from "../scripts/web-runtime-core-package.json"; 
import wrappidPackagesData from "../scripts/wrappid-packages.json";

// eslint-disable-next-line no-console
console.log("corePackage", corePackage);

const PackageList = () => {
  const { readme, author, description, version, name } = packageJson; 
  const wrappidPackages = {};
  const otherPackages = {};

  Object.entries(webRuntimePackage.dependencies).map(([packageName, packageVersion]) => {
    if (packageName.startsWith("@wrappid")) {
      wrappidPackages[packageName] = packageVersion;
    } else {
      otherPackages[packageName] = packageVersion;
    }
  });

  const renderPackageDetails = (packageName, packageDetails) => {
    const {
      author, bugs, homepage, repository, version, description, license
    } = packageDetails;

    return (
      <CoreAccordion key={packageName} styleClasses={[CoreClasses.PADDING.P1]}>
        <CoreAccordionSummary styleClasses={[CoreClasses.PADDING.P1]}>
          <CoreTypographyBody1>{`${packageName.replace("@", "")}`}</CoreTypographyBody1>
        </CoreAccordionSummary>
  
        <CoreAccordionDetail styleClasses={[CoreClasses.PADDING.P1]}>
          <CoreTypographyBody1>{`Name: ${name}`}</CoreTypographyBody1>

          <CoreTypographyBody1>{`Author: ${author}`}</CoreTypographyBody1>

          <CoreTypographyBody1>{`Description: ${description}`}</CoreTypographyBody1>

          <CoreLink href={homepage}>
            <CoreTypographyBody1>{`Homepage: ${homepage}`}</CoreTypographyBody1>
          </CoreLink>

          <CoreLink href={repository?.url}>
            <CoreTypographyBody1>{`Repository: ${repository?.url}`}</CoreTypographyBody1>
          </CoreLink>

          <CoreLink href={bugs?.url}>
            <CoreTypographyBody1>{`Bug report: ${bugs?.url}`}</CoreTypographyBody1>
          </CoreLink>

          <CoreTypographyBody1>{`Version: ${version}`}</CoreTypographyBody1>

          <CoreTypographyBody1>{`License: ${license}`}</CoreTypographyBody1>
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

        <CoreStack direction={"row"} spacing={2} styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
          <CoreAvatar src={applicationLogo} />

          <CoreStack styleClasses={[CoreClasses.DISPLAY.TABLE_ROW]}>
            <CoreTypographyBody1>{`${name}`}</CoreTypographyBody1>

            <CoreTypographyBody1>{`version ${version}`}</CoreTypographyBody1>
          </CoreStack>
        </CoreStack>

        <CoreTypographyBody1>{`${description}`}</CoreTypographyBody1>

        <CoreTypographyBody1>{`${author}`}</CoreTypographyBody1>

        <CoreTypographyBody1>
          <CoreLink href={readme}>{`${readme}`}</CoreLink>
        </CoreTypographyBody1>

      </CoreBox>

      <CoreBox component={CorePaper} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.WIDTH.W_75, CoreClasses.SHADOW.SMALL]}>
        <CoreTypographyBody1>Wrappid</CoreTypographyBody1>

        <CoreTypographyBody1>Copyright Wrappid ©2024. All rights reserved.</CoreTypographyBody1>

        <CoreTypographyBody1>
          {`${packageJson.name}`} is made possible by the 

          <CoreLink href={"https://github.com/wrappid"}> wrappid</CoreLink> open source project and other open source software.</CoreTypographyBody1>
      </CoreBox>

      <CoreAccordion styleClasses={[CoreClasses.WIDTH.VW_75, CoreClasses.SHADOW.SMALL]}>
        <CoreAccordionSummary styleClasses={[CoreClasses.PADDING.P1]}>
          <CoreTypographyBody1>Wrappid Packages</CoreTypographyBody1>
        </CoreAccordionSummary>

        <CoreAccordionDetail styleClasses={[CoreClasses.PADDING.P1]}>
          {renderPackageDetails("core", wrappidPackagesData.core)}

          {renderPackageDetails("native", wrappidPackagesData.native)}

          {renderPackageDetails("styles", wrappidPackagesData.styles)}
        </CoreAccordionDetail>
      </CoreAccordion>

      <CoreAccordion styleClasses={[CoreClasses.WIDTH.VW_75, CoreClasses.SHADOW.SMALL]}>
        <CoreAccordionSummary styleClasses={[CoreClasses.PADDING.P1]}>
          <CoreTypographyBody1>Third party Packages</CoreTypographyBody1>
        </CoreAccordionSummary>

        <CoreAccordionDetail styleClasses={[CoreClasses.PADDING.P1]}>
          {Object.entries(otherPackages).map(([name, version]) => (
            <CoreAccordion key={name} styleClasses={[CoreClasses.PADDING.P1]}>
              <CoreAccordionSummary>
                {`${name.replace("@", "")} ${version.version}`}           
              </CoreAccordionSummary>

              <CoreAccordionDetail styleClasses={[CoreClasses.PADDING.P1]}>
                <CoreTypographyBody1>{`Version: ${version.version}`}</CoreTypographyBody1>

                <CoreTypographyBody1>{`Registry: ${version.resolved}`}</CoreTypographyBody1>
              </CoreAccordionDetail>
            </CoreAccordion>
          ))}
        </CoreAccordionDetail>
      </CoreAccordion>
    </CoreStack>

  );
};

export default PackageList;
