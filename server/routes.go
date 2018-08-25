package server

import (
	"github.com/gin-gonic/gin"
)

func (s *server) registerRoutes() {
	s.GET("/", func(ctx *gin.Context) {
		ctx.Set("res", map[string]interface{}{
			"meta":  "xhu's homepage",
			"title": "xhu",
		})
	})
}
