<template>
  <div class="games-show">
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper-container">
              <div carousel class="swiper-wrapper align-items-center">
                <div class="swiper-slide">
                  <img
                    v-bind:src="game.cover_art"
                    v-bind:alt="game.name"
                    contain
                    height="400px"
                    width="350px"
                    class="d-block w-100"
                  />
                </div>

                <div class="swiper-slide">
                  <img v-bind:src="game.image2" height="400px" width="350px" class="d-block w-100" />
                </div>

                <div class="swiper-slide">
                  <img v-bind:src="game.image" height="400px" width="350px" class="d-block w-100" />
                </div>
              </div>
              <div class="swiper-pagination"></div>
              <div>
                <h4>Game Info</h4>
                <p>{{ game.description }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>{{ game.name }}</h3>
              <ul>
                <li>
                  <strong>Price</strong>
                  {{ game.price }}$
                </li>
                <li>
                  <strong>Rating</strong>
                  {{ game.avg_rating }}
                </li>
                <li>
                  <strong>Tags</strong>
                  <div v-for="genre in game.genres" v-bind:key="genre.id">
                    {{ genre.name }}
                  </div>
                </li>
              </ul>
            </div>
            <div class="portfolio-description"></div>
            <h2>Recommended Games</h2>

            <div v-for="rpg in game.rpg" v-bind:key="rpg.id">
              <div>
                <h5>{{ rpg.name }}</h5>
                <h5>{{ rpg.price }}$</h5>
              </div>
              <router-link v-bind:to="`/games/${rpg.id}`">
                <img
                  v-bind:src="rpg.cover_art"
                  v-bind:alt="game.name"
                  height="200px"
                  width="100px"
                  class="d-block w-100"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div>
      <div>
        <div class="container">
          <div class="row bootstrap snippets bootdeys">
            <div class="col-md-8 col-sm-12">
              <div class="panel panel-info">
                <div class="form-group mt-3">
                  <div class="panel-heading">
                    <h4>Review</h4>
                  </div>
                  <div class="panel-body">
                    <form v-on:submit.prevent="createReview()">
                      <ul>
                        <li class="text-danger" v-for="error in errors" v-bind:key="error">{{ error }}</li>
                      </ul>

                      <div class="form-group">
                        <label>Rating:</label>
                        <AwesomeVueStarRating
                          :star="5"
                          :starsize="starsize"
                          :hasresults="hasresults"
                          :hasdescription="hasdescription"
                          :ratingdescription="ratingdescription"
                        />
                      </div>
                      <div class="form-group">
                        <label>Review:</label>
                        <textarea
                          class="form-control"
                          v-model="description"
                          placeholder="write a review..."
                          rows="3"
                        ></textarea>
                      </div>

                      <div>
                        <input type="submit" class="btn btn-info pull-right" value="Submit" />
                      </div>
                    </form>
                    <br />
                    <div class="clearfix"></div>
                  </div>
                  <div class="comment-wrapper">
                    <div v-for="review in game.Reviews" v-bind:key="review.id">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/OOjs_UI_icon_userAvatar-constructive.svg/1024px-OOjs_UI_icon_userAvatar-constructive.svg.png"
                        alt=""
                        class="img-square"
                        contain
                        height="60px"
                        width="60px"
                      />
                      <strong class="text-success">
                        <router-link v-bind:to="`/user/${review.user_id}`">{{ review.username }}</router-link>
                      </strong>

                      <a href="#" class="pull-right"></a>

                      <!-- <h6>Rating {{ review.rating }}</h6> -->
                      <AwesomeVueStarRating
                        :star="review.rating"
                        :starsize="starsize"
                        :hasresults="hasresults"
                        :hasdescription="hasdescription"
                        :ratingdescription="ratingdescription"
                      />

                      <p>
                        {{ review.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
h6 {
  text-align: left;
}
</style>

<script>
/* global setupTheme */
import axios from "axios";
import Vue from "vue";
import AwesomeVueStarRating from "awesome-vue-star-rating";
export default {
  components: {
    AwesomeVueStarRating,
  },
  data: function() {
    return {
      game: {},
      game_id: this.$route.params.id,
      description: "",
      rating: 0,
      errors: [],
      star: 5, // default star
      ratingdescription: [
        {
          text: "Poor",
          class: "star-poor",
        },
        {
          text: "Below Average",
          class: "star-belowAverage",
        },
        {
          text: "Average",
          class: "star-average",
        },
        {
          text: "Good",
          class: "star-good",
        },
        {
          text: "Excellent",
          class: "star-excellent",
        },
      ],
      hasresults: false,
      hasdescription: true,
      starsize: "lg", //xs/6x
    };
  },
  created: function() {
    axios.get("/api/games/" + this.$route.params.id).then(response => {
      console.log("game show", response);
      this.game = response.data;
      Vue.nextTick(function() {
        setupTheme();
        // DOM updated
      });
    });
  },
  methods: {
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.image = event.target.files[0];
      }
    },
    createReview: function() {
      var params = new FormData();
      params.append("game_id", this.game_id);
      params.append("description", this.description);
      params.append("rating", this.rating);
      axios
        .post("/api/reviews", params)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          this.status = error.response.status;
        });
    },
    resetReview() {
      this.game_id = "";
      this.description = "";
      this.rating = "";
    },
  },
};
</script>
