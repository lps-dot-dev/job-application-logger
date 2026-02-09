<script setup>
import { useCurrentDate } from "@/composables/date";
import { CUSTOM_FIELD_NAME, DATE_TIME_FIELD_NAME } from "@/utils/fields";
import { DateTime } from "luxon";

const { fieldLabel } = defineProps({
  fieldLabel: { type: String, required: true },
});
const { now } = useCurrentDate();
const fieldName = defineModel("fieldName", { required: true });
const fieldValue = defineModel("fieldValue", { required: true });

const dateTimeOptions = {
  DATETIME_SHORT: "Short Date & Time",
  DATETIME_MED: "Abbreviated Date & Time",
  DATETIME_SHORT_WITH_SECONDS: "Short Date & Time with Seconds",
  DATETIME_MED_WITH_SECONDS: "Abbreviated Date & Time with Seconds",
  DATE_SHORT: "Short Date",
  DATE_MED: "Abbreviated Date",
  TIME_SIMPLE: "Time",
  TIME_WITH_SECONDS: "Time with Seconds",
  TIME_24_SIMPLE: "	24-hour Time",
  TIME_24_WITH_SECONDS: "24-hour Time with Seconds",
};
</script>

<template>
  <template v-if="fieldLabel === CUSTOM_FIELD_NAME">
    <input
      name="field-name"
      type="text"
      placeholder="Field Name"
      v-model="fieldName"
    />
    <input
      name="field-value"
      type="text"
      placeholder="Field Value"
      aria-describedby="field-value-helper"
      v-model="fieldValue"
    />
  </template>
  <select
    v-else-if="fieldLabel === DATE_TIME_FIELD_NAME"
    name="date-time-format"
    aria-label="Select your desired format..."
    required
    v-model="fieldValue"
  >
    <option selected disabled value="">Select your desired format...</option>
    <option
      v-for="(optionLabel, dateTimeFormat) in dateTimeOptions"
      :value="dateTimeFormat"
    >
      {{ optionLabel }} ({{ now.toLocaleString(DateTime[dateTimeFormat]) }})
    </option>
  </select>
</template>
