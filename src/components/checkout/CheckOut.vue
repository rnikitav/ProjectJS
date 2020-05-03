<template>
  <section class="checkout__center center">
    <details>
      <summary><span>01.</span>Shipping Adress</summary>
      <div class="checkout__center__two">
        <div class="checkout__center__left">
          <h3>Check as a guest or register</h3>
          <p>Register with us for future convenience</p>
          <form action="checout" method="post">
            <div>
              <input type="radio" id="checkout1" checked name="form">
              <label for="checkout">checkout as guest</label>
            </div>
            <div>
              <input type="radio" id="register1" name="form">
              <label for="register">register</label>
            </div>

          </form>
          <h3>register and save time!</h3>
          <p>Register with us for future convenience</p>
          <p><i class="fas fa-angle-double-right"></i>Fast and easy checkout</p>
          <p><i class="fas fa-angle-double-right"></i>Easy access to your order history and status</p>
          <a href="#">Continue</a>
        </div>
        <div class="checkout__center__right">
          <h3>Already registed?</h3>
          <p>Please log in below</p>
          <h4>EMAIL ADDRESS<span>*</span></h4>
          <form action="regis">
            <input type="email" required>
            <h4>PASSWORD<span>*</span></h4>
            <input type="password" required>
          </form>
          <p><span>*</span> <span class="requie">Required Fileds</span></p>
          <a href="#">Log in</a>
          <a href="#">Forgot Password ?</a>
        </div>
      </div>
    </details>
    <details>
      <summary><span>02.</span>BILLING INFORMATION</summary>
      <div class="checkout__center__two">
        <div class="checkout__center__left">
          <h3>Check as a guest or register</h3>
          <p>Register with us for future convenience</p>
          <form action="checout" method="post">
            <div>
              <input type="radio" id="checkout2" checked name="form">
              <label for="checkout">checkout as guest</label>
            </div>
            <div>
              <input type="radio" id="register2" name="form">
              <label for="register">register</label>
            </div>

          </form>
          <h3>register and save time!</h3>
          <p>Register with us for future convenience</p>
          <p><i class="fas fa-angle-double-right"></i>Fast and easy checkout</p>
          <p><i class="fas fa-angle-double-right"></i>Easy access to your order history and status</p>
          <a href="#">Continue</a>
        </div>
        <div class="checkout__center__right">
          <h3>Already registed?</h3>
          <p>Please log in below</p>
          <h4>EMAIL ADDRESS<span>*</span></h4>
          <form action="regis">
            <input type="email" required>
            <h4>PASSWORD<span>*</span></h4>
            <input type="password" required>
          </form>
          <p><span>*</span> <span class="requie">Required Fileds</span></p>
          <a href="#">Log in</a>
          <a href="#">Forgot Password ?</a>
        </div>
      </div>
    </details>
    <details>
      <summary><span>03.</span>SHIPPING INFORMATIONS</summary>
      <div class="checkout__center__two">
        <div class="checkout__center__left">
          <h3>Check as a guest or register</h3>
          <p>Register with us for future convenience</p>
          <form action="checout" method="post">
            <div>
              <input type="radio" id="checkout3" checked name="form">
              <label for="checkout">checkout as guest</label>
            </div>
            <div>
              <input type="radio" id="register3" name="form">
              <label for="register">register</label>
            </div>

          </form>
          <h3>register and save time!</h3>
          <p>Register with us for future convenience</p>
          <p><i class="fas fa-angle-double-right"></i>Fast and easy checkout</p>
          <p><i class="fas fa-angle-double-right"></i>Easy access to your order history and status</p>
          <a href="#">Continue</a>
        </div>
        <div class="checkout__center__right">
          <h3>Already registed?</h3>
          <p>Please log in below</p>
          <h4>EMAIL ADDRESS<span>*</span></h4>
          <form action="regis">
            <input type="email" required>
            <h4>PASSWORD<span>*</span></h4>
            <input type="password" required>
          </form>
          <p><span>*</span> <span class="requie">Required Fileds</span> </p>
          <a href="#">Log in</a>
          <a href="#">Forgot Password ?</a>
        </div>
      </div>
    </details>
    <details>
      <summary><span>04.</span>SHIPPING METHOD</summary>
      <div class="checkout__center__two">
        <div class="checkout__center__left">
          <h3>Check as a guest or register</h3>
          <p>Register with us for future convenience</p>
          <form action="checout" method="post">
            <div>
              <input type="radio" id="checkout" checked name="form">
              <label for="checkout">checkout as guest</label>
            </div>
            <div>
              <input type="radio" id="register" name="form">
              <label for="register">register</label>
            </div>

          </form>
          <h3>register and save time!</h3>
          <p>Register with us for future convenience</p>
          <p><i class="fas fa-angle-double-right"></i>Fast and easy checkout</p>
          <p><i class="fas fa-angle-double-right"></i>Easy access to your order history and status</p>
          <a href="#">Continue</a>
        </div>
        <div class="checkout__center__right">
          <h3>Already registed?</h3>
          <p>Please log in below</p>
          <h4>EMAIL ADDRESS<span>*</span></h4>
          <form action="regis">
            <input type="email" required>
            <h4>PASSWORD<span>*</span></h4>
            <input type="password" required>
          </form>
          <p><span>*</span> <span class="requie">Required Fileds</span> </p>
          <a href="#">Log in</a>
          <a href="#">Forgot Password ?</a>
        </div>
      </div>
    </details>
    <details>
      <summary><span>05.</span>PAYMENT METHOD</summary>
    </details>
    <details>
      <summary><span>06.</span>ORDER REVIEW</summary>
    </details>
  </section>
</template>

<script>
export default {
  name: 'CheckOutForm',
};
</script>

<style lang="sass">
$colorAccentSite: #f16d7f
.checkout__center
  & summary
    color: #222222
    padding: 33px 0
    font-size: 16px
    font-weight: 700
    text-transform: uppercase
    border-bottom: 1px solid #e8e8e8
    outline: none
  & details[open] summary
    border-bottom: none
  & span
    padding-right: 7px
  & summary::-webkit-details-marker
    display: none
  @at-root
    .checkout__center__two
      color: #222222
      display: flex
      & h3
        font-size: 13px
        font-weight: 600
        text-transform: uppercase
        padding-bottom: 8px
      & p
        color: #b3b2b2
        font-size: 13px
        font-weight: 400
        line-height: 20px
        padding-bottom: 34px
  @at-root
    .checkout__center__left
      padding-left: 35px
      & p:nth-of-type(1n+3)
        padding-bottom: 7px
      & > form
        text-transform: uppercase
        font-size: 12px
        font-weight: 600
        & label
          padding-left: 14px
        & > div
          padding-bottom: 20px
      & > a
        display: block
        width: fit-content
        text-align: center
        margin-top: 38px
        padding: 19px 54px
        color: #4a4a4a
        font-size: 14px
        font-weight: 700
        text-transform: uppercase
        border: 1px solid #eaeaea
        &:hover
          background: $colorAccentSite
  @at-root
    .checkout__center__right
      margin-left: 291px
      & h4
        font-size: 12px
        font-weight: 600
        padding-bottom: 5px
        text-transform: uppercase
      & p:first-of-type
        padding-bottom: 34px
      & input
        width: 390px
        height: 45px
        padding: 8px 15px
        margin-bottom: 21px
      & span
        color: #ff0d0d
        font-size: 17px
        font-weight: 400
        padding-right: 0
      & > a:first-of-type
        display: inline-block
        width: fit-content
        padding: 19px 81px 19px 55px
        margin-right: 32px
        border: 1px solid #eaeaea
        color: #4a4a4a
        font-size: 14px
        font-weight: 700
        text-transform: uppercase
        &:hover
          background: $colorAccentSite
      & > a:nth-of-type(2)
        color: #222222
        font-size: 14px
        font-weight: 400
        line-height: 20px
        &:hover
          color: $colorAccentSite
    .requie
      color: #ff0d0d
      font-size: 13px !important
</style>
