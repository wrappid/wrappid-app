import { CoreTypographyBody1, CoreClasses } from "@wrappid/core";

function Header() {
    return (
        <CoreTypographyBody1
            styleClasses={[CoreClasses.HEIGHT.VH_25, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
        >Header</CoreTypographyBody1>
    );
}

export default Header;