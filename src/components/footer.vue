<template>
  <footer class="footer">
    <div class="footer_content center">
      <p>&copy; 2019 Brand All Rights Reserved.</p>
      <ul>
        <li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
        <li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li>
        <li><a href="https://www.invisionapp.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
        <li><a href="https://www.pinterest.ru/" target="_blank"><i class="fab fa-pinterest-p"></i></a></li>
        <li><a href="https://www.google.ru/" target="_blank"><i class="fab fa-google-plus-g"></i></a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footerVue',
};
</script>

<style lang="sass">
$colorAccentSite: #f16d7f
.footer
  height: 89px
  margin: 0 auto
  background-color: #e6e6e6
  &_content
    display: flex
    justify-content: space-between
    align-items: center
    height: 89px
  &_content > p
    color: #7a7a7a
    font-size: 16px
    font-weight: 400
    letter-spacing: 0.4px
  &_content > ul
    display: flex
    list-style: none
    align-items: center
  &_content a
    display: block
    width: 32px
    height: 32px
    background-color: #ffffff
    color: #b2b2b2
    font-size: 16px
    margin-right: 8px
    text-align: center
    line-height: 32px
  &_content a:hover
    background-color: $colorAccentSite
    color: #ffffff
  &_content a:focus
    background-color: #ffffff
</style>
