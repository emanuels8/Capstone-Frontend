<template>
  <div class="games-index">
    <section id="portfolio" class="portfolio">
      <div class="row" data-aos="fade-up" data-aos-delay="100">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" class="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-card">Card</li>
            <li data-filter=".filter-web">Web</li>
          </ul>
        </div>
      </div>
      <div v-for="game in games" v-bind:key="game.id">
        <div class="container">
          <div class="row portfolio-container" data-aos="fade-up"></div>
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img
                v-bind:src="game.cover_art"
                v-bind:alt="game.name"
                contain
                height="500px"
                width="450px"
                class="img-fluid"
              />
              <div class="portfolio-info">
                <h4>{{ game.name }}</h4>
                <h4>Price {{ game.price }}$</h4>
                <h4>Rating {{ game.rating }}</h4>
                <div class="portfolio-links">
                  <router-link v-bind:to="`/games/${game.id}`">
                    <h4>More Info</h4>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
