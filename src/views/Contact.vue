<template>
    <div class="contact-wrapper">
        <h1>
            Contact
            <span class="secondary-color">me</span>
        </h1>

        <p class="background-wrapper ">Reach out to me...</p>
        <div class="box">
            <span class="secondary-color">Email: &nbsp;</span>
            michelebyman@gmail.com
        </div>
        <div class="box" >
            <span class="secondary-color">Phone: &nbsp;</span>
            (+46) 765-825051
        </div>
        <div class="box">
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
                }
                
             
        },
        methods: {
                        addCssO(e) {
                                console.log(this.addCss);
                                console.log(e);
                                        this.addCss = !this.addCss
                        }
                }


}
</script>

<style scoped>
.back {
            display: block;
                text-align: center;
                position: absolute;
                bottom: 0;
                background: #4d494d;
                left: 50%; 
                 transform: translate(-50%, -50%) 
                
    }


.contact-wrapper {
          padding: 0 1.6rem 0 1.6rem;
           padding-bottom: 2rem;
}
.box {
    border: 0.1rem solid white;
    padding: 25px 15px 25px 15px;
    margin: 1rem;
    width: calc(100% - 60px);
    transition: all 0.5s ease-out;
}





@media screen and (min-width: 1025px) {
        /* .box:hover {
    padding: 10px 5px 10px 5px;
    background-color: #2f5770;
    transition: all 0.5s ease-out;
}   */

}


</style>

