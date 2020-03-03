<template>
  <div class="layout">
    <slot/>
    <footer class="footer">
      <span class="link">Copyright © {{ new Date().getFullYear() }}. </span>
      <br>
      <span class="link">Powered by <a href="//gridsome.org"> Gridsome </a>& Made by
        <a class="link" href="//twitter.com/highflyer910">Thea</a></span>
    </footer>
    
  </div>
</template>



<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  min-height: 100vh;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.footer {
  padding-top: calc(30em / 2);
  text-align: center;
  font-size: 1em;
}

.link {
  padding: 7px;
  color: #333;
  text-decoration: none;
}

.link a{
  color: purple;
}
</style>
