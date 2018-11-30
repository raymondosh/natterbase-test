import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Question from "./views/Question.vue";
import Successful from "./views/Successful.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      // name: 'home',
      component: Home
    },
    {
      path: "/questions",
      // name: 'question',
      component: Question
    },
    {
      path: "/successful",
      // name: 'successful',
      component: Successful
    }
  ]
});
