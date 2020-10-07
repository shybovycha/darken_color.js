package darken_color

import scala.scalajs.js.annotation._

case class RGB(r: Int, g: Int, b: Int)

@JSExportTopLevel("DarkenColor")
object DarkenColor {
  @JSExport
  def hex2rgb(s: String): Option[RGB] = {
    val re = """^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$""".r

    val rgbStr = s match {
      case re(rStr, gStr, bStr) => Some((rStr, gStr, bStr))
      case _ => None
    }

    rgbStr.map (x => RGB(Integer.parseInt(x._1, 16), Integer.parseInt(x._2, 16), Integer.parseInt(x._3, 16)))
  }
}
