package config

type Config interface {
	ServerPort() int
	ServerTemplatesPath() string
	ServerPublicPath() string
}

type impl struct {
	Server struct {
		Port          int    `json:"port"`
		TemplatesPath string `json:"templates_path"`
		PublicPath    string `json:"public_path"`
	} `json:"server"`
}

func (i *impl) ServerPort() int {
	return i.Server.Port
}

func (i *impl) ServerTemplatesPath() string {
	return i.Server.TemplatesPath
}

func (i *impl) ServerPublicPath() string {
	return i.Server.PublicPath
}
