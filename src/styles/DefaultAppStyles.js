import { defaultUtilityStyles } from "@wrappid/styles";

export const defaultAppStyles = {
  prescriptionContainer: {
    ...defaultUtilityStyles.bgWhite,
    width: "calc(100% + 16px)",
  },

  prescriptionContent: {
    ...defaultUtilityStyles.mtN1,
    ...defaultUtilityStyles.mlN1,
    width: "calc(100% + 8px)",
  },

  /* -------------------Prescription related------------------- */
  prescriptionContentContainer: {
    ...defaultUtilityStyles.bgWhite,
    ...defaultUtilityStyles.w100,
    // -- ...defaultUtilityStyles.overflowYAuto,
  },

  prescriptionPageContainer: { minHeight: "100%" },

  prescriptionTopBar: {
    ...defaultUtilityStyles.border,
    ...defaultUtilityStyles.borderBottom,
    ...defaultUtilityStyles.borderPrimaryLight,
    ...defaultUtilityStyles.justifyContentSpaceBetween,
    ...defaultUtilityStyles.alignItemsCenter,
    ...defaultUtilityStyles.mtN2,
  },

  prescriptionTopBarContainer: {
    ...defaultUtilityStyles.bgWhite,
    ...defaultUtilityStyles.stickyTop,
    zIndex: "1025",
  },
  /**************************************************
   * Using defaultUtilityStyles example
   *************************************************/
  usingDefaultUtilityStyles: { ...defaultUtilityStyles.anyUtilityStyle },
  /* -------------------Prescription related------------------- */
};
