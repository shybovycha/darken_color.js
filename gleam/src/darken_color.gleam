import gleam/int
import gleam/option.{Some}
import gleam/regexp.{Match}
import gleam/result

pub type RGB {
  RGB(r: Int, g: Int, b: Int)
}

fn parse_color(color: String) {
  use re <- result.try(
    result.map_error(
      regexp.from_string("^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$"),
      fn(_) { "can not parse regexp pattern" },
    ),
  )

  case regexp.scan(re, color) {
    [Match(content: _, submatches: [Some(r_str), Some(g_str), Some(b_str)])] ->
      Ok(#(r_str, g_str, b_str))
    _ -> Error("can not match components of a regexp")
  }
}

fn parse_hex(input: String) {
  result.map_error(int.base_parse(input, 16), fn(_) {
    "can not parse " <> input <> " as hexadecimal number"
  })
}

pub fn hex2rgb(color: String) {
  use #(r_str, g_str, b_str) <- result.try(parse_color(color))

  use r <- result.try(parse_hex(r_str))
  use g <- result.try(parse_hex(g_str))
  use b <- result.try(parse_hex(b_str))

  Ok(RGB(r, g, b))
}
