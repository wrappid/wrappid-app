import {
  CoreAccordion,
  CoreAccordionDetail,
  CoreAccordionSummary,
  CoreBox,
  CoreClasses,
  CoreDivider,
  CoreGrid,
  CoreH3,
  CoreImage,
  CoreLayoutItem,
  CoreLink,
  CoreTypographyBody1,
  CoreTypographyBody2
} from "@wrappid/core";
import corePackage from "@wrappid/core/package.json";
// eslint-disable-next-line import/no-unresolved
import nativePackage from "@wrappid/native/package.json";
import stylesPackage from "@wrappid/styles/package.json";

import packageJson from "../../package.json";
import applicationLogo from "../resources/images/logo_dark.png";
// eslint-disable-next-line import/order
import WrappidAppLayout from "./layouts/WrappidAppLayout";

export default function About() {
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
          <CoreTypographyBody1>{`${name ? name : "Name not found"} ${version ? version : "version not available"}`}</CoreTypographyBody1>
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
    <>
      <CoreLayoutItem id={WrappidAppLayout.PLACEHOLDER.CONTENT}>

        <CoreGrid styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_AROUND]}>
          <CoreBox gridProps={{ gridSize: { md: 8 } }} styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.TEXT.MD.TEXT_START]}>

            <CoreGrid>
              <CoreBox gridProps={{ gridSize: { md: 2 } }} styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_AROUND]}>
                <CoreImage styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_XLARGE]} src={applicationLogo} />
              </CoreBox>

              <CoreBox gridProps={{ gridSize: { md: 10 } }}>
                <CoreH3 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.TEXT.MD.TEXT_START]} >{`${name ? name : "Name not found"}`}</CoreH3>

                <CoreTypographyBody1>{`${description ? description : "Description not found"}`}</CoreTypographyBody1>
              </CoreBox>
            </CoreGrid>

            <CoreDivider />

            <CoreBox>
              <CoreTypographyBody1>
                {`Versions: ${version ? version : "Version not found"}`}  &nbsp; | &nbsp;

                <CoreLink href={author?.url ? author?.url : ""}>Author</CoreLink> &nbsp; | &nbsp;

                <CoreLink href={homepage ? homepage : ""}>Homepage</CoreLink> &nbsp; | &nbsp;

                <CoreLink href={repository?.url ? repository?.url.replace("git+", "") : ""}>Repository</CoreLink> &nbsp; | &nbsp;

                <CoreLink href={bugs?.url ? bugs?.url : ""}>Bug report url</CoreLink> &nbsp; | &nbsp;

                <CoreLink href={readme ? readme : ""}>Readme</CoreLink>
              </CoreTypographyBody1>
            </CoreBox>

            <CoreBox>
              <CoreTypographyBody2>
                {`License: ${license ? license : "License not found"}`},

            Copyright 2024 ©{new Date().getFullYear()}. All rights reserved.
              </CoreTypographyBody2>
            </CoreBox>

            <CoreDivider />

            <CoreBox>
              <CoreTypographyBody1>
                {`${name ? name : "Name not found"}`} is built using the

                <CoreLink href={"https://github.com/wrappid"}> wrappid</CoreLink> open source project.
              </CoreTypographyBody1>
            </CoreBox>

            <CoreDivider />

            <CoreBox>
              <CoreAccordionDetail styleClasses={[CoreClasses.PADDING.P1]}>

                {renderPackageDetails("core", corePackage)}

                {renderPackageDetails("native", nativePackage)}

                {renderPackageDetails("styles", stylesPackage)}
              </CoreAccordionDetail>

            </CoreBox>

            <CoreDivider />

            <CoreBox>
              <CoreTypographyBody1>
            Other open source software
              </CoreTypographyBody1>
            </CoreBox>

            <CoreBox>
              <CoreTypographyBody1>
            Kindly refer Attributions for other open source softwares. All trademarks belong to their respective owners.
              </CoreTypographyBody1>
            </CoreBox>

          </CoreBox>
        </CoreGrid>
      </CoreLayoutItem>
    </>
  );
}
