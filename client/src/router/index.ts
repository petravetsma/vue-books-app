import { createRouter, createWebHistory } from 'vue-router'
import BookPage, {BOOK_PAGE_PATH} from "@/views/BookPage.vue";
import BooksList, {BOOK_LIST_PATH} from "@/views/BooksList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BooksList
    },
    {
      path: BOOK_PAGE_PATH,
      name: 'book-page',
      component: BookPage,
      props: true
    },
    {
      path: BOOK_LIST_PATH,
      name: 'books-list',
      component: BooksList
    },

  ]
})

export default router
