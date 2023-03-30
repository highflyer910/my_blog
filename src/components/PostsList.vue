<template>
  <div class="post-list">
    <p class="date" v-html="post.date"/>
    <h3 class="title" v-html="post.title"/>
    <p class="description" v-html="post.description"/>
    <transition name="fade">
    <g-link :to="post.path" class="read">Read More</g-link>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style>
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-enter-active{
  opacity: 0;
}

.date {
 font-size: 18px;
 color: #a3a3a8;
}

.post-list{
  border-radius:30px;
  background-color: #ae400e;
  background: #1D1C24;
  -moz-box-shadow:  7px 7px 14px #131217, 
             -7px -7px 14px #272631;
  -webkit-box-shadow: 7px 7px 14px #131217, 
             -7px -7px 14px #272631;          
  box-shadow:  7px 7px 14px #131217, 
             -7px -7px 14px #272631;
  margin: 35px 0;
  padding: 20px;
  color:  #da5314;
}

.read {
  border-radius:12px;
  font-size: 20px;
  padding: 12px;
  color:  #da5314;
  text-decoration: none;
  transition: all .5s ease;
}

.read:hover,
.read:active{
  font-weight: bold;
  color:  #e18155;
}

.description{
  color: #a3a3a8;
}
</style>
