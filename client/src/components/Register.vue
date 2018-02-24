<template>
  <v-layout column>
    <v-flex flex xs10 offset-xs1 sm8 offset-sm2 md6 offset-md3 lg6 offset-lg3 mt-5>
      <v-card class="white elevation-2 mt-5">
        <v-toolbar flat dense color="teal accent-4" dark>
          <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
        </v-toolbar>
        <div class="pr-4 pl-4 pt-2 pb-2" >
          <form name="loginAuthentication">
            <v-text-field
              label="Username"
              type="text"
              name="username"
              v-model="username"
              required
              >
            </v-text-field>
            <br>
            <v-text-field
              label="Password"
              type="password"
              name="password"
              v-model="password"
              required
              >
            </v-text-field>
          </form>
          <br>
          <!-- <div v-html="error" class="error" v-if="error"/> -->
          <div>
            <v-alert outline color="error" v-html="error" :value="error">
            </v-alert>
          </div>
          <v-btn
            outline color="teal accent-4">
            {{title}}
          </v-btn>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      title: 'Register',
      username: '',
      password: '',
      error: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
