<template>
  <Layout>
    <div class="container">
    <br>  
      <div class="post-title">
      <h1>{{ $page.blogPost.title }}</h1>
      <p class="post-date"> {{ $page.blogPost.date}} | {{$page.blogPost.timeToRead}} min read</p>
      </div>
      <div class="post-content">
        <p v-html="$page.blogPost.content"></p>
        <hr class="line">
        <g-link to="/" class="back">  &larr; Go Back</g-link>
      </div>
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
  color: #a3a3a8;
}
  .post-content {
  font-size: 24px;
  margin-bottom:150px;
  color: #d8d8e6;
}

hr{
  border: 1px solid #da5314;
  margin: 30px 0;
}

.back{
 color: #da5314;
  background:
     linear-gradient(
       to bottom, #ae400e 0%,
       #ae400e 100%
     );
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 4px 4px;
  transition: background-size .5s;
  cursor: pointer;
}


.back:hover {
  background-color: #ae400e;
  color: #1D1C24;
  background-size: 4px 50px;
}

a {
  color: #da5314;
  padding: 5px;
  text-decoration: none;
  cursor: pointer;
  background-color: #1D1C24;
}

code[class*="language-"],
 pre[class*="language-"] {
   color: #da5314;
   background: none;
   font-family: 'Fira Code', monospace;
   font-size: 18px;
   white-space: pre;
   word-spacing: normal;
   word-break: normal;
   word-wrap: normal;
   line-height: 1.5;
 
   -moz-tab-size: 4;
   -o-tab-size: 4;
   tab-size: 4;
 
   -webkit-hyphens: none;
   -moz-hyphens: none;
   -ms-hyphens: none;
   hyphens: none;
 }


</style>
