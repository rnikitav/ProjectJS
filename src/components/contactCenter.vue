<template>
  <div class="contact center">
    <div class="contact__left">
      <div class="rotate-scale-down">
        <router-link to="/" class="logo"><img src="../assets/img/logo.png" alt="logo" class="logo__img">BRAN<span
          class="logo__lastlet">D</span></router-link>
      </div>

      <p id="p_padding">Objectively transition extensive data rather than cross functional solutions.
        Monotonectally
        syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded
        array of
        processes and cross-unit partnerships.</p>
      <p>Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize superior
        initiatives for wireless technologies. Dynamically optimize.</p>
    </div>
    <nav>
      <div class="contact_right">

        <div class="contact_links__all">
          <a href="#">COMPANY</a>
          <ul>
            <li><router-link to="/" class="contact__listlink">Home</router-link></li>
            <li><router-link to="/newarrivals" class="contact__listlink">Shop</router-link></li>
            <li><a href="#" class="contact__listlink">About</a></li>
            <li><a href="#" class="contact__listlink">How It Works</a></li>
            <li><a href="#" class="contact__listlink">Contact</a></li>
          </ul>
        </div>
        <div class="contact_links__all">
          <a href="#">INFORMATION</a>
          <ul>
            <li><a href="#" class="contact__listlink">Tearms &amp; Condition</a></li>
            <li><a href="#" class="contact__listlink">Privacy Policy</a></li>
            <li><a href="#" class="contact__listlink">How to Buy</a></li>
            <li><a href="#" class="contact__listlink">How to Sell</a></li>
            <li><a href="#" class="contact__listlink">Promotion Shop</a></li>
          </ul>
        </div>
        <div class="contact_links__all">
          <a href="#">SHOP CATEGORY</a>
          <ul>
            <li><router-link to="/products" class="contact__listlink">Man</router-link></li>
            <li><a href="#" class="contact__listlink">Women</a></li>
            <li><a href="#" class="contact__listlink">Child</a></li>
            <li><a href="#" class="contact__listlink">Apparel</a></li>
            <li><a href="#" class="contact__listlink">Brows All</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'contactCenter',
};
</script>

<style lang="sass">
$colorAccentSite: #f16d7f
.contact
  display: flex
  margin: 84px 0
  &__left
    width: 427px
    & p
      color: #898989
      font-size: 14px
      font-weight: 300
      line-height: 24px
      letter-spacing: 0.35px
  &_right
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    width: 608px
    padding-top: 39px
    margin-left: 100px
  &_right ul
    list-style: none
  &_links__all > ul
    height: 179px
    display: flex
    flex-direction: column
    justify-content: space-between
    margin-top: 26px
  &_links__all > a
    color: $colorAccentSite
    font-size: 18px
    font-weight: 700
    line-height: 26px
    text-transform: uppercase
    letter-spacing: 0.45px
  &_links__all > a:hover
    color: #7a7a7a
  &__listlink
    color: #898989
    font-size: 16px
    font-weight: 400
    letter-spacing: 0.4px
    line-height: 42px
  &__listlink:hover
    color: $colorAccentSite
#p_padding
  padding-bottom: 35px
</style>
