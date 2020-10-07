package darken_color

import scala.scalajs.js
import scala.scalajs.js.annotation._

class RGB(val r: Int, val g: Int, val b: Int) extends js.Object

@JSExportTopLevel("DarkenColor")
object DarkenColor {
  @JSExport
  def hex2rgb(s: String): RGB = {
    val re = """^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$""".r

    val rgbStr = s match {
      case re(rStr, gStr, bStr) => Some((rStr, gStr, bStr))
      case _ => None
    }

    rgbStr.map (x => new RGB(Integer.parseInt(x._1, 16), Integer.parseInt(x._2, 16), Integer.parseInt(x._3, 16))).getOrElse(null)
  }
}
