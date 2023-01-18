let manuel = 0
let Licht = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function on_button_a() {
    
    if (manuel == 1) {
        
        if (Licht == 1) {
            basic.turnRgbLedOff()
            Licht = 0
        } else {
            basic.setLedColor(Colors.Orange)
            Licht = 1
        }
        
    }
    
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function on_button_b() {
    
    if (manuel == 0) {
        manuel = 1
    } else {
        manuel = 0
    }
    
})
basic.forever(function on_forever() {
    
    
    if (manuel == 0) {
        if (input.lightLevel() < 50) {
            basic.setLedColor(Colors.Orange)
            Licht = 1
        } else {
            basic.setLedColor(basic.rgb(0, 0, 0))
            Licht = 0
        }
        
    }
    
})
