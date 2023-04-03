input.onButtonPressed(Button.A, function () {
    temp = "" + user_key + "A"
    user_key = temp
    serial.writeLine(user_key)
})
input.onButtonPressed(Button.B, function () {
	
})
let temp = ""
let user_key = ""
let secret = 3791
let key = "BBABAA"
user_key = ""
