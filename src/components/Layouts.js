/* eslint-disable etc/no-commented-out-code */
import React from "react";

import {
  ComponentRegistryContext, CoreBox, CoreCard, CoreClasses, CoreH3, CoreTypographyBody1 
} from "@wrappid/core";

const LayoutThumbnail = ({ layoutName }) => {
  return (
    <CoreBox styleClasses={[
      CoreClasses.DISPLAY.FLEX,
      CoreClasses.FLEX.DIRECTION_COLUMN,
      CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
      CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
      CoreClasses.GAP.GAP_1
    ]}>

      <CoreCard styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]}>
        
      </CoreCard>

      <CoreTypographyBody1 gutterBottom={false}>{layoutName}</CoreTypographyBody1>
    </CoreBox>
  );
};

export default function Layouts() {
  const componentRegistry = React.useContext(ComponentRegistryContext);
  
  const layoutComponentRegistry = Object.fromEntries(Object.entries(componentRegistry).filter((value)=>{
    return value[1].layout === true;
  }));

  // eslint-disable-next-line no-console
  console.log(layoutComponentRegistry);

  //   const prepareComponentMenu = (layoutComponentRegistry) => {
  //     return( 
  //       Object.keys(layoutComponentRegistry).map((layoutName) => {
  //         return {
  //           Children: layoutName,
  //           id      : layoutName,
  //           label   : layoutName,
  //           name    : layoutName,
  //           type    : "menuitem",
  //         };
  //       })
      
  //     );

  //   };
  //   <CoreMenu
  //             open={true}
  //             menu={prepareComponentMenu(layoutComponentRegistry)}
  //             OnMenuClick={() => alert("hi")}>
  //           </CoreMenu>

  return (
    <>
      <CoreBox styleClasses={[
        CoreClasses.DISPLAY.FLEX,
        CoreClasses.FLEX.DIRECTION_COLUMN,
        CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
        CoreClasses.ALIGNMENT.ALIGN_ITEMS_START,
        CoreClasses.PADDING.MD.P2
      ]}>
        <CoreH3>Wrappid Layout Manger</CoreH3>

        <CoreTypographyBody1>Layout Manager related description. Layout Manager related description. Layout Manager related description. Layout Manager related description. </CoreTypographyBody1>

        <CoreTypographyBody1>Click on the below thumbnails to view the layouts</CoreTypographyBody1>

        <CoreBox styleClasses={[
          CoreClasses.WIDTH.W_100,
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.FLEX.FLEX_WRAP_WRAP,
          /* CoreClasses.FLEX.DIRECTION_COLUMN, */
          /* CoreClasses.FLEX.MD.DIRECTION_ROW, */
          CoreClasses.FLEX.DIRECTION_ROW,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          CoreClasses.GAP.GAP_1,
        ]}>

          {
            Object.entries(layoutComponentRegistry).map(([layoutName, index]) => (
              <LayoutThumbnail key={index} layoutName={layoutName} />
            ))
          }
            
        </CoreBox>
      </CoreBox>
    </>
  );
}