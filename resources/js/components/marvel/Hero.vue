<template>
    <div>
        <div class="d-flex justify-content-center flex-row flex-wrap"  >

            <div class="card" v-for="pokemon in pokemons" :key="pokemon.id"  style="width: 10rem;margin-left: 2em;margin-bottom: 2em;box-shadow: 10px 11px 8px;border-radius: 20%">
                <img class="card-img-top" :src="imgUrl + pokemon.id + '.png'" style="border-radius: 20%" alt="Card image cap">
            </div>


        </div>
        <div id="scroll-trigger" ref="infinitescrolltrigger">
            <i class="fas fa-spinner fa-spin"></i>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            pokemons:[],
            imgUrl:"",
            nextUrl: "",
            currentUrl:"",
            apiUrl:"https://pokeapi.co/api/v2/pokemon/"
        }
    },

    methods: {
        viewHero() {

            this.axios.get(this.currentUrl)
                .then(resp => {
                    if (resp.status === 200)
                        this.imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
                        return resp
                })
                .then((resp) => {
                    this.nextUrl = resp.data.next
                    resp.data.results.forEach(pokemon => {
                        pokemon.id = pokemon.url.split('/')
                            .filter(function(part) { return !!part }).pop();
                        this.pokemons.push(pokemon);
                    });
                    
                })
                .catch(error => {
                    console.log(error)
                })
        },
        scrollTrigger() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.intersectionRatio > 0 && this.nextUrl) {
                        this.next();
                    }
                });
            });

            observer.observe(this.$refs.infinitescrolltrigger);
        },
        next() {
            this.currentUrl = this.nextUrl;
            this.viewHero();
        },
    },
    created() {
        this.currentUrl = this.apiUrl;
        this.viewHero();
    },
    mounted() {
        this.scrollTrigger();
    }
}
</script>
