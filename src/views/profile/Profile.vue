<template>
    <div id="profile">
        <nav-bar class="profile-bar">
          <div slot="center">个人中心</div>
        </nav-bar>
        <div class="info">
          <img src="@/assets/img/profile/user.jpg" alt="">
          <div><span>昵称:</span></div>
          <div><span>余额:</span></div>
          <div><span>我的收藏</span></div>
          <div> <span>消费记录</span></div>                
        </div>        
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';

export default {
    name:'Profile',
    components: {
        NavBar,
    }
}
</script>

<style scoped>
.profile-bar {
    background: var(--color-tint);
    color: #fff;
}
.info {
  display:flex;
  flex-direction:column;
  margin-top: 20px;
}
img {
  width: 100px;
  height: 100px;
  align-self:center;
  margin-bottom: 20px;
}
.info div {
  align-self:center;
  margin: 10px 10px;
  padding: 10px 10px;
  background: var(--color-tint);
  width: 80%;
  border-radius: 50px;

}
.info div:hover {
  opacity: 0.7;
}
.info span {
  color: #fff;
}
</style>

