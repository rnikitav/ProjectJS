<template>
  <div class="product-main-left">
    <details>
      <summary>Category</summary>
      <div class="product__details__alllist">
        <ul>
          <li><a href="#" class="product__downdrop__link">Accessories</a></li>
          <li><a href="#" class="product__downdrop__link">Bags</a></li>
          <li><a href="#" class="product__downdrop__link">Denim</a></li>
          <li><a href="#" class="product__downdrop__link">Hoodies &amp; Sweatshirts</a></li>
          <li><a href="#" class="product__downdrop__link">Jackets &amp; Coats</a></li>
          <li><a href="#" class="product__downdrop__link">Pants</a></li>
          <li><a href="#" class="product__downdrop__link">Polos</a></li>
          <li><a href="#" class="product__downdrop__link">Shirts</a></li>
          <li><a href="#" class="product__downdrop__link">Shoes</a></li>
          <li><a href="#" class="product__downdrop__link">Shorts</a></li>
          <li><a href="#" class="product__downdrop__link">Sweaters &amp; Knits</a></li>
          <li><a href="#" class="product__downdrop__link">T-Shirts</a></li>
          <li><a href="#" class="product__downdrop__link">Tanks</a></li>
        </ul>
      </div>
    </details>
    <details>
      <summary>Category</summary>
      <div class="product__details__alllist">
        <ul>
          <li><a href="#" class="product__downdrop__link">Accessories</a></li>
          <li><a href="#" class="product__downdrop__link">Bags</a></li>
          <li><a href="#" class="product__downdrop__link">Denim</a></li>
          <li><a href="#" class="product__downdrop__link">Hoodies &amp; Sweatshirts</a></li>
          <li><a href="#" class="product__downdrop__link">Jackets &amp; Coats</a></li>
          <li><a href="#" class="product__downdrop__link">Pants</a></li>
          <li><a href="#" class="product__downdrop__link">Polos</a></li>
          <li><a href="#" class="product__downdrop__link">Shirts</a></li>
          <li><a href="#" class="product__downdrop__link">Shoes</a></li>
          <li><a href="#" class="product__downdrop__link">Shorts</a></li>
          <li><a href="#" class="product__downdrop__link">Sweaters &amp; Knits</a></li>
          <li><a href="#" class="product__downdrop__link">T-Shirts</a></li>
          <li><a href="#" class="product__downdrop__link">Tanks</a></li>
        </ul>
      </div>
    </details>
    <details>
      <summary>Category</summary>
      <div class="product__details__alllist">
        <ul>
          <li><a href="#" class="product__downdrop__link">Accessories</a></li>
          <li><a href="#" class="product__downdrop__link">Bags</a></li>
          <li><a href="#" class="product__downdrop__link">Denim</a></li>
          <li><a href="#" class="product__downdrop__link">Hoodies &amp; Sweatshirts</a></li>
          <li><a href="#" class="product__downdrop__link">Jackets &amp; Coats</a></li>
          <li><a href="#" class="product__downdrop__link">Pants</a></li>
          <li><a href="#" class="product__downdrop__link">Polos</a></li>
          <li><a href="#" class="product__downdrop__link">Shirts</a></li>
          <li><a href="#" class="product__downdrop__link">Shoes</a></li>
          <li><a href="#" class="product__downdrop__link">Shorts</a></li>
          <li><a href="#" class="product__downdrop__link">Sweaters &amp; Knits</a></li>
          <li><a href="#" class="product__downdrop__link">T-Shirts</a></li>
          <li><a href="#" class="product__downdrop__link">Tanks</a></li>
        </ul>
      </div>
    </details>
  </div>
</template>

<script>
export default {
  name: 'prodLeft',
};
</script>

<style lang="sass">
.product-main-left summary
  outline: none
  height: 35px
  display: flex
  align-items: center
  font-size: 14px
  font-weight: 700
  line-height: 20px
  padding-left: 11px
  margin-bottom: 18px
  text-transform: uppercase
  border-left: 3px solid #ef5b70
  border-bottom: 1px solid #ebebeb


.product-main-left summary::-webkit-details-marker
  display: none


.product-main-left summary::after
  content: '\25BC'
  padding-left: 137px
  color: #000000
  font-size: 12px


.product__details__alllist > ul
  list-style: none
  padding-left: 22px


.product-main-left > details[open] > summary::after
  content: '\25B2'
  padding-left: 137px
  color: #ef5b70
  font-size: 12px


.product-main-left > details[open] > summary
  color: #ef5b70


.product__details__alllist
  margin-bottom: 41px


.product__downdrop__link
  color: #6f6e6e
  font-size: 14px
  font-weight: 400
  line-height: 38px


.product__downdrop__link:hover
  color: #ef5b70
</style>
