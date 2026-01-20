import { isCommandSupported, SUPPORTED_COMMANDS } from "./src/commands.js";

// This will prevent the side panel from opening when clicking the action toolbar icon
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: false })
  .catch((error) => console.error(error));

chrome.commands.onCommand.addListener((command) => {
  if (isCommandSupported(command) === false) {
    return;
  }

  switch (command) {
    case SUPPORTED_COMMANDS.OPEN_SIDE_PANEL:
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
