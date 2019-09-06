<template>
    <div class="wrapper-column">
        <div @click="lightOnOff()" class="wrapper-center-content">
            <div class="left-nav">
                <div class="nav-about">
                    <router-link class="nav-lg" to="/about">About</router-link>
                </div>
                <div class="nav-mywork">
                    <div class="text-wrapper">
                        <router-link class="nav-lg" to="/mywork">My Work</router-link>
                    </div>
                </div>
            </div>
            <div class="ipad">
                <div id="app">
                    <div v-sticky class="info-bar">
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
                    <vue-page-transition name="fade-in-up">
                        <router-view />
                    </vue-page-transition>
                </div>
                <router-link to="/">
                    <div @click="lightOnOff" class="on-off-button">
                        <div v-if="homeScreen" class="light"></div>
                    </div>
                </router-link>
            </div>
            <div class="right-nav">
                <div class="book">
                    <div class="cover"></div>
                </div>
                <div class="nav-contact">
                    <router-link class="nav-lg" to="/contact">Contact</router-link>
                </div>
            </div>
        </div>

        <footer class="lower-backgroundColor">
            <p class="footer-copyright">Copyright © Michele Byman</p>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            time: "",
            homeScreen: false
        };
    },
    mounted() {
        setInterval(this.getTime, 1000);
        this.lightOnOff();
    },
    methods: {
        lightOnOff() {
            console.log(this.$route.path);
            console.log(this.homeScreen);

            if (this.$route.path != "/") {
                this.homeScreen = true;
            } else if (this.homeScreen && this.$route.path === "/") {
                this.homeScreen = false;
            }
        },
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
    font-size: 1rem;
    font-weight: 300;
    padding: 0.1rem;
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
    /* position: sticky;
    top: 0rem; */
    /* did a Vue-directive check main js*/
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    z-index: 10000000;
}

.about-menu,
.lower-backgroundColor,
.right-nav,
.left-nav {
    display: none;
}

@media screen and (min-width: 1025px) {
    .wrapper-column {
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-rows: repeat(4,1fr);
    }
    .wrapper-center-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(1, 1fr);

        background: #abd2d7;
    }
    .nav-lg {
        font-size: 1.6rem;
        font-weight: bold;
        color: white;
        transition: all 0.3s ease-out;
        opacity: 0;
        animation: fill 2s ease-out forwards;
        animation-delay: 1s;
        text-decoration: none;
    }
    .nav-lg:hover {
        color: #f06744;
        cursor: pointer;
        transition: all 0.3s ease-out;
    }

    a.router-link-exact-active {
        color: #f06744;
        text-decoration-line: none;
    }

    .nav-about {
        width: 70%;
        background-color: #2f5770;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .nav-about::after {
        position: absolute;
        content: "";
        height: 100%;
        width: 1rem;
        right: 1.1rem;
        background-color: #ffffff;
    }

    .nav-mywork {
        background-color: #645960;
        height: 3rem;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-right: -2rem;
    }

    .text-wrapper {
        background-color: #4d494d;
        height: inherit;
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nav-contact {
        background-color: #75807d;
        width: 80%;
        height: 3rem;
        position: relative;
        margin-left: -1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nav-contact::after {
        content: "";
        width: 0.3rem;
        height: 100%;
        background-color: #2f5770;
        position: absolute;
        right: 0.7rem;
    }
    .nav-contact:before {
        content: "";
        width: 0.3rem;
        height: 100%;
        background-color: #2f5770;
        position: absolute;
        right: 1.2rem;
    }

    .book {
        background-color: #f06744;
        width: 50%;
        height: 6rem;
        border-top-left-radius: 3rem;
        border-bottom-left-radius: 3rem;
        position: relative;
        margin-left: -1rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .cover {
        background-color: white;
        width: 88%;
        height: 4rem;
        border-top-left-radius: 3rem;
        border-bottom-left-radius: 3rem;
        border-right: 0.3rem solid #abd2d7;
        position: relative;
    }

    .cover::after {
        content: "";
        top: 40%;
        right: 0;
        background: #000;
        width: 97%;
        height: 0.1rem;
        border-radius: 50%;
        position: absolute;
        border-right: 0.2rem solid #abd2d7;
        border-left: 0.2rem solid #f06744;
    }
    .cover::before {
        content: "";
        top: 60%;
        right: 0;
        background: #000;
        width: 98%;
        height: 0.1rem;
        border-radius: 50%;
        border-right: 0.1rem solid #abd2d7;
        border-left: 0.1rem solid #f06744;
        position: absolute;
    }

    .ipad {
        margin-top: 3rem;
        padding: 3rem 1rem;
        background: white;
        border-radius: 2rem;
        height: 70vh;
        width: 40vw;
        grid-row-start: 3;
        grid-column-start: 2;
        position: relative;
        box-shadow: 0px 0px 56px -13px rgb(80, 80, 80);
        z-index: 10;
        animation: zoomOut 2s ease-out forwards;
        animation-delay: 2.5s;
        opacity: 0;
    }

    .on-off-button {
        height: 1.5rem;
        width: 1.5rem;
        background-color: #000;
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        right: 50%;
        transform: translate(50%, -50%);
        cursor: pointer;
        display: grid;
        place-items: center;
    }

    .light {
        height: 0.5rem;
        width: 0.5rem;
        background-color: red;
        border-radius: 50%;
        animation: light 2s ease-in alternate infinite;
    }

    .left-nav {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        padding-left: 2rem;
        grid-row-start: 3;

    }
    .right-nav {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-right: 2rem;
        grid-row-start: 3;
    }
    #app {
        max-height: 70vh;
        min-height: 70vh;
        width: 40vw;
        overflow: auto;
        animation: zoomOut 2s ease-out forwards;
        animation-delay: 2.5s;
        opacity: 0;
    }

    .lower-backgroundColor {
        background-color: #74a4a4;
        display: flex;
        justify-content: center;
        align-items:center;
        grid-row-start: 2;
        grid-row-end: 5;
        min-height: 7rem;
    }

    footer {
        color: white;
    }

    @keyframes zoomOut {
        0% {
            transform: scale(1.2);
        }

        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    @keyframes fill {
        to {
            opacity: 1;
        }
    }

    @keyframes light {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
}
</style>
