module DarkenColor = {
  type rgb = {
    r: int;
    g: int;
    b: int
  };;

  let parse_hex s = int_of_string ("0x" ^ s);;

  let hex2rgb hex =
    Js.Re.fromString "^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$"
      |. Js.Re.exec_ hex (* https://bucklescript.github.io/bucklescript/api/Js_re.html *)
      |. Belt.Option.map (Js.Re.captures) (* https://bucklescript.github.io/bucklescript/api/Belt.Option.html *)
      |. Belt.Option.map (Js.Array.map (Js.Nullable.toOption)) (* https://bucklescript.github.io/bucklescript/api/Js.Array.html and https://bucklescript.github.io/bucklescript/api/Js.Nullable.html *)
      |. Belt.Option.map (Js.Array.map (fun x -> Belt.Option.map x parse_hex))
      |. (function
        | Some [| Some _; Some r; Some g; Some b |] -> Some { r = r; g = g; b = b };
        | _ -> None
      )
      ;; (* these double semicolons are fukin important! *)
};;
