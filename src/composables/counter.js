import { onMounted, ref, watch } from "vue";

const JOB_COUNTER_STORE_KEY = "job_applications_logged";

export function useJobApplicationCounter() {
  const counter = ref(0);
  const isReady = ref(false);

  watch(counter, (newValue) => {
    if (isReady.value === false) {
      return;
    }

    chrome.storage.sync.set({ [JOB_COUNTER_STORE_KEY]: newValue });
  });

  onMounted(() => {
    chrome.storage.sync.get(JOB_COUNTER_STORE_KEY, (result) => {
      if (Object.hasOwn(result, JOB_COUNTER_STORE_KEY)) {
        counter.value = result[JOB_COUNTER_STORE_KEY];
      }
      isReady.value = true;
    });
  });

  return { counter, isReady };
}
