import { createRouter, createWebHistory } from 'vue-router'

// general pages
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
// doc pages
import Basics from '@/pages/docs/basics/Basics.vue'
import Phonemes from '@/pages/docs/basics/Phonemes.vue'
// ref pages
import RefPhonemes from '@/pages/docs/references/RefPhonemes.vue'

// define routes
const routes = [
        {path: '/', name: 'Home', component: Home},
        {path: '/about', name: 'About', component: About},

        {path: '/basics', name: 'Basics', component: Basics},
        {path: '/basics/phonemes', name: 'Phonemes', component: Phonemes},
        {path: '/ref/phonemes', name: 'RefPhonemes', component: RefPhonemes}
    ] 

// set up router and have it save scroll position.
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    else {
      return top;
    }
  },
})
export default router