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
      <ul>
        <hr class="line">
      <li v-for="post in $page.allBlogPost.edges" :key="post.node.id">
        <g-link :to="post.node.path"
          >
          {{ post.node.title }}
        </g-link>
      </li>
    </ul>
    </section>
  </Layout>
</template>

<script>
export default {
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
          path
          date(format: "DD MMMM, YYYY")
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
  padding: 0.7em;
}

.line {
  border: 0.5px solid #ccc;
  margin: 15px 0;
}

.posts{
 text-align: center;
 font-family: "Stylish";

}

ul li {
  font-weight: 200;
  font-size:22px;
  list-style: none;
  text-decoration: none;
  color: #ccc;
}
</style>
