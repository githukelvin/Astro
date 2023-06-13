<script setup>
const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())


</script>

<template>
   <div class="container">
     <div class="ele" v-for="post in data" :key="post.id">
            <h3>{{ post.id }}</h3>
            <h1>{{ post.title }}</h1>
            <p>{{ post.body }}</p>

        </div>
   </div>
</template>

<style scoped>
.container{
    width: min(100%,1440px);
    margin-inline: auto;
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(3,1fr);
}
.ele{
    background: #7eac43;
}
 h1{
        font-size: 1.5rem;
        font-weight: bold;

    }
    p{
        font-size: 1em;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 500;
    }

</style>




