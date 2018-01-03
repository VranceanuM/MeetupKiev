<template>
  <v-container>
      <v-layout row wraper>
          <v-flex xs12 md10 offset-md2 mt-5>
              <v-card class="info">
                  <v-container fluid>
                      <v-layout row>
                          <v-flex xs6 sm4 md3>
                            <v-card-media
                            src="http://destinations.com.ua/images/Articles2016/August2016/Kiev_must_see_places/shutterstock_351603791.jpg"
                            height="200px"
                            >
                            </v-card-media>
                          </v-flex>
                          <v-flex xs6 sm8 md9>
                              <v-card-title primary-title >
                                <div>
                                    <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                                    <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                               <v-btn flat class="white--text" to="/meetups/1">
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
    
</script>