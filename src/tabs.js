/**
 * @typedef {Object} Tab
 * @property {Number} id
 * @property {Number} windowId
 */

/** @returns {Promise<Tab>} The current tab or null if not applicable */
export async function getCurrentTab() {
  return chrome.tabs
    .query({
      active: true,
      currentWindow: true,
    })
    .then((tabs) => {
      if (tabs.length === 0) {
        throw new ReferenceError("Current tab is not defined!");
      }

      return tabs.at(0);
    })
    .catch((error) => {
      console.error(error);
    });
}
