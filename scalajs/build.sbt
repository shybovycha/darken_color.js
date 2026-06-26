enablePlugins(ScalaJSPlugin)

name := "darken_color"
scalaVersion := "3.8.4"

// scalaJSUseMainModuleInitializer := true

scalaJSLinkerConfig ~= { _.withModuleKind(ModuleKind.CommonJSModule) }
