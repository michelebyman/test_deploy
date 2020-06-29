<template>
    <div class="contact-wrapper">
        <h1>
            Contact
            <span class="secondary-color">me</span>
        </h1>

        <p class="background-wrapper">Reach out to me...</p>

        <a class="contact" href="mailto:michelebyman@gmail.com">
            <div class="box clickable">
                <span class="secondary-color">Email: &nbsp;</span>
                <span>Click here to send me an email (michelebyman@gmail.com)</span>
            </div>
        </a>
        <a class="contact" href="tel:0046-765-825051">
            <div class="box clickable">
                <span class="secondary-color">Phone: &nbsp;</span>
                <span>Click to call me</span>
            </div>
        </a>
        <div class="box-email">
            <span class="secondary-color">Adress: &nbsp;</span>
            Välluddevägen 1, lgh 1002,
            352 51 Växjö,
            Sweden
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            addCss: false
        };
    },
    methods: {
        addCssO(e) {
            console.log(this.addCss);
            console.log(e);
            this.addCss = !this.addCss;
        }
    }
};
</script>

<style scoped>
.contact-wrapper {
    padding: 0 1.6rem 0 1.6rem;
    padding-bottom: 2rem;
}
.box,
.box-email {
    border: 0.1rem solid white;
    padding: 1rem 1rem;
    margin: 1rem;
    width: calc(100% - 60px);
    transition: all 0.5s ease-out;
}

.contact {
    text-decoration: none;
    color: white;
}

@media screen and (min-width: 1025px) {
    .box:hover {
        padding: 1.5rem 1.5rem;
        background-color: #2f5770;
        transition: all 0.5s ease-out;
    }
}
</style>

