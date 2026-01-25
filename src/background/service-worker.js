import { isCommandSupported, SUPPORTED_COMMANDS } from "../utils/commands.js";
import {
  JOB_FIELD_SELECTION_OPTIONS,
  JOB_LINK_OPTIONS,
  getJobFieldSessionIds,
  isSupportedContextMenu,
} from "../utils/context-menu.js";
import { getCurrentTab } from "../utils/tabs.js";

chrome.runtime.onInstalled.addListener(() => {
  for (let [jobFieldId, optionLabel] of Object.entries(
    JOB_FIELD_SELECTION_OPTIONS,
  )) {
    chrome.contextMenus.create({
      id: jobFieldId,
      title: optionLabel,
      contexts: ["selection"],
      documentUrlPatterns: ["https://www.linkedin.com/jobs/*"],
    });
  }

  for (let [jobFieldId, optionLabel] of Object.entries(JOB_LINK_OPTIONS)) {
    chrome.contextMenus.create({
      id: jobFieldId,
      title: optionLabel,
      contexts: ["link"],
      documentUrlPatterns: ["https://www.linkedin.com/jobs/*"],
    });
  }
});

// This will prevent the side panel from opening when clicking the action toolbar icon
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: false })
  .catch((error) => console.error(error));

chrome.commands.onCommand.addListener(async (command) => {
  if (isCommandSupported(command) === false) {
    return;
  }

  switch (command) {
    case SUPPORTED_COMMANDS.LOG_JOB_INFO:
      const currentTab = await getCurrentTab();
      const sessionFieldIds = getJobFieldSessionIds(currentTab.id);
      const sessionJobData = await chrome.storage.session.get(sessionFieldIds);
      console.log(sessionJobData);
      break;
    case SUPPORTED_COMMANDS.OPEN_SIDE_PANEL:
      /**
       * I would use `getCurrentTab` here but then this would trigger the following:
       * `Error: `sidePanel.open()` may only be called in response to a user gesture.`
       */
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true,
        },
        (tabs) => {
          if (tabs.length === 0) {
            return;
          }

          const currentTab = tabs.at(0);
          chrome.sidePanel
            .open({ tabId: currentTab.id, windowId: currentTab.windowId })
            .catch((error) => console.error(error));
        },
      );
      break;
    default:
      throw new RangeError(`The given "command" is not supported: ${command}`);
  }
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (isSupportedContextMenu(info.menuItemId) === false) {
    return;
  }

  await chrome.storage.session.set({
    [`${info.menuItemId}:${tab.id}`]: info?.selectionText || info?.linkUrl,
  });
});

chrome.tabs.onRemoved.addListener((tabId, _) => {
  const sessionFieldIds = getJobFieldSessionIds(tabId);
  chrome.storage.session.remove(sessionFieldIds);
});
