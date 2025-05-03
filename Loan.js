const Installment = require("./Installment")

module.exports = class Loan{
    static #fee = 1.05
    constructor(value, Installments ){
        this.value = value
        this.date = new Date()
        this.Installments = []
        for (let i = 1; i <= Installments; i++) {
            this.Installments.push(new Installment((value * Loan.#fee) / Installments,i))
        }
    }

    static get Fee(){
        return Loan.#fee;
    }

    static set Fee(newFee){
        Loan.#fee = 1 + (newFee/100)
    }
}