import {
    CoreTypographyBody1,
    CoreCardHeader,
    viewFormattedDate,
} from '@wrappid/core'

export default function ExperienceCard(props) {
    const { designation, organization, location, startDate, endDate } = props;

    return (
        <CoreCardHeader
            title={
                <>
                    <CoreTypographyBody1>{designation}</CoreTypographyBody1>
                </>
            }
            subheader={
                <>
                    <CoreTypographyBody1>{organization}</CoreTypographyBody1>

                    <CoreTypographyBody1>{location}</CoreTypographyBody1>

                    <CoreTypographyBody1>
                        {/* {viewFormattedDate(startDate) + " - " + viewFormattedDate(endDate, "endDate")} */}
                    </CoreTypographyBody1>
                </>
            }
        />
    );
}
