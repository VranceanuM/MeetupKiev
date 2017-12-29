<template>
<v-app>
  <v-toolbar dark class="light-blue lighten-2">
    <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
     <v-toolbar-title>Kiev Meetup</v-toolbar-title>
     <v-spacer></v-spacer>
     <v-toolbar-items class="hidden-xs-only">
       <v-btn flat>
         <v-icon>supervisor_account</v-icon>
         View Meetups</v-btn>
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
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>supervisor_account</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>View Meetups</v-list-tile-content>
        </v-list-tile>
      </v-list>
   </v-navigation-drawer>
    <main>
 
    </main>
</v-app>
</template>

<script>
  export default {
    data () {
      return {
       drawer:false
      }
    }
  }
</script>
<style scoped>

h1{
  color:accent;
}
</style>
