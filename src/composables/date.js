import { DateTime } from "luxon";
import { onMounted, onUnmounted, ref } from "vue";

export function useCurrentDate() {
  const now = ref(DateTime.now());
  let intervalTimerId = null;

  onMounted(() => {
    intervalTimerId = setInterval(() => {
      now.value = DateTime.now();
    }, 1000);
  });

  onUnmounted(() => {
    if (intervalTimerId) {
      clearInterval(intervalTimerId);
    }
  });

  return { now };
}
