<template>
    <div id="home">
        <img id="profilePic" alt="Vue logo" src="../assets/ub.png">
        <Welcome id="temp1" msg="Welcome" />
    </div>
</template>

<script>
import Welcome from '../components/Welcome.vue';

export default {
    name: 'Home',
    components: {
        Welcome,
    }
}
</script>

<style>
#profilePic {
  width: 35%;
  border-radius: 50%;
  margin-bottom: 20px;
}
</style>