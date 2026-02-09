<script setup>
import { SUPPORTED_FIELD_NAMES } from "@/utils/fields";
import { computed, ref, watch } from "vue";
import AdditionalConfig from "./additional-config.vue";
import HelperInfo from "./helper-info.vue";

const { fields } = defineProps({
  fields: {
    type: Array,
    default() {
      return [];
    },
  },
});

const availableFieldLabels = computed(() => {
  const fieldLabels = new Set(fields.map((field) => field?.label));
  return SUPPORTED_FIELD_NAMES.difference(fieldLabels);
});

const fieldLabel = ref("");
const fieldName = ref("");
const fieldValue = ref("");

watch(fieldLabel, (newFieldLabel, oldFieldLabel) => {
  if (newFieldLabel !== oldFieldLabel) {
    fieldName.value = "";
    fieldValue.value = "";
  }
});
</script>

<template>
  <div role="group">
    <select
      name="available-fields"
      aria-label="Available Fields"
      required
      v-model="fieldLabel"
    >
      <option disabled value="">Available Fields</option>
      <option
        v-for="availableFieldLabel in availableFieldLabels"
        :value="availableFieldLabel"
      >
        {{ availableFieldLabel }}
      </option>
    </select>
    <additional-config
      :field-label="fieldLabel"
      :field-name="fieldName"
      :field-value="fieldValue"
    />
    <button>Add</button>
  </div>
  <helper-info :field-label="fieldLabel" />
</template>

<style scoped>
.pointable {
  cursor: pointer;
}
</style>
