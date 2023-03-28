export class Module {
    private _id?: number
    private _name: string = ''
    private _objective: string = ''
    private _courseId?: number

    get id() {
        return this._id === undefined ? 0 : this._id
    }
    
    set id(val: number) {
      this._id = val
    }
    
    get name() {
      return this._name
    }
    
    set name(val: string) {
      this._name = val
    }
    
    get objective() {
      return this._objective
    }
    
    set objective(val: string) {
      this._objective = val
    }

    get courseId(){
        return this._courseId === undefined ? 0 : this._courseId
    }

    set courseId(value: number){
        this._courseId = value
    }
}
