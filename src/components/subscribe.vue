<template>
  <section class="subscribe__main">
    <div class="subscribe__main__all center">
      <component :is="currentComponent">
        <div class="pagination__main">
          <a class="block__pagination"
             v-bind:class="{block__active: index === activeIndex}"
             v-for="(tab, index) in tabs"
             :key="tab" @click="currentTab = tab, activeIndex = index">
          </a>
        </div>
      </component>
      <div class="subscribe__main__right">
        <h3>Subscribe</h3>
        <p>for OUR NEWLETTER AND PROMOTION</p>
        <div class="form__subscribe">
          <form>
            <label for="mail"></label>
            <input id="mail" type="email" name="textfield" placeholder="Enter Your Email" required
                   class="subscribe__input">
            <button class="button button__subscribe">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import subscribeOne from './elem/subscribeComp/subscribeOne.vue';
import subscribeTwo from './elem/subscribeComp/subscribeTwo.vue';
import subscribeThree from './elem/subscribeComp/subscribeThree.vue';

export default {
  name: 'subscribe',
  components: {
    subscribeOne,
    subscribeTwo,
    subscribeThree,
  },
  data() {
    return {
      tabs: ['One', 'Two', 'Three'],
      currentTab: 'Two',
      activeIndex: 1,
    };
  },
  methods: {
    // showAndActive(tab, index) {
    //   console.log(tab);
    //   console.log(index);
    //   this.computed.currentComponent(tab);
    //   // this.computed.currentActiveIndex(index);
    // },
  },
  computed: {
    currentComponent() {
      return `subscribe${this.currentTab}`;
    },
  },
};
</script>

<style lang="sass">
$colorAccentSite: #f16d7f
.subscribe__main
  height: 438px
  background: url(../assets/img/Rectangle_9_copy.png) no-repeat center, url(../assets/img/Layer_41.png) no-repeat center
  &__all
    display: flex
  &__left
    display: flex
    padding-top: 111px
    width: 603px
  &__left img
    height: 83px
  &__content
    max-width: 432px
    margin-left: 28px
  &__content p:first-child
    color: #222224
    font-size: 16px
    font-style: italic
    line-height: 26px
    letter-spacing: 0.4px
    padding-bottom: 13px
  &__content p:nth-child(2)
    color: $colorAccentSite
    font-size: 16px
    font-weight: 800
    letter-spacing: 0.4px
  &__content p:nth-child(3)
    color: #222224
    font-size: 13px
    font-weight: 300
    letter-spacing: 0.3px
  &__right
    text-align: center
    padding: 138px 0 0 92px
  &__right > h3
    color: #222224
    font-size: 24px
    letter-spacing: 0.6px
    line-height: 37px
    text-transform: uppercase
  &__right > p
    letter-spacing: 0.35px
    line-height: 24px
    text-transform: uppercase
    font-size: 14px
.pagination__main
  display: flex
  width: 140px
  padding-top: 41px
  justify-content: space-between
  @at-root
    .block__pagination
      display: block
      width: 38px
      height: 5px
      background-color: #d6d6d6
    .block__pagination:hover
      background-color: $colorAccentSite
.block__active
  background-color: $colorAccentSite
.button__subscribe
  border-radius: 0 23px 23px 0
  font-size: 14px!important
  margin-left: 0!important
  &:hover
    background-color: #ffffff
    color: $colorAccentSite
  @at-root
    .subscribe__input
      width: 282px
      height: 46px
      border-radius: 23px 0 0 23px
      background-color: #e1e1e1
      padding: 0 28px
      border-width: 0
      color: #222224
      font-size: 14px
      letter-spacing: 0.35px
    .form__subscribe
      margin-top: 35px
      & > form
        display: flex
      & button
        border-width: inherit
</style>
