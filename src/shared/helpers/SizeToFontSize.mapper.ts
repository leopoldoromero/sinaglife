import { FontSizeNames } from "@theme/fonts";
import { Size } from "@theme/sizing";

export function sizeToFontSizeMapper(size?: Size): FontSizeNames {
    const dicc: {[key in Size]: FontSizeNames} = {
        xs: "tiny",
        s: 'small',
        m: 'medium',
        l: 'large',
    }

    return size ? dicc[size] : 'base';
}