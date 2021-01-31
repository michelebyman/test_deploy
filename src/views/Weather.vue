<template>
    <div class="weather-wrapper">
        <p>
            Current temperature in {{ locationName }} is
            {{ currentTemperature }}℃
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            locationName: "Malmö",
            currentTemperature: "",
        };
    },
    mounted() {
        this.getCity();
    },
    methods: {
        async getCity() {
            try {
                const response = await fetch(
                    `http://api.weatherstack.com/current?access_key=${process.env.VUE_APP_WEATHER_API}&query=${this.locationName}`
                );
                const apiResponse = await response.json();
                console.log(apiResponse);
                this.currentTemperature = apiResponse.current.temperature;
                console.log(
                    `Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`
                );
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>

<style scoped>
.weather-wrapper {
    padding: 2rem;
}
</style>

