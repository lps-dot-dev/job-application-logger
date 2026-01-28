import { onMounted, onUnmounted, ref } from "vue";

function openSidePanel() {
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
}

function closeSidePanel() {
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
        .close({ tabId: currentTab.id, windowId: currentTab.windowId })
        .catch((error) => console.error(error));
    },
  );
}

export function useSidePanel() {
  const isVisible = ref(false);
  const isNowVisible = () => {
    isVisible.value = true;
  };
  const isNowHidden = () => {
    isVisible.value = false;
  };

  onMounted(() => {
    chrome.sidePanel.onOpened.addListener(isNowVisible);
    chrome.sidePanel.onClosed.addListener(isNowHidden);
  });

  onUnmounted(() => {
    chrome.sidePanel.onOpened.removeListener(isNowVisible);
    chrome.sidePanel.onClosed.removeListener(isNowHidden);
  });

  return { isVisible, openSidePanel, closeSidePanel };
}
