<template>
  <div class="newarrivals">
    <div class="newarrivals__all center">
      <p>New Arrivals</p>
      <nav class="newarrivals__links">
        <ul>
          <li><router-link to="/" class="newarrivals_link"> Home </router-link><span>&nbsp;/</span></li>
          <li><router-link to="/products" class="newarrivals_link"> &nbsp; Men</router-link><span>&nbsp;/</span></li>
          <li><router-link to="/newarrivals" class="newarrivals_link__active"> &nbsp; New Arrivals</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newArria',
};
</script>

<style lang="sass">
$colorAccentSite: #f16d7f
.newarrivals
  max-width: 1665px
  height: 148px
  margin: 0 auto
  background-color: #edc6ce


.newarrivals__all
  display: flex
  height: inherit
  justify-content: space-between
  align-items: center


.newarrivals__all > p
  color: $colorAccentSite
  font-size: 24px
  font-weight: 600
  line-height: 20px
  text-transform: uppercase


.newarrivals__links > ul
  display: flex
  list-style: none


.newarrivals_link
  font-size: 17px
  font-weight: 700
  line-height: 20px
  text-transform: uppercase
  color: #636363


.newarrivals_link:hover
  color: $colorAccentSite


.newarrivals_link__active
  color: $colorAccentSite
  font-size: 17px
  font-weight: 700
  line-height: 20px
  text-transform: uppercase
  &:hover
    color: #6f6e6e
</style>
