<template>
  <div class="layout">
     
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
  background-color: #1D1C24;
  color:#8fe9ff;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

</style>
