<template>
  <Layout>
    <br>
    <g-link to="/" class="back">  &larr; Go Back</g-link>
      <div class="post-title">
      <h1>{{ $page.blogPost.title }}</h1>
      <p class="post-date"> {{ $page.blogPost.date}} | {{$page.blogPost.timeToRead}} min read</p>
    </div>
      <div class="post-content">
        <p v-html="$page.blogPost.content"></p>
      </div>
  </Layout>
</template>

<page-query>
  query ($id: ID!) {
    blogPost(id: $id) {
      title
      content
      date (format: "D MMMM YYYY")
      timeToRead
    }
  }
</page-query>


<style>
.post-title {
  text-align: center;
  font-size: 20px;
  line-height: 10px;
  padding: 1.5em;
  font-family: 'Stylish';
}

.post-date {
  font-size: 16px;
  font-weight: 400;
}
  .post-content {
  font-size: 20px;
}

.back{
 text-decoration: none;
 padding: 5px;
 font-size: 18px;
}
</style>
