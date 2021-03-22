<template>
  <div id="app">
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top d-flex align-items-center">
      <div class="container">
        <div class="header-container d-flex align-items-center justify-content-between">
          <div class="logo">
            <h1 class="text-light">
              <a href="/games"><span>Good Games</span></a>
            </h1>
            <!-- Uncomment below if you prefer to use an image logo -->
            <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
          </div>

          <nav id="navbar" class="navbar">
            <ul>
              <li><router-link to="/games">All Games</router-link></li>
              <li><router-link to="/login">Login</router-link></li>
              <li><router-link to="/logout">Logout</router-link></li>

              <li><a class="getstarted" href="http://localhost:8080/signup">Signup</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <!-- .navbar -->
        </div>
        <!-- End Header Container -->
      </div>
    </header>
    <!-- End Header -->
    <section id="hero" class="d-flex align-items-center">
      <div class="container text-center position-relative" data-aos="fade-in" data-aos-delay="200">
        <h1>The Best Site For Game Recommendations</h1>
        <a href="/signup" class="btn-get-started">GG</a>
      </div>
    </section>
    <!-- End Hero -->

    <router-view />
    <!-- ======= Footer ======= -->
    <footer id="footer">
      <div class="footer-top">
        <div class="container"></div>
        <!-- <router-link to="/games">All Games</router-link>
        |
        <router-link to="/signup">Signup</router-link>
        |
        <router-link to="/login">Login</router-link>
        |
        <router-link to="/logout">Logout</router-link> -->
      </div>
    </footer>
    <!-- End Footer -->
  </div>
</template>

<style></style>
