<template>
  <div class="games-show">
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">
        <h1>{{ game.name }}</h1>
        <h1>{{ game.price }} $</h1>
        <h1>Game Rating {{ game.avg_rating }}</h1>

        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                v-bind:src="game.cover_art"
                v-bind:alt="game.name"
                contain
                height="400px"
                width="350px"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_31c19dc3adf3de8c982f58181c207fa619a15d97.600x338.jpg?t=1615295984"
                contain
                height="400px"
                width="350px"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_2b2e2bb44df7cabd0fc7af704dd1db47d84595e1.600x338.jpg?t=1615295984"
                contain
                height="400px"
                width="350px"
                class="d-block w-100"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="portfolio-description">
          <h2>Game Info</h2>
          <div class="section-title">
            <p>
              {{ game.description }}
            </p>
          </div>
        </div>
        <div>
          <h3>Games For You</h3>

          <div v-for="game in game.rpg" v-bind:key="game.id">
            <p>{{ game.name }}</p>
            <p>{{ game.price }}</p>
            <img v-bind:src="game.cover_art" contain height="100px" width="150px" />
          </div>
        </div>
        <div class="portfolio-info">
          <ul>
            <li>
              <strong>Tags</strong>
              <div v-for="game in game.genres" v-bind:key="game.id">
                <p>{{ game.name }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="row gy-4">
          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper-container">
              <div class="swiper-wrapper align-items-center">
                <div class="swiper-slide">
                  <!-- <img v-bind:src="game.cover_art" v-bind:alt="game.name" contain height="450px" width="500px" /> -->
                </div>

                <div class="swiper-slide">
                  <img src="/assets/img/portfolio/portfolio-details-2.jpg" alt="" />
                </div>

                <div class="swiper-slide">
                  <img src="assets/img/portfolio/portfolio-details-3.jpg" alt="" />
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>

          <div class="col-lg-4"></div>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="row bootstrap snippets bootdeys">
        <div class="col-md-8 col-sm-12">
          <div class="panel panel-info">
            <div class="panel-heading">
              Review Section
            </div>
            <div class="panel-body">
              <textarea class="form-control" placeholder="write a review..." rows="3"></textarea>
              <br />
              <button type="button" class="btn btn-info pull-right">Post</button>
              <div class="clearfix"></div>
            </div>
            <div class="comment-wrapper">
              <div v-for="review in game.Reviews" v-bind:key="review.id">
                <div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/OOjs_UI_icon_userAvatar-constructive.svg/1024px-OOjs_UI_icon_userAvatar-constructive.svg.png"
                    alt=""
                    class="img-square"
                    contain
                    height="60px"
                    width="60px"
                  />
                  <div>
                    <strong class="text-success">{{ review.username }}</strong>
                    {{ review.rating }}

                    <a href="#" class="pull-right"></a>

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
</template>
<style scoped></style>

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
