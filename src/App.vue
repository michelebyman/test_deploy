<template>
  <div id="app">
         <div class="info-bar">
                            <p class="info-library">
                                Vue.js
                                <i class="fas fa-wifi"></i>
                            </p>
                            <p class="info-library">{{ time }}</p>
                            <p class="info-library">
                                100%
                                <i class="fas fa-battery-full"></i>
                            </p>
                        </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
        data() {
                return {
                        time: ''
                }
        },
        mounted() {
                setInterval(this.getTime, 1000);
        },
        methods: {
                 getTime() {
            this.time = new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            });
                
        }
        }
}
</script>

<style>
body {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    background-color: #4d4e50;
}
#nav {
  padding: 30px;
  /* position: sticky;
  top: 0; */
 background-color: #4d4e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.info-bar {
        width: 100%;
    color: white;
    background-color: #4d4e50;
    font-size: 0.7rem;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0px;
}
</style>
