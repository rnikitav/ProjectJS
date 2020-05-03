<template>
  <div class="error-block" v-if="isVisible">
    <p class="error-msg">
      {{ getErrorTextForVue }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'error',
  computed: {
    ...mapGetters(['getErrorTextForVue']),
    isVisible() {
      return this.getErrorTextForVue !== '';
    },
  },
};

</script>

<style lang="sass">
.error-msg
  padding: 30px 20px
  background-color: red
  color: white
  position: relative
.error-block
  background-color: rgba(0,0,0, .5)
  justify-content: center
  display: flex
  position: absolute
  top: 0
  width: 100%
  height: 100%
  align-items: center
.close-btn
  font-size: 1.5em
  top: -40px
  position: absolute
  right: 0
  background: none
  border: none
  color: white
  font-weight: bold
</style>
