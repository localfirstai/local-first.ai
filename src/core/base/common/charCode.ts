export const enum CharCode {
  // ----- Control characters
  Null = 0,
  Backspace = 8, // \b
  Tab = 9, // \t
  LineFeed = 10, // \n
  CarriageReturn = 13, // \r
  Space = 32,

  // ----- Punctuation
  ExclamationMark = 33, // !
  DoubleQuote = 34, // "
  Hash = 35, // #
  DollarSign = 36, // $
  PercentSign = 37, // %
  Ampersand = 38, // &
  SingleQuote = 39, // '
  OpenParen = 40, // (
  CloseParen = 41, // )
  Asterisk = 42, // *
  Plus = 43, // +
  Comma = 44, // ,
  Dash = 45, // -
  Period = 46, // .
  Slash = 47, // /

  // ----- Digits
  Digit0 = 48,
  Digit1 = 49,
  Digit2 = 50,
  Digit3 = 51,
  Digit4 = 52,
  Digit5 = 53,
  Digit6 = 54,
  Digit7 = 55,
  Digit8 = 56,
  Digit9 = 57,

  // ----- Punctuation continued
  Colon = 58, // :
  Semicolon = 59, // ;
  LessThan = 60, // <
  Equals = 61, // =
  GreaterThan = 62, // >
  QuestionMark = 63, // ?
  AtSign = 64, // @

  // ----- Uppercase letters
  A = 65,
  B = 66,
  C = 67,
  D = 68,
  E = 69,
  F = 70,
  G = 71,
  H = 72,
  I = 73,
  J = 74,
  K = 75,
  L = 76,
  M = 77,
  N = 78,
  O = 79,
  P = 80,
  Q = 81,
  R = 82,
  S = 83,
  T = 84,
  U = 85,
  V = 86,
  W = 87,
  X = 88,
  Y = 89,
  Z = 90,

  // ----- Punctuation continued
  OpenSquareBracket = 91, // [
  Backslash = 92, // \
  CloseSquareBracket = 93, // ]
  Caret = 94, // ^
  Underline = 95, // _
  BackTick = 96, // `

  // ----- Lowercase letters
  a = 97,
  b = 98,
  c = 99,
  d = 100,
  e = 101,
  f = 102,
  g = 103,
  h = 104,
  i = 105,
  j = 106,
  k = 107,
  l = 108,
  m = 109,
  n = 110,
  o = 111,
  p = 112,
  q = 113,
  r = 114,
  s = 115,
  t = 116,
  u = 117,
  v = 118,
  w = 119,
  x = 120,
  y = 121,
  z = 122,

  // ----- Punctuation continued
  OpenCurlyBrace = 123, // {
  Pipe = 124, // |
  CloseCurlyBrace = 125, // }
  Tilde = 126, // ~

  // ----- Special characters
  NoBreakSpace = 160, // Unicode Character 'NO-BREAK SPACE' (U+00A0)
}
