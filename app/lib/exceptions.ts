
export class FetchFailed extends Error {
    constructor(message = 'Fetch data has failed, click to try re-fetch..') {
    super(message)
    this.name = 'FetchFailed'
    }
}