const App = require("./App")

App.newUser("Isaac Pontes","isaac@email.com")
App.newUser("Lucas Queiroga","lucas@email.com")
App.newUser("Juliana Conde","juliana@email.com")

App.makeDeposit("isaac@email.com", 100)

App.makeTransfer("isaac@email.com","lucas@email.com",20)

App.ChangeLoanFee(10)
App.makeLoan("juliana@email.com",2000,24)

console.log(App.findUser("isaac@email.com"))
console.log(App.findUser("isaac@email.com").account)
console.log(App.findUser("lucas@email.com"))
console.log(App.findUser("lucas@email.com").account)
console.log(App.findUser("juliana@email.com"))
console.log(App.findUser("juliana@email.com").account)
console.log(App.findUser("juliana@email.com").account.allLoans[0].Installments)
