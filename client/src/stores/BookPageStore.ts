import { reactive } from 'vue'
import {BookService} from "@/services/BookService";
import {Book} from "@/models/Book";
import {LoadStateStore} from "@/stores/LoadStateStore";

/**
 * Reactive store for Book Page.
 */
const bookPageStore = reactive({

    book: Book.default(),

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

    getRating() {
        return `${this.book.rating}/10`
    },

    async loadBook(slug: string) {
        await this.loadStateStore.loadData(async () => {
            this.book = await this.service.getBook(slug);
        })
    },
});

export default bookPageStore;

