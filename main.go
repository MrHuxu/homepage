package main

import (
	"github.com/MrHuxu/homepage/server/web"
)

func main() {
	server := web.NewServer(13109, "server/web/templates/*", "server/public")
	server.Run()
}
