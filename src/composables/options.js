function openOptionsPage() {
  chrome.runtime.openOptionsPage().catch((error) => {
    console.error(error);
  });
}

export function useOptionsPage() {
  return { openOptionsPage };
}
