register("command", "myCommand")
    .setName("tutorial")
function myCommand() {
    myGui.open()
}

var myGui = new Gui()
myGui.registerDraw("drawMyGui")
function drawMyGui() {
    Renderer.drawRect(
        0xffff0000,
        Renderer.screen.getWidth() / 2 - 50,
        Renderer.screen.getHeight() / 2 - 50,
        100, 100
    )
}
