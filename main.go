package main

import (
	"github.com/MrHuxu/homepage/server"
	"github.com/MrHuxu/homepage/server/config"
)

func main() {
	server := server.New(config.DefaultConfig)
	server.Run()
}
