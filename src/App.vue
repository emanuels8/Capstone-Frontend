<template>
  <div id="app">
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top  align-items-center">
      <div class="container">
        <div class="header-container align-items-center justify-content-between">
          <div class="logo">
            <h1 class="text-light">
              <a href="http://localhost:8080/games"><span>Good Games</span></a>
            </h1>
          </div>

          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="nav-link scrollto " href="http://localhost:8080/games">Games</a></li>

              <li><a class="nav-link scrollto" href="http://localhost:8080/login">Login</a></li>
              <li><a class="getstarted scrollto" href="http://localhost:8080/signup">Signup</a></li>
            </ul>
          </nav>
          <!-- .navbar -->
        </div>
        <!-- End Header Container -->
      </div>
    </header>
    <!-- End Header -->

    <router-view />
    <!-- ======= Footer ======= -->
    <footer id="footer">
      <div class="footer-top">
        <div class="container"></div>
        <router-link to="/games">All Games</router-link>
        |
        <router-link to="/signup">Signup</router-link>
        |
        <router-link to="/login">Login</router-link>
        |
        <router-link to="/logout">Logout</router-link>
      </div>
    </footer>
    <!-- End Footer -->
  </div>
</template>

<style></style>
