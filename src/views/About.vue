<template>
    <div class="about">
        <h1>
            About
            <span class="secondary-color">Me</span>
        </h1>
        <h2 class="background-wrapper">Some things I want to share with you...</h2>
        <div class="grid-about">
            <div class="wrapper-animation">
                <div class="background-circle"></div>
                <img src="../assets/images/portrait.jpg" alt />
            </div>

            <div class="bio">
                <h2 class="secondary-color">BIO</h2>
                <p>
                    My name is Michele Byman and I recently graduated as a front-end developer at EC Education in Växjö a small town in the south east of Sweden.
                    I am probably not the typical programmer out there, I have a background in sales and in the health field.
                    I am a social guy with lots of interest in skateboarding, health and meditation beside my interest to be a good developer.
                    I love solving problems so my brain gets to work intensely!
                </p>
            </div>

            <div class="job job-1">
                <a class="card-a" href="https://www.linkedin.com/in/michelebyman" target="_blank">
                    <h3>Student @ EC-Education</h3>
                    <h6>Front-End Developer</h6>
                    <p>Classes I have taken:</p>
                    <ul>
                        <li>APIs for Backend</li>
                        <li>Advanced JavaScript with React</li>
                        <li>Advanced JavaScript with Angular</li>
                        <li>Basic JavaScript with jQuery</li>
                        <li>Communication &amp; Agile Project Methods</li>
                        <li>UX Design &amp; Graphic Imaging</li>
                        <li>HTML5 &amp; CSS3 with SEO</li>
                    </ul>
                </a>
            </div>
            <div class="job job-2">
                <a class="card-a" href="https://www.linkedin.com/in/michelebyman" target="_blank">
                    <h3>IST Group Växjö</h3>
                    <h6>Front-end developer</h6>
                    <p>
                        Worked with Vue.js, JavaScript, Vuetify, git, Bitbucket, Jira, and Java for the backend.
                        Have been working with migration of old Vue and Vuetify to the latest version and implemented new functionality and design.
                    </p>
                </a>
            </div>
            <div class="job job-3">
                <a class="card-a" href="https://www.linkedin.com/in/michelebyman" target="_blank">
                    <h3>Go Brave</h3>
                    <h6>Front-end developer</h6>
                    <p>Worked with, Wordpress, Divi, Vue.js, Git, PHP, SCSS, CSS and JavaScript</p>
                </a>
            </div>
        </div>
    </div>
</template>


<script>
export default {};
</script>

<style scoped>
.about {
    padding: 0 1.6rem 0 1.6rem;
}
.grid-about {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
        "bioimage bioimage bioimage"
        "bio bio bio"
        "job1 job1 job1"
        "job2 job2 job2"
        "job3 job3 job3";

    grid-gap: 1rem;
    padding-bottom: 2rem;
}

.wrapper-animation {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
}

.background-circle {
    border-radius: 50%;
    height: 8.3rem;
    width: 8.3rem;
    background: linear-gradient(90deg, #f06744, #fff);
    animation: rotate 4s steps(60, end) infinite;
}

img {
    border-radius: 50%;
    height: 8rem;
    grid-area: bioimage;
    position: absolute;
}

.bio {
    grid-area: bio;
}

.job-1 {
    grid-area: job1;
}
.job-2 {
    grid-area: job2;
}
.job-3 {
    grid-area: job3;
}

.job {
    background: #6b6b6b;
    padding: 0.5rem;
    border-right: #f06744 5px solid;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease-out;
}

.job:hover {
    background: #414040;
}

.eBook {
    color: #f06744;
}
.eBook:hover {
    color: #fff;
}

.card-a {
    color: white;
    text-decoration: none;
}

@keyframes rotate {
    to {
        transform: rotate(360deg);
    }
}

@media screen and (min-width: 1024px) {
    .grid-about {
        grid-template-columns: repeat(3, 1fr);
        grid-template-areas:
            "bioimage bio bio "
            "job3 job1 job1"
            "job2 job2 job2";
    }
}
</style>