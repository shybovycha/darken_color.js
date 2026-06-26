type rgb = {
  r: int,
  g: int,
  b: int,
}

let parse_hex = s => Int.fromString("0x" ++ s, ~radix=16)

let hex2rgb = hex =>
  RegExp.fromString("^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$")
  ->RegExp.exec(hex)
  ->Option.map(RegExp.Result.matches)
  ->Option.map(a => Array.slice(a, ~start=0))
  ->Option.map(a => Array.map(a, e => Option.flatMap(e, parse_hex)))
  ->Option.map(parsed =>
    switch parsed {
    | [Some(r), Some(g), Some(b)] => Some({r, g, b})
    | _ => None
    }
  )
