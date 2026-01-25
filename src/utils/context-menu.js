const JOB_FIELD_IDS = {
  COMPANY_NAME: "job.company.name",
  LOCATION: "job.location",
  TITLE: "job.title",
  TYPE: "job.type",
  URL: "job.link.url",
};

export const JOB_FIELD_SELECTION_OPTIONS = {
  [JOB_FIELD_IDS.COMPANY_NAME]: "Company Name",
  [JOB_FIELD_IDS.LOCATION]: "Location",
  [JOB_FIELD_IDS.TITLE]: "Job Title",
  [JOB_FIELD_IDS.TYPE]: "Job Type",
};

export const JOB_LINK_OPTIONS = {
  [JOB_FIELD_IDS.URL]: "Job URL",
};

export function getJobFieldSessionIds(tabId) {
  return Object.values(JOB_FIELD_IDS).map(
    (jobFieldId) => `${jobFieldId}:${tabId}`,
  );
}

export function isSupportedContextMenu(contextMenuId) {
  return Object.values(JOB_FIELD_IDS).includes(contextMenuId);
}
