<script setup>
import { ref } from "vue";
import fieldAdder from "./components/field-adder.vue";
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
        <h3>Included Fields</h3>
        <p>Dictate which fields are included and their order when logging a job application!</p>
      </hgroup>
      <article>
        <hgroup>
          <h4>Manage Fields</h4>
          <p>You can remove or reorder fields here!</p>
        </hgroup>
        <spreadsheet-fields :fields="exportFields" @update="updateFields" />
        <field-adder />
        <h4>Fields Preview</h4>
        <fields-preview :fields="exportFields" />
      </article>
    </section>
  </main>
</template>

<style scoped></style>
