manuel = 0
Licht = 0

def on_button_a():
    global manuel
    if manuel == 1:
        if Licht == 1:
            basic.turn_rgb_led_off()
            Licht = 0
        else:
            basic.set_led_color(Colors.ORANGE)
            Licht = 1
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    global manuel
    if manuel == 0:
        manuel = 1
    else:
        manuel =0
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

def on_forever():
    global Licht
    global manuel
    if manuel == 0:
        if input.light_level() < 50:
            basic.set_led_color(Colors.ORANGE)
            Licht = 1
        else:
            basic.set_led_color(basic.rgb(0, 0, 0))
            Licht = 0
basic.forever(on_forever)