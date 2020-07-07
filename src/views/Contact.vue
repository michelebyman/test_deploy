<template>
    <div class="contact-wrapper">
        <h1>
            Contact
            <span class="secondary-color">me</span>
        </h1>

        <p class="background-wrapper">Reach out to me...</p>

        <a class="link-Color-noDecoration" href="mailto:michelebyman@gmail.com">
            <div class="box clickable">
                <span class="secondary-color">Email: &nbsp;</span>
                <span>Click here to send me an email (michelebyman@gmail.com)</span>
            </div>
        </a>
        <div class="box clickable flip-card">
            <a class="link-Color-noDecoration" href="tel:0046-765-825051">
                <div class>
                    <span class="secondary-color">Phone: &nbsp;</span>
                    <span>Click to call me or type in the numbers below in your phone, flip cards by clicking on them</span>
                </div>
            </a>

            <div v-if="flipped" class="phoneCardWrapper">
                <div class="imageWrapper" v-for="card in cards" :key="card.id">
                    <img @click="flipped = !flipped" class="cards" :src="card.image" alt="cards" />
                </div>
            </div>
            <div v-else class="phoneCardWrapper">
                <div
                    class="imageWrapper flip-card-back"
                    v-for="card in flippedCards"
                    :key="card.id"
                >
                    <img @click="flipped = !flipped" class="cards" :src="card.image" alt="cards" />
                </div>
            </div>
        </div>
        <div class="box-email">
            <span class="secondary-color">Adress: &nbsp;</span>
            Upplandsgatan 11,
            214 29 Malmö,
            Sweden
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            url:
                "https://deckofcardsapi.com/api/deck/new/?cards=7H,6S,5H,8S,2D,5D,5C,AS,",
            deck_id: null,
            cards: null,
            flipped: true,
            zero_cards: [
                {
                    image: require("../assets/images/zero.png"),
                    value: "0"
                },
                {
                    image: require("../assets/images/zero.png"),
                    value: "0"
                }
            ],
            flippedCards: [
                {
                    image: require("../assets/images/noll.jpg"),
                    value: "0"
                },
                {
                    image: require("../assets/images/5even.jpg"),
                    value: "7"
                },
                {
                    image: require("../assets/images/5ix.jpg"),
                    value: "6"
                },
                {
                    image: require("../assets/images/five.jpg"),
                    value: "5"
                },
                {
                    image: require("../assets/images/eight.jpg"),
                    value: "8"
                },
                {
                    image: require("../assets/images/two.jpg"),
                    value: "2"
                },
                {
                    image: require("../assets/images/five.jpg"),
                    value: "5"
                },
                {
                    image: require("../assets/images/noll.jpg"),
                    value: "0"
                },
                {
                    image: require("../assets/images/five.jpg"),
                    value: "5"
                },
                {
                    image: require("../assets/images/one.jpg"),
                    value: "1"
                }
            ]
        };
    },
    mounted() {
        this.getEightCards();
    },
    methods: {
        //fetching 8 specific cards
        getEightCards() {
            fetch(this.url)
                .then(data => {
                    return data.json();
                })
                .then(res => {
                    this.deck_id = res.deck_id;
                    this.cardsFromApi();
                })
                .catch(err => {
                    console.error(err);
                });
        },
        cardsFromApi() {
            const url = `https://deckofcardsapi.com/api/deck/${this.deck_id}/draw/?count=8`;
            fetch(url)
                .then(data => {
                    return data.json();
                })
                .then(res => {
                    this.cards = res.cards;
                    this.cards = [...this.cards, ...this.zero_cards];
                    this.sortCardsAsMyPhoneNumber();
                })
                .catch(err => {
                    console.error(err);
                });
        },
        sortCardsAsMyPhoneNumber() {
            const nrs = "0765825051";

            const cards = nrs.split("").map(nr => {
                const card = this.cards.find(
                    card =>
                        card.value == nr || (nr == "1" && card.value == "ACE")
                );
                return card;
            });
            this.cards = cards;
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

.link-Color-noDecoration {
    text-decoration: none;
    color: white;
}
.phoneCardWrapper {
    padding-top: 16px;
    max-height: 300px;
    display: flex;
}

.imageWrapper {
    flex-grow: 1;
}

img {
    width: 100%;
}

.cards {
    cursor: pointer;
}

@media screen and (min-width: 1025px) {
    .box:hover {
        padding: 1.5rem 1.5rem;
        background-color: #2f5770;
        transition: all 0.5s ease-out;
    }
}
</style>

