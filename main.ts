tinkercademy.crashSensorSetup(DigitalPin.P0)
let strip = neopixel.create(DigitalPin.P2, 1, NeoPixelMode.RGB)
servos.P1.setAngle(180)
basic.forever(function () {
    if (tinkercademy.crashSensor()) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
        servos.P1.setAngle(90)
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        servos.P1.setAngle(180)
    }
})
