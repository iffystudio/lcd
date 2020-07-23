LCD.Style2 = function () {


  function __hexToRGB( _hex ) {
    var _rgb;

    _hex = _hex.replace( /^#?([a-f\d])([a-f\d])([a-f\d])$/i, function ( _m, _r, _g, _b ) {
      return _r + _r + _g + _g + _b + _b;
      } );

    if ( _rgb = _hex.match( /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i ) ) {
      return {
        r: parseInt( _rgb[ 1 ], 16 ),
        g: parseInt( _rgb[ 2 ], 16 ),
        b: parseInt( _rgb[ 3 ], 16 )
        };
      }
    else {
      return { r: 0, g: 0, b: 0 };
      }
    }


  function __renderColour() {
    var _hue, _i, _rgb;

    _rgb  = __hexToRGB( _colour );
    _hue  = new RGBColour( _rgb.r, _rgb.g, _rgb.b ).getHSV().h;

    for ( _i = 1; _i <= 35; _i++ ) {
      $( 'rect.' + _i ).css( 'fill', ( new HSVColour( _hue, 100, 100 ) ).getCSSHexadecimalRGB() );

      _hue = _hue + 3;
      }
    }


  return {

    colour: function () {
      _colourIdx = _colourIdx == ( COLOURS.length - 1 ) ? 0 : _colourIdx + 1;

      _colour = COLOURS[ _colourIdx ];

      __renderColour();

      LCD.updateURL();
      },


    init: function () {
      },


    render: function () {
      __renderColour();
      }

    };

  }();


$( LCD.Style2.init );
