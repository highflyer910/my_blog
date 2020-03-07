<template>
  <div class="post-list">
    <p class="date" v-html="post.date"/>
    <h3 class="title" v-html="post.title"/>
    <p class="description" v-html="post.description"/>
    <g-link :to="post.path" class="read">Read More</g-link>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style>
.date {
 font-size: 18px;
 color: #a3a3a8;
}

.post-list{
  border-radius:30px;
  background-color: #14376e;
  background: #1D1C24;
  box-shadow:  7px 7px 14px #131217, 
             -7px -7px 14px #272631;
  margin: 35px 0;
  padding: 20px;
  color: #8fe9ff;
}

.read {
  font-size: 20px;
  padding: 12px;
  color: #8fe9ff;
  text-decoration: none;
  transition: all .5s ease;
}

.read:hover{
border-radius:12px;
background: #1D1C24;
box-shadow: inset 6px 6px 12px #111116, 
            inset -6px -6px 12px #292732;
  color: #99d4ff;
}

.description{
  color: #a3a3a8;
}
</style>
