<template>
<v-app>
  <v-toolbar dark class="info">
    <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
     <v-toolbar-title> 
       <router-link to="/" tag="span" style="cursor:pointer">Kiev Meetup</router-link>
      </v-toolbar-title>
     <v-spacer></v-spacer>
     <v-toolbar-items  class="hidden-xs-only">
          <v-btn flat
           v-for='item in menuItems' 
          :key="item.title"
          router  
          :to='item.link'>
          <v-icon>{{item.icon}}</v-icon>
          {{item.title}} 
          </v-btn>
     </v-toolbar-items>
  </v-toolbar>
    <v-navigation-drawer
    v-model="drawer"
    hide-overlay:true
    height:100
    light
    temporary
    absolute
    >
      <v-list>
        <v-list-tile 
        v-for='item in menuItems' 
        :key="item.title"
        router  
        :to='item.link'
        >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
   </v-navigation-drawer>

   <v-container >
      <main>
        <router-view></router-view>
      </main>
   </v-container>
</v-app>
</template>

<script>
  export default {
    data () {
      return {
       drawer:false,
       menuItems:[
         {icon:'supervisor_account', title:'View Meetups',link:'/meetups'},
         {icon:'room', title:'Organize Meetups',link:'/meetup/new'},
         {icon:'person', title:'Profile',link:'/profile'},
         {icon:'face', title:'Sign Up',link:'/signup'},
         {icon:'lock_open', title:'Sign In',link:'/signin'},
       ]
      }
    }
  }
</script>
<style scoped>

h1{
  color:accent;
}
</style>
