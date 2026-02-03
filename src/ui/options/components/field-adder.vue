<script setup>
const { fields = [] } = defineProps(["fields"]);
</script>

<template>
  <div role="group">
    <details class="dropdown">
      <summary>Available Fields</summary>
      <ul>
        <li><a href="#">Date</a></li>
        <li><a href="#">Date/Time</a></li>
        <li><a href="#">Time</a></li>
        <li><a href="#">Custom</a></li>
      </ul>
    </details>
    <button>Add</button>
  </div>
</template>
