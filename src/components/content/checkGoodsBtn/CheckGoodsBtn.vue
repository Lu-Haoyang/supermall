<template>
  <div class="check-btn" :class="{'no-selected': !isSelected}" @click="handleSelectGoods(item)">
      <img src="@/assets/img/cart/tick.svg" alt="" srcset="" v-show="isSelected">
  </div>
</template>
<script>
export default {
    name: 'CheckGoodsBtn',
    props: {
        item: {
            type: Object,
            default(){
                return {};
            }
        },
        selectAll: {
          type: Boolean,
          default(){
            return false;
          }
        }
    },
    data() {
      return {
        isSelected: false
      }
    },
    mounted() {
      if(!this.selectAll){
        this.$bus.$on('selectAll', (flag) => {
          this.isSelected = flag;
          this.item.isSelected = flag;
          this.$bus.$emit('refreshSelected')
        })
      }  
    },
    methods: {
      handleSelectGoods(item){
        this.isSelected = !this.isSelected
        if(this.selectAll){
          this.$bus.$emit('selectAll',this.isSelected)
        }else{
          item.isSelected = !item.isSelected
        }
        this.$bus.$emit('refreshSelected')
      }
    }

}
</script>

<style scoped>
.check-btn{
    width: 20px;
    height: 20px;
    border-radius: 50%;
}
.no-selected {
    margin-top: 9px;
    border: 2px solid rgba(100,100,100,.2);
}
.check-btn img {
    border-radius: 50%;
    /* background: red; */
    background: var(--color-tint);
}
</style>