let reading = 0
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.forever(function () {
    reading = pins.analogReadPin(AnalogPin.P1)
    led.plotBarGraph(
    reading,
    1023
    )
    if (reading < 500) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        led.plot(0, 1)
        for (let index = 0; index < 120; index++) {
            if (input.buttonIsPressed(Button.A)) {
                basic.showNumber(reading)
                led.plotBarGraph(
                0,
                reading
                )
            }
            basic.pause(500)
            led.toggle(0, 0)
        }
        led.unplot(0, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else {
        if (input.buttonIsPressed(Button.A)) {
            basic.showNumber(reading)
        }
    }
    basic.pause(1000)
})
