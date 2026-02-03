import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
  manifest_version: 3,
  name: "Job Application Logger",
  version: "1.0",
  description:
    "For those that prefer a spreadsheet to keep track of their job search, this extension will automatically log job application submissions!",
  action: {
    default_title: "Job Application Logger",
    default_popup: "src/ui/popup/index.html",
  },
  background: {
    service_worker: "src/background/service-worker.js",
    type: "module",
  },
  options_ui: {
    page: "src/ui/options/index.html",
    open_in_tab: true,
  },
  permissions: ["contextMenus", "sidePanel", "storage", "tabs"],
  side_panel: {
    default_path: "src/ui/side-panel/index.html",
  },
  commands: {
    log_job_information: {
      suggested_key: {
        default: "Alt+Shift+J",
        mac: "Alt+Shift+J",
      },
      description: "Log Marked Job Information",
    },
    open_side_panel: {
      suggested_key: {
        default: "Ctrl+B",
        mac: "Command+B",
      },
      description: "Toggle the extension side panel",
    },
  },
  icons: {
    16: "icons/icon16.png",
    19: "icons/icon19.png",
    32: "icons/icon32.png",
    38: "icons/icon38.png",
    48: "icons/icon48.png",
    128: "icons/icon128.png",
  },
});
