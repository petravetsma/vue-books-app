/**
 * Status of downloaded data.
 */
export enum LoadState {

    /**
     * No data has been loaded and there have been no attempts to load data before.
     */
    NOT_LOADED,

    /**
     * Data is being loaded.
     */
    LOADING,

    /**
     * Data has been uploaded successfully.
     */
    LOADED,

    /**
     * An error occurred while loading data.
     */
    HAS_ERROR
}