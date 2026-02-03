<script setup>
const { fields = [] } = defineProps(["fields"]);
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="field in fields" scope="col">
          {{ field?.label }}
        </th>
      </tr>
    </thead>
  </table>
</template>
