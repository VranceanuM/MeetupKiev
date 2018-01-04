<template>
<v-container>
    <v-layout row wrap class="mb-3">
        <v-flex xs12>
           <v-card>
               <v-card-title>
                  <h2 class="info--text">{{meetup.title}}</h2>
               </v-card-title>
               <v-card-media
                    :src="meetup.imageUrl"
                    height="400px"
                >
                </v-card-media>
                <v-card-text>
                    <div class="info--text">{{meetup.date}}-Where it takes places!</div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, at. Molestias, aliquam explicabo. Minus enim corrupti exercitationem! Ea provident soluta sed, magnam nulla ut laboriosam ipsam. Optio amet dicta consequuntur!
                </v-card-text> 
                <v-card-actions>
                    <v-btn class="info">
                        Register
                    </v-btn>
                </v-card-actions>
           </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>
<script>
    export default {
        props:['id'],
        computed:
         {
           meetup() {
               return this.$store.getters.loadedMeetup(this.id)
               }
        }
    }
</script>