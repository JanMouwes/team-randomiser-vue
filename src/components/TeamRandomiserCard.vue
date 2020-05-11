<template>
    <div class="card">
        <header class="card-header">
            <span class="card-title">{{ title }}</span>
        </header>
        <team-randomiser class="card-body"/>
    </div>
</template>

<script>
    import TeamRandomiser from "./TeamRandomiser";
    export default {
        name: "TeamRandomiserCard",
        components: {TeamRandomiser},
        props: ['title']
    }
</script>

<style scoped>

</style>