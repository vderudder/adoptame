<template>
  <div>
    <b-container class="my-4">
      <h1>Preguntas frecuentes</h1>
      <FAQsAccordion :list="faqsList"/>       
    </b-container>
  </div>
</template>

<script>
import { FaqsFacade } from '../services/faqs/faqs.facade'
import FAQsAccordion from '../components/FAQsAccordion.vue'

export default {
  name: 'FAQs',
  components: {
    FAQsAccordion
  },
  data() {
    return {
      faqsList: []
    }
  },
  async created() {
    this.faqsList = await FaqsFacade.getList()
  }
}
</script>

<style>

</style>
