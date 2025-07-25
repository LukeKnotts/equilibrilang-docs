<script setup></script>

<template>
  <div>
    <main class="sidebar">
      <h1>Documentation</h1>
      <hr />
      <ul>
        <li>
          <router-link to="/">Welcome!</router-link>
        </li>
        <ul>
          <li><router-link to="/about">About</router-link></li>
        </ul>
        <li><router-link to="/basics">Basic Concepts:</router-link></li>
        <ul>
          <li><router-link to="/basics/phonemes">Phonemes</router-link></li>
        </ul>
      </ul>
      <hr />
      <ul>
        <li>Reference Pages</li>
        <ul>
          <li><router-link to="/ref/phonemes">Phoneme List</router-link></li>
        </ul>
      </ul>
    </main>
  </div>
</template>

<style scoped>
.sidebar {
  padding: 10px 10px 10px 5px;
  width: 200px;
  margin-right: 10px;
  background-color: rgb(115, 176, 115);
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

a {
  text-decoration: none;
  color: rgb(236, 236, 236);
}
a:hover {
  color: rgb(0, 4, 140);
}

h1 {
  font-size: 23px;
  padding: 0px 0px 0px 10px;
}

hr {
  padding: 0px 0px 0px 10px;
  margin: none;
}

ul {
  list-style-type: disc;
  color: rgb(236, 236, 236);
  padding: 3px 20px 0px 25px;
  margin: none;
}
ul ul {
  list-style-type: circle;
  font-size: 16px;
}
ul li a {
  font-size: 16px;
  font-family: Georgia, "Times New Roman", Times, serif;
}
</style>
