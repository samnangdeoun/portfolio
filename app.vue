<template>
  <div>
    <Button @click="alert('clicked')">Click me</Button>
  </div>
</template>

<script setup>

const alert = (message) => {
  console.log(message, ' Click me !')
}
</script>