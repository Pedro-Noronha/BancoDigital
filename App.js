const User = require("./User")
const Deposit = require("./Deposit")
const Transfer = require("./Transfer")
const Loan = require("./Loan")

module.exports = class App{
    static #users = []

    static findUser(email){
        const EmailExist = false
        for(let i=0; i<this.#users.length; i++){
            if (this.#users[i].email == email){
                return this.#users[i]
            }
        }
            return null
    } 

    static newUser(name,email){
       const ExistEmail = App.findUser(email)
       if (!ExistEmail){
        this.#users.push(new User(name,email))
       }
    }

    static makeDeposit(email, value){
        const User = App.findUser(email)
        if(User){
            const NewDeposit = new Deposit(value)
            User.account.newDeposit(NewDeposit)
        }
       
    }

    static makeTransfer(FromUserEmail,receiveUserEmail,value){
        const fromUser = App.findUser(FromUserEmail)
        const receiveUser = App.findUser(receiveUserEmail)
        if (fromUser && receiveUser){
            const NewTransfer = new Transfer(fromUser,receiveUser,value)
            fromUser.account.newTransfer(NewTransfer)
            receiveUser.account.newTransfer(NewTransfer)
        }
    }

    static makeLoan(Useremail,value, numberParcel){
        const UserEmail = App.findUser(Useremail)
        if(UserEmail){
            const NewLoan = new Loan(value,numberParcel)
            UserEmail.account.newLoan(NewLoan)
        }
    }

    static ChangeLoanFee(newFeePercentage){
        Loan.Fee = newFeePercentage
    }

}