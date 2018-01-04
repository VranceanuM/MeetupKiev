import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        loadedMeetups:[
            { imageUrl: 'http://destinations.com.ua/images/Articles2016/August2016/Kiev_must_see_places/shutterstock_351603791.jpg' 
            , id:'asdfg', 
            title:'Gold Church',
            date:'16.07.17'
           },
            { imageUrl: 'https://kovla.com/blog/wp-content/uploads/2016/05/0_9707e_636c54cf_XL-1.jpg' , 
            id:'assdf', 
            title:'Joging Place on river',
            date:'22.07.17'
            }
        ],
        user: null
    },
    mutations:{
        createMeetup (state, payload){
            state.loadedMeetups.push(payload)
        },
        setUser (state, payload){
            state.user = payload
        }
    },
    actions:{
        createMeetup({commit},payload){
        const meetup ={
           title:payload.title,
           location:payload.location,
           imageUrl:payload.imageUrl,
           description:payload.description,
           date:payload.date,
           id:'asdsadasc'
        }
        commit('createMeetup', meetup)
     },
       signUserUp ({commit}, payload){
           firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
             .then(
                 user => {
                     const newUser = {
                         id:user.uid,
                         registeredMeetups:[]
                     }
                     commit('setUser', newUser)
                 }
             )
             .catch(
                 error => {
                     console.log(error)
                 }
             )
        },
        signUserIn ({commit}, payload){
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
             .then(
                user => {
                    const newUser = {
                        id:user.uid,
                        registeredMeetups:[]
                    }
                    commit('setUser', newUser)
                }
             )
             .catch(
                error => {
                    console.log(error)
                }
            )
        }
    },
    getters:{
        loadedMeetups (state) {
            return state.loadedMeetups.sort((meetupA , meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        featuredMeetups (state , getters) {
            return getters.loadedMeetups.slice(0,5)
        },
        loadedMeetup (state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })
            }
        },
        user (state) {
            return state.user
        }
    }
})