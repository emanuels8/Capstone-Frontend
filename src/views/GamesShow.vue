<template>
  <div class="games-show">
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper-container">
              <div class="swiper-wrapper align-items-center">
                <div class="swiper-slide">
                  <img v-bind:src="game.cover_art" v-bind:alt="game.name" contain height="500px" width="800px" />
                </div>

                <div class="swiper-slide">
                  <img src="assets/img/portfolio/portfolio-details-2.jpg" alt="" />
                </div>

                <!-- <div class="swiper-slide"> -->
                <!-- <img src="assets/img/portfolio/portfolio-details-3.jpg" alt="" />
                </div> -->
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>{{ game.name }}</h3>
              <ul>
                <li>
                  <strong>Price</strong>
                  {{ game.price }}
                </li>

                <li>
                  <strong>Tags</strong>
                  <div v-for="game in game.genre_name" v-bind:key="game.id">
                    <p>{{ game }}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="portfolio-description">
              <h2>Game Info</h2>
              <p>
                {{ game.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
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
