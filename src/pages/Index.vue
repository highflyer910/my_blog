<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
  <!-- <g-image alt="Example image" src="~/pic.png" width="135" />
-->
    <header class="header">
      <h1 v-html="$page.metadata.siteName" />
      <h2 v-html="$page.metadata.siteDescription" />
    </header>
    <section class="posts">
      <PostsList v-for="edge in $page.allBlogPost.edges" :key="edge.node.id" :post="edge.node" />
    </section>
    <footer class="footer">
      <span class="link">Copyright © {{ new Date().getFullYear() }}. </span>
      <br>
      <span class="link">Powered by <a href="//gridsome.org"> Gridsome </a>& Made by
        <a class="link" href="//twitter.com/highflyer910">Thea</a></span>
    </footer>
  </Layout>
</template>

<script>
import PostsList from '~/components/PostsList.vue'

export default {
  components: {
    PostsList
  },
  metaInfo: {
    title: "Techie Stuff"
  }
};
</script>


<page-query>
  query {
  metadata {
    siteName
    siteDescription
  }
    allBlogPost {
    edges {
      node {
        id
        title
        description
        date (format: "D MMMM YYYY")
        path
      }
    }
  }
  }
</page-query>


<style>
.header{
  font-family: "Stylish";
  font-size: 24px;
  text-align: center;
  line-height: 20px;
  padding: 0.5em;
  margin-top: 30px;
  border-bottom: 0.5px solid #78c4fc;
  color: #8fe9ff;
  text-shadow: 0 0 2px #0a9bbf, 0 0 4px #0a9bbf, 0 0 6px #0a9bbf, 0 0 8px #0a9bbf, 0 0 10px #0a9bbf, 0 0 12px #0a9bbf, 0 0 14px #0a9bbf, 0 0 16px #0a9bbf;
}

.posts{
 text-align: center;
 font-size:22px;
 margin-top: 25px;
 list-style: none;
 text-decoration: none;
 color: rgb(12, 142, 245, .8);
}

.footer {
  padding-top: calc(30em / 10);
  text-align: center;
  font-size: 1em;
  margin: 20px 0;
}

footer .link {
  padding: 7px;
  color: #a3a3a8;
  text-decoration: none;
}

.link a{
  color: #a3a3a8;
}
</style>
