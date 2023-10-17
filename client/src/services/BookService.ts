import HttpClient from "@/api/HttpClient";
import {Book} from "@/models/Book";

const BOOKS_LIST_PATH = "/books";

/**
 * Service for getting books.
 */
export class BookService {

    private apiClient: HttpClient = new HttpClient();

    /**
     * Return list of all books.
     */
    async getBooksList(): Promise<Book[]> {

        const {books, meta}  = await this.apiClient.executeGetRequest(BOOKS_LIST_PATH);
        return books.map((book: any) => Book.deserialize(book));
    }

    /**
     * Return requested book by slug param.
     *
     * @param slug - {@link Book.slug}
     */
    async getBook(slug: string): Promise<any> {
        const requestUrl = `${BOOKS_LIST_PATH}/${slug}`;
        const data  = await this.apiClient.executeGetRequest(requestUrl);
        return Book.deserialize(data);
    }
}