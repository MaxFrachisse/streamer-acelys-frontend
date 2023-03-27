export class CourseModel {
    private _id?: number
    private _title: string = ''
    private _objective: string = ''

    get id() {
        return this._id === undefined ? 0 : this._id
    }

    set id(val: number) {
        this._id = val
    }

    get title() {
        return this._title
    }

    set title(val: string) {
        this._title = val
    }

    get objective() {
        return this._objective
    }

    set objective(val: string) {
        this._objective = val
    }
}