<template>
    <div class="cart-list">
        <div v-if="cartList.length">
            <cart-list-item v-for="(item, index) in cartList" :key="index" :goodsItem="item"/>
        </div>
        <div v-else class="empty-cart">
            <p>购物车是空的</p>
            <p @click="goHome">去逛逛</p>
        </div>
    </div>
</template>

<script>
import CartListItem from './CartListItem';

export default {
    name: 'CartList',
    props: {
        cartList:{
            type: Array,
            default() {
                return [];
            }
        }
    },
    components: {
        CartListItem
    },
    methods: {
        goHome(){
            this.$router.replace('/home');
        }
        
    },
}
</script>

<style scoped>
.cart-list {
  overflow: auto;
  position: absolute;
  top: 50px;
  bottom: 89px;
  left: 0;
  right: 0;
  text-align: center;
    
}
.empty-cart p:nth-child(1){
  margin-top: 50%;;
}
.empty-cart p:nth-child(2){
    margin: 20px auto;
    width: 80px;
    padding: 4px 12px;
    background: #f3f3f3;
    border-radius: 10px;
    border: 1px solid rgba(0,0,0, .3);
}
</style>
