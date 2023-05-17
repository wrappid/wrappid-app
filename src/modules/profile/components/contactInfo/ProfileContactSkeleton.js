import {
    CoreSkeleton,
    CoreBox,
    CoreGrid,
} from '@wrappid/core'

export default function ProfileContactSkeleton() {
    return (
        <CoreGrid>
            <CoreBox gridProps={{ gridSize: 4 }}>
                <CoreSkeleton variant="text" />
            </CoreBox>

            <CoreBox gridProps={{ gridSize: 4 }}>
                <CoreSkeleton variant="text" />
            </CoreBox>
        </CoreGrid>
    );
}
