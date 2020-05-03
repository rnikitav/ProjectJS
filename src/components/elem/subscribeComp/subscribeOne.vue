<template>
  <figure class="subscribe__main__left">
    <img class="imgDnm" src="http://dummyimage.com/83x83/a6a6ff" alt="Photo">
    <figcaption class="subscribe__main__content">
      <p>“Очень хороший магазин! Качество товаров на высшем уровне! Рекомендую всем закупаться тут! Немного высокая
        цена не должна вас смущать! Лучше один раз переплатить, зато вещь будет служить”</p>
      <p>Ivan Ivanov</p>
      <p>Moscow, Ru</p>
      <slot/>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'subscribeOne',
};
</script>
<style lang="sass">
.imgDnm
  border-radius: 50%
</style>
