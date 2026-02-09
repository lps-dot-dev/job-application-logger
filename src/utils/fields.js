const CUSTOM_FIELD_PREFIX = "custom:";
export const CUSTOM_FIELD_NAME = "Custom";
export const DATE_TIME_FIELD_NAME = "Date/Time";
export const JOB_TYPE_FIELD_NAME = "Job Type";
export const SUPPORTED_FIELD_NAMES = new Set([
  CUSTOM_FIELD_NAME,
  DATE_TIME_FIELD_NAME,
  JOB_TYPE_FIELD_NAME,
  "Company Name",
  "Job Title",
  "Location",
  "Salary",
  "URL",
]);

/**
 * @param {String} fieldName
 * @returns {Boolean}
 */
export function isCustomField(fieldName) {
  if (typeof fieldName !== "string") {
    throw new TypeError("`fieldName` must be a string!");
  }

  return fieldName.startsWith(CUSTOM_FIELD_PREFIX);
}

/**
 * @param {String} fieldName
 * @returns {Boolean}
 */
export function isSupportedField(fieldName) {
  if (typeof fieldName !== "string") {
    throw new TypeError("`fieldName` must be a string!");
  }

  return SUPPORTED_FIELD_NAMES.has(fieldName);
}
