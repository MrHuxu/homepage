package main

import (
	"github.com/MrHuxu/homepage/server/web"
)

const (
	PORT           = 11011
	TEMPLATES_PATH = "server/web/templates/*"
	PUBLIC_PATH    = "server/public"
)

func main() {
	server := web.NewServer(PORT, TEMPLATES_PATH, PUBLIC_PATH)
	server.Run()
}
