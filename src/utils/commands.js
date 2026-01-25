export const SUPPORTED_COMMANDS = {
  LOG_JOB_INFO: "log_job_information",
  OPEN_SIDE_PANEL: "open_side_panel",
};

/**
 * @param {String} command Name of the command being evaluated
 * @returns {Boolean} Whether or not the given command is supported
 */
export function isCommandSupported(command) {
  return Object.values(SUPPORTED_COMMANDS).includes(command);
}
