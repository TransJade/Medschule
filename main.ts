let manuel = 0
let Licht = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function on_button_a() {
    if (manuel == 1) {
        if (Licht == 1) {
            basic.setLedColor(basic.rgb(0, 0, 0))
        }
        
        if (Licht == 0) {
            basic.setLedColor(Colors.Orange)
        }
        
    }
    
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function on_button_b() {
    let manuel: number;
    if (manuel == 0) {
        manuel = 1
    } else {
        
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
forever(function on_forever2() {
    console.log(manuel)
})
