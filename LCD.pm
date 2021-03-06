package LCD;

use strict;
use utf8;

use constant STYLE_1 => 1;
use constant STYLE_2 => 2;

use vars qw (
  $ALTS
  @COLOURS
  %DEFAULT
  $FILTER
  %MAX
  %MIN
  %PATHS
  %STYLES
  $SYMBOLS
  %THEME
  $VALID
  );

BEGIN {

  my ( $i );

  %DEFAULT = (
    alt     => 'fff',
    colour  => '00d0ff',
    height  => 3,
    msg     => 'Uryyb+Jbeyq',
    rate    => 3
    );

  $SYMBOLS = '*\-()[\]_';

  $ALTS = 'A-Z0-9' . $SYMBOLS . '~';

  @COLOURS = ( 'ff69b4', 'e11d21', 'eb6420', 'fbca04', '009800', '207de5', '5319e7', $DEFAULT{ colour } );

  $FILTER = 'a-zA-Z0-9A-Z0-9' . $SYMBOLS . '+ ';

  %MAX = (
    height  => 5,
    rate  => 5
    );

  %MIN = (
    height  => 1,
    rate    => 1
    );

  %PATHS = (
    ( STYLE_1 ) => {
      'a' => { 1 => 1, 2 => 1, 3 => 1, 7 => 1, 8 => 1, 9 => 1, 10 => 1, 14 => 1 },
      'b' => { 1 => 1, 2 => 1, 5 => 1, 7 => 1, 9 => 1, 12 => 1, 14 => 1, 15 => 1, 16 => 1 },
      'c' => { 1 => 1, 2 => 1, 3 => 1, 10 => 1, 15 => 1, 16 => 1 },
      'd' => { 1 => 1, 2 => 1, 5 => 1, 7 => 1, 12 => 1, 14 => 1, 15 => 1, 16 => 1 },
      'e' => { 1 => 1, 2 => 1, 3 => 1, 8 => 1, 9 => 1, 10 => 1, 15 => 1, 16 => 1 },
      'f' => { 1 => 1, 2 => 1, 3 => 1, 8 => 1, 9 => 1, 10 => 1 },
      'g' => { 1 => 1, 2 => 1, 3 => 1, 9 => 1, 10 => 1, 14 => 1, 15 => 1, 16 => 1 },
      'h' => { 3 => 1, 7 => 1, 8 => 1, 9 => 1, 10 => 1, 14 => 1 },
      'i' => { 5 => 1, 12 => 1 },
      'j' => { 7 => 1, 10 => 1, 14 => 1, 15 => 1, 16 => 1 },
      'k' => { 3 => 1, 6 => 1, 8 => 1, 10 => 1, 13 => 1 },
      'l' => { 3 => 1, 10 => 1, 15 => 1, 16 => 1 },
      'm' => { 3 => 1, 4 => 1, 6 => 1, 7 => 1, 10 => 1, 14 => 1 },
      'n' => { 3 => 1, 4 => 1, 7 => 1, 10 => 1, 13 => 1, 14 => 1 },
      'o' => { 1 => 1, 2 => 1, 3 => 1, 7 => 1, 10 => 1, 14 => 1, 15 => 1, 16 => 1 },
      'p' => { 1 => 1, 2 => 1, 3 => 1, 7 => 1, 8 => 1, 9 => 1, 10 => 1 },
      'q' => { 1 => 1, 2 => 1, 3 => 1, 7 => 1, 10 => 1, 13 => 1, 14 => 1, 15 => 1, 16 => 1 },
      'r' => { 1 => 1, 2 => 1, 3 => 1, 7 => 1, 8 => 1, 9 => 1, 10 => 1, 13 => 1 },
      's' => { 1 => 1, 2 => 1, 3 => 1, 8 => 1, 9 => 1, 14 => 1, 15 => 1, 16 => 1 },
      't' => { 1 => 1, 2 => 1, 5 => 1, 12 => 1 },
      'u' => { 3 => 1, 7 => 1, 10 => 1, 14 => 1, 15 => 1, 16 => 1 },
      'v' => { 3 => 1, 6 => 1, 10 => 1, 11 => 1 },
      'w' => { 3 => 1, 7 => 1, 10 => 1, 12 => 1, 14 => 1, 15 => 1, 16 => 1 },
      'x' => { 4 => 1, 6 => 1, 11 => 1, 13 => 1 },
      'y' => { 4 => 1, 6 => 1, 12 => 1 },
      'z' => { 1 => 1, 2 => 1, 6 => 1, 11 => 1, 15 => 1, 16 => 1 },
      '0' => { 1 => 1, 2 => 1, 3 => 1, 7 => 1, 10 => 1, 14 => 1, 15 => 1, 16 => 1 },
      '1' => { 6 => 1, 7 => 1, 14 => 1 },
      '2' => { 1 => 1, 2 => 1, 7 => 1, 8 => 1, 9 => 1, 10 => 1, 15 => 1, 16 => 1 },
      '3' => { 1 => 1, 2 => 1, 7 => 1, 8 => 1, 9 => 1, 14 => 1, 15 => 1, 16 => 1 },
      '4' => { 3 => 1, 7 => 1, 8 => 1, 9 => 1, 14 => 1 },
      '5' => { 1 => 1, 2 => 1, 3 => 1, 8 => 1, 9 => 1, 14 => 1, 15 => 1, 16 => 1 },
      '6' => { 1 => 1, 2 => 1, 3 => 1, 8 => 1, 9 => 1, 10 => 1, 14 => 1, 15 => 1, 16 => 1 },
      '7' => { 1 => 1, 2 => 1, 7 => 1, 14 => 1 },
      '8' => { 1 => 1, 2 => 1, 3 => 1, 7 => 1, 8 => 1, 9 => 1, 10 => 1, 14 => 1, 15 => 1, 16 => 1 },
      '9' => { 1 => 1, 2 => 1, 3 => 1, 7 => 1, 8 => 1, 9 => 1, 14 => 1, 15 => 1, 16 => 1 },
      '*' => { 4 => 1, 5 => 1, 6 => 1, 8 => 1, 9 => 1, 11 => 1, 12 => 1, 13 => 1 },
      '-' => { 8 => 1, 9 => 1 },
      '(' => { 6 => 1, 13 => 1 },
      ')' => { 4 => 1, 11 => 1 },
      '~' => { 5 => 1, 8 => 1, 9 => 1, 12 => 1 },
      '[' => { 2 => 1, 5 => 1, 12 => 1, 16 => 1 },
      ']' => { 1 => 1, 5 => 1, 12 => 1, 15 => 1 },
      '_' => { 15 => 1, 16 => 1 }
      }
    );

  %STYLES = (
    ( STYLE_1 ) => { tracking => [ 6, 8, 10, 12, 14 ], viewbox => '102 158' },
    ( STYLE_2 ) => { tracking => [ 0, 0, 0, 0, 0 ], viewbox => '60 70' }
    );

  %THEME = (
    1 => { image => 'new_mes.png' },
    2 => { image => 'happy_b.png' },
    3 => { image => 'congrat.png' },
    4 => { image => 'happy_a.png' }
    );

  $VALID = 'a-zA-Z0-9A-Z0-9' . $SYMBOLS . '~ ';
  };

1;
