<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings text-center">
    <h1 class="text-2xl font-light text-[#DFF6FF]">{{ msg }}</h1>
    <h3>
      <span class="text-[#DFF6FF] text-base">Mobile: +91-8142546693 | </span>
      <span class="text-[#DFF6FF] text-base">Mail: hello@santy.in</span>
    </h3>
  </div>
</template>

<style scoped>

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
}
</style>
