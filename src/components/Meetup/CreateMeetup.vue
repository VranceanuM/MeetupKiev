<template>
  <v-container>
      <v-layout>
          <v-flex row xs12>
              <h1 class="display-3 ">Create a new metup</h1>
          </v-flex>
      </v-layout>
      <form @submit.prevent="onCreateMeetup">
      <v-layout>
          <v-flex row xs12 sm6>
              <v-text-field
               name='title'
               label="Title"
               id='title'
               v-model="title"
               required></v-text-field>
          </v-flex>
      </v-layout>
      <v-layout>
          <v-flex row xs12 sm6>
              <v-text-field
               name='location'
               label="Location"
               id='location'
               v-model="location"
               required></v-text-field>
          </v-flex>
      </v-layout>
      <v-layout>
          <v-flex row xs12 sm6>
              <v-text-field
               name='imageUrl'
               label="Image URL"
               id='image-url'
               v-model="imageUrl"
               required></v-text-field>
          </v-flex>
      </v-layout>
      <v-layout row>
          <v-flex xs12 sm6>
              <img :src="imageUrl" style="height:300px;">
          </v-flex>
      </v-layout>
      <v-layout>
          <v-flex row xs12 sm6>
              <v-text-field
               name='description'
               label="Description"
               id='description'
               v-model="description"
               multi-line
               required></v-text-field>
          </v-flex>
      </v-layout>
      <v-layout>
          <v-flex row xs12 >
              <v-btn class="primary" :disabled='!formIsValid' type="submit">Organize Meetup</v-btn>
          </v-flex>
      </v-layout>
      </form>
  </v-container>
</template>
<script>
    export default {
        data() {  
           return{
              title:'',
              location:'',
              imageUrl:'',
              description:''
           }
        },
        computed:{
            formIsValid(){
                return  this.title !== '' && this.location !== ''  && this.imageUrl !== '' && this.description !==''
            }
        },
        methods: {
            onCreateMeetup(){
                const meetupData = {
                    title: this.title,
                    location: this.location,
                    imageUrl: this.imageUrl,
                    description: this.description,
           
                }
                this.$store.dispatch('createMeetup', meetupData)
            }
        }
    }
</script>