module.exports = class Installment{
    constructor(valueParcel,numberParcel){
        this.valueParcel = valueParcel
        this.numberParcel = numberParcel
        this.status = "Pending"
    }
}