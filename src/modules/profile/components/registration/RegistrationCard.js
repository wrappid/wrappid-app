import {
    CoreLabel,
    CoreTypographyBody2,
    CoreGrid,
    CoreLink,
    // getDateString
} from '@wrappid/core'

export default function RegistrationCard(props) {
    const {
        regNo = "",
        regDate = "",
        departmentId = { id: "", label: "" },
        registrationDocument = "",
    } = props;

    // eslint-disable-next-line no-console
    console.log("PROFILE REGISTRAION CARD", props);

    return (
        <CoreGrid>
            <CoreLabel>Specialization</CoreLabel>

            <CoreTypographyBody2>{departmentId?.label || "Not given"}</CoreTypographyBody2>

            <CoreLabel>Registration Number</CoreLabel>

            <CoreTypographyBody2>{regNo || "Not given"}</CoreTypographyBody2>

            <CoreLabel>Registration Date</CoreLabel>

            <CoreTypographyBody2>{regDate ? 
            // getDateString(regDate)
            regDate
             : "Not given"}</CoreTypographyBody2>

            <CoreLabel>Registration Document</CoreLabel>

            {registrationDocument ? (
                <CoreLink href={registrationDocument}>Download</CoreLink>
            ) : (
                <CoreTypographyBody2>{"Not given"}</CoreTypographyBody2>
            )}
        </CoreGrid>
    );
}
