export class Module {
    private _id?: number
    private name: string = ''
    private objective: string = ''
    private _courseId?: number

    get id() {
        return this._id === undefined ? 0 : this._id
    }
    
    set id(val: number) {
      this._id = val
    }
    
    //@TODO Trouver un moyen de pas devoir interchanger les _  ( nécessaire pour l'envoie de donner vers le backend )
    get _name() {
      return this.name
    }
    
    set _name(val: string) {
      this.name = val
    }
    
    get _objective() {
      return this.objective
    }
    
    set _objective(val: string) {
      this.objective = val
    }

    get courseId(){
        return this._courseId === undefined ? 0 : this._courseId
    }

    set courseId(value: number){
        this._courseId = value
    }
}
