<template>
    <div id="navbar">
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-toggle right target="nav-collapse"></b-navbar-toggle>
            <b-navbar-brand size="lg" to="/">Usama Blavins</b-navbar-brand>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/">Home</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>    
    </div>    
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped>
#navbar {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
}

</style>
