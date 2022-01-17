<template>
  <div class="accordion mt-4" role="tablist">
      <b-card no-body class="mb-1" v-for="faq in list" :key="faq.id">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle="faq.id" variant="primary"
            >{{ faq.question }}</b-button
          >
        </b-card-header>
        <b-collapse
          :id="faq.id"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>{{ faq.answer }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
  }

}
</script>

<style>

</style>