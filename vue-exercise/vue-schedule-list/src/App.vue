<template>
  <div id="app">
    <Todo/>
  </div>
</template>

<script>
  import Todo from "./components/TodoList";

  export default {
    name: 'app',
    components: {
      Todo
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
    margin-top: 60px;
    border-radius: 4px;
    padding: 20px;
    transition: all 0.2s;
  }

  body {
    background: #20262E;
    padding: 20px;
    font-family: Helvetica;
  }
</style>
