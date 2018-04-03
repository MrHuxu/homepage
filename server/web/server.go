package web

import (
	"io"
	"os"
	"strconv"

	"github.com/gin-gonic/gin"

	"github.com/MrHuxu/homepage/server/config"
)

var (
	isReleaseMode  = os.Getenv("GIN_MODE") == "release"
	isInsideDocker = os.Getenv("INSIDE_DOCKER") == "true"
)

type Server interface {
	Run() error
}

type impl struct {
	engine *gin.Engine
	port   int
}

func NewServer(cfg config.Config) Server {
	if isReleaseMode {
		gin.SetMode(gin.ReleaseMode)
		gin.DisableConsoleColor()
		logToFile()
	}

	server := &impl{
		engine: gin.Default(),
		port:   cfg.ServerPort(),
	}
	server.engine.LoadHTMLGlob(cfg.ServerTemplatesPath())
	server.engine.Static("/assets", cfg.ServerPublicPath())
	server.registerRoutes()
	return server
}

func (i *impl) Run() error {
	return i.engine.Run(":" + strconv.Itoa(i.port))
}

func logToFile() {
	os.Mkdir("log", os.ModePerm)
	var file *os.File
	file, err := os.OpenFile("log/gin.log", os.O_RDWR|os.O_CREATE|os.O_APPEND, 0600)
	if err != nil {
		file, _ = os.Create("log/gin.log")
	}

	if isInsideDocker {
		gin.DefaultWriter = io.MultiWriter(os.Stdout, file)
	} else {
		gin.DefaultWriter = io.MultiWriter(file)
	}
}
