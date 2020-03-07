<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
  <!-- <g-image alt="Example image" src="~/pic.png" width="135" />
-->
    <header class="header">
      <h1 v-html="$page.metadata.siteName" />
      <h2 v-html="$page.metadata.siteDescription" />
      <div class="social">
       <div class="links">
      <div class="home__links"><a href="https://twitter.com/highflyer910" aria-label="Twitter" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="#8fe9ff"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z"/></svg>
      </a>
    </div>
    <div class="home__links"><a href="https://github.com/highflyer910" aria-label="Github" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="#8fe9ff"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a></div>
      <div class="home__links"><a href="https://highflyer910.github.io" aria-label="Portfolio" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="#8fe9ff"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6 17c1.513-6.587 7-7.778 7-7.778v-2.222l5 4.425-5 4.464v-2.223c0 .001-3.78-.114-7 3.334z"/></svg>
      </a></div>
    </div>
      </div>
    </header>
    <section class="posts">
      <PostsList v-for="edge in $page.allBlogPost.edges" :key="edge.node.id" :post="edge.node" />
    </section>
    <footer class="footer">
      <span class="link">Copyright © {{ new Date().getFullYear() }}. </span>
      <br>
      <span class="link">Powered by <a href="//gridsome.org"> Gridsome </a>& Made by Thea</a></span>
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

.links{
  display: flex;
  align-items: center;
  justify-content: center;
}

svg{
  margin: 12px 0;
}

.home__links{
  width: 50px;
  height: 50px;
  margin: 10px; 
  border-radius: 11px;
  background: #1D1C24;
  box-shadow:  6px 6px 12px #121217, 
             -6px -6px 12px  #282631;   
  transition: all .7s ease;                  
}

.home__links:hover{
  border-radius: 11px;
  background: #1D1C24;
  box-shadow: 5px 5px 10px #1d1c24, 
             -5px -5px 10px #1d1c24;
}
</style>
