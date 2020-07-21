def Send_message(Type: str, value: number):
    global message_to_send
    message_to_send = "" + str(device_id) + ":" + Type + ":" + convert_to_text(value)
message_to_send = ""
device_id = 0
radio.set_group(1)
radio.set_transmit_power(7)
device_id = 0

def on_forever():
    basic.show_icon(IconNames.YES)
    Send_message("t", input.temperature())
    basic.pause(6000)
basic.forever(on_forever)
