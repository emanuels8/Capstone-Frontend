<template>
  <div class="row py-5 px-4">
    <div class="col-md-5 mx-auto">
      <!-- Profile widget -->
      <!-- <div class="users-show">
    <h2>{{ user.username }}</h2>
    <div v-for="review in user.reviews" v-bind:key="review.id">
      {{ review }}
    </div>
    <router-link to="/games">Back to all games</router-link>
  </div> -->
      <div class="bg-white shadow rounded overflow-hidden">
        <div class="px-4 pt-0 pb-4 cover">
          <div class="media align-items-end profile-head">
            <div class="profile mr-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/OOjs_UI_icon_userAvatar-constructive.svg/1024px-OOjs_UI_icon_userAvatar-constructive.svg.png"
                alt="..."
                width="130"
                class="rounded mb-2 img-thumbnail"
              />
            </div>
            <div class="media-body mb-5 text-black">
              <h4 class="mt-0 mb-0">{{ user.username }}</h4>
            </div>
          </div>
        </div>
        <div class="bg-light p-4 d-flex justify-content-end text-center">
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <h6 class="font-weight-bold mb-0 d-block">{{ user.reviews.length }}</h6>
              <small class="text-muted">
                <i class="fas fa-image mr-1"></i>
                # of reviews
              </small>
            </li>
            <li class="list-inline-item">
              <h6 class="font-weight-bold mb-0 d-block">{{ user.average_rating }}</h6>
              <small class="text-muted">
                <i class="fas fa-user mr-1"></i>
                Average Rating
              </small>
            </li>
          </ul>
        </div>
        <div class="px-4 py-3"></div>
        <div class="py-4 px-4">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <p class="mb-0"></p>
            <div v-for="review in user.reviews" v-bind:key="review.id">
              <div class="col-lg-6 pl-lg-1">
                <img v-bind:src="review.game.cover_art" height="200px" width="250px" />
                <h4>{{ review.game.name }}</h4>
                <p>{{ review.description }}</p>

                <AwesomeVueStarRating
                  :star="review.rating"
                  :starsize="starsize"
                  :hasresults="hasresults"
                  :hasdescription="hasdescription"
                  :ratingdescription="ratingdescription"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AwesomeVueStarRating from "awesome-vue-star-rating";
import axios from "axios";
export default {
  components: {
    AwesomeVueStarRating,
  },
  data: function() {
    return {
      user: { reviews: [] },
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
      hasresults: true,
      hasdescription: true,
      starsize: "lg", //xs/6x
    };
  },
  created: function() {
    axios.get("/api/user/" + this.$route.params.id).then(response => {
      console.log("users show", response);
      this.user = response.data;
    });
  },
  methods: {},
};
</script>
