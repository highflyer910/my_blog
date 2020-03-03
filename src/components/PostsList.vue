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
}

.post-list{
  border: 5px groove #ccc;
  margin: 10px 0;
  padding: 10px;
  border-radius: 50px;
}

.read {
  padding: 5px;
  color: #333;
  text-decoration: none;
}

.description{
  margin-top:-5px;
}
</style>
