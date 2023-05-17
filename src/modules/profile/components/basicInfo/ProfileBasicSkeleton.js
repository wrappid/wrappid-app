import {
    CoreSkeleton,
    CoreBox,
    CoreGrid,
    CoreClasses,
} from '@wrappid/core'

export default function ProfileBasicSkeleton() {
    return (
        <CoreGrid>
            <CoreBox
                styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
                gridProps={{ gridSize: 2 }}
            >
                <CoreSkeleton variant="circular" height={70} width={70} />
            </CoreBox>

            <CoreBox gridProps={{ gridSize: 5 }}>
                <CoreSkeleton variant="text" />

                <CoreSkeleton variant="text" />
            </CoreBox>

            <CoreBox gridProps={{ gridSize: 12 }}>
                <CoreSkeleton variant="rectangular" height={50} />
            </CoreBox>
        </CoreGrid>
    );
}
