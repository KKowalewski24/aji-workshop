<template>
  <div id="app">
    <Header msg="Awesome Weather App"/>
    <!--    <SearchCity/>-->
    <div class="row">
      <div>
        <input type="text" placeholder="pick city" v-model="city">
      </div>
      <div>
        <input type="button" value="check weather" v-on:click="check()">
      </div>
    </div>

    <div v-if="info">
      <div class="row">
        <h1>
          {{info.data[0].city_name}}
        </h1>
        <h4>
          {{info.data[0].weather.description}}
        </h4>
      </div>
    </div>
    <h1>
      Current weather JSON
    </h1>
    <pre>
  {{info}}
  </pre>
    <h1>
      Forecast JSON
    </h1>
    <pre>
    {{forecast}}
  </pre>
  </div>
</template>

<script>
  import Header from "./components/Header";
  import {AxiosInstance as axios} from "axios";
  // import SearchCity from "./components/SearchCity";

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
        axios.get('https://api.weatherbit.io/v2.0/current?city=' + self.city + '&key=YOUR_API_KEY_HERE')
          .then(response => (self.info = response.data));
        axios.get('https://api.weatherbit.io/v2.0/forecast/3hourly?city=' + self.city + '&key=YOUR_API_KEY_HERE').then(response => {
          self.forecast = response.data
        });
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
