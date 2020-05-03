<template>
  <section class="pictures_promo center">
    <div class="picture__left">
      <div>
        <a href="#">
          <div class="picture__square picture__margin-bottom">
            <img src="../../assets/img/Layer_30.jpg" alt="promo-box-item">
            <div class="promo__text-box">
              <p class="promo__text">hOT dEAL</p>
              <p class="promo__text_bottom color-accent">FOR MEN</p>
            </div>
          </div>
        </a>
      </div>
      <div>
        <a href="#">
          <div class="promo__box_rectangular">
            <img src="../../assets/img/Layer_37.jpg" alt="promo-box-item">
            <div class="promo__text-box">
              <p class="promo__text">LUXIROUS &amp; trendy</p>
              <p class="promo__text_bottom color-accent">ACCESORIES</p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="picture__right">
      <div>
        <a href="#">
          <div class="promo__box_rectangular picture__margin-bottom">
            <img src="../../assets/img/Layer_32.jpg" alt="promo-box-item">
            <div class="promo__text-box">
              <p class="promo__text">30% offer</p>
              <p class="promo__text_bottom color-accent">women</p>
            </div>
          </div>
        </a>
      </div>
      <div>
        <a href="#">
          <div class="picture__square">
            <img src="../../assets/img/Layer_31.jpg" alt="promo-box-item">
            <div class="promo__text-box">
              <p class="promo__text">new arrivals</p>
              <p class="promo__text_bottom color-accent">FOR kids</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'picturesPromo',
};
</script>

<style lang="sass">
.pictures_promo
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  margin: 99px 0
  @at-root
    .picture__square
      width: 560px
      height: 542px
      position: relative
      & img
        transition: all 1s
        width: 560px
        height: 542px
    .picture__margin-bottom
      margin-bottom: 20px
    .promo__text-box
      position: absolute
      animation: myMove1 5s linear 0s 1 normal
      background-color: #ffffff
      top: 25px
      left: 0
      padding: 20px 15px
      text-transform: uppercase
    .promo__box_rectangular
      width: 560px
      height: 261px
      position: relative
      & img
        transition: all 1s
    .promo__text
      color: #222222
      font-size: 18px
      font-weight: 900
      margin: 0
    .promo__text_bottom
      font-size: 30px
      font-weight: 900
      margin: 0
.picture__left > div:first-of-type
  width: 560px
  height: 542px
  overflow: hidden
  margin-bottom: 20px
.picture__left > div:nth-of-type(2)
  width: 560px
  height: 261px
  overflow: hidden
.picture__right > div:first-of-type
  width: 560px
  height: 261px
  overflow: hidden
  margin-bottom: 20px
.picture__right > div:nth-of-type(2)
  width: 560px
  height: 542px
  overflow: hidden
.picture__left a:hover img
  transform: scale(1.05)
.picture__right a:hover img
  transform: scale(1.05)
</style>
