<template>
  <div>
    <h2>Todos:</h2>
    <p>
      You've completed {{completedTasks}} tasks!
    </p>

    <table>
      <tr v-for="(it,id) in todos" :key="id">
        <td>
       <span v-if="it.done">
         <del>{{it.text}}</del>
       </span>
          <span v-else>
         <b>{{it.text}}</b>
       </span>
        </td>
        <td>{{it.done}}</td>
        <td>
          <input type="button" value="change state" v-on:click="toggle(it)"/>
        </td>
      </tr>
    </table>

    <input type="text" v-model="newTodo" placeholder="Type Your todo here"/>
    <input type="button" value="Add todo" v-on:click="addTodo()"/>
  </div>
</template>

<script>
  export default {
    name: "Todo",
    data() {
      return {
        newTodo: "",
        todos: [
          {text: "Learn JavaScript", done: false},
          {text: "Learn Vue", done: false},
          {text: "Play around in JSFiddle", done: true},
          {text: "Build something awesome", done: true},
          {text: "Build something awesome", done: true}
        ]
      }
    },
    methods: {
      toggle: function (todo) {
        todo.done = !todo.done
      },
      addTodo: function () {
        this.todos.push({
          text: this.newTodo,
          done: false
        });
      }
    },
    computed: {
      completedTasks: function () {
        let done = 0;
        for (let entry of this.todos) {
          if (entry.done) done++;
        }
        return done;
      }
    }
  }
</script>

<style scoped>
  li {
    margin: 8px 0;
  }

  h2 {
    font-weight: bold;
    margin-bottom: 15px;
  }

  del {
    color: green;
  }
</style>
