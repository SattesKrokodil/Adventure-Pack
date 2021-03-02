info("Hello From 'Slight' Gui Modifications cts script")

mainMenu {
    enabled = true 
	
    splashText {
        enabled = true
        splashesEnabled = false
    }

    background {
        clearBackgrounds()
        backgroundStayLength = 10000
        backgroundFadeLength = 10000
        renderGradientShade = false
        image {
            texture = file("config/slightguimodifications/background.png")
        }
    }

    removeMinecraftLogo()
    removeEditionBadge()
    clearAllButtons()

    label {
        position {
            x = 2
            y { it - 20 }
        }

        text = literal("AP v4.3.1 for Minecraft 1.16.5")
        align = "left"
        color = 0xFFFFFF
        shadow = true
        hoveredColor = 0xFFFFFF

		
        // Mouse Click Function, default is nothing, here's a list of options
      
        onClicked = nothing()
        
    }

	//SINGLEPLAYER
    button {
        position {
            x = 60
            y = 65
        }
        width = 100
        height = 20

        // You can create a text with "literal" or "translatable" if you want to translate with Resource Packs
        text = literal("Singleplayer")
        // The alignment here can be "left", "center" or "right", default is "left"
        align = "left"
        // Mouse Click Function, default is nothing, look up see the list
        onClicked = singleplayer()
		
    }
	//MULTIPLAYER
    button {
        position {
            x = 50
            y = 95
        }
        width = 100
        height = 20

        // You can create a text with "literal" or "translatable" if you want to translate with Resource Packs
        text = literal("Multiplayer")
        // The alignment here can be "left", "center" or "right", default is "left"
        align = "left"
        // Mouse Click Function, default is nothing, look up see the list
        onClicked = multiplayer()
		
    }
	
	//BISECTHOSTING
    button {
        position {
            x = 40
            y = 125
        }
        width = 100
        height = 20

        // You can create a text with "literal" or "translatable" if you want to translate with Resource Packs
        text = literal("Rent a Server")
        // The alignment here can be "left", "center" or "right", default is "left"
        align = "left"
        // Mouse Click Function, default is nothing, look up see the list
        onClicked = url("https://bisecthosting.com/adventurepack")
		
    }
	
	//DISCORD
    button {
        position {
            x = 33
            y = 155
        }
        width = 100
        height = 20

        // You can create a text with "literal" or "translatable" if you want to translate with Resource Packs
        text = literal("Discord")
        // The alignment here can be "left", "center" or "right", default is "left"
        align = "left"
        // Mouse Click Function, default is nothing, look up see the list
        onClicked = url("https://discord.gg/dnkkmKk")
		
    }
	
	//MODS
	button {
        position {
            x = 40
            y = 185
        }
        width = 100
        height = 20

        // You can create a text with "literal" or "translatable" if you want to translate with Resource Packs
        text = literal("Mod Menu")
        // The alignment here can be "left", "center" or "right", default is "left"
        align = "left"
        // Mouse Click Function, default is nothing, look up see the list
        onClicked = modMenu()
		
    }
	
	//OPTIONS 
	button {
        position {
            x = 50
            y = 215
        }
        width = 100
        height = 20

        // You can create a text with "literal" or "translatable" if you want to translate with Resource Packs
        text = literal("Options")
        // The alignment here can be "left", "center" or "right", default is "left"
        align = "left"
        // Mouse Click Function, default is nothing, look up see the list
        onClicked = options()
		
    }
	
	//QUIT
	button {
        position {
            x = 60
            y = 245
        }
        width = 100
        height = 20

        // You can create a text with "literal" or "translatable" if you want to translate with Resource Packs
        text = literal("Quit")
        // The alignment here can be "left", "center" or "right", default is "left"
        align = "left"
        // Mouse Click Function, default is nothing, look up see the list
        onClicked = exit()
		
    }
}