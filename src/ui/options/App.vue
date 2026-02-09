<script setup>
import { ref } from "vue";
import FieldAdder from "./components/field-adder/index.vue";
import FieldsPreview from "./components/fields-preview.vue";
import SpreadsheetFields from "./components/spreadsheet-fields.vue";

const exportFields = ref([
  { id: 0, label: "Job Title" },
  { id: 1, label: "Company Name" },
]);

const updateFields = (newFields) => {
  exportFields.value = newFields;
};
</script>

<template>
  <main class="container">
    <section>
      <h1>Settings</h1>
      <hr></hr>
      <hgroup>
        <h3>Field Settings</h3>
        <p>Dictate which fields are included and their order when logging a job application!</p>
      </hgroup>
      <article>
        <hgroup>
          <h4>Manage</h4>
          <p>You can add new or remove fields here! The fields themselves are draggable if you wish to reorder them!</p>
        </hgroup>
        <spreadsheet-fields :fields="exportFields" @update="updateFields" />
        <field-adder :fields="exportFields" />
        <h4>Preview</h4>
        <fields-preview :fields="exportFields" />
      </article>
    </section>
  </main>
</template>

<style scoped></style>
