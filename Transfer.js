module.exports = class Transfer{
    constructor(sendUser,receiveUser,value){
        this.sendUser = sendUser
        this.receiveUser = receiveUser
        this.value = value
        this.date = new Date()
    }
}