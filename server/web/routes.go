package web

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func Index(c *gin.Context) {
	c.HTML(http.StatusOK, "index.tmpl", gin.H{
		"prd":   IsReleaseMode,
		"title": "React & Go Boilerplate",
	})
}

func (server *Server) RegisterRoutes() {
	indexRoutes := server.Engine.Group("/")
	{
		indexRoutes.GET("/", Index)
	}
}
