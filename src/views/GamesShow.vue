<template>
  <div class="games-show">
    <div>
      <h1>{{ game.name }}</h1>
      <h2>{{ game.price }}</h2>
      <img v-bind:src="game.cover_art" v-bind:alt="game.name" contain height="200px" width="300px" />
      <h4>{{ game.description }}</h4>
      <div v-for="review in game.Reviews" v-bind:key="review.id">
        <div>
          <h2>{{ review.username }}</h2>
          <h2>{{ review.description }}</h2>
          <h2>{{ review.rating }}</h2>
        </div>
      </div>
    </div>
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
