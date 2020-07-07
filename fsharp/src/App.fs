module App

open Fable.Core
open Fable.Core.JsInterop

open DarkenColor

let [<Global>] console: JS.Console = jsNative

console.log(DarkenColor.hex2rgb "bede12")
