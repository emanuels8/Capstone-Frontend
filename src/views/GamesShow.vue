<template>
  <div class="games-show">
    <h2>Game Name: {{ game.name }}</h2>
    <h2>Price: {{ game.price }}</h2>
    <img v-bind:src="game.cover_art" v-bind:alt="game.name" contain height="200px" width="300px" />
    <h2>Description: {{ game.description }}</h2>
    <div v-for="game in game.user_info" v-bind:key="game.id">
      <h2>User_info: {{ game }}</h2>
    </div>
    <router-link to="/games">Back to all Games</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      game: {},
    };
  },
  created: function() {
    axios.get("/api/games/" + this.$route.params.id).then(response => {
      console.log("game show", response);
      this.game = response.data;
    });
  },
  methods: {},
};
</script>
