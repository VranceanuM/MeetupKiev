<template>
  <v-container>
      <v-layout row wraper v-for="meetup in meetups" :key="meetup.id">
          <v-flex xs12 md10 offset-md2 mt-5>
              <v-card class="info">
                  <v-container fluid>
                      <v-layout row>
                          <v-flex xs6 sm4 md3>
                            <v-card-media
                            :src="meetup.imageUrl"
                            height="200px"
                            >
                            </v-card-media>
                          </v-flex>
                          <v-flex xs6 sm8 md9>
                              <v-card-title primary-title >
                                <div>
                                    <h3 class="headline mb-0">{{meetup.title}}</h3>
                                    <div>{{meetup.date}}</div>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                               <v-btn flat class="white--text" :to="'/meetups/' + meetup.id">
                                   <v-icon left>arrow_forward</v-icon>
                                   View Meetup
                               </v-btn>   
                            </v-card-actions>
                          </v-flex>
                      </v-layout>
                  </v-container>
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</template>
<script>
    export default {
        computed: {
            meetups() {
              return  this.$store.getters.loadedMeetups
            }
        }
    }
</script>