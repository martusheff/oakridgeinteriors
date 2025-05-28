<template>
  <div>
    <button @click="toggle">
        Toggle
    </button>
    <p>{{ status == false ? "Off" : "On" }}</p>
  </div>
</template>

<script lang="ts" setup>
  const status = useState('toggleStatus', () => false)

  const toggle = () => {
    status.value = !status.value
  }
</script>

<style>

</style>