import {LoadState} from "@/stores/LoadState";

/**
 * Method for changing download status in callback.
 */
type ChangeState = (state: LoadState) => void;

/**
 * Callback for loading data.
 */
type LoadDataCallback = (changeState?: ChangeState) => Promise<any>;

/**
 * Store to track data download status.
 */
export class LoadStateStore {

    private _state: LoadState;

    private _error: unknown;

    private readonly includeLoadingState: boolean;

    constructor(includeLoadingState: boolean = false) {
        this._state = LoadState.NOT_LOADED;
        this.includeLoadingState = includeLoadingState;
    }

    /**
     * Calls the data load callback.
     *
     * Changes status based on download status. The data is considered successfully uploaded,
     * if no exception occurred during their loading.
     *
     * The status can be updated manually using the changeState method passed to the callback.
     * Can be useful in cases where exceptions are handled inside a callback and are not propagated to the top.
     *
     * @param callback function to load data
     */
    loadData(callback: LoadDataCallback): Promise<any> {
        if (this.includeLoadingState) {
            this._state = LoadState.LOADING;
        }

        return callback(this.setState)
            .then((data) => {
                this._state = LoadState.LOADED;
                return data;
            })
            .catch((error) => {
                this._state = LoadState.HAS_ERROR;
                this._error = error;
            });
    }

    private setState: ChangeState = (state: LoadState) => {
        this._state = state;
    }

    /**
     * Data has been uploaded successfully.
     */
    get isLoaded(): boolean {
        return this._state === LoadState.LOADED;
    }
    /**
     * Data is being loaded.
     */
    get isLoading(): boolean {
        return this._state === LoadState.LOADING;
    }

    get error(): unknown {
        return this._error;
    }

}