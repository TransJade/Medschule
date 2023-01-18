manuel = 0
Licht = 0

def on_button_a():
    if manuel == 1:
        if Licht == 1:
            basic.set_led_color(basic.rgb(0, 0, 0))
        if Licht == 0:
            basic.set_led_color(Colors.ORANGE)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    if manuel == 0:
        manuel = 1
    else:
        pass
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

def on_forever():
    global Licht
    if manuel == 0:
        if input.light_level() < 50:
            basic.set_led_color(Colors.ORANGE)
            Licht = 1
        else:
            basic.set_led_color(basic.rgb(0, 0, 0))
            Licht = 0
basic.forever(on_forever)

def on_forever2():
    print(manuel)
forever(on_forever2)