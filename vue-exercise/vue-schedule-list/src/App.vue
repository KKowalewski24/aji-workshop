<template>
  <div id="app">
    <Header msg="Welcome in my app!"/>
    <TodoList/>
  </div>
</template>

<script>
  import TodoList from "./components/TodoList";
  import Header from "./components/Header";

  export default {
    name: 'app',
    components: {
      Header: Header,
      TodoList: TodoList
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
    margin-top: 20px;
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
