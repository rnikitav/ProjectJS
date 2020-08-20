<template>
  <div>
    <div class="drop__flex">
      <h3 class="drop__h3">WOMEN</h3>
      <ul class="drop__ul">
        <li><a href="#" class="drop__link">Dresses</a></li>
        <li><a href="#" class="drop__link">Tops</a></li>
        <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
        <li><a href="#" class="drop__link">Jackets/Coats</a></li>
        <li><a href="#" class="drop__link">Blazers</a></li>
        <li><a href="#" class="drop__link">Denim</a></li>
        <li><a href="#" class="drop__link">Leggings/Pants</a></li>
        <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
        <li><a href="#" class="drop__link">Accessories</a></li>
      </ul>
    </div>
    <div class="drop__flex">
      <h3 class="drop__h3">WOMEN</h3>
      <ul class="drop__ul">
        <li><a href="#" class="drop__link">Dresses</a></li>
        <li><a href="#" class="drop__link">Tops</a></li>
        <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
        <li><a href="#" class="drop__link">Jackets/Coats</a></li>
      </ul>
      <h3 class="drop__h3">WOMEN</h3>
      <ul class="drop__ul">
        <li><a href="#" class="drop__link">Dresses</a></li>
        <li><a href="#" class="drop__link">Tops</a></li>
        <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
      </ul>
    </div>
    <div class="drop__flex">
      <h3 class="drop__h3">WOMEN</h3>
      <ul class="drop__ul">
        <li><a href="#" class="drop__link">Dresses</a></li>
        <li><a href="#" class="drop__link">Tops</a></li>
        <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
        <li><a href="#" class="drop__link">Jackets/Coats</a></li>
      </ul>
      <img src="../../assets/img/Layer_4e2.jpg" alt="photo">
    </div>
  </div>
</template>

<script>
export default {
  name: 'navDrop',
};
</script>

<style lang="sass">
$colorAccentSite: #f16d7f
.menu
  list-style-type: none
  display: flex
  justify-content: center
.menu__link
  font-size: 14px
  font-weight: bold
  color: #222222
  min-height: 51px
  text-align: left
  text-transform: uppercase
  padding: 20px
  padding-bottom: 0
  display: block
  &__active
    border-bottom: 3px solid #ef5b70
    height: 51px
  &:hover
    color: $colorAccentSite
    border-bottom: 3px solid #ef5b70
.nav
  height: 51px
  background-color: #fff
</style>
