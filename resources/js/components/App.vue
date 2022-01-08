<template>
    <div>
    <div>
        <VueSidebarMenuAkahon
            :menu-items="items" :profile-img="'https://picsum.photos/200/300'"
            profileName="William Quijano"
            :is-exit-button="false"
            :isSearch="false"
            menuTitle="DIPARVEL"
            menu-icon="bxl-tux"
        />
    </div>


        <Hero/>

    </div>
</template>
<script>
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
import Hero from "./marvel/Hero"


export default {

    name: 'component.vue',
    components: {'VueSidebarMenuAkahon':VueSidebarMenuAkahon,'Hero' : Hero},


    data() {
        return {
            items : []
        }
    },
    mounted() {
         this.items =[
            {link: '#',name: 'Heroe', tooltip: 'Heroe', icon:'bx-run'},
            {link: '#',name: 'Series', tooltip: 'Series', icon:' bx-movie-play'}
             ]
    },
    methods :{

    }
}
</script>
