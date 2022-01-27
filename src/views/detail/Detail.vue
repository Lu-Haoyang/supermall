<template>
  <div id="detail">
    <detail-nav-bar ref="nav" class="detail-nav" @titleClick="titleClick"/>
    <div id="content">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :baseInfo="goods"/>
      <detail-shop-info  id="anchor0" :shopInfo="shop"/>
      <detail-goods-info 
      :goodsInfo="goodsInfo"/>
      <detail-param id="anchor1" :param-info="paramInfo"/>
      <detail-comment-info id="anchor2" :comment-info="commentInfo"/>
      <goods-list id="anchor3" :goods="recommends"/>
    </div>
    <detail-bottom-bar class="detail-bottom" @addCart="addToCart"/>
  </div>  
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParam from './childComps/DetailParam.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'

import GoodsList from 'components/content/goods/GoodsList'

import {getDetail, Goods, Shop, GoodsParam, getRecommend} from "network/detail"
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParam,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar  
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      goodsInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      offsetList: [],
      itemInfo: {}
    }
  },
  created() {
    this.iid = this.$route.params.iid;
    
    getDetail(this.iid).then(res => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.service);
      
      this.shop = new Shop(data.shopInfo);

      this.goodsInfo = data.detailInfo;

      this.itemInfo = data.itemInfo;

      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

      this.commentInfo = data.rate;
    
    })

    getRecommend().then(res => {
      this.recommends = res.data.list
    })
  },
  mounted() {
    setTimeout(()=> {
        for(let i=0;i<4;i++){
          let element = document.getElementById('anchor' + i);
          this.offsetList.push(element.offsetTop);
        }

        let content = document.getElementById('content');
        let nav = this.$refs.nav;
        let list = this.offsetList;
        if(list.length == 4){
          content.onscroll = function() {
            for(let i=1;i<4;i++){
              if(content.scrollTop < list[i]){         
                nav.currentIndex = i-1; 
                return;
              }
            }
            nav.currentIndex = 3;
          }
        }
        
    }, 1000)
  },
  methods: {
    titleClick(index) {
      let selector = '#anchor' + index;
      let element = document.querySelector(selector);
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    },
    addToCart() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goodsInfo.title;
      product.desc = this.goodsInfo.desc;
      product.price = this.itemInfo.lowNowPrice;
      product.iid = this.iid;

      this.$store.dispatch('cart/addCart', product);
      this.$toast.show('添加成功!', 2000)
    }
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
  background-color: #fff;
  z-index: 12;
}
#content {
  overflow: auto;
  position: absolute;
  top: 44px;
  bottom: 58px;
  left: 0;
  right: 0;
}
</style>