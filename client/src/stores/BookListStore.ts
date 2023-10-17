import {reactive} from 'vue'
import {BookService} from "@/services/BookService";
import type {Book} from "@/models/Book";
import {LoadStateStore} from "@/stores/LoadStateStore";

/**
 * Reactive store for Book List Page.
 */
const bookListStore = reactive({

    books: [] as Book[],

    service: new BookService(),

    loadStateStore: new LoadStateStore(true),

    isLoaded() {
        return this.loadStateStore.isLoaded;
    },

    isLoading() {
        return this.loadStateStore.isLoading;
    },

    error() {
        return this.loadStateStore.error;
    },

    async loadBooksList() {
        await this.loadStateStore.loadData(async () => {
            this.books = await this.service.getBooksList();
        })
    },
});

export default bookListStore;