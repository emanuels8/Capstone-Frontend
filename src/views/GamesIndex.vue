<template>
  <div class="games-index">
    <h1>All Games</h1>
    <div v-for="game in games" v-bind:key="game.id">
      <h1>{{ game.name }}</h1>
      <h2>{{ game.price }}</h2>
      <img v-bind:src="game.cover_art" v-bind:alt="game.name" contain height="200px" width="300px" />
      <router-link v-bind:to="`/games/${game.id}`">Game Info</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      games: [],
    };
  },
  created: function() {
    axios.get("/api/games").then(response => {
      console.log("games index", response);
      this.games = response.data;
    });
  },
  methods: {},
};
</script>
