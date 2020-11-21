input.onGesture(Gesture.Shake, function () {
    x = randint(1, 6)
})
let x = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showNumber(x)
})
