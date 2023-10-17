import { createApp } from 'vue';
import App from './App.vue'
import Friendlist from './components/FriendContact.vue'
import InputData from './components/ContactInput.vue'
const app=createApp(App);

app.component('Friend-contact',Friendlist)
app.component('input-data',InputData)

app.mount("#app")
