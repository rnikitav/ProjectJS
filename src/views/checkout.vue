<template>
  <div>
    <newArria></newArria>
    <CheckOutForm></CheckOutForm>
  </div>
</template>

<script>
import newArria from '../components/newArria.vue';
import CheckOutForm from '../components/checkout/CheckOut.vue';

export default {
  name: 'checkout',
  components: {
    newArria,
    CheckOutForm,
  },
};
</script>

<style scoped>

</style>
