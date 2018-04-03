package config

import (
	"encoding/json"
	"os"
)

var (
	DefaultConfig = &impl{}
	configPath    = "config/config.json"
)

func init() {
	configFile, err := os.Open(configPath)
	if err != nil {
		panic(err)
	}
	defer configFile.Close()

	jsonParser := json.NewDecoder(configFile)
	jsonParser.Decode(DefaultConfig)
}
