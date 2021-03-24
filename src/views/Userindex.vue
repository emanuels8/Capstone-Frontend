<template>
  <div class="row py-5 px-4">
    <div class="col-md-5 mx-auto">
      <!-- Profile widget -->
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
              <h6 class="font-weight-bold mb-0 d-block">12</h6>
              <small class="text-muted">
                <i class="fas fa-image mr-1"></i>
                # of reviews
              </small>
            </li>
            <li class="list-inline-item">
              <h6 class="font-weight-bold mb-0 d-block">3.5</h6>
              <small class="text-muted">
                <i class="fas fa-user mr-1"></i>
                Average Rating
              </small>
            </li>
          </ul>
        </div>
        <div class="px-4 py-3">
          <div class="row">
            <div class="col-lg-6 mb-2 pr-lg-1">
              Valheim
              <img v-bind:src="user.game_cover_art" class="img-fluid rounded shadow-sm" />
            </div>
            <div class="col-lg-6 mb-2 pl-lg-1">
              The Elder Scrolls Online
              <img v-bind:src="user.second_game_cover_art" class="img-fluid rounded shadow-sm" />
            </div>
            <div class="col-lg-6 pr-lg-1 mb-2">
              Borderlands 3
              <img v-bind:src="user.third_game_cover_art" class="img-fluid rounded shadow-sm" />
            </div>
            <div class="col-lg-6 pl-lg-1">
              Crusader Kings III
              <img v-bind:src="user.fourth_game_cover_art" class="img-fluid rounded shadow-sm" />
            </div>
          </div>
        </div>
        <div class="py-4 px-4">
          <div class="d-flex align-items-center justify-content-between mb-3"></div>
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
      user: {},
    };
  },
  created: function() {
    axios.get("/api/user").then(response => {
      console.log("users", response);
      this.user = response.data;
    });
  },
  methods: {},
};
</script>
