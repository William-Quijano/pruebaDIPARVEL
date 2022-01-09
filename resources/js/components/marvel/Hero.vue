<template>
    <div>

        <div class="d-flex justify-content-center flex-row flex-wrap" style="background-color: #ff6600;"  >

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" width="100%" style="margin-bottom: 5em" alt="">
            <hr>
            <div class="card" v-for="pokemon in pokemons" :key="pokemon.id" v-on:click="showDetail(pokemon.id)"  style="width: 8rem;margin-left: 1em;margin-bottom: 2em;box-shadow: 10px 11px 8px;border-radius: 15%;cursor: pointer ">
                <img class="card-img-top" :src="imgUrl + pokemon.id + '.png'" style="border-radius: 20%" alt="Card image cap">
                <h6 class="text-dark text-center">{{pokemon.name}}</h6>
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
            imgUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
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
        showDetail(id){
            this.axios.get('https://pokeapi.co/api/v2/pokemon/'+id)
            .then(result => {
                let type = []
                let han = []
                result.data.types.forEach(data => { type.push('<span class="badge badge-dark">' + data.type.name + '</span>') })
                result.data.abilities.forEach(data => { han.push('<span class="badge badge-dark">' + data.ability.name + '</span>') })
               this.$swal({
                   html:'<img src="'+this.imgUrl + id + '.png" style="width:10em;background-color:#FAD86A;border-radius: 50%">' +
                       '<h4 class="text-dark">' + result.data.name + '</h4>'+
                        '<p style="box-shadow: 0px 2px 5px 3px black;background-color: #FAD86A">Experiencia : ' + result.data.base_experience + ' px</p>' +
                       '<p style="box-shadow: 0px 2px 5px 3px black;background-color: #FAD86A">Altura : ' + (result.data.height/10).toFixed(1) + ' m</p>' +
                       '<p style="box-shadow: 0px 2px 5px 3px black;background-color: #FAD86A">Peso : ' + (result.data.weight/10).toFixed(1) + ' kg</p>' +
                       '<h4 class="text-dark">Tipo de pokemon</h4>' +
                       '<div>' + type + '</div>' +
                       '<h4 class="text-dark">Habilidades</h4>' +
                       '<div>' + han + '</div>',

                   imageHeight:200,
                   background:'#ff8f36',
               })
            })
        }
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
