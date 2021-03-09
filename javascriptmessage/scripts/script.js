var currentMode = 0 //unused
var nickname = "_"
var imgbbKey = "d3673315b1d1840ddaf1ebafb167c4a6" //public api key

//shorthand for document.getElementById()
function id(id) {
	return document.getElementById(id)
}

//adds event listeners once body has loaded
function onLoad() {
	//press enter when typing in message input to send message
	id("messageInput").addEventListener("keyup", function(event) {
		if(event.key === "Enter" && currentMode == 0) {
			messageSend(id("messageInput").value)
		}
	})
	//when you focus into message input, get rid of emoji drawer
	id("messageInput").addEventListener("focus", function(event) {
		id("emojiDrawer").style.display = "none"
		id("messageSendField").style.bottom = "0em"
	})
	formVar = id("imageForm")
	formVar.addEventListener("submit", function(event) {
		event.preventDefault() //stops the normal form event
		data = new FormData(formVar)
		axios({ //sends form data to imgbb api
			method: "post",
			url: "https://api.imgbb.com/1/upload?key=" + imgbbKey,
			data: data
		}).then(function(res) {
			id("messageInput").value += "?" + res.data.data.image.url //markleft for image link
			id("fileSelectInput").value = null
			id("fileSelectSpan").innerHTML = "No file selected"
			id("messageInput").focus()
		}).catch(function(err) {
			//error stuff
			/*
			updateMessage("<i>" + err + "<br>Check the information tab for a list of error codes</i>")
			id("selectionDiv").style.display = "none" //oh yeah and I added a neko emoji cause you asked me to a few months ago
			*/
		})
	})
	id("fileSelectInput").addEventListener("change", function(event) {
		id("fileSelectSpan").innerHTML = id("fileSelectInput").value.substring(12)
	})
}

//function triggers when you click send
function messageSend(message) {
	//if it's a command, parse it
	if(message.startsWith("/")) {
		parseCommand(message)
	} else {
		//otherwise, run some checks
		if(message.length > 1500) {
			pushMessage(["JSM", "Message cannot be over 1500 characters.", "System Message"])
		} else {
			//send it
			socket.emit("sendMessage", message)
			id("messageInput").value = ""
		}
	}
}

/* *
* message data type:
* [username, content, timestamp, pfpColor]
*/
//activated when sending a message to the screen
function pushMessage(message) {
	messageDiv = createMessageObject(message) //create message element
	id("messagesDiv").appendChild(messageDiv) //append it to bottom of messages
	twemoji.parse(document.body, {
		callback: function(icon, options, variant) {
			switch(icon) {
				case "a9":
				case "ae":
				case "2122":
					return false
			}
			return "".concat(options.base, options.size, "/", icon, options.ext)
		}
	})
	id("messagesDiv").scrollTop = id("messagesDiv").scrollHeight //scroll to bottom
}

//loads more messages from the top instead of appending to bottom
function oppositePushMessage(message) {
	messageDiv = createMessageObject(message)
	id("messagesDiv").insertBefore(messageDiv, id("messagesDiv").children[1])
	twemoji.parse(document.body, {
		callback: function(icon, options, variant) {
			switch(icon) {
				case "a9":
				case "ae":
				case "2122":
					return false
			}
			return "".concat(options.base, options.size, "/", icon, options.ext)
		}
	})
}

//creates a message element
function createMessageObject(message) {
	var messageDiv = document.createElement("div")
	messageDiv.className = "message"
	var messagePfp = document.createElement("div")
	messagePfp.className = "pfp"
	messagePfp.style.backgroundColor = message[3]
	var messageUsername = document.createElement("span")
	messageUsername.className = "username"
	messageUsername.innerHTML = message[0]
	var messageTimestamp = document.createElement("span")
	messageTimestamp.className = "timestamp"
	messageTimestamp.innerHTML = message[2]
	var messageContent = document.createElement("span")
	messageContent.className = "messageText"
	regexMatch = message[1].match(/\?((https?|ftp):\/\/[^\s/$.?#].[^\s]*$)/)
	if(regexMatch) {
		message[1] = message[1].replace(regexMatch[0], "<br><br><img src='" + regexMatch[1] + "'>")
	}
	messageContent.innerHTML = message[1]
	messageDiv.innerHTML = messagePfp.outerHTML + messageUsername.outerHTML + messageTimestamp.outerHTML + "<br>" + messageContent.outerHTML
	return messageDiv
}

//function for various drawers' opening and closing
function toggleDrawers(state) {
	if(state == "emoji") {
		if(id("emojiDrawer").style.display == "none") {
			id("messageInput").blur()
			id("emojiDrawer").style.display = "block"
			id("messageSendField").style.bottom = "15em"
		} else {
			id("emojiDrawer").style.display = "none"
			id("messageSendField").style.bottom = "0em"
		}
	} else if(state == "online") {
		id("onlineDrawer").style.display = "block"
		id("screenBlocker").style.display = "block"
	} else {
		id("screenBlocker").style.display = "none"
		id("onlineDrawer").style.display = "none"
	}
}

//connect to server
var socket = io("https://JSM-v40-Server.rogercronin1.repl.co")

//when a new message arrives, put it onto the screen
socket.on("newMessage", function(data) {
	pushMessage(data)
})

//when you connect for the first time, send over some data
socket.on("newConnect", function(data) {
	lastMessage = data[1] //used for load more messages button
	connections = data[2] //list of online users
	data = data[0] //data is now a backwards list of messages
	for(i = data.length - 1; i > -1; i--) { //send messages in reverse so they appear correctly
		pushMessage(data[i])
	}
	pushMessage(["JSM", "<b>Welcome to JavaScript Message</b><ul><li>Use /help to access commands</li><li>Use /nick to change your display name</li><li>Be kind and respectful to others</li></ul>All system messages will have a <i>white icon</i> and a timestamp of <i>System Message</i>. If something isn't working properly, contact Roger#4803 on Discord.", "System Message"]) //welcome messages
	id("loadMoreButton").setAttribute("onclick", "loadMore('" + lastMessage + "')") //update load more button
})

//when someone joins, leaves, or changes names, update it
socket.on("onlineChange", function(connections) {
	updateOnline(connections)
})

//when the load more button is clicked
socket.on("moreMessages", function(data) {
	//store last message in scrollMessage and scroll screen to that
	scrollMessage = id("messagesDiv").children[1]
	id("messagesDiv").scrollTop = scrollMessage.offsetTop - scrollMessage.scrollTop + scrollMessage.clientTop
	currentScroll = id("messagesDiv").scrollHeight
	lastMessage = data[1] //used for load more messages button
	data = data[0] //data is now a backwards list of messages
	for(i = 0; i < data.length; i++) { //messages need to be backwards, so use normal for loop
		oppositePushMessage(data[i]) //special pushMessage() function
	}
	id("loadMoreButton").setAttribute("onclick", "loadMore('" + lastMessage + "')") //update load more button
	id("messagesDiv").scrollTop = scrollMessage.offsetTop - scrollMessage.scrollTop + scrollMessage.clientTop //scroll back to the previously saved message so it looks seamless
})

socket.on("systemResponse", function(message) {
	pushMessage(message)
})

function loadMore(id) {
	socket.emit("moreMessages", id)
}

function updateOnline(connections) {
	id("onlineDrawer").innerHTML = "<b>Online Users: " + Object.keys(connections).length + "</b><br>"
	Object.values(connections).forEach(connection => {
		var messageDiv = document.createElement("div")
		messageDiv.className = "message"
		var messagePfp = document.createElement("div")
		messagePfp.className = "pfp"
		messagePfp.style.backgroundColor = connection.color
		var messageUsername = document.createElement("span")
		messageUsername.className = "username"
		messageUsername.innerHTML = connection.name + "<br><br>"
		messageDiv.innerHTML = messagePfp.outerHTML + messageUsername.outerHTML
		id("onlineDrawer").appendChild(messageDiv)
	})
}

function parseCommand(message) {
	commands = message.slice(1).split(" ")
	if(commands[0] == "help") {
		pushMessage(["JSM", "<br><ul><li><b>/help</b><br>Displays this message</li><li><b>/nick [nickname]</b><br>Changes your display name</li><li><b>/refresh</b><br>Refreshes the screen, resetting the connection to the server</li></ul>", "System Message"])
		id("messageInput").value = ""
	} else if(commands[0] == "nick") {
		if(message.substring(6).length > 20) {
			pushMessage(["JSM", "Nickname cannot be over 20 characters.", "System Message"])
		} else if(message.substring(6).length < 1) {
			pushMessage(["JSM", "Nickname cannot be 0 characters long.", "System Message"])
		} else {
			username = message.substring(6)
			socket.emit("usernameChange", message.substring(6))
			id("messageInput").value = ""
		}
	} else if(commands[0] == "refresh") {
		location.reload()
	} else if(commands[0] == "video") {
		socket.emit("sendMessage", "<iframe width='560' height='315' src='https://www.youtube.com/embed/" + commands[1] + "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>")
	}
}

function emoji(emoji) {
	id("messageInput").value += emoji
}