<template>
  <Layout>
    <br>
    
      <div class="post-title">
      <h1>{{ $page.blogPost.title }}</h1>
      <p class="post-date"> {{ $page.blogPost.date}} | {{$page.blogPost.timeToRead}} min read</p>
      </div>
      <div class="post-content">
        <p v-html="$page.blogPost.content"></p>
        <hr>
        <g-link to="/" class="back">  &larr; Go Back</g-link>
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
.post-title h1{
  text-align: center;
  font-size: 28px;
  line-height: 30px;
  padding: 1.5em;
  font-family: 'Stylish';
}

.post-date {
  font-size: 18px;
  font-weight: 400;
  text-align: center;
}
  .post-content {
  font-size: 24px;
  margin-bottom:150px;
  
}

.back{
 text-decoration: none;
 padding: 5px;
 font-size: 18px;
 color: darkred;
 font-family: 'Roboto', sans-serif;
}
</style>
