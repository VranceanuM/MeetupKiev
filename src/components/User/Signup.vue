<template>
  <v-container>
      <v-layout>
          <v-flex row xs12  sm6 offset-sm3>
              <v-card>
                  <v-card-text>
                      <v-container>
                          <form @submit.prevent="onSignup">
                            <v-layout>
                                <v-flex row xs12 sm6 offset-sm3>
                                    <v-text-field
                                    name='email'
                                    label="Email"
                                    id='email'
                                    v-model="email"
                                    type="email"
                                    required></v-text-field>
                                </v-flex>
                            </v-layout>
                             <v-layout>
                                <v-flex row xs12 sm6 offset-sm3>
                                    <v-text-field
                                    name='password'
                                    label="Password"
                                    id='password'
                                    v-model="password"
                                    type="password"
                                    required></v-text-field>
                                </v-flex>
                            </v-layout>
                             <v-layout>
                                <v-flex row xs12 sm6 offset-sm3>
                                    <v-text-field
                                    name='confirmPassword'
                                    label="Confirm Password"
                                    id='confirmPassword'
                                    v-model="createPassword"
                                    type="password"
                                    :rules="[comparePasswords]">
                                    </v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout>
                                <v-flex row xs12 sm6 offset-sm3>
                                   <v-btn type="submit">Sign Up</v-btn>
                                </v-flex>
                            </v-layout>
                          </form>
                      </v-container>
                  </v-card-text>
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</template>
<script>
    export default {
        data () {
            return {
              email:'',
              password:'',
              createPassword:''
            }
        },
        computed: {
           comparePasswords() {
               return this.password !== this.confirmPasswords ? 'Passwords do not match' : ''
           },
           user () {
               return this.$store.getters.user
           }
        },
        watch: {
            user (value) {
                if(value !== null && value !== undefined){
                    this.$router.push('/meetups')
                }
            }
        },
        methods: {
            onSignup () {
             return this.$store.dispatch('signUserUp', {email:this.email , password:this.password})
            }
        }
    }
</script>