<template>
  <headerbanner/>
  <backTop/>
  <router-view />
</template>

<script>
  import headerbanner from '@/views/common/header.jsx'
  import backTop from '@/components/BackTop.vue'
  export default{
    components:{
      headerbanner,
      backTop
    }
  }
  // import header from '@/views/vite/index.jsx'
  
  // fetch('/api/get').then(res=>res.json())
  // .then(data=>{
  //   console.log('data:',data);
  // })

  // This starter template is using Vue 3 experimental <script setup> SFCs
  // Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
  }
</style>