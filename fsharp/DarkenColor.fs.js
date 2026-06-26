
import { Record } from "./fable_modules/fable-library-js.5.4.0/Types.js";
import { record_type, int16_type } from "./fable_modules/fable-library-js.5.4.0/Reflection.js";
import { match } from "./fable_modules/fable-library-js.5.4.0/RegExp.js";
import { skip, map, toList } from "./fable_modules/fable-library-js.5.4.0/Seq.js";
import { parse } from "./fable_modules/fable-library-js.5.4.0/Int32.js";
import { head, tail, isEmpty } from "./fable_modules/fable-library-js.5.4.0/List.js";

export class RGBType extends Record {
    constructor(r, g, b) {
        super();
        this.r = (r | 0);
        this.g = (g | 0);
        this.b = (b | 0);
    }
}

export function RGBType_$reflection() {
    return record_type("DarkenColor.RGBType", [], RGBType, () => [["r", int16_type], ["g", int16_type], ["b", int16_type]]);
}

export function hex2rgb(hex) {
    const m = match(/^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/gu, hex);
    if (m != null) {
        const _arg = toList(map((x) => (parse(x, 511, false, 16, 16) | 0), map((m_1) => (m_1 || ""), skip(1, m))));
        let matchResult, b, g, r;
        if (!isEmpty(_arg)) {
            if (!isEmpty(tail(_arg))) {
                if (!isEmpty(tail(tail(_arg)))) {
                    if (isEmpty(tail(tail(tail(_arg))))) {
                        matchResult = 0;
                        b = head(tail(tail(_arg)));
                        g = head(tail(_arg));
                        r = head(_arg);
                    }
                    else {
                        matchResult = 1;
                    }
                }
                else {
                    matchResult = 1;
                }
            }
            else {
                matchResult = 1;
            }
        }
        else {
            matchResult = 1;
        }
        switch (matchResult) {
            case 0:
                return new RGBType(r, g, b);
            default:
                return undefined;
        }
    }
    else {
        return undefined;
    }
}

