import {CoreBox, CoreGrid, CoreSection, CoreImage} from '@wrappid/core';
import {CoreClasses} from '@wrappid/styles';

export const AuthContainer = props => {
  return (
    <CoreGrid
    //   spacing={0}
    //   alignItems="center"
    //   justifyContent="center"
    // style={{ minHeight: "100vh" }}
    >
      <CoreBox gridProps={{gridSize: {md: 3, sm: 6}}}>
        <CoreSection>
          <CoreBox
            styleClasses={[
              CoreClasses.LAYOUT.FULL_WIDTH,
              CoreClasses.LAYOUT.HORIZONTAL_CENTER,
              CoreClasses.MARGIN.MB5,
            ]}>
            <CoreImage
              src={require('../../images/logo.png')}
              alt=""
              height={40}
              width={120}
            />
          </CoreBox>
          {props.children}
        </CoreSection>
      </CoreBox>
    </CoreGrid>
  );
};
