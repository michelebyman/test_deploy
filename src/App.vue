<template>
    <div class="wrapper-column">
        <div @click="lightOnOff()" class="wrapper-center-content">
            <div class="left-nav">
                <div class="about">
                    <p @click="navigate" class="nav-lg about">About</p>
                </div>
                <div class="mywork">
                    <p @click="navigate" class="nav-lg mywork">My Work</p>
                </div>
            </div>
            <div class="ipad">
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
                    <vue-page-transition name="fade-in-up">
                        <router-view />
                    </vue-page-transition>
                </div>
                <div @click="navigate" class="on-off-button">
                    <div @click="navigate" v-if="homeScreen" class="light"></div>
                </div>
            </div>
            <div class="right-nav">
                <div class="contact">
                    <p @click="navigate" class="nav-lg contact">Contact</p>
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
            homeScreen: true
        };
    },
    mounted() {
        setInterval(this.getTime, 1000);
    },
    methods: {
        lightOnOff() {
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
        },
        navigate(e) {
            console.log("fix later!");
            console.log(e.target.className);
            console.log(this.$route.path);

            switch (e.target.className) {
                case "nav-lg about":
                    this.$router.push("/about");
                    break;
                case "nav-lg mywork":
                    this.$router.push("/mywork");
                    break;
                case "nav-lg contact":
                    this.$router.push("/contact");
                    break;
                case "on-off-button":
                    this.$router.push("/");
                    break;

                default:
                    break;
            }
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
    position: sticky;
    top: 0rem;
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
        background: #f06744;
    }
    .wrapper-center-content {
        height: 85vh;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(1, 1fr);

        background: #abd2d7;
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
    }

    .lower-backgroundColor {
        height: 15vh;
        background-color: #74a4a4;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    footer {
        color: white;
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
