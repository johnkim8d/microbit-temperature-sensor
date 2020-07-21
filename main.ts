function Send_message (Type: string, value: number) {
    message_to_send = "" + device_id + ":" + Type + ":" + convertToText(value)
    radio.sendString(message_to_send)
}
let message_to_send = ""
let device_id = 0
radio.setGroup(1)
radio.setTransmitPower(7)
device_id = 2
basic.forever(function () {
    basic.showIcon(IconNames.Yes)
    Send_message("t", input.temperature())
    basic.pause(600000)
})
