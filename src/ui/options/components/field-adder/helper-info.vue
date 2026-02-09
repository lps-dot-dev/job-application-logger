<script setup>
import {
  CUSTOM_FIELD_NAME,
  DATE_TIME_FIELD_NAME,
  JOB_TYPE_FIELD_NAME,
} from "@/utils/fields";

const { fieldLabel } = defineProps({
  fieldLabel: { type: String, required: true },
});
</script>

<template>
  <small v-if="fieldLabel === CUSTOM_FIELD_NAME" id="field-value-helper">
    Custom fields use static values. Useful for columns that need to be set to a
    default value, like defaulting a new job's application status to "Applied."
  </small>
  <small
    v-else-if="fieldLabel === DATE_TIME_FIELD_NAME"
    id="field-value-helper"
  >
    This timestamp will be generated at the moment when a new job application is
    logged.
  </small>
  <small v-else-if="fieldLabel === JOB_TYPE_FIELD_NAME" id="field-value-helper">
    Example Values: "In Person" | "Remote" | "Hybrid"
  </small>
</template>
