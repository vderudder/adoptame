<template>
  <div>
    <b-container class="my-4">
      <h1>Preguntas frecuentes</h1>
      <FAQsAccordion />       
    </b-container>
  </div>
</template>

<script>
import FAQsAccordion from '../components/FAQs Accordion.vue'

export default {
  name: 'FAQs',
  components: {
    FAQsAccordion
  }
}
</script>

<style>

</style>
