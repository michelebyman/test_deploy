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
        <router-view />
    </div>
</template>

<script>
export default {
    data() {
        return {
            time: ""
        };
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
};
</script>

<style>
body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
#app {
    
         font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
      color: #fff;
      background-color: #4d494d;
        min-height: 100vh;

   
}

h1 {
    margin-top: 5rem;
}

h2 {
    font-weight: 300;
}
.secondary-color {
    color: #f06744;
}

.background-wrapper {
    background-color: #57585a;
    padding-left: 0.4rem;
}


.info-bar {
    
    color: white;
    background-color: #4d494d;
    font-size: 0.7rem;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0rem;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
}
</style>
