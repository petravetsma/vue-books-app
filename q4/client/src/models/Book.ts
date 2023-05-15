/**
 * Object models of the book
 */
export class Book {

    /**
     * Author of the book
     */
    author: string = "default";

    /**
     * link to cover?
     * @private
     */
    cover: string = "default";

    /**
     * Unique "slug" identifier for getting this book from URL
     */
    slug: string = "default";

    /**
     * An outline of the plot of the book
     */
    synopsis: string = "default";

    /**
     * Title of the book.
     */
    title: string = "default";

    /**
     * Rating of the book in range 0 - 10
     * One digit after decimal
     */
    rating: string = "0";

    /**
     * Did the book upvote by the user
     *
     * true - upvoted
     * false - not upvoted
     */
    private _upvoted: boolean = false;

    /**
     * The number of upvotes for the book
     */
    private _upvotes: number = 0;

    get upvote(): boolean {
        return this._upvoted;
    }

    set upvote(upvote: boolean) {
        this._upvoted = upvote;
    }

    get upvotes(): number {
        return this._upvotes;
    }

    set upvotes(upvotes: number) {
        this._upvotes = upvotes;
    }

    addUpvote() {
        this._upvotes += 1;
    }

    removeUpvote() {
        this._upvotes -= 1;
    }

    /**
     * Change upvote parameter to reverse value
     * And remove/add 1 from {@link _upvotes}
     */
    reverseUpvote(): void {
        if (this._upvoted) {
            this.removeUpvote();
        } else {
            this.addUpvote();
        }
        this._upvoted = !this._upvoted;
    }

    /**
     * @private - prevent usage of model without set params
     */
    private constructor() {}

    static deserialize(data: any): Book {
        return Object.assign(new Book(), data);
    }

    static default(): Book {
        return new Book();
    }
}