import {CoreAvatar, CoreClasses, CoreButton, CoreStack} from '@wrappid/core';

/**
 * @todo
 * Create an initial static home page. 
 * Wrappid logo will be at the center of the page.
 * Below the logo, there will be 3 buttons:
 * 1. Components
 * 2. Styles
 * 3. Github Wrappid Documentation
 * 
 * @returns 
 */
function Welcome() {
  return (
    <CoreStack
      styleClasses={[CoreClasses.HEIGHT.H_100, CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
      direction="column"
      spacing={2}
    >
      <CoreAvatar
          styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.HEIGHT.H_100]}
        src="https://avatars.githubusercontent.com/u/128048526?s=200&v=4"
        alt="Picture"
      />
      <CoreStack direction="row" spacing={2}>
        <CoreButton
          styleClasses={[CoreClasses.MARGIN.M1]}
          variant="contained"
          color="primary"
        >
          Components
        </CoreButton>
        <CoreButton
          styleClasses={[CoreClasses.MARGIN.M1]}
          variant="contained"
          color="secondary"
        >
          Styles
        </CoreButton>
      </CoreStack>
    </CoreStack>
  );
}

export default Welcome;