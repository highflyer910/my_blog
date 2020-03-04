<template>
  <div class="layout">
     <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
      </nav>
    <slot/> 
  </div>
</template>



<style>
body {
  font-family: 'Stylish', sans-serif, Roboto;
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

.nav{
  
  display: flex;
  justify-content: flex-end;

}

.nav__link {
  margin: 10px;
  text-align: center;
  line-height: 70px;
}
</style>
