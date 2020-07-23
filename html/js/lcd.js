LCD = function () {

  var _hash,
      _iframe,
      _link,
      _nudge,
      _nudges,
      _timer,
      _width;


  function __colour() {
    if ( _style == <% LCD::STYLE_1 %> ) LCD.Style1.colour();
    else if ( _style == <% LCD::STYLE_2 %> ) LCD.Style2.colour();
    }


  function __bigger() {
    if ( _height < <% $LCD::MAX{ height } %> ) {
      _height++;

      __generate();

      $( this ).toggleClass( 'dim', _height == <% $LCD::MAX{ height } %> );

      $( '#smaller' ).removeClass( 'dim' );

      ga( 'send', 'event', 'interaction', 'bigger', _height );
      }
    }


  function __faster() {
    if ( _rate < <% $LCD::MAX{ rate } %> ) {
      _rate++;

      __updateURL();

      $( this ).toggleClass( 'dim', _rate == <% $LCD::MAX{ rate } %> );

      $( '#slower' ).removeClass( 'dim' );

      ga( 'send', 'event', 'interaction', 'faster', _rate );
      }
    }


  function __fireworks() {
    var _i;

    if ( _optionO.fireworks ) {
      for ( _i = 8 + parseInt( Math.random() * 8 ); _i--; ) {
        setTimeout( 'createFirework( 8, 14, 2, null, null, null, null, null, Math.random() > 0.5, true )', ( _i + 1 ) * ( 1 + parseInt( Math.random() * 1000 ) ) );
        }
      }
    }


  function __generate( _delay ) {
    var _ref;

    if ( _msg ) {
      clearTimeout( _timer );

      _nudge  = 1;
      _ref = LCD.Render.msg( _iframe ), _nudges = _ref.nudges, _width = _ref.width;

      if ( _delay ) {
        setTimeout( __nudge, _delay );
        }
      else {
        __nudge();
        }

      __updateURL();
      }
    }


  function __iframe() {
    try { return window.self !== window.top; }
    catch ( _e ) { return true; }
    }


  function __keyDown( _e ) {
    if ( ! _msgE.is( ':focus' ) ) {
      if ( _e.which == 37 ) __faster();
      else if ( _e.which == 38 ) __bigger();
      else if ( _e.which == 39 ) __slower();
      else if ( _e.which == 40 ) __smaller();
      }
    }


  function __keyPress( _e ) {
    if ( _e.which == 13 ) {
% if ( $mobile ) {
      _msgE.blur();

% }
      _msg = _msgE.val().replace( /\+/g, '~' ).replace( / /g, '+' );

      ga( 'send', 'event', 'interaction', 'message', _msgE.val() );

      _optionO.fireworks = false;

      __generate();

      if ( _msg ) {
        $( '#share' ).fadeIn();
        }
      }
    else {
      return !! String.fromCharCode( _e.which ).match( /[<% $LCD::FILTER %>]/ );
      }
    }


  function __link() {
    open( 'https://' + _link, 'blank' );

    ga( 'send', 'event', 'interaction', 'link', _link );
    }


  function __nudge() {
    var _delay = ( 6 - _rate ) * 100;

    if ( _style == <% LCD::STYLE_2 %> ) _delay = Math.floor( _delay / 6 );

    if ( _nudge < _nudges ) {
      _last = _tickerE.scrollLeft();

      _tickerE.scrollLeft( _tickerE.scrollLeft() + _width );

      _nudge++;
      }
    else {
      _tickerE.scrollLeft( 0 );

      if ( _optionO.ui ) {
        __showControls();
        }

      _firstPass = false;

      __fireworks();

      _nudge = 1;
      }

    _timer = setTimeout( __nudge, _delay );
    }


  function __option( _option ) {
    var _re = new RegExp( '(,|^|#)' + _option + '(,|$)' );

    return _hash.match( _re );
    }


  function __rate() {
    _rate = $( this ).data( 'r' );

    __updateURL();
    }


  function __rot13( _c ) {
    return String.fromCharCode( ( _c <= 'Z' ? 90 : 122 ) >= ( _c = _c.charCodeAt( 0 ) + 13 ) ? _c : _c - 26 );
    }


  function __showControls( _track ) {
    if ( $( '#controls' ).is( ':hidden' ) ) {
      $( '#controls' ).fadeIn(<% $mobile ? '' : ' function () { _msgE.focus(); } ' %>);

      $( '#ticker' ).css( 'cursor', 'auto' )

      if ( _track ) ga( 'send', 'event', 'interaction', 'show', 'controls' );
      }
    }


  function __slower() {
    if ( _rate > <% $LCD::MIN{ rate } %> ) {
      _rate--;

      __updateURL();

      $( this ).toggleClass( 'dim', _rate == <% $LCD::MIN{ rate } %> );

      $( '#faster' ).removeClass( 'dim' );

      ga( 'send', 'event', 'interaction', 'slower', _rate );
      }
    }


  function __smaller() {
    if ( _height > <% $LCD::MIN{ height } %> ) {
      _height--;

      __generate();

      $( this ).toggleClass( 'dim', _height == <% $LCD::MIN{ height } %> );

      $( '#bigger' ).removeClass( 'dim' );

      ga( 'send', 'event', 'interaction', 'smaller', _height );
      }
    }


  function __updateURL() {
    var _displayUrl,
        _url = '/' + _msg.replace( /[a-zA-Z]/g, __rot13 ) + '/';

    if ( _alt != '<% $LCD::DEFAULT{ alt } %>' ) { _url += 'a' + _alt + '/'; }

    if ( _colour != '<% $LCD::DEFAULT{ colour } %>' ) { _url += 'c' + _colour + '/'; }

    if ( _height != '<% $LCD::DEFAULT{ height } %>' ) { _url += 'h' + _height + '/'; }

    if ( _rate != '<% $LCD::DEFAULT{ rate } %>' ) { _url += 'r' + _rate + '/'; }

    if ( _url == '/<% $LCD::DEFAULT{ msg } %>/' ) { _url = '/'; }

    _displayUrl = 'lcd<% $local ? '' : '.iffy.studio' %>' + _url;

    _url = 'https://' + _displayUrl;

    $( '#share a' )
      .attr( 'href', _url )
      .html( _displayUrl );

    if ( ! _iframe ) history.pushState( '', '', _url );
    }


  return {

    init: function () {
% if ( $mobile ) {
      document.addEventListener( 'focusout', function () { __keyPress( { 'which': 13 } ); } );

% }
      $( 'body' ).keydown( __keyDown );

      _iframe = __iframe();

      if ( _iframe ) $( 'body' ).addClass( 'iframe' );

      _optionO.ui = ! _iframe;

      if ( _hash = window.location.hash ) {
        if ( _link = _hash.match( /(,|^|#)([?\/\w]+(\.[?\/\w]+)+)(,|$)/ ) ) {
          _link = _link[ 2 ];

          ga( 'send', 'event', 'impression', 'option', 'link' );
          }

        if ( _optionO.fireworks = __option( 'frw' ) ) ga( 'send', 'event', 'impression', 'option', 'fireworks' );
        if ( _optionO.rainbow = __option( 'rnb' ) ) ga( 'send', 'event', 'impression', 'option', 'rainbow' );

        _optionO.ui = ( ! _iframe ) || __option( 'ui' );

        if ( __option( 'led' ) ) _style = <% LCD::STYLE_2 %>;
        }

      _tickerE = $( '#ticker' ).addClass( 's' + _style );

      if ( _optionO.ui ) {
        _tickerE.before( '<& /site/share.mas &>' );
        _tickerE.after( '<& /site/controls.mas &>' );
        }

      _msgE = $( '#msg input' ).keypress( __keyPress );

      __generate( 1000 );

      $( '#bigger' ).on( '<% $mobile ? "touchend" : "click" %>', __bigger );
      $( '#bigger' ).toggleClass( 'dim', _height == <% $LCD::MAX{ height } %> );

      $( '#smaller' ).on( '<% $mobile ? "touchend" : "click" %>', __smaller );
      $( '#smaller' ).toggleClass( 'dim', _height == <% $LCD::MIN{ height } %> );

      $( '#faster' ).on( '<% $mobile ? "touchend" : "click" %>', __faster );
      $( '#faster' ).toggleClass( 'dim', _rate == <% $LCD::MAX{ rate } %> );

      $( '#slower' ).on( '<% $mobile ? "touchend" : "click" %>', __slower );
      $( '#slower' ).toggleClass( 'dim', _rate == <% $LCD::MIN{ rate } %> );

      $( '#colour' ).on( '<% $mobile ? "touchend" : "click" %>', __colour );

      if ( _link ) {
        $( '#ticker' ).css( 'cursor', 'pointer' ).on( '<% $mobile ? "touchend" : "click" %>', __link );
        }
      else if ( _optionO.ui ) {
        $( '#ticker' ).css( 'cursor', 'pointer' ).one( '<% $mobile ? "touchend" : "click" %>', function () { __showControls( true ); } );
        }

      if ( _optionO.fireworks ) {
        $( 'body' ).append( '<& /site/fireworks.mas &>' );

        $.getScript( '/js/fireworks.js', function () { fc.init(); } );

        ga( 'send', 'event', 'impression', 'option', 'fireworks' );
        }

      ga( 'send', 'event', 'impression', 'message', _msg.replace( /\+/g, ' ' ).replace( /~/g, '+' ) );
      },


    option: __option,

  
    updateURL: __updateURL

    };

  }();


$( LCD.init );

<& /js/render.js &>\
