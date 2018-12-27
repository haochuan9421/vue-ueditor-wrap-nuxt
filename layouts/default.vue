<template>
  <div>
    <ul class="nav">
      <nuxt-link 
        to="/" 
        tag="li">首页</nuxt-link>
      <nuxt-link 
        to="/about" 
        tag="li">关于</nuxt-link>
    </ul>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.nav {
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;
}

.nav li {
  display: inline-block;
  height: 35px;
  line-height: 35px;
  width: 100px;
  text-align: center;
  border: 1px solid #cccccc;
  box-shadow: 0 0 10px #eeeeee;
  margin: 10px;
  cursor: pointer;
  border-radius: 10px;
  background-color: #ffffff;
}

.nav li:hover,
li.nuxt-link-exact-active {
  background-color: #35495e;
  border: 1px solid #35495e;
  color: #ffffff;
  box-shadow: 0 0 20px #eeeeee;
}
</style>
