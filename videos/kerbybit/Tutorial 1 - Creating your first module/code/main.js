register("chat", "myChat")
  .setCriteria("<${name}> ${message}")
  
function myChat(name, message, event) {
  cancel(event)
  ChatLib.chat("&7" + name + "&f: " + message)
}
