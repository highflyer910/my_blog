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
  border-bottom: 0.5px solid rgb(12, 142, 245, .8);
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
  color: #78c4fc;
  text-decoration: none;
}

.link a{
  color: #78c4fc;
}
</style>
