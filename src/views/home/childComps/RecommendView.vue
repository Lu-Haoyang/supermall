<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.index">
      <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
      </a>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script scoped>
<style>
.recommend {
  display: flex;
  width: 100%;
}
.recommend-item {
  flex: 1;
  text-align: center;
}
.recommend-item img {
  width: 90%;
  height: calc(width);
  margin-bottom: 10px;
}
</style>