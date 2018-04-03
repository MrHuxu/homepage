package web

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func index(c *gin.Context) {
	c.HTML(http.StatusOK, "index.tmpl", gin.H{
		"prd":   isReleaseMode,
		"title": "xhu",
	})
}

func (i *impl) registerRoutes() {
	indexRoutes := i.engine.Group("/")
	{
		indexRoutes.GET("/", index)
	}
}
