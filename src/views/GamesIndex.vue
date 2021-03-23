<template>
  <div class="games-index">
    <section id="portfolio" class="portfolio">
      <div class="container">
        <div class="section-title aos-init aos-animate" data-aos="fade-left">
          <h2>Games</h2>
          <p>
            List of all games
          </p>
        </div>
        <div class="row aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-survival">Survival</li>
              <li data-filter=".filter-fps">First Person Shooter</li>
              <li data-filter=".filter-casual">Casual</li>
              <li data-filter=".filter-multiplayer">Multiplayer</li>
            </ul>
          </div>
        </div>
        <div
          class="row portfolio-container aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="200"
          style="position: relative; height: 1026px;"
        >
          <div
            v-for="game in games"
            v-bind:key="game.id"
            class="col-lg-4 col-md-6 portfolio-item "
            v-bind:class="classObject(game)"
            style="position: absolute; left: 0px; top: 0px;"
          >
            <div class="portfolio-wrap">
              <img v-bind:src="game.cover_art" class="img-fluid img-game" alt="" />
              <div class="portfolio-info">
                <h4>{{ game.name }}</h4>
                <h4>{{ game.price }}</h4>
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
<style scoped>
.img-game {
  height: 300px;
  object-fit: cover;
}
</style>
<script>
/* global setupTheme */
import axios from "axios";
import Vue from "vue";
export default {
  data: function() {
    return {
      games: [],
    };
  },
  mounted: function() {
    axios.get("/api/games").then(response => {
      console.log("games index", response);
      this.games = response.data;
      Vue.nextTick(function() {
        setupTheme();
        // DOM updated
      });
    });
  },
  methods: {
    classObject: function(game) {
      return game.genres.map(genre => {
        return `filter-${genre.name.toLowerCase().replace(/\s+/g, "")}`;
      });
    },
  },
};
</script>
