<template>
  <div class="games-index">
    <div v-for="game in games" v-bind:key="game.id">
      <section id="portfolio" class="portfolio">
        <div class="container">
          <div class="section-title" data-aos="fade-left"></div>
          <div class="col-lg-12 d-flex justify-content-between">
            <div class="col-lg-4 col-md-6">
              <div class="portfolio-wrap">
                <img v-bind:src="game.cover_art" v-bind:alt="game.name" contain height="250px" width="450px" />
                <div class="portfolio-info">
                  <h4>{{ game.name }}</h4>
                  <h4>Price {{ game.price }}$</h4>
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
