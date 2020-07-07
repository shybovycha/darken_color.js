module DarkenColor

open System.Text.RegularExpressions

type RGBType = { r: int16; g: int16; b: int16 }

let hex2rgb hex =
    let m = Regex.Match(hex, "^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$")
    if m.Success then
        m.Groups
        |> Seq.cast<Group>
        |> Seq.skip 1 // zero capture group is always the full string, when it matches
        |> Seq.map (fun m -> m.Value)
        |> Seq.map (fun x -> System.Convert.ToInt16(x, 16))
        |> Seq.toList
        |> (function
            | r :: g :: b :: [] -> Some { r = r; g = g; b = b }
            | _ -> None)
    else None
