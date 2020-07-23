LCD.Style1 = function () {


  function __keyDown( _e ) {
    if ( ! _msgE.is( ':focus' ) ) {
      if ( _e.which == 32 ) __colour();
      }
    }


  function __renderColour() {
    $( 'svg.alt path.on' ).css( 'fill', '#' + _alt );
    $( 'svg.col path.on' ).css( 'fill', '#' + _colour );
    }


  return {

    colour: function () {
      _optionO.rainbow = false;

      _alt = 'fff';

      _colourIdx = _colourIdx == ( COLOURS.length - 1 ) ? 0 : _colourIdx + 1;

      _colour = COLOURS[ _colourIdx ];

      __renderColour();

      LCD.updateURL();
      },


    init: function () {
      $( 'body' ).keydown( __keyDown );

      $( '#colour' ).on( '<% $mobile ? "touchend" : "click" %>', function () { __colour(); ga( 'send', 'event', 'interaction', 'colour', _colour ); } );
      },


    render: function () {
      if ( ! _optionO.rainbow ) __renderColour();
      }

    };

  }();


$( LCD.Style1.init );
