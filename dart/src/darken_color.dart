class RGB {
  int r;
  int g;
  int b;

  RGB(this.r, this.g, this.b);
}

class DarkenColor {
  static RGB hex2rgb(String s) {
    RegExp re = new RegExp(r"^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$");

    Iterable<RegExpMatch> matches = re.allMatches(s);

    if (matches.length < 1) {
      return null;
    }

    RegExpMatch match = matches.first;

    String rStr = match.group(1);
    String gStr = match.group(2);
    String bStr = match.group(3);

    int r = int.tryParse(rStr, radix: 16);
    int g = int.tryParse(gStr, radix: 16);
    int b = int.tryParse(bStr, radix: 16);

    return new RGB(r, g, b);
  }
}
