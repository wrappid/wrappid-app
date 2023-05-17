import {
    CoreAvatar,
CoreTypographyBody1,
CoreCardHeader,
CoreClasses,
} from '@wrappid/core'

export default function ClinicCard(props) {
    const {
        clinicLogo,
        fullName,
        phone,
        addLine1,
        addLine2,
        country,
        state,
        district,
        city,
        pin,
        landmark,
    } = props;

    return (
        <CoreCardHeader
            avatar={
                <CoreAvatar
                    src={clinicLogo || "no_image.png"}
                    styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_MEDIUM]}
                />
            }
            title={
                <>
                    <CoreTypographyBody1>{fullName}</CoreTypographyBody1>

                    {"\n"}

                    <CoreTypographyBody1 variant="span">Contact: {phone}</CoreTypographyBody1>
                </>
            }
            subheader={
                addLine1 +
        ", " +
        addLine2 +
        ", " +
        city +
        ", " +
        district +
        ", " +
        state +
        ", " +
        country +
        ", Pin-" +
        pin +
        ", " +
        "Landmark: " +
        landmark
            }
        />
    );
}
