<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-goods-btn class="check-button" :selectAll="true"/>
      <span>全选</span>
      <div class="all-price">合计：￥{{totalPrice}}</div>
      <div class="settle-accounts" @click="settleAccounts">去结算（{{totalNum}}）</div>
    </div>
  </div>
</template>
<script>
import CheckGoodsBtn from '@/components/content/checkGoodsBtn/CheckGoodsBtn';
export default {
  name: 'CartBottomBar',
  components: {
    CheckGoodsBtn
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      totalPrice:0,
      totalNum:0
    }
  },
  mounted() {
    this.$bus.$on('refreshSelected', () => {
      this.totalPrice = 0
      this.totalNum = 0
      this.cartList.forEach((item) => {
        if(item.isSelected){
          this.totalNum += item.count
          // 先乘100再除以100以避免误差
          this.totalPrice += (item.price) * 100 * item.count / 100
        }   
      })  
    })  
  },
  methods: {
    settleAccounts() {
      this.$toast.show('暂未开发支付功能,敬请期待!',2000)
    }
  }
}
</script>
<style scoped>
.bottom-bar {
  height: 40px;
  width: 100%;
  position: fixed;
  bottom: 49px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background: #f6f6f6;
}
.check-content {
  width: 100%;
  display: flex;
  line-height: 40px;
}
.bottom-bar span {
  margin-left: 8px;
}
.all-price{
    flex: 1; 
}
.settle-accounts {
    color: #fff;
    background: var(--color-tint);
    flex: 1; 
}
</style>
