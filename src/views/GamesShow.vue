<template>
  <div class="games-show">
    <div>
      <h1>{{ game.name }}</h1>
      <h2>{{ game.price }}</h2>
      <img v-bind:src="game.cover_art" v-bind:alt="game.name" contain height="200px" width="300px" />
      <h4>{{ game.description }}</h4>
      <div v-for="review in game.review_usernames" v-bind:key="review.id">
        <h2>{{ review }}</h2>
      </div>
      <div v-for="game in game.review_info" v-bind:key="game.id">
        <h2>{{ game.description }}</h2>
        <h2>{{ game.rating }}</h2>
      </div>
    </div>
    <div>
      User:
      <input type="text" v-model="user_id" />
      Game:
      <input type="text" v-model="game_id" />
      Description:
      <input type="text" v-model="description" />
      Rating:
      <input type="text" v-model="rating" />
      <button v-on:click="createReview()">Rate Game</button>
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
      user_id: "",
      game_id: "",
      description: "",
      rating: "",
    };
  },
  created: function() {
    axios.get("/api/games/" + this.$route.params.id).then(response => {
      console.log("game show", response);
      this.game = response.data;
    });
  },
  methods: {
    createReview: function() {
      var params = {
        user_id: this.newReviewUser,
        game_id: this.newReviewGameId,
        description: this.newReviewDescription,
        rating: this.newReviewRating,
      };
      axios
        .post("/api/reviews", params)
        .then(response => {
          console.log("reviews create", response);
          this.reviews.push(response.data);
          this.newReviewUser = "";
          this.newReviewGameId = "";
          this.newReviewDescription = "";
          this.newReviewRating = "";
        })
        .catch(error => {
          console.log("reviews create error", error.response);
        });
    },
  },
};
</script>
