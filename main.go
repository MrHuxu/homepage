package main

import (
	"github.com/MrHuxu/homepage/server/config"
	"github.com/MrHuxu/homepage/server/web"
)

func main() {
	server := web.NewServer(config.Config)
	server.Run()
}
