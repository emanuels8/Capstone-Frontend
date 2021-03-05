<template>
  <div class="games-show">
    <h2>{{ game.name }}</h2>
    <h2>{{ game.price }}</h2>
    <img v-bind:src="game.cover_art" v-bind:alt="game.name" contain height="200px" width="300px" />
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
