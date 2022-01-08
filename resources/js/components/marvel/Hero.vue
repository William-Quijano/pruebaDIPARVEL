<template>
    <div>
        <div class="d-flex justify-content-center flex-row flex-wrap" v-for="Hero in Heros">

            <div class="card"
                 style="width: 18rem;margin-left: 2em;margin-bottom: 2em;box-shadow: 10px 11px 8px;border-radius: 20%">
                <img class="card-img-top" :src="Hero.thumbnail.path" style="border-radius: 20%" alt="Card image cap">
            </div>


        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            Heros: []
        }
    },
    mounted() {
        this.viewHero()
    },
    methods: {
        viewHero() {
            const config = {
                headers: {'Access-Control-Allow-Origin': '*'}
            };
            this.axios.get('https://gateway.marvel.com:443/v1/public/characters?apikey=7e352e8bb8feb633c33ddb6a147af4ee',config)
                .then(resp => {
                    this.Heros = resp.data.results
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>
