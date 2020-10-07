enablePlugins(ScalaJSPlugin)

name := "darken_color"
scalaVersion := "2.13.1" // or any other Scala version >= 2.11.12

// scalaJSUseMainModuleInitializer := true

scalaJSLinkerConfig ~= { _.withModuleKind(ModuleKind.CommonJSModule) }
