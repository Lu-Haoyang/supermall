<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list :cartList="cartList"/>
    <cart-bottom-bar :cartList="cartList"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar.vue';
export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    cartLength() {
      return this.$store.state.cart.cartList.length
    },
    cartList() {
      return this.$store.state.cart.cartList
    }
  }
}
</script>

<style scoped>
.cart {
  position: relative;
  height: 100vh;
  background-color: #fff;
}
.nav-bar {
  display: flex;
  background-color: var(--color-tint);
  color: #fff;
}
</style>