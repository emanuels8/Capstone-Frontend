<template>
  <div id="app">
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top  align-items-center">
      <div class="container">
        <div class="header-container align-items-center justify-content-between">
          <div class="logo">
            <h1 class="text-light">
              <a href="index.html"><span>Good Games</span></a>
            </h1>
          </div>

          <nav id="navbar" class="navbar">
            <ul>
              <!-- <li><a class="nav-link" href="#portfolio">GLHF</a></li> -->
            </ul>
          </nav>
          <!-- .navbar -->
        </div>
        <!-- End Header Container -->
      </div>
    </header>

    <router-view />
    <!-- ======= Footer ======= -->
    <footer id="footer">
      <div class="footer-top">
        <div class="container"></div>
      </div>
    </footer>
    <!-- End Footer -->
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/games">All Games</router-link>
    |
    <router-link to="/signup">Signup</router-link>
    |
    <router-link to="/login">Login</router-link>
    |
    <router-link to="/logout">Logout</router-link>
  </div>
</template>

<style></style>
