package server

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Index(c *gin.Context) {
	c.HTML(http.StatusOK, "index.tmpl", gin.H{
		"prd":   IsReleaseMode,
		"title": "xhu",
	})
}

func (server *Server) RegisterRoutes() {
	server.Engine.GET("/", Index)
}
