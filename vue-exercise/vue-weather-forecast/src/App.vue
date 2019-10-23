<template>
  <div id="app">
    <Header msg="Awesome Weather App"></Header>
    <!--    <SearchCity/>-->
    <div class="container">
      <div class="card row mt-5">
        <div class="card-body">
          <input type="text" placeholder="pick city" v-model="city">
          <input type="button" value="check weather" v-on:click="check()">
        </div>
      </div>

      <div v-if="info">
        <div class="card row mt-5">
          <div class="card-body">
            <h1>{{info.data[0].city_name}}</h1>
            <h4>{{info.data[0].weather.description}}</h4>
          </div>
        </div>
      </div>

      <h1>Current weather JSON</h1>

      <pre>{{info}}</pre>

      <h1>
        Forecast JSON
      </h1>

      <pre>{{forecast}}</pre>

    </div>
  </div>
</template>

<script>
  import Header from "./components/Header";
  import {AxiosInstance as axios} from "axios";

  const WEATHER_BIT = "https://api.weatherbit.io/v2.0/current?city=";
  const WEATHER_BIT_3HRS = "https://api.weatherbit.io/v2.0/forecast/3hourly?city=";
  const WEATHER_KEY = "&key=YOUR_API_KEY_HERE";

  export default {
    name: 'app',
    components: {Header},
    data() {
      return {
        city: "",
        info: "",
        forecast: "",
        weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      }
    },
    methods: {
      // getReadableDate(time) {
      //
      // },
      // getWindIcon() {
      //
      // },
      getImage(country) {
        return 'http://www.countryflags.io/' + country + '/flat/64.png';
      },
      check: function () {
        let self = this;
        axios.get(WEATHER_BIT + self.city + WEATHER_KEY)
          .then(response => (self.info = response.data));
        axios.get(WEATHER_BIT_3HRS + self.city + WEATHER_KEY)
          .then(response => self.forecast = response.data);
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
