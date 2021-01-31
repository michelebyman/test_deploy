<template>
    <div class="weather-wrapper">
        <h1 class="title">Weather App</h1>

        <form class="form" @submit.prevent="getCity(query)">
            <input
                class="inputfield"
                placeholder="City"
                v-model="query"
                type="text"
            />

            <button class="btn">Get Weather</button>
        </form>
        <p v-if="error" class="error-message">
            ❗Please try different typing letters, it might help
        </p>

        <div v-if="previousSearches.length">
            <h3>Previous</h3>
            <button
                class="btn"
                v-for="city in previousSearches.slice().reverse()"
                :key="city._id"
                @click="getCity(city)"
            >
                {{ city }}
            </button>
        </div>

        <div class="card" v-if="currentWeather.temperature && !isLoading">
            <h2>Current temperature in {{ locationName }} <br /></h2>
            <span
                class="icon"
                v-if="
                    currentWeather.temperature <= 15 &&
                    currentWeather.temperature != ''
                "
            >
                🥶
            </span>
            <span
                class="icon"
                v-if="
                    currentWeather.temperature >= 16 &&
                    currentWeather.temperature <= 25
                "
            >
                🧘‍♂️
            </span>
            <span class="icon" v-if="currentWeather.temperature >= 26">
                🥵
            </span>
            <p v-if="currentWeather.temperature != ''">
                {{ currentWeather.temperature }}℃ ,
                {{ currentWeather.weather_descriptions[0] }} and feels like
                {{ currentWeather.feelslike }}
            </p>
        </div>
        <div class="loaderWrapper" v-if="isLoading">
            <div class="pie rotate"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            query: "",
            locationName: "",
            previousSearches: [],
            queryIsEmpty: true,
            currentWeather: [],
            error: false,
            isLoading: false,
        };
    },
    mounted() {
        if (localStorage.getItem("cities")) {
            try {
                this.previousSearches = JSON.parse(
                    localStorage.getItem("cities")
                );
            } catch (e) {
                localStorage.removeItem("cites");
            }
        }
    },
    methods: {
        async getCity(city) {
            this.query = city;
            if (this.query == "") {
                return;
            }

            try {
                this.isLoading = true;

                const response = await fetch(
                    `http://api.weatherstack.com/current?access_key=${process.env.VUE_APP_WEATHER_API}&query=${this.query}`
                );

                const apiResponse = await response.json();

                this.query = "";
                this.previousSearches.push(apiResponse.location.name);
                this.locationName = apiResponse.location.name;
                this.currentWeather = apiResponse.current;

                this.saveCitiesToLocalStorage();

                this.error = false;
                this.isLoading = false;
            } catch (error) {
                console.error(error);
                this.error = true;
                this.isLoading = false;
            }
        },
        saveCitiesToLocalStorage() {
            const nextLocalStorage = [...new Set(this.previousSearches)];

            this.previousSearches = nextLocalStorage.slice(-3);

            localStorage.setItem(
                "cities",
                JSON.stringify(this.previousSearches)
            );
        },
    },
};
</script>

<style scoped>
.weather-wrapper {
    padding: 0 2rem;
}

.title {
    margin: 1rem 0;
}
.form {
    display: flex;
    flex-direction: column;
}

.icon {
    font-size: 4rem;
}

.btn {
    background: #009435;
    border: 1px solid #009435;
    color: white;
    padding: 1rem 2rem;
    border-radius: 8px;
    margin: 1rem;
    cursor: pointer;
}

.inputfield {
    margin-top: 1rem;
    color: black;
    border: 2px dotted black;
    padding: 1rem;
}

.card {
    display: grid;
    place-items: center;
    margin-top: 1rem;
    background: #6b6b6b;
    padding: 2.5rem;
    border-right: #f06744 5px solid;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease-out;
}

.loaderWrapper {
    width: 100%;
    display: grid;
    place-items: center;
}

.pie {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background: conic-gradient(#009435, #f06744);
    margin-top: 4rem;
}

.rotate {
    animation: rotate 2s linear infinite;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>

