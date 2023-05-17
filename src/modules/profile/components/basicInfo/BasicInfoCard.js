import {
    CoreAvatar,
    CoreH6,
    CoreTypographyBody1,
    CoreTypographySubtitle1,
    CoreBox,
    CoreGrid,
    CoreClasses
} from "@wrappid/core";
// import { getAge, getFullName } from "../../utils/helper";

export default function BasicInfoCard(props) {
    const {
        firstName, middleName, lastName, gender, dob, bio, photo 
    } = props;

    return (
        <CoreGrid styleClasses={[]}>
            <CoreBox
                gridProps={{ gridSize: { md: 2, xs: 12 } }}
                styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            >
                <CoreAvatar
                    styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_LARGE]}
                    src={photo || "photo.jpg"}
                />
            </CoreBox>

            <CoreBox gridProps={{ gridSize: { md: 10, xs: 12 } }} styleClasses={[]}>
                <CoreH6>{ firstName + lastName + middleName }</CoreH6>

                <CoreTypographySubtitle1 variant={"subtitle1"}>
                    {/* {dob
                        ? gender
                            ? typeof gender === "string"
                                ? gender + ", " + getAge(dob)
                                : gender.label + ", " + getAge(dob)
                            : "N/A, " + getAge(dob)
                        : "N/A, N/A"} */}
                </CoreTypographySubtitle1>
            </CoreBox>

            <CoreBox gridProps={{ gridSize: { xs: 12 } }}>
                <CoreTypographyBody1 limitChars={250}>{bio}</CoreTypographyBody1>
            </CoreBox>
        </CoreGrid>
    );
}
