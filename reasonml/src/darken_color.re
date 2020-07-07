type rgb = {
  r: int,
  g: int,
  b: int
};

let parse_hex = (s) => int_of_string("0x" ++ s);

let hex2rgb = (hex) =>
	Js.Re.fromString("^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$")
      -> Js.Re.exec_(hex)
      -> Belt.Option.map (Js.Re.captures)
      -> Belt.Option.map (Js.Array.map (Js.Nullable.toOption))
      -> Belt.Option.map (Js.Array.map ((x) => Belt.Option.map(x, parse_hex)))
      -> ((matches) => switch (matches) {
        | Some([| Some(_), Some(r), Some(g), Some(b) |]) => Some({ r: r, g: g, b: b })
        | _ => None
      });

hex2rgb("bede12") -> Belt.Option.forEach(Js.log);
