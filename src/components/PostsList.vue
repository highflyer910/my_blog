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
  border-radius:5px;
  background-color: #14376e;
  box-shadow: inset 7px 7px 14px #0e274d, 
            inset -7px -7px 14px #1a488f;
  margin: 35px 0;
  padding: 10px;
  color: #78c4fc;
}

.read {
  padding: 5px;
  color: #78c4fc;
  text-decoration: none;
}

.description{
  margin-top:-5px;
  color: #0c8ef5;
}
</style>
