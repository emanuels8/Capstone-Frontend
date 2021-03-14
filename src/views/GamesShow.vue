<template>
  <div class="games-show">
    <h1>{{ game.name }}</h1>
    <h2>{{ game.price }}</h2>
    <img v-bind:src="game.cover_art" v-bind:alt="game.name" contain height="200px" width="300px" />
    <h4>{{ game.description }}</h4>
    <h2>{{ game.review_usernames }}</h2>
    <div v-for="game in game.review_info" v-bind:key="game.id">
      <h2>{{ game.description }}</h2>
      <h2>{{ game.rating }}</h2>
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
      review_usernames: [],
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
