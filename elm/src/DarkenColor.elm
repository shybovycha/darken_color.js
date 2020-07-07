module DarkenColor exposing (..)

import List
import Maybe
import Maybe.Extra
import Regex

type alias RGBType = { r: Int, g: Int, b: Int }

hex2rgb : String -> Maybe RGBType
hex2rgb hex =
    Regex.fromString "^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$"
        |> Maybe.map (\regex -> Regex.find regex hex)
        |> Maybe.map (List.map .match)
        |> Maybe.map (List.map String.toInt)
        |> Maybe.andThen (Maybe.Extra.combine)
        |> Maybe.andThen constructRGB

constructRGB list =
    case list of
        [ r, g, b ] -> Maybe.Just { r = r, g = g, b = b }
        _ -> Maybe.Nothing
