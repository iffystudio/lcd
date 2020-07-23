/*-------------------------------

  POPUP.JS

  Simple Popup plugin for jQuery

  @author Todd Francis
  @version 2.1.0

-------------------------------*/

;(function(b,q){b.fn.popup=function(j){var m=this.selector,k=new b.Popup(j);b(document).on("click.popup",m,function(a){a.preventDefault();k.open(b(this).attr("href"),void 0,this)});return this.each(function(){b(this).data("popup",k)})};b.Popup=function(j){function m(c){n&&n.fadeOut("fast",function(){b(this).remove()});var d=!0;void 0===f&&(d=!1,f=b('<div class="'+a.o.containerClass+'">'),h=b(a.o.markup).appendTo(f),b(a.o.closeContent).one("click",function(){a.close()}).appendTo(f),b(q).resize(a.center),
f.appendTo(b("body")).css("opacity",0));var e=b("."+a.o.contentClass,f);a.width?e.css("width",a.width,10):e.css("width","");a.height?e.css("height",a.height,10):e.css("height","");h.hasClass(a.o.contentClass)?h.html(c):h.find("."+a.o.contentClass).html(c);d?a.o.replaced.call(a,f,g):a.o.show.call(a,f,g)}function k(a,d){var b=RegExp("[?&]"+a+"=([^&]*)").exec(d);return b&&decodeURIComponent(b[1].replace(/\+/g," "))}var a=this,r=["png","jpg","gif"],l,p,g,f,n,h;a.ele=void 0;a.o=b.extend(!0,{},{backClass:"popup_back",
backOpacity:0.7,containerClass:"popup_cont",closeContent:'<div class="popup_close">&times;</div>',markup:'<div class="popup"><div class="popup_content"/></div>',contentClass:"popup_content",preloaderContent:'<p class="preloader">Loading</p>',activeClass:"popup_active",hideFlash:!1,speed:200,popupPlaceholderClass:"popup_placeholder",keepInlineChanges:!0,modal:!1,content:null,type:"auto",width:null,height:null,typeParam:"pt",widthParam:"pw",heightParam:"ph",beforeOpen:function(){},afterOpen:function(){},
beforeClose:function(){},afterClose:function(){},error:function(){},show:function(a){var b=this;b.center();a.animate({opacity:1},b.o.speed,function(){b.o.afterOpen.call(b)})},replaced:function(){this.center().o.afterOpen.call(this)},hide:function(a){void 0!==a&&a.animate({opacity:0},this.o.speed)},types:{inline:function(c,d){var e=b(c);e.addClass(a.o.popupPlaceholderClass);a.o.keepInlineChanges||(p=e.html());d.call(this,e.children())},image:function(c,d){var e=this;b("<img />").one("load",function(){var a=
this;setTimeout(function(){d.call(e,a)},0)}).one("error",function(){a.o.error.call(a,c,"image")}).attr("src",c).each(function(){this.complete&&b(this).trigger("load")})},external:function(c,d){var e=b("<iframe />").attr({src:c,frameborder:0,width:a.width,height:a.height});d.call(this,e)},html:function(a,b){b.call(this,a)},jQuery:function(a,b){b.call(this,a.html())},"function":function(b,d){d.call(this,b.call(a))},ajax:function(c,d){b.ajax({url:c,success:function(a){d.call(this,a)},error:function(){a.o.error.call(a,
c,"ajax")}})}}},j);a.open=function(c,d,e){c=void 0===c||"#"===c?a.o.content:c;if(null===c)return a.o.error.call(a,c,l),!1;void 0!==e&&(a.ele&&a.o.activeClass&&b(a.ele).removeClass(a.o.activeClass),a.ele=e,a.ele&&a.o.activeClass&&b(a.ele).addClass(a.o.activeClass));if(void 0===g){g=b('<div class="'+a.o.backClass+'"/>').appendTo(b("body")).css("opacity",0).animate({opacity:a.o.backOpacity},a.o.speed);if(!a.o.modal)g.one("click.popup",function(){a.close()});a.o.hideFlash&&b("object, embed").css("visibility",
"hidden");a.o.preloaderContent&&(n=b(a.o.preloaderContent).appendTo(b("body")))}var f;b.each([d,a.o.type],function(a,b){if(b)return f=b,!1});d=f;l=d="auto"===d?"function"===typeof c?"function":c instanceof b?"jQuery":"#"===c.substr(0,1)||"."===c.substr(0,1)?"inline":-1!==b.inArray(c.substr(c.length-3),r)?"image":"http"===c.substr(0,4)?"external":"ajax":d;a.width=a.o.width?a.o.width:null;a.height=a.o.height?a.o.height:null;if(-1===b.inArray(d,["inline","jQuery","function"])){e=k(a.o.typeParam,c);var h=
k(a.o.widthParam,c),j=k(a.o.heightParam,c);d=null!==e?e:d;a.width=null!==h?h:a.width;a.height=null!==j?j:a.height}a.o.beforeOpen.call(a,d);a.o.types[d]?a.o.types[d].call(a,c,m):a.o.types.ajax.call(a,c,m)};a.close=function(){a.o.beforeClose.call(a);"inline"===l&&a.o.keepInlineChanges&&(p=b("."+a.o.contentClass).html());void 0!==g&&g.animate({opacity:0},a.o.speed,function(){a.cleanUp()});a.o.hide.call(a,f,g);return a};a.cleanUp=function(){g.add(f).remove();f=g=void 0;b(q).unbind("resize",a.center);
a.o.hideFlash&&b("object, embed").css("visibility","visible");a.ele&&a.o.activeClass&&b(a.ele).removeClass(a.o.activeClass);var c=b("."+a.o.popupPlaceholderClass);"inline"==l&&c.length&&c.html(p).removeClass(a.o.popupPlaceholderClass);l=null;a.o.afterClose.call(a);return a};a.center=function(){f.css(a.getCenter());g.css({height:document.documentElement.clientHeight});return a};a.getCenter=function(){var a=f.children().outerWidth(!0),b=f.children().outerHeight(!0);return{top:0.5*document.documentElement.clientHeight-
0.5*b,left:0.5*document.documentElement.clientWidth-0.5*a}}}})(jQuery,window);
