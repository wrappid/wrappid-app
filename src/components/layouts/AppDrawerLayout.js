import {
  CoreBox,
  CoreClasses,
  CoreLink,
  CoreImage,
  CoreStack,
  CoreTypographyBody1,
  ThemeSelector,
  CoreRightDrawer,
  toggleRightMenuState
} from "@wrappid/core";
import { toggleLeftMenuState } from "@wrappid/core/store/action/menuAction";
import { useDispatch, useSelector } from "react-redux";

import data from "../../../package.json";
import logo from "../../resources/images/logo.png";

export default function AppDrawerLayout(props) {
  const dispatch = useDispatch();
  const rightMenuOpen = useSelector((state) => state?.menu?.rightMenuOpen);
  const leftMenuOpen = useSelector((state) => state?.menu?.leftMenuOpen);

  const toggleLeftDrawer = () => {
    dispatch(toggleLeftMenuState());
  };

  const toggleRightDrawer = () => {
    dispatch(toggleRightMenuState());
  };

  return (
    <>
      <CoreBox
        styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_ROW, CoreClasses.SHADOW.NORMAL]}
      >
        <CoreImage
          height={50}
          src={logo}
          alt="logo"
        />
      </CoreBox>

      { leftMenuOpen === true &&
          <CoreRightDrawer
            anchor="right"
            onOpen={toggleLeftDrawer}
            onClose={toggleLeftDrawer}
            open={leftMenuOpen}
          >{"AppDrawerLayout left"}</CoreRightDrawer>
      }
      
      <CoreBox styleClasses={[CoreClasses.PADDING.P1]}>
        {props.children}
      </CoreBox>

      { rightMenuOpen === true &&
          <CoreRightDrawer
            anchor="right"
            onOpen={toggleRightDrawer}
            onClose={toggleRightDrawer}
            open={rightMenuOpen}
          >{"AppDrawerLayout Right"}</CoreRightDrawer>
      }
      
      <CoreBox
        styleClasses={[
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.FLEX.DIRECTION_ROW,
          CoreClasses.PADDING.P2,
          CoreClasses.BG.BG_PRIMARY,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
        ]}
      >
        <CoreTypographyBody1 >{data.name}</CoreTypographyBody1>

        <CoreTypographyBody1>
          Wrappid ©{new Date().getFullYear()}
        </CoreTypographyBody1>

        <CoreStack direction="row">
          <ThemeSelector />

          <CoreLink href={"/about"}>
            <CoreTypographyBody1>Version: {data.version}</CoreTypographyBody1>
          </CoreLink>
        </CoreStack>
      </CoreBox>
    </>
  );
}
