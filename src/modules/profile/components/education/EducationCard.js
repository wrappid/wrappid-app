import {
    CoreTypographyBody1,
    CoreCardHeader,
    // viewFormattedDate,
} from '@wrappid/core'

export default function EducationCard(props) {
    const {
        degree, school, location, board, startDate, endDate 
    } = props;

    return (
        <CoreCardHeader
            title={
                <>
                    <CoreTypographyBody1>{degree}</CoreTypographyBody1>
                </>
            }
            subheader={
                <>
                    <CoreTypographyBody1>{school}</CoreTypographyBody1>

                    <CoreTypographyBody1>{board + ", " + location}</CoreTypographyBody1>

                    <CoreTypographyBody1>
                        {/* {viewFormattedDate(startDate) + " - " + viewFormattedDate(endDate, "endDate")} */}
                    </CoreTypographyBody1>
                </>
            }
        />
    );
}
