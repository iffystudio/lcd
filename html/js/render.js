LCD.Render = function () {

  var CHARS = <& /site/chars.mas &>,
      TRACKING = <& /site/tracking.mas &>,
      VIEWBOX = <& /site/viewbox.mas &>;


  return {

    msg: function ( _iframe ) {
      var _blank = '<svg class="blank" viewbox="0 0 ' + VIEWBOX[ _style ] + '">' + CHARS[ _style ].BLANK + '</svg>',
          _char, _class, _counter = 1, _i, _isAlt, _nudges, _tracking, _trialHeight = _height * <% $mobile ? 4.5 : 10 %>,
          _visibleChars = -1, _width;

      if ( ! _optionO.ui ) _trialHeight = _trialHeight * 1.9;

      _tickerE
        .removeClass( 'h1 h2 h3 h4 h5' )
        .addClass( 'h' + _height )
        .html( '' )
        .scrollLeft( 0 );

      for ( _i = 0; _i < _msg.length; _i++ ) {
        _char = _msg[ _i ];

        _isAlt = _char.match( /[<% $LCD::ALTS %>]/ );

        _class = ( _isAlt ? 'alt' : 'col' );

        if ( _optionO.rainbow ) _class += ' r-' + _counter;

        _char = _char.toLowerCase();

        if ( CHARS[ _style ][ _char ] ) {
          _tickerE.append( '<svg class="' + _class + '" viewbox="0 0 ' + VIEWBOX[ _style ] + '">' + CHARS[ _style ][ _char ] + '</svg>' );

          if ( _optionO.rainbow ) _counter = ( _counter == 6 ) ? 1 : _counter + 1;
          }
        else {
          _tickerE.append( _blank );
          }
        }

      if ( _style == <% LCD::STYLE_1 %> ) {
        LCD.Style1.render();
        }
      else if ( _style == <% LCD::STYLE_2 %> ) {
        LCD.Style2.render();
        }

      while ( _visibleChars < 1 ) {
        _tickerE.css( 'height', _trialHeight + '%' );

        if ( _msg.length == 1 ) {
          _width = $( 'svg' ).width();
          }
        else {
          _width = Math.floor( $( 'svg:first-child' ).next().position().left - $( 'svg:first-child' ).position().left );
          }

        _visibleChars = Math.floor( ( $( 'body' ).width() - 10 ) / _width );

        _nudges = _visibleChars + $( 'svg' ).length;

        _trialHeight = _trialHeight - 5;
        }

      for ( _i = 0; _i < _visibleChars; _i++ ) {
        _tickerE.prepend( _blank );
        _tickerE.append( _blank );
        }

      _tracking = TRACKING[ _style ][ _height - 1 ];

      if ( _iframe ) _tracking = Math.floor( _tracking / 2 );

      $( 'svg' ).width( _width - _tracking ); // eliminate Firefox non-decimal widths

      _tickerE.css( 'width', _visibleChars * _width - _tracking );

      _tickerE
        .css( 'marginLeft', - _tickerE.width() / 2 )
        .css( 'marginTop', - _tickerE.height() / 2 )
        .hide()
        .css( 'visibility', 'visible' );

      _tickerE.show();

      if ( _style == <% LCD::STYLE_2 %> ) {
        _nudges = _nudges * 6;
        _width = Math.floor( _width / 6 );
        }

      return { nudges: _nudges, width: _width };
      }

    };

  }();
