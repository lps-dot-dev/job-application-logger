<script setup>
import { computed } from "vue";
import draggable from "vuedraggable";

const emit = defineEmits(["update"]);
const { fields = [] } = defineProps(["fields"]);
const mutableFields = computed({
  get() {
    return fields;
  },
  set(newFields) {
    emit("update", newFields);
  },
});
</script>

<template>
  <form id="spreadsheet-fields">
    <draggable v-model="mutableFields" group="people" item-key="id">
      <template #item="{ element }">
        <fieldset class="grabbable" role="group">
          <input
            :name="`label:${element?.id}`"
            type="text"
            placeholder="Field Label"
            :value="element?.label"
            disabled
          />
          <input
            v-if="element?.value"
            :name="`value:${element?.id}`"
            type="text"
            :value="element?.value"
            disabled
          />
          <input class="secondary" type="button" value="Remove" />
        </fieldset>
      </template>
    </draggable>
  </form>
</template>

<style scoped>
.grabbable {
  cursor: move; /* fallback if grab cursor is unsupported */
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}
</style>
