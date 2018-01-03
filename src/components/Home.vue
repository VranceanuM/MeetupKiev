<template>
 <v-container>
     <v-layout row >
         <v-flex xs12 sm12 class="text-md-center">
             <v-btn large router to="/meetups"  class="info">
              Explore Meetups
             </v-btn>
             <v-btn large router to="/meetup/new" class="warning">
              Organize Meetup
             </v-btn>
         </v-flex>
     </v-layout>
     <v-layout row wrap>
         <v-flex xs12>
             <v-carousel style="cursor:pointer;">
                 <v-carousel-item 
                  v-for="meetup in meetups"
                  :src="meetup.imageUrl" 
                  @click='onLoadMeetup(meetup.id)'
                  :key="meetup.id">
                  <div class="title">
                      {{meetup.title}}
                  </div>
                  </v-carousel-item>
             </v-carousel>
         </v-flex>
     </v-layout>
 </v-container>
</template>
<script>
    export default{
       computed:{
           meetups () {
              return this.$store.getters.featuredMeetups
           }
       },
        methods:{
            onLoadMeetup(id){
                this.$router.push('/meetups/' + id)
            }
        }
    }
</script>
<style>
.title{
    position: absolute;
    bottom: 55px;
    background: rgba(0, 0, 0, 0.5);
    color:white;
    font-size: 2em;
    padding: 20px;
}
</style>
