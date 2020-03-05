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
 color: #0c8ef5;
}

.post-list{
  border-radius:35px;
  background-color: #14376e;
  box-shadow: 7px 7px 14px #0e274d, 
             -7px -7px 14px #1a488f;
  margin: 35px 0;
  padding: 20px;
  color: #78c4fc;
}

.read {
  font-size: 20px;
  padding: 10px;
  color: #78c4fc;
  text-decoration: none;
  transition: box-shadow .5s;
}

.read:hover{
border-radius:20px;
background: #14376E;
box-shadow: inset 3px 3px 6px #112f5e, 
            inset -3px -3px 6px #173f7f;
  color: #99d4ff;
}

.description{
  color: #0c8ef5;
}
</style>
