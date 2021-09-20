package main

import (
	"fmt"

	"github.com/vallezw/SheetUploader-Selfhosted/backend/api"
)

func main() {
	showVersion()
	api.Run()
}

func showVersion() {

	asciiArt := `
  ______   __                             __       ______   __        __                              ______   __    __ 
 /      \ |  \                           |  \     /      \ |  \      |  \                            /      \ |  \  |  \
|  $$$$$$\| $$____    ______    ______  _| $$_   |  $$$$$$\| $$____  | $$  ______         __     __ |  $$$$$$\| $$  | $$
| $$___\$$| $$    \  /      \  /      \|   $$ \  | $$__| $$| $$    \ | $$ /      \       |  \   /  \| $$$\| $$| $$__| $$
 \$$    \ | $$$$$$$\|  $$$$$$\|  $$$$$$\\$$$$$$  | $$    $$| $$$$$$$\| $$|  $$$$$$\       \$$\ /  $$| $$$$\ $$| $$    $$
 _\$$$$$$\| $$  | $$| $$    $$| $$    $$ | $$ __ | $$$$$$$$| $$  | $$| $$| $$    $$        \$$\  $$ | $$\$$\$$ \$$$$$$$$
|  \__| $$| $$  | $$| $$$$$$$$| $$$$$$$$ | $$|  \| $$  | $$| $$__/ $$| $$| $$$$$$$$         \$$ $$  | $$_\$$$$ __   | $$
 \$$    $$| $$  | $$ \$$     \ \$$     \  \$$  $$| $$  | $$| $$    $$| $$ \$$     \          \$$$    \$$  \$$$|  \  | $$
  \$$$$$$  \$$   \$$  \$$$$$$$  \$$$$$$$   \$$$$  \$$   \$$ \$$$$$$$  \$$  \$$$$$$$           \$      \$$$$$$  \$$   \$$
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                 
`

	fmt.Println(asciiArt)
}
