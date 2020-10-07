module DarkenColor where

import Prelude (join, map, ($), (<#>), (>>=), (>>>))

import Data.Array (catMaybes)
import Data.Array.NonEmpty (drop)
import Data.Int (fromStringAs, hexadecimal)
import Data.Maybe (Maybe(..))
import Data.Nullable (Nullable, toNullable)
import Data.Either (hush)
import Data.String.Regex (regex, match)
import Data.String.Regex.Flags (ignoreCase)

type RGB =
  {
    r :: Int,
    g :: Int,
    b :: Int
  }

constructRGB :: Array Int -> Maybe RGB
constructRGB [ r, g, b ] = Just { r: r, g: g, b: b }
constructRGB _ = Nothing

hex2rgb :: String -> Nullable RGB
hex2rgb hexString =
  toNullable $
  ((hush >>> join) $ (regex "^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$" ignoreCase) <#> (\re -> (match re hexString)))
  <#> (drop 1)
  <#> catMaybes
  <#> (map (fromStringAs hexadecimal))
  <#> catMaybes
  >>= constructRGB
