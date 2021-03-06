import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Register from '../views/Register.vue'
import store from '../store/index'
import Explore from '../views/Explore.vue'
import CreateDeck from '../views/CreateDeck.vue'
import StudySession from '../views/StudySession.vue'
import Deck from '../views/Deck.vue'
import EditCard from '../views/EditCard.vue'
import StudyDeck from '../views/StudyDeck.vue'
//import SingleCard from '../views/SingleCard.vue'
import ViewCards from '../views/ViewCards.vue'
Vue.use(Router)
/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 *
 * It also is used to detect whether or not a route requires the user to have first authenticated.
 * If the user has not yet authenticated (and needs to) they are redirected to /login
 * If they have (or don't need to) they're allowed to go about their way.
 */
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/explore",
      name: "explore",
      component: Explore,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/user/decks/create",
      name: "createDeck",
      component: CreateDeck,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/user/decks/:id",
      name: "deck",
      component: Deck,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/user/edit/:id/:cardId",
      name: "edit-card",
      component: EditCard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/user/cards",
      name: "viewCards",
      component: ViewCards,
      meta: {
        requiresAuth: true
      }
    },
   /* {
      path: "/user/decks/:id/cards/:cardId",
      name: "card",
      component: SingleCard,
      meta: {
        requiresAuth: true
      }
    },*/
    {
      path: "/user/studySession",
      name: "studySession",
      component: StudySession,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/user/studySession/:deckId",
      name: "studyDeck",
      component: StudyDeck,
      meta: {
        requiresAuth: true
      }
    },
  ]
})
router.beforeEach((to, from, next) => {
  // Determine if the route requires Authentication
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  // If it does and they are not logged in, send the user to "/login"
  if (requiresAuth && store.state.token === '') {
    next("/login");
  } else {
    // Else let them go to their next destination
    next();
  }
});
export default router;
