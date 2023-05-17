import UserProfile from "./components/UserProfile";
import BasicInfoCard from "./components/basicInfo/BasicInfoCard";
import ProfileBasicSkeleton from "./components/basicInfo/ProfileBasicSkeleton";
import ClinicCard from "./components/clinic/ClinicCard";
import ProfileClinicSkeleton from "./components/clinic/ProfileClinicSkeleton";
import ContactInfoCard from "./components/contactInfo/ContactInfoCard";
import ProfileContactSkeleton from "./components/contactInfo/ProfileContactSkeleton";
import EducationCard from "./components/education/EducationCard";
import ProfileEducationSkeleton from "./components/education/ProfileEducationSkeleton";
import ExperienceCard from "./components/experience/ExperienceCard";
import ProfileExperienceSkeleton from "./components/experience/ProfileExperienceSkeleton";
import ProfileRegistrationSkeleton from "./components/registration/ProfileRegistrationSkeleton";
import RegistrationCard from "./components/registration/RegistrationCard";


export const ProfileComponentRegistry = {
    UserProfile: {comp: UserProfile},
    
    basicInfoCard: {comp: BasicInfoCard},
    profileBasicSkeleton: { comp: ProfileBasicSkeleton },
    
    contactInfoCard: {comp: ContactInfoCard},
    profileContactSkeleton: { comp: ProfileContactSkeleton },
    
    registrationCard: { comp: RegistrationCard },
    profileRegistrationSkeleton: { comp: ProfileRegistrationSkeleton },
    
    educationCard: { comp: EducationCard },
    profileEducationSkeleton: { comp: ProfileEducationSkeleton },

    experienceCard: { comp: ExperienceCard },
    profileExperienceSkeleton: { comp: ProfileExperienceSkeleton },

    clinicCard: { comp: ClinicCard },
    profileClinicSkeleton: { comp: ProfileClinicSkeleton },
};
