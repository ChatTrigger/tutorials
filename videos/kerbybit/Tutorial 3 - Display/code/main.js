var SimpleDisplay = new Display()
SimpleDisplay.setBackground("per line")
SimpleDisplay.setRenderLoc(5, 5)
SimpleDisplay.setLine(0, "&cSimple&6Display")

register("tick", function() {
    SimpleDisplay.setLine(1, 
        Math.round(Player.getX()) + "&7x &r" 
        + Math.round(Player.getY()) + "&7y &r"
        + Math.round(Player.getZ()) + "&7z &r"
    )

    SimpleDisplay.setLine(2,
        "&e" + Server.getIP() 
        + " &a" + Server.getPing()
    )
})
