<template>
    <form>
        <label class="d-flex justify-content-between mb-2">
            <span class="h6 mb-0 align-self-center">Number of teams</span>
            <input
                    v-model="teamCount"
                    class="w-25 form-control"
                    min="1"
                    type="number"
                    value="2"
            />
        </label>

        <label class="d-block">
            <span class="h6">Team members:</span>
            <textarea
                    v-model="teamMemberText"
                    class="form-control d-block mb-2"
                    placeholder="John Smith, Jane Smith"
                    style="resize: none;"
            />
        </label>
        <input v-on:click="handleSubmit" class="btn btn-success" value="Randomise!"/>
        <team-output :teams="teams"/>
    </form>
</template>

<script>
    import randomiseMembers from "../randomise-teams";

    export default {
        name: "TeamRandomiser",
        components: {
            'team-output': {
                template: `<ul>
    <li v-for="(team, index) in teams" :key="team.join(',')">Team {{index + 1}}: {{ team.join(', ') }}</li>
</ul>`,
                props: ["teams"]
            }
        },
        data() {
            return {
                teamCount: 2,
                teamMemberText: "",
                teams: []
            }
        },
        computed: {
            members() {
                return this.teamMemberText.split(',').map(item => item.trim())
            }
        },
        methods: {
            handleSubmit() {
                this.teams = randomiseMembers(this.members, this.teamCount)
            }
        }
    }
</script>

<style scoped>

</style>