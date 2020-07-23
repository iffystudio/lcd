/** @license

 SoundManager 2: JavaScript Sound for the Web
 ----------------------------------------------
 http://schillmania.com/projects/soundmanager2/

 Copyright (c) 2007, Scott Schiller. All rights reserved.
 Code provided under the BSD License:
 http://schillmania.com/projects/soundmanager2/license.txt

 V2.97a.20110424+DEV
*/
(function(X){function L(L,W){function i(b){return function(a){return!this._t||!this._t._a?null:b.call(this,a)}}function oa(){if(b.debugURLParam.test(M))b.debugMode=!0}this.flashVersion=8;this.debugFlash=this.debugMode=!1;this.useConsole=!0;this.waitForWindowLoad=this.consoleOnly=!1;this.nullURL="about:blank";this.allowPolling=!0;this.useFastPolling=!1;this.useMovieStar=!0;this.bgColor="#ffffff";this.useHighPerformance=!1;this.flashPollingInterval=null;this.flashLoadTimeout=1E3;this.wmode=null;this.allowScriptAccess=
"always";this.useHTML5Audio=this.useFlashBlock=!1;this.html5Test=/^probably$/i;this.preferFlash=this.useGlobalHTML5Audio=!0;this.requireFlash=!1;this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!0},ogg:{type:["audio/ogg; codecs=vorbis"],required:!1},wav:{type:['audio/wav; codecs="1"',
"audio/wav","audio/wave","audio/x-wav"],required:!1}};this.defaultOptions={autoLoad:!1,stream:!0,autoPlay:!1,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onstop:null,onfailure:null,onfinish:null,onbeforefinish:null,onbeforefinishtime:5E3,onbeforefinishcomplete:null,onjustbeforefinish:null,onjustbeforefinishtime:200,multiShot:!0,multiShotEvents:!1,position:null,pan:0,type:null,usePolicyFile:!1,volume:100};this.flash9Options={isMovieStar:null,
usePeakData:!1,useWaveformData:!1,useEQData:!1,onbufferchange:null,ondataerror:null};this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null};this.version=null;this.versionNumber="V2.97a.20110424+DEV";this.movieURL=null;this.url=L||null;this.altURL=null;this.enabled=this.swfLoaded=!1;this.o=null;this.movieID="sm2-container";this.id=W||"sm2movie";this.swfCSS={swfBox:"sm2-object-box",swfDefault:"movieContainer",swfError:"swf_error",swfTimedout:"swf_timedout",swfLoaded:"swf_loaded",
swfUnblocked:"swf_unblocked",sm2Debug:"sm2_debug",highPerf:"high_performance",flashDebug:"flash_debug"};this.oMC=null;this.sounds={};this.soundIDs=[];this.muted=!1;this.debugID="soundmanager-debug";this.debugURLParam=/([#?&])debug=1/i;this.didFlashBlock=this.specialWmodeCase=!1;this.filePattern=null;this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i};this.baseMimeTypes=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.netStreamMimeTypes=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;
this.netStreamTypes=["aac","flv","mov","mp4","m4v","f4v","m4a","mp4v","3gp","3g2"];this.netStreamPattern=RegExp("\\.("+this.netStreamTypes.join("|")+")(\\?.*)?$","i");this.mimePattern=this.baseMimeTypes;this.features={buffering:!1,peakData:!1,waveformData:!1,eqData:!1,movieStar:!1};this.sandbox={};this.hasHTML5=null;this.html5={usingFlash:null};this.flash={};this.ignoreFlash=!1;var Y,b=this,x,n=navigator.userAgent,h=X,M=h.location.href.toString(),k=this.flashVersion,g=document,Z,N,q=[],D=!1,E=!1,
m=!1,s=!1,pa=!1,F,o,$,t,y,aa,O,qa,ba,u,ra,G,z,ca,da,P,ea,sa,ta,Q,ua,H=null,fa=null,v,ga,A,R,S,ha,j,T=!1,ia=!1,va,wa,w=null,xa,U,I,r,ja,ya,l,Da=Array.prototype.slice,J=!1,ka,B,za,Aa=n.match(/pre\//i),Ea=n.match(/(ipad|iphone|ipod)/i);n.match(/mobile/i);var p=n.match(/msie/i),Fa=n.match(/webkit/i),K=n.match(/safari/i)&&!n.match(/chrome/i),Ga=n.match(/opera/i),la=!M.match(/usehtml5audio/i)&&!M.match(/sm2\-ignorebadua/i)&&K&&n.match(/OS X 10_6_([3-7])/i),ma=typeof g.hasFocus!=="undefined"?g.hasFocus():
null,C=typeof g.hasFocus==="undefined"&&K,Ba=!C,Ca=/(mp3|mp4|mpa)/i;this.html5Only=!1;this._use_maybe=M.match(/sm2\-useHTML5Maybe\=1/i);this._overHTTP=g.location?g.location.protocol.match(/http/i):null;this._http=!this._overHTTP?"http:":"";this.useAltURL=!this._overHTTP;this._global_a=null;if(Ea||Aa)b.useHTML5Audio=!0,b.ignoreFlash=!0,J=b.useGlobalHTML5Audio=!0;if(Aa||this._use_maybe)b.html5Test=/^(probably|maybe)$/i;this.supported=this.ok=function(){return w?m&&!s:b.useHTML5Audio&&b.hasHTML5};this.getMovie=
function(b){return p?h[b]:K?x(b)||g[b]:x(b)};this.createSound=function(c){function a(){e=R(e);b.sounds[d.id]=new Y(d);b.soundIDs.push(d.id);return b.sounds[d.id]}var e=null,f=null,d=null;if(!m||!b.ok())return ha("soundManager.createSound(): "+v(!m?"notReady":"notOK")),!1;arguments.length===2&&(c={id:arguments[0],url:arguments[1]});d=e=o(c);if(j(d.id,!0))return b.sounds[d.id];if(U(d))f=a(),f._setup_html5(d);else{if(k>8&&b.useMovieStar){if(d.isMovieStar===null)d.isMovieStar=d.serverURL||d.type&&d.type.match(b.netStreamPattern)||
d.url.match(b.netStreamPattern)?!0:!1;if(d.isMovieStar&&d.usePeakData)d.usePeakData=!1}d=S(d,"soundManager.createSound(): ");f=a();if(k===8)b.o._createSound(d.id,d.onjustbeforefinishtime,d.loops||1,d.usePolicyFile);else if(b.o._createSound(d.id,d.url,d.onjustbeforefinishtime,d.usePeakData,d.useWaveformData,d.useEQData,d.isMovieStar,d.isMovieStar?d.bufferTime:!1,d.loops||1,d.serverURL,d.duration||null,d.autoPlay,!0,d.autoLoad,d.usePolicyFile),!d.serverURL)f.connected=!0,d.onconnect&&d.onconnect.apply(f);
(d.autoLoad||d.autoPlay)&&!d.serverURL&&f.load(d)}d.autoPlay&&!d.serverURL&&f.play();return f};this.destroySound=function(c,a){if(!j(c))return!1;var e=b.sounds[c],f;e._iO={};e.stop();e.unload();for(f=0;f<b.soundIDs.length;f++)if(b.soundIDs[f]===c){b.soundIDs.splice(f,1);break}a||e.destruct(!0);delete b.sounds[c];return!0};this.load=function(c,a){return!j(c)?!1:b.sounds[c].load(a)};this.unload=function(c){return!j(c)?!1:b.sounds[c].unload()};this.start=this.play=function(c,a){return!m||!b.ok()?(ha("soundManager.play(): "+
v(!m?"notReady":"notOK")),!1):!j(c)?(a instanceof Object||(a={url:a}),a&&a.url?(a.id=c,b.createSound(a).play()):!1):b.sounds[c].play(a)};this.setPosition=function(c,a){return!j(c)?!1:b.sounds[c].setPosition(a)};this.stop=function(c){return!j(c)?!1:b.sounds[c].stop()};this.stopAll=function(){for(var c in b.sounds)b.sounds[c]instanceof Y&&b.sounds[c].stop()};this.pause=function(c){return!j(c)?!1:b.sounds[c].pause()};this.pauseAll=function(){for(var c=b.soundIDs.length;c--;)b.sounds[b.soundIDs[c]].pause()};
this.resume=function(c){return!j(c)?!1:b.sounds[c].resume()};this.resumeAll=function(){for(var c=b.soundIDs.length;c--;)b.sounds[b.soundIDs[c]].resume()};this.togglePause=function(c){return!j(c)?!1:b.sounds[c].togglePause()};this.setPan=function(c,a){return!j(c)?!1:b.sounds[c].setPan(a)};this.setVolume=function(c,a){return!j(c)?!1:b.sounds[c].setVolume(a)};this.mute=function(c){var a=0;typeof c!=="string"&&(c=null);if(c)return!j(c)?!1:b.sounds[c].mute();else{for(a=b.soundIDs.length;a--;)b.sounds[b.soundIDs[a]].mute();
b.muted=!0}return!0};this.muteAll=function(){b.mute()};this.unmute=function(c){typeof c!=="string"&&(c=null);if(c)return!j(c)?!1:b.sounds[c].unmute();else{for(c=b.soundIDs.length;c--;)b.sounds[b.soundIDs[c]].unmute();b.muted=!1}return!0};this.unmuteAll=function(){b.unmute()};this.toggleMute=function(c){return!j(c)?!1:b.sounds[c].toggleMute()};this.getMemoryUse=function(){if(k===8)return 0;if(b.o)return parseInt(b.o._getMemoryUse(),10)};this.disable=function(c){typeof c==="undefined"&&(c=!1);if(s)return!1;
s=!0;for(var a=b.soundIDs.length;a--;)ta(b.sounds[b.soundIDs[a]]);F(c);l.remove(h,"load",y);return!0};this.canPlayMIME=function(c){var a;b.hasHTML5&&(a=I({type:c}));return!w||a?a:c?c.match(b.mimePattern)?!0:!1:null};this.canPlayURL=function(c){var a;b.hasHTML5&&(a=I({url:c}));return!w||a?a:c?c.match(b.filePattern)?!0:!1:null};this.canPlayLink=function(c){return typeof c.type!=="undefined"&&c.type&&b.canPlayMIME(c.type)?!0:b.canPlayURL(c.href)};this.getSoundById=function(c){if(!c)throw Error("soundManager.getSoundById(): sID is null/undefined");
return b.sounds[c]};this.onready=function(b,a){if(b&&b instanceof Function)return a||(a=h),$("onready",b,a),t(),!0;else throw v("needFunction","onready");};this.ontimeout=function(b,a){if(b&&b instanceof Function)return a||(a=h),$("ontimeout",b,a),t({type:"ontimeout"}),!0;else throw v("needFunction","ontimeout");};this.getMoviePercent=function(){return b.o&&typeof b.o.PercentLoaded!=="undefined"?b.o.PercentLoaded():null};this._wD=this._writeDebug=function(){return!0};this._debug=function(){};this.reboot=
function(){var c,a;for(c=b.soundIDs.length;c--;)b.sounds[b.soundIDs[c]].destruct();try{if(p)fa=b.o.innerHTML;H=b.o.parentNode.removeChild(b.o)}catch(e){}fa=H=null;b.enabled=m=T=ia=D=E=s=b.swfLoaded=!1;b.soundIDs=b.sounds=[];b.o=null;for(c in q)if(q.hasOwnProperty(c))for(a=q[c].length;a--;)q[c][a].fired=!1;h.setTimeout(function(){b.beginDelayedInit()},20)};this.destruct=function(){b.disable(!0)};this.beginDelayedInit=function(){pa=!0;z();setTimeout(ra,20);O()};this._html5_events={abort:i(function(){}),
canplay:i(function(){if(this._t._html5_canplay)return!0;this._t._html5_canplay=!0;this._t._onbufferchange(0);var b=!isNaN(this._t.position)?this._t.position/1E3:null;if(this._t.position&&this.currentTime!==b)try{this.currentTime=b}catch(a){}}),load:i(function(){this._t.loaded||(this._t._onbufferchange(0),this._t._whileloading(this._t.bytesTotal,this._t.bytesTotal,this._t._get_html5_duration()),this._t._onload(!0))}),emptied:i(function(){}),ended:i(function(){this._t._onfinish()}),error:i(function(){this._t._onload(!1)}),
loadeddata:i(function(){}),loadedmetadata:i(function(){}),loadstart:i(function(){this._t._onbufferchange(1)}),play:i(function(){this._t._onbufferchange(0)}),playing:i(function(){this._t._onbufferchange(0)}),progress:i(function(c){if(this._t.loaded)return!1;var a,e=0,f=c.type==="progress",d=c.target.buffered;a=c.loaded||0;var na=c.total||1;if(d&&d.length){for(a=d.length;a--;)e=d.end(a)-d.start(a);a=e/c.target.duration;f&&isNaN(a)}isNaN(a)||(this._t._onbufferchange(0),this._t._whileloading(a,na,this._t._get_html5_duration()),
a&&na&&a===na&&b._html5_events.load.call(this,c))}),ratechange:i(function(){}),suspend:i(function(c){b._html5_events.progress.call(this,c)}),stalled:i(function(){}),timeupdate:i(function(){this._t._onTimer()}),waiting:i(function(){this._t._onbufferchange(1)})};Y=function(c){var a=this,e,f,d;this.sID=c.id;this.url=c.url;this._iO=this.instanceOptions=this.options=o(c);this.pan=this.options.pan;this.volume=this.options.volume;this._lastURL=null;this.isHTML5=!1;this._a=null;this.id3={};this._debug=function(){};
this._debug();this.load=function(c){var d=null;if(typeof c!=="undefined")a._iO=o(c,a.options),a.instanceOptions=a._iO;else if(c=a.options,a._iO=c,a.instanceOptions=a._iO,a._lastURL&&a._lastURL!==a.url)a._iO.url=a.url,a.url=null;if(!a._iO.url)a._iO.url=a.url;if(a._iO.url===a.url&&a.readyState!==0&&a.readyState!==2)return a;a._lastURL=a.url;a.loaded=!1;a.readyState=1;a.playState=0;if(U(a._iO)){if(d=a._setup_html5(a._iO),!d._called_load)a._html5_canplay=!1,d.load(),d._called_load=!0,a._iO.autoPlay&&
a.play()}else try{a.isHTML5=!1,a._iO=S(R(a._iO)),k===8?b.o._load(a.sID,a._iO.url,a._iO.stream,a._iO.autoPlay,a._iO.whileloading?1:0,a._iO.loops||1,a._iO.usePolicyFile):b.o._load(a.sID,a._iO.url,a._iO.stream?!0:!1,a._iO.autoPlay?!0:!1,a._iO.loops||1,a._iO.autoLoad?!0:!1,a._iO.usePolicyFile)}catch(e){ea()}return a};this.unload=function(){if(a.readyState!==0){if(a.isHTML5){if(f(),a._a)a._a.pause(),a._a.src=""}else k===8?b.o._unload(a.sID,b.nullURL):b.o._unload(a.sID);e()}return a};this.destruct=function(c){if(a.isHTML5){if(f(),
a._a)a._a.pause(),a._a.src="",J||a._remove_html5_events()}else a._iO.onfailure=null,b.o._destroySound(a.sID);c||b.destroySound(a.sID,!0)};this.start=this.play=function(c,V){var e,V=V===void 0?!0:V;c||(c={});a._iO=o(c,a._iO);a._iO=o(a._iO,a.options);a.instanceOptions=a._iO;if(a._iO.serverURL&&!a.connected)return a.getAutoPlay()||a.setAutoPlay(!0),a;U(a._iO)&&(a._setup_html5(a._iO),d());if(a.playState===1&&!a.paused&&(e=a._iO.multiShot,!e))return a;if(!a.loaded)if(a.readyState===0){if(!a.isHTML5)a._iO.autoPlay=
!0;a.load(a._iO)}else if(a.readyState===2)return a;if(a.paused&&a.position&&a.position>0)a.resume();else{a.playState=1;a.paused=!1;(!a.instanceCount||a._iO.multiShotEvents||k>8&&!a.isHTML5&&!a.getAutoPlay())&&a.instanceCount++;a.position=typeof a._iO.position!=="undefined"&&!isNaN(a._iO.position)?a._iO.position:0;if(!a.isHTML5)a._iO=S(R(a._iO));if(a._iO.onplay&&V)a._iO.onplay.apply(a),a._onplay_called=!0;a.setVolume(a._iO.volume,!0);a.setPan(a._iO.pan,!0);a.isHTML5?(d(),e=a._setup_html5(),a.setPosition(a.position),
e.play()):b.o._start(a.sID,a._iO.loops||1,k===9?a.position:a.position/1E3)}return a};this.stop=function(c){if(a.playState===1){a._onbufferchange(0);a.resetOnPosition(0);if(!a.isHTML5)a.playState=0;a.paused=!1;a._iO.onstop&&a._iO.onstop.apply(a);if(a.isHTML5){if(a._a)a.setPosition(0),a._a.pause(),a.playState=0,a._onTimer(),f(),a.unload()}else b.o._stop(a.sID,c),a._iO.serverURL&&a.unload();a.instanceCount=0;a._iO={}}return a};this.setAutoPlay=function(c){a._iO.autoPlay=c;a.isHTML5?a._a&&c&&a.play():
b.o._setAutoPlay(a.sID,c);c&&!a.instanceCount&&a.readyState===1&&a.instanceCount++};this.getAutoPlay=function(){return a._iO.autoPlay};this.setPosition=function(c){c===void 0&&(c=0);var d=a.isHTML5?Math.max(c,0):Math.min(a.duration||a._iO.duration,Math.max(c,0));a.position=d;c=a.position/1E3;a.resetOnPosition(a.position);a._iO.position=d;if(a.isHTML5){if(a._a&&a._html5_canplay&&a._a.currentTime!==c)try{a._a.currentTime=c,(a.playState===0||a.paused)&&a._a.pause()}catch(e){}}else c=k===9?a.position:
c,a.readyState&&a.readyState!==2&&b.o._setPosition(a.sID,c,a.paused||!a.playState);a.isHTML5&&a.paused&&a._onTimer(!0);return a};this.pause=function(c){if(a.paused||a.playState===0&&a.readyState!==1)return a;a.paused=!0;a.isHTML5?(a._setup_html5().pause(),f()):(c||c===void 0)&&b.o._pause(a.sID);a._iO.onpause&&a._iO.onpause.apply(a);return a};this.resume=function(){if(!a.paused)return a;a.paused=!1;a.playState=1;a.isHTML5?(a._setup_html5().play(),d()):(a._iO.isMovieStar&&a.setPosition(a.position),
b.o._pause(a.sID));!a._onplay_called&&a._iO.onplay?(a._iO.onplay.apply(a),a._onplay_called=!0):a._iO.onresume&&a._iO.onresume.apply(a);return a};this.togglePause=function(){if(a.playState===0)return a.play({position:k===9&&!a.isHTML5?a.position:a.position/1E3}),a;a.paused?a.resume():a.pause();return a};this.setPan=function(c,d){typeof c==="undefined"&&(c=0);typeof d==="undefined"&&(d=!1);a.isHTML5||b.o._setPan(a.sID,c);a._iO.pan=c;if(!d)a.pan=c,a.options.pan=c;return a};this.setVolume=function(c,
d){typeof c==="undefined"&&(c=100);typeof d==="undefined"&&(d=!1);if(a.isHTML5){if(a._a)a._a.volume=Math.max(0,Math.min(1,c/100))}else b.o._setVolume(a.sID,b.muted&&!a.muted||a.muted?0:c);a._iO.volume=c;if(!d)a.volume=c,a.options.volume=c;return a};this.mute=function(){a.muted=!0;if(a.isHTML5){if(a._a)a._a.muted=!0}else b.o._setVolume(a.sID,0);return a};this.unmute=function(){a.muted=!1;var c=typeof a._iO.volume!=="undefined";if(a.isHTML5){if(a._a)a._a.muted=!1}else b.o._setVolume(a.sID,c?a._iO.volume:
a.options.volume);return a};this.toggleMute=function(){return a.muted?a.unmute():a.mute()};this.onposition=function(b,c,d){a._onPositionItems.push({position:b,method:c,scope:typeof d!=="undefined"?d:a,fired:!1});return a};this.processOnPosition=function(){var c,d;c=a._onPositionItems.length;if(!c||!a.playState||a._onPositionFired>=c)return!1;for(;c--;)if(d=a._onPositionItems[c],!d.fired&&a.position>=d.position)d.method.apply(d.scope,[d.position]),d.fired=!0,b._onPositionFired++;return!0};this.resetOnPosition=
function(c){var d,e;d=a._onPositionItems.length;if(!d)return!1;for(;d--;)if(e=a._onPositionItems[d],e.fired&&c<=e.position)e.fired=!1,b._onPositionFired--;return!0};this._onTimer=function(b){var c={};if(a._hasTimer||b)return a._a&&(b||(a.playState>0||a.readyState===1)&&!a.paused)?(a.duration=a._get_html5_duration(),a.durationEstimate=a.duration,b=a._a.currentTime?a._a.currentTime*1E3:0,a._whileplaying(b,c,c,c,c),!0):!1};this._get_html5_duration=function(){var b=a._a?a._a.duration*1E3:a._iO?a._iO.duration:
void 0;return b&&!isNaN(b)&&b!==Infinity?b:a._iO?a._iO.duration:null};d=function(){a.isHTML5&&va(a)};f=function(){a.isHTML5&&wa(a)};e=function(){a._onPositionItems=[];a._onPositionFired=0;a._hasTimer=null;a._onplay_called=!1;a._a=null;a._html5_canplay=!1;a.bytesLoaded=null;a.bytesTotal=null;a.position=null;a.duration=a._iO&&a._iO.duration?a._iO.duration:null;a.durationEstimate=null;a.failures=0;a.loaded=!1;a.playState=0;a.paused=!1;a.readyState=0;a.muted=!1;a.didBeforeFinish=!1;a.didJustBeforeFinish=
!1;a.isBuffering=!1;a.instanceOptions={};a.instanceCount=0;a.peakData={left:0,right:0};a.waveformData={left:[],right:[]};a.eqData=[];a.eqData.left=[];a.eqData.right=[]};e();this._setup_html5=function(c){var c=o(a._iO,c),d=J?b._global_a:a._a;decodeURI(c.url);var f=d&&d._t?d._t.instanceOptions:null;if(d){if(d._t&&f.url===c.url&&(!a._lastURL||a._lastURL===f.url))return d;J&&d._t&&d._t.playState&&c.url!==f.url&&d._t.stop();e();d.src=c.url;a.url=c.url;a._lastURL=c.url;d._called_load=!1}else if(d=new Audio(c.url),
d._called_load=!1,J)b._global_a=d;a.isHTML5=!0;a._a=d;d._t=a;a._add_html5_events();d.loop=c.loops>1?"loop":"";c.autoLoad||c.autoPlay?(d.autobuffer="auto",d.preload="auto",a.load(),d._called_load=!0):(d.autobuffer=!1,d.preload="none");d.loop=c.loops>1?"loop":"";return d};this._add_html5_events=function(){if(a._a._added_events)return!1;var c;a._a._added_events=!0;for(c in b._html5_events)b._html5_events.hasOwnProperty(c)&&a._a&&a._a.addEventListener(c,b._html5_events[c],!1);return!0};this._remove_html5_events=
function(){a._a._added_events=!1;for(var c in b._html5_events)b._html5_events.hasOwnProperty(c)&&a._a&&a._a.removeEventListener(c,b._html5_events[c],!1)};this._whileloading=function(b,c,d,e){a.bytesLoaded=b;a.bytesTotal=c;a.duration=Math.floor(d);a.bufferLength=e;if(a._iO.isMovieStar)a.durationEstimate=a.duration;else if(a.durationEstimate=a._iO.duration?a.duration>a._iO.duration?a.duration:a._iO.duration:parseInt(a.bytesTotal/a.bytesLoaded*a.duration,10),a.durationEstimate===void 0)a.durationEstimate=
a.duration;a.readyState!==3&&a._iO.whileloading&&a._iO.whileloading.apply(a)};this._onid3=function(b,c){var d=[],e,f;e=0;for(f=b.length;e<f;e++)d[b[e]]=c[e];a.id3=o(a.id3,d);a._iO.onid3&&a._iO.onid3.apply(a)};this._whileplaying=function(c,d,e,f,g){if(isNaN(c)||c===null)return!1;a.playState===0&&c>0&&(c=0);a.position=c;a.processOnPosition();if(k>8&&!a.isHTML5){if(a._iO.usePeakData&&typeof d!=="undefined"&&d)a.peakData={left:d.leftPeak,right:d.rightPeak};if(a._iO.useWaveformData&&typeof e!=="undefined"&&
e)a.waveformData={left:e.split(","),right:f.split(",")};if(a._iO.useEQData&&typeof g!=="undefined"&&g&&g.leftEQ&&(c=g.leftEQ.split(","),a.eqData=c,a.eqData.left=c,typeof g.rightEQ!=="undefined"&&g.rightEQ))a.eqData.right=g.rightEQ.split(",")}a.playState===1&&(!a.isHTML5&&b.flashVersion===8&&!a.position&&a.isBuffering&&a._onbufferchange(0),a._iO.whileplaying&&a._iO.whileplaying.apply(a),(a.loaded||!a.loaded&&a._iO.isMovieStar)&&a._iO.onbeforefinish&&a._iO.onbeforefinishtime&&!a.didBeforeFinish&&a.duration-
a.position<=a._iO.onbeforefinishtime&&a._onbeforefinish());return!0};this._onconnect=function(b){b=b===1;if(a.connected=b)a.failures=0,j(a.sID)&&(a.getAutoPlay()?a.play(void 0,a.getAutoPlay()):a._iO.autoLoad&&a.load()),a._iO.onconnect&&a._iO.onconnect.apply(a,[b])};this._onload=function(b){b=b?!0:!1;a.loaded=b;a.readyState=b?3:2;a._onbufferchange(0);a._iO.onload&&a._iO.onload.apply(a,[b]);return!0};this._onfailure=function(b,c,d){a.failures++;if(a._iO.onfailure&&a.failures===1)a._iO.onfailure(a,b,
c,d)};this._onbeforefinish=function(){if(!a.didBeforeFinish)a.didBeforeFinish=!0,a._iO.onbeforefinish&&a._iO.onbeforefinish.apply(a)};this._onjustbeforefinish=function(){if(!a.didJustBeforeFinish)a.didJustBeforeFinish=!0,a._iO.onjustbeforefinish&&a._iO.onjustbeforefinish.apply(a)};this._onfinish=function(){var b=a._iO.onfinish;a._onbufferchange(0);a.resetOnPosition(0);a._iO.onbeforefinishcomplete&&a._iO.onbeforefinishcomplete.apply(a);a.didBeforeFinish=!1;a.didJustBeforeFinish=!1;if(a.instanceCount){a.instanceCount--;
if(!a.instanceCount)a.playState=0,a.paused=!1,a.instanceCount=0,a.instanceOptions={},a._iO={},f();(!a.instanceCount||a._iO.multiShotEvents)&&b&&b.apply(a)}};this._onbufferchange=function(b){if(a.playState===0)return!1;if(b&&a.isBuffering||!b&&!a.isBuffering)return!1;a.isBuffering=b===1;a._iO.onbufferchange&&a._iO.onbufferchange.apply(a);return!0};this._ondataerror=function(){a.playState>0&&a._iO.ondataerror&&a._iO.ondataerror.apply(a)}};da=function(){return g.body?g.body:g._docElement?g.documentElement:
g.getElementsByTagName("div")[0]};x=function(b){return g.getElementById(b)};o=function(c,a){var e={},f,d;for(f in c)c.hasOwnProperty(f)&&(e[f]=c[f]);f=typeof a==="undefined"?b.defaultOptions:a;for(d in f)f.hasOwnProperty(d)&&typeof e[d]==="undefined"&&(e[d]=f[d]);return e};l=function(){function b(a){var a=Da.call(a),c=a.length;e?(a[1]="on"+a[1],c>3&&a.pop()):c===3&&a.push(!1);return a}function a(a,b){var c=a.shift(),g=[f[b]];if(e)c[g](a[0],a[1]);else c[g].apply(c,a)}var e=h.attachEvent,f={add:e?"attachEvent":
"addEventListener",remove:e?"detachEvent":"removeEventListener"};return{add:function(){a(b(arguments),"add")},remove:function(){a(b(arguments),"remove")}}}();U=function(c){return!c.serverURL&&(c.type?I({type:c.type}):I({url:c.url})||b.html5Only)};I=function(c){function a(a){return b.preferFlash&&!b.ignoreFlash&&typeof b.flash[a]!=="undefined"&&b.flash[a]}if(!b.useHTML5Audio||!b.hasHTML5)return!1;var e=c.url||null,c=c.type||null,f=b.audioFormats,d;if(c&&b.html5[c]!=="undefined")return b.html5[c]&&
!a(c);if(!r){r=[];for(d in f)f.hasOwnProperty(d)&&(r.push(d),f[d].related&&(r=r.concat(f[d].related)));r=RegExp("\\.("+r.join("|")+")","i")}d=e?e.toLowerCase().match(r):null;if(!d||!d.length)if(c)e=c.indexOf(";"),d=(e!==-1?c.substr(0,e):c).substr(6);else return!1;else d=d[0].substr(1);return d&&typeof b.html5[d]!=="undefined"?b.html5[d]&&!a(d):(c="audio/"+d,e=b.html5.canPlayType({type:c}),(b.html5[d]=e)&&b.html5[c]&&!a(c))};ya=function(){function c(c){var d,e,f=!1;if(!a||typeof a.canPlayType!=="function")return!1;
if(c instanceof Array){d=0;for(e=c.length;d<e&&!f;d++)if(b.html5[c[d]]||a.canPlayType(c[d]).match(b.html5Test))f=!0,b.html5[c[d]]=!0,b.flash[c[d]]=!(!b.preferFlash||!c[d].match(Ca));return f}else return c=a&&typeof a.canPlayType==="function"?a.canPlayType(c):!1,!(!c||!c.match(b.html5Test))}if(!b.useHTML5Audio||typeof Audio==="undefined")return!1;var a=typeof Audio!=="undefined"?Ga?new Audio(null):new Audio:null,e,f={},d,g;B();d=b.audioFormats;for(e in d)if(d.hasOwnProperty(e)&&(f[e]=c(d[e].type),
f["audio/"+e]=f[e],b.flash[e]=b.preferFlash&&!b.ignoreFlash&&e.match(Ca)?!0:!1,d[e]&&d[e].related))for(g=d[e].related.length;g--;)f["audio/"+d[e].related[g]]=f[e],b.html5[d[e].related[g]]=f[e],b.flash[d[e].related[g]]=f[e];f.canPlayType=a?c:null;b.html5=o(b.html5,f);return!0};v=function(){};R=function(b){if(k===8&&b.loops>1&&b.stream)b.stream=!1;return b};S=function(b){if(b&&!b.usePolicyFile&&(b.onid3||b.usePeakData||b.useWaveformData||b.useEQData))b.usePolicyFile=!0;return b};ha=function(b){typeof console!==
"undefined"&&typeof console.warn!=="undefined"&&console.warn(b)};Z=function(){return!1};ta=function(b){for(var a in b)b.hasOwnProperty(a)&&typeof b[a]==="function"&&(b[a]=Z)};Q=function(c){typeof c==="undefined"&&(c=!1);(s||c)&&b.disable(c)};ua=function(c){var a=null;if(c)if(c.match(/\.swf(\?.*)?$/i)){if(a=c.substr(c.toLowerCase().lastIndexOf(".swf?")+4))return c}else c.lastIndexOf("/")!==c.length-1&&(c+="/");return(c&&c.lastIndexOf("/")!==-1?c.substr(0,c.lastIndexOf("/")+1):"./")+b.movieURL};ba=
function(){if(k!==8&&k!==9)b.flashVersion=8;var c=b.debugMode||b.debugFlash?"_debug.swf":".swf";if(b.useHTML5Audio&&!b.html5Only&&b.audioFormats.mp4.required&&b.flashVersion<9)b.flashVersion=9;k=b.flashVersion;b.version=b.versionNumber+(b.html5Only?" (HTML5-only mode)":k===9?" (AS3/Flash 9)":" (AS2/Flash 8)");if(k>8)b.defaultOptions=o(b.defaultOptions,b.flash9Options),b.features.buffering=!0;k>8&&b.useMovieStar?(b.defaultOptions=o(b.defaultOptions,b.movieStarOptions),b.filePatterns.flash9=RegExp("\\.(mp3|"+
b.netStreamTypes.join("|")+")(\\?.*)?$","i"),b.mimePattern=b.netStreamMimeTypes,b.features.movieStar=!0):(b.useMovieStar=!1,b.features.movieStar=!1);b.filePattern=b.filePatterns[k!==8?"flash9":"flash8"];b.movieURL=(k===8?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",c);b.features.peakData=b.features.waveformData=b.features.eqData=k>8};sa=function(c,a){if(!b.o||!b.allowPolling)return!1;b.o._setPolling(c,a)};P=function(c,a){var e=a?a:b.url,f=b.altURL?b.altURL:e,d;d=da();var h,k,i=A(),
j,l=null,l=(l=g.getElementsByTagName("html")[0])&&l.dir&&l.dir.match(/rtl/i),c=typeof c==="undefined"?b.id:c;if(D&&E)return!1;if(b.html5Only)return ba(),b.oMC=x(b.movieID),N(),E=D=!0,!1;D=!0;ba();b.url=ua(b._overHTTP?e:f);a=b.url;b.wmode=!b.wmode&&b.useHighPerformance&&!b.useMovieStar?"transparent":b.wmode;if(b.wmode!==null&&(n.match(/msie 8/i)||!p&&!b.useHighPerformance)&&navigator.platform.match(/win32|win64/i))b.specialWmodeCase=!0,b.wmode=null;d={name:c,id:c,src:a,width:"auto",height:"auto",quality:"high",
allowScriptAccess:b.allowScriptAccess,bgcolor:b.bgColor,pluginspage:b._http+"//www.macromedia.com/go/getflashplayer",type:"application/x-shockwave-flash",wmode:b.wmode,hasPriority:"true"};if(b.debugFlash)d.FlashVars="debug=1";b.wmode||delete d.wmode;if(p)e=g.createElement("div"),k='<object id="'+c+'" data="'+a+'" type="'+d.type+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+b._http+'//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" width="'+d.width+
'" height="'+d.height+'"><param name="movie" value="'+a+'" /><param name="AllowScriptAccess" value="'+b.allowScriptAccess+'" /><param name="quality" value="'+d.quality+'" />'+(b.wmode?'<param name="wmode" value="'+b.wmode+'" /> ':"")+'<param name="bgcolor" value="'+b.bgColor+'" />'+(b.debugFlash?'<param name="FlashVars" value="'+d.FlashVars+'" />':"")+"</object>";else for(h in e=g.createElement("embed"),d)d.hasOwnProperty(h)&&e.setAttribute(h,d[h]);oa();i=A();if(d=da())if(b.oMC=x(b.movieID)?x(b.movieID):
g.createElement("div"),b.oMC.id){j=b.oMC.className;b.oMC.className=(j?j+" ":b.swfCSS.swfDefault)+(i?" "+i:"");b.oMC.appendChild(e);if(p)h=b.oMC.appendChild(g.createElement("div")),h.className=b.swfCSS.swfBox,h.innerHTML=k;E=!0}else{b.oMC.id=b.movieID;b.oMC.className=b.swfCSS.swfDefault+" "+i;h=i=null;if(!b.useFlashBlock)if(b.useHighPerformance)i={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"};else if(i={position:"absolute",width:"6px",height:"6px",top:"-9999px",
left:"-9999px"},l)i.left=Math.abs(parseInt(i.left,10))+"px";if(Fa)b.oMC.style.zIndex=1E4;if(!b.debugFlash)for(j in i)i.hasOwnProperty(j)&&(b.oMC.style[j]=i[j]);try{p||b.oMC.appendChild(e);d.appendChild(b.oMC);if(p)h=b.oMC.appendChild(g.createElement("div")),h.className=b.swfCSS.swfBox,h.innerHTML=k;E=!0}catch(m){throw Error(v("appXHTML"));}}return!0};j=this.getSoundById;G=function(){if(b.html5Only)return P(),!1;if(b.o)return!1;b.o=b.getMovie(b.id);if(!b.o)H?(p?b.oMC.innerHTML=fa:b.oMC.appendChild(H),
H=null,D=!0):P(b.id,b.url),b.o=b.getMovie(b.id);b.oninitmovie instanceof Function&&setTimeout(b.oninitmovie,1);return!0};aa=function(c){if(c)b.url=c;G()};O=function(){setTimeout(qa,1E3)};qa=function(){if(T)return!1;T=!0;l.remove(h,"load",O);if(C&&!ma)return!1;var c;m||(c=b.getMoviePercent());setTimeout(function(){c=b.getMoviePercent();!m&&Ba&&(c===null?b.useFlashBlock||b.flashLoadTimeout===0?b.useFlashBlock&&ga():Q(!0):b.flashLoadTimeout!==0&&Q(!0))},b.flashLoadTimeout)};aa=function(c){if(c)b.url=
c;G()};A=function(){var c=[];b.debugMode&&c.push(b.swfCSS.sm2Debug);b.debugFlash&&c.push(b.swfCSS.flashDebug);b.useHighPerformance&&c.push(b.swfCSS.highPerf);return c.join(" ")};ga=function(){v("fbHandler");var c=b.getMoviePercent(),a=b.swfCSS;if(b.ok()){if(b.oMC)b.oMC.className=[A(),a.swfDefault,a.swfLoaded+(b.didFlashBlock?" "+a.swfUnblocked:"")].join(" ")}else{if(w)b.oMC.className=A()+" "+a.swfDefault+" "+(c===null?a.swfTimedout:a.swfError);b.didFlashBlock=!0;t({type:"ontimeout",ignoreInit:!0});
b.onerror instanceof Function&&b.onerror.apply(h)}};u=function(){function b(){l.remove(h,"focus",u);l.remove(h,"load",u)}if(ma||!C)return b(),!0;ma=Ba=!0;K&&C&&l.remove(h,"mousemove",u);T=!1;b();return!0};F=function(c){if(m)return!1;if(b.html5Only)return m=!0,t(),y(),!0;b.useFlashBlock&&b.flashLoadTimeout&&!b.getMoviePercent()||(m=!0);if(s||c){if(b.useFlashBlock)b.oMC.className=A()+" "+(b.getMoviePercent()===null?b.swfCSS.swfTimedout:b.swfCSS.swfError);t({type:"ontimeout"});b.onerror instanceof Function&&
b.onerror.apply(h);return!1}l.add(h,"unload",Z);if(b.waitForWindowLoad&&!pa)return l.add(h,"load",y),!1;else y();return!0};$=function(b,a,e){typeof q[b]==="undefined"&&(q[b]=[]);q[b].push({method:a,scope:e||null,fired:!1})};t=function(c){c||(c={type:"onready"});if(!m&&c&&!c.ignoreInit)return!1;if(c.type==="ontimeout"&&b.ok())return!1;var a={success:c&&c.ignoreInit?b.ok():!s},e=c&&c.type?q[c.type]||[]:[],c=[],f,d=w&&b.useFlashBlock&&!b.ok();for(f=0;f<e.length;f++)e[f].fired!==!0&&c.push(e[f]);if(c.length){f=
0;for(e=c.length;f<e;f++)if(c[f].scope?c[f].method.apply(c[f].scope,[a]):c[f].method(a),!d)c[f].fired=!0}return!0};y=function(){h.setTimeout(function(){b.useFlashBlock&&ga();t();b.onload instanceof Function&&b.onload.apply(h);b.waitForWindowLoad&&l.add(h,"load",y)},1)};B=function(){if(ka!==void 0)return ka;var b=!1,a=navigator,e=a.plugins,f,d=h.ActiveXObject;if(e&&e.length)(a=a.mimeTypes)&&a["application/x-shockwave-flash"]&&a["application/x-shockwave-flash"].enabledPlugin&&a["application/x-shockwave-flash"].enabledPlugin.description&&
(b=!0);else if(typeof d!=="undefined"){try{f=new d("ShockwaveFlash.ShockwaveFlash")}catch(g){}b=!!f}return ka=b};xa=function(){var c,a;if(n.match(/iphone os (1|2|3_0|3_1)/i)){b.hasHTML5=!1;b.html5Only=!0;if(b.oMC)b.oMC.style.display="none";return!1}if(b.useHTML5Audio){if(!b.html5||!b.html5.canPlayType)return b.hasHTML5=!1,!0;else b.hasHTML5=!0;if(la&&B())return!0}else return!0;for(a in b.audioFormats)if(b.audioFormats.hasOwnProperty(a)&&(b.audioFormats[a].required&&!b.html5.canPlayType(b.audioFormats[a].type)||
b.flash[a]||b.flash[b.audioFormats[a].type]))c=!0;b.ignoreFlash&&(c=!1);b.html5Only=b.useHTML5Audio&&b.hasHTML5&&!c&&!b.requireFlash;return B()&&c};N=function(){var c,a=[];if(m)return!1;if(b.hasHTML5)for(c in b.audioFormats)b.audioFormats.hasOwnProperty(c)&&a.push(c+": "+b.html5[c]+(b.preferFlash&&b.flash[c]?" (using flash)":""));if(b.html5Only){if(!m)l.remove(h,"load",b.beginDelayedInit),b.enabled=!0,F();return!0}G();try{b.o._externalInterfaceTest(!1),b.allowPolling&&sa(!0,b.flashPollingInterval?
b.flashPollingInterval:b.useFastPolling?10:50),b.debugMode||b.o._disableDebug(),b.enabled=!0}catch(e){return Q(!0),F(),!1}F();l.remove(h,"load",b.beginDelayedInit);return!0};ra=function(){if(ia)return!1;P();G();return ia=!0};z=function(){if(ca)return!1;ca=!0;oa();if(!b.useHTML5Audio&&!B())b.useHTML5Audio=!0;ya();b.html5.usingFlash=xa();w=b.html5.usingFlash;ca=!0;g.removeEventListener&&g.removeEventListener("DOMContentLoaded",z,!1);aa();return!0};va=function(b){if(!b._hasTimer)b._hasTimer=!0};wa=function(b){if(b._hasTimer)b._hasTimer=
!1};ea=function(){if(b.onerror instanceof Function)b.onerror();b.disable()};za=function(){if(!la||!B())return!1;var c=b.audioFormats,a,e;for(e in c)if(c.hasOwnProperty(e)&&(e==="mp3"||e==="mp4"))if(b.html5[e]=!1,c[e]&&c[e].related)for(a=c[e].related.length;a--;)b.html5[c[e].related[a]]=!1};this._setSandboxType=function(){};this._externalInterfaceOK=function(){if(b.swfLoaded)return!1;(new Date).getTime();b.swfLoaded=!0;C=!1;la&&za();p?setTimeout(N,100):N()};ja=function(){g.readyState==="complete"&&
(z(),g.detachEvent("onreadystatechange",ja));return!0};if(!b.hasHTML5||w)l.add(h,"focus",u),l.add(h,"load",u),l.add(h,"load",O),K&&C&&l.add(h,"mousemove",u);g.addEventListener?g.addEventListener("DOMContentLoaded",z,!1):g.attachEvent?g.attachEvent("onreadystatechange",ja):ea();g.readyState==="complete"&&setTimeout(z,100)}var W=null;if(typeof SM2_DEFER==="undefined"||!SM2_DEFER)W=new L;X.SoundManager=L;X.soundManager=W})(window);


/*
 * fireworks.js: A JavaScript animation experiment
 * -----------------------------------------------
 * http://schillmania.com/projects/fireworks/
 *
 * Provided "as-is", free and without warranty
 * Originally written in 2005. Old code ahead.
 *
 * Includes SoundManager 2 API (BSD).
 * http://schillmania.com/projects/soundmanager2/
 *
 * v0.9.1.20110703
*/

/*jslint white: false, onevar: false, undef: true, nomen: false, eqeqeq: false, plusplus: false, bitwise: true, regexp: false, newcap: true, immed: true */
/*global window, document, navigator, setTimeout, setInterval, clearInterval, enableDebugMode, writeDebug, soundManager, FireworkParticle, attachEvent */

var fc;

function Animator() {

  var self = this;
  writeDebug('Animator()');
  this.tweens = [];
  this.tweens['default'] = [1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1];
  this.tweens.blast = [12,12,11,10,10,9,8,7,6,5,4,3,2,1];
  this.tweens.fade = [10,10,10,10,10,10,10,10,10,10];
  this.queue = [];
  this.queue.IDs = [];
  this.active = false;
  this.timer = null;

  this.createTween = function(start,end,type) {
    // return array of tween coordinate data (start->end)
    type = type||'default';
    var tween = [start];
    var tmp = start;
    var diff = end-start;
    var x = self.tweens[type].length;
    for (var i=0; i<x; i++) {
      tmp += diff*self.tweens[type][i]*0.01;
      tween[i] = {};
      tween[i].data = tmp;
      tween[i].event = null;
    }
    return tween;
  };

  this.enqueue = function(o,fMethod,fOnComplete) {
    // add object and associated methods to animation queue
    // writeDebug('animator.enqueue()');
    var i;
    if (!fMethod) {
      writeDebug('animator.enqueue(): missing fMethod');
    }
    if (typeof(self.queue.IDs[o.oID])=='undefined') {
      // writeDebug('animator.enqueue(): added '+o.oID);
      i = self.queue.length;
      self.queue.IDs[o.oID] = i;
      self.queue[i] = o;
    } else {
      // writeDebug('animator.enqueue(): '+o.oID+' already queued');
      i = self.queue.IDs[o.oID]; // retrieve queue index
      self.queue[i].active = true;
      self.queue[i].frame = 0;
    }
    o.active = true; // flag for animation
    self.queue[i]._method = fMethod;
    self.queue[i]._oncomplete = fOnComplete?fOnComplete:null;
  };

  this.animate = function() {
    var active = 0;
    for (var i=self.queue.length; i--;) {
      if (self.queue[i].active) {
        self.queue[i]._method();
        active++;
      }
    }
    if (active===0 && self.timer) {
      // all animations finished
      self.stop();
    } else {
      // writeDebug(active+' active');
    }
  };

  this.start = function() {
    if (self.timer || self.active) {
      // writeDebug('animator.start(): already active');
      return false;
    }
    // writeDebug('animator.start()'); // report only if started
    self.active = true;
    self.timer = setInterval(self.animate,fc.intervalRate);
  };

  this.stop = function() {
    // writeDebug('animator.stop()',true);
    clearInterval(self.timer);
    self.timer = null;
    self.active = false;
    self.queue = [];
    self.queue.IDs = [];
  };

}

function FireworksController() {

  var self = this;
  this.intervalRate = 20; // rate (ms) to run animation at, general best default = 20
  this.DEBUG = true; // debug mode disabled by default
  this.oFW = null;
  this.isIE = !!(navigator.userAgent.match(/msie/i));
  this.isOpera = !!(navigator.userAgent.match(/opera/i));
  if (this.isOpera) {
    this.isIE = false; // no impersonation allowed here!
  }
  this.fireworks = [];
  this.animator = null;
  this.gOID = 0; // global object ID counter (for animation queue)
  this.particleTypes = 6;
  this.particleXY = 10;
  this.tweenFade = [100,90,80,70,60,50,40,30,20,10,0];
  this.isSafari = !!(navigator.appVersion.match(/webkit/i));
  this.canvasX = null;
  this.canvasY = null;
  this.screenY = null; // screen area (not entire page)
  self.scrollY = null;

  self.getWindowCoords = function() {
    self.canvasX = (document.documentElement.clientWidth||document.body.clientWidth||document.body.scrollWidth);
    self.canvasY = (document.documentElement.clientHeight||document.body.clientHeight||document.body.scrollHeight);
    self.screenY = self.canvasY;
    self.scrollY = parseInt(window.scrollY||document.documentElement.scrollTop||document.body.scrollTop, 10);
    self.canvasY += self.scrollY;
  };

  this.getWindowCoordsAlt = function() {
    self.canvasX = window.innerWidth-16;
    self.canvasY = window.innerHeight;
    self.screenY = self.canvasY;
    self.scrollY = parseInt(window.scrollY||document.documentElement.scrollTop||document.body.scrollTop, 10);
    self.canvasY += self.scrollY;
  };

  this.getPanX = function(x) {
    x = parseInt(x, 10);
    var pos = x/self.canvasX;
    if (pos<0.4) {
      pos *= -1;
    } else if (pos >= 0.4 && pos <= 0.6) {
      pos = 0.5;
    }
    pos = parseInt(pos*100, 10);
    // writeDebug('getPanX('+x+'): '+pos+'%');
    return pos;
  };

  this.isEmpty = function(o) {
    // needs further hacking
    return (typeof(o)=='undefined'||(o===null&&o!==0)||(o===''&&o!==0)||o=='null');
  };

  this.init = function() {
    self.oFW = document.getElementById('fw');
    self.oFP = document.getElementById('fp');
    if (typeof(enableDebugMode)!='undefined' && (self.DEBUG||window.location.toString().toLowerCase().indexOf('debug')>=0)) {
      enableDebugMode();
    }
    self.getWindowCoords();
    self.animator = new Animator();
  };

  this.destructor = function() {
    for (var i=self.fireworks.length; i--;) {
      self.fireworks[i] = null;
    }
    self.fireworks = null;
  };

  if (this.isSafari || this.isOpera) {
    this.getWindowCoords = this.getWindowCoordsAlt;
  }

}

function Firework(oC,startX,startY,burstX,burstY,burstType,nRadius,nParticles,nCircles,allowRandom,obeyBoundaries) {
  var self = this;
  this.oID = 'fp'+(fc.gOID++); // may be unneeded
  var p = '';
  for (var i=0; i<arguments.length-1; i++) {
    p += arguments[i]+',';
  }
  p += arguments[i];
  writeDebug('firework('+p+')');
  this.oC = oC;
  this.o = fc.oFW.cloneNode(!fc.isIE?true:false);
  this.particles = [];
  this.vX = -1;
  this.vY = -4;
  this.x = startX;
  this.y = startY;
  this.allowRandom = allowRandom;
  this.obeyBoundaries = obeyBoundaries;
  this.frame = 0;
  this.tween = [];
  this.active = false;

  this.moveTo = function(x,y) {
    self.o.style.left = x+'px';
    self.o.style.top = y+'px';
    self.x = x;
    self.y = y;
  };

  this.slideTo = function(x,y) {
    self.tween = [fc.animator.createTween(self.x,x,'blast'),fc.animator.createTween(self.y,y,'blast')];
    fc.animator.enqueue(self,self.animate,self.aniExplode);
  };

  this.aniExplode = function() {
    // called from animation finish
    self.o.style.background = 'none';
    self.o.style.border = 'none';
    for (var i=self.particles.length; --i;) {
      self.particles[i].o.style.display = 'block';
      fc.animator.enqueue(self.particles[i],self.particles[i].animate);
    }
    // attach oncomplete event handler to last particle
    self.particles[i].o.style.display = 'block';
    fc.animator.enqueue(self.particles[i],self.particles[i].animate,self.beginFade);
    var sID = 'boom'+parseInt(Math.random()*8, 10);
    if (soundManager.ok()) {
      soundManager.play(sID, {pan: fc.getPanX(self.x)});
    }
  };

  this.beginFade = function() {
    // writeDebug('beginFade');
    self.tween = fc.animator.createTween(1,0,'fade');
    fc.animator.enqueue(self,self.aniFade,self.destructor);
  };

  this.aniFade = function() {
    // writeDebug('firework.aniFade('+self.tween[self.frame].data+')');
    for (var i=self.particles.length; i--;) {
      self.particles[i].moveRel();
      self.particles[i].nextState();
      self.particles[i].setOpacity(fc.tweenFade[self.frame]);
    }
    if (self.frame++>=self.tween.length) {
      self.active = false;
      self.frame = 0;
      if (self._oncomplete) {
        self._oncomplete();
      }
      self._oncomplete = null;
      return false;
    }
    return true;
  };

  this.destructor = function() {
    writeDebug('firework.destructor()');
    // for (var i=0; i<self.particles.length; i++) {
    for (var i=self.particles.length; i--;) {
      self.particles[i].destructor();
      self.particles[i] = null;
    }
    self.particles = null;
    self.oC.removeChild(self.o);
    self.o = null;
    self.oC = null;
  };

  this.animate = function() {
    // generic animation method
    self.moveTo(self.tween[0][self.frame].data,self.tween[1][self.frame].data,'burst');
    if (self.frame++>=self.tween[0].length-1) {
      self.active = false;
      self.frame = 0;
      if (self._oncomplete) {
        self._oncomplete();
      }
      self._oncomplete = null;
      return false;
    }
    return true;
  };

  this.createBurst = function(circles,nMax,rMax,type) {
    // c: # of circles, n: # of particles per circle, r: max radius
    writeDebug('firework.createBurst('+circles+','+nMax+','+rMax+','+type+')');
    var i=0, j=0;
    var tmp = 0;
    var radiusInc = rMax/circles;
    var radius = radiusInc;
    var angle = 0;
    var angleInc = 0; // per-loop increment
    var radiusOffset = (self.allowRandom?(0.33+Math.random()):1);
    var particlesPerCircle = [];
    var isRandom = Math.random()>0.5;
    var circleTypes = [type,circles>1?parseInt(Math.random()*fc.particleTypes, 10):type];
    var thisType = null;

    for (i=0; i<circles; i++) {
      particlesPerCircle[i] = parseInt(nMax*(i+1)/circles*1/circles, 10)||1; // hack - nMax*(i+1)/circles;
      angle = angleInc; // could be offset as well
      angleInc = 360/particlesPerCircle[i];
      thisType = circleTypes[i%2];
      for (j=0; j<particlesPerCircle[i]; j++) {
        self.particles[tmp] = new FireworkParticle(self.o,self.allowRandom,thisType,burstX,burstY,self.obeyBoundaries);
        self.particles[tmp].slideTo(radius*Math.cos(angle*Math.PI/180),radius*radiusOffset*Math.sin(angle*Math.PI/180));
        angle += angleInc;
        tmp++;
      }
      radius += radiusInc; // increase blast radius
    }
  };

  // startX,startY,burstX,burstY,burstType,nRadius,nParticles,nCircles

  self.oC.appendChild(self.o);
  self.moveTo(self.x,self.y);
  self.createBurst(nCircles,nParticles,nRadius,burstType); // create an explosion
  self.slideTo(burstX,burstY);
  var sID = 'fire'+parseInt(Math.random()*2, 10);
  if (soundManager.ok()) {
    soundManager.play(sID, {pan: fc.getPanX(self.x)});
  }
  fc.animator.start();

}

function FireworkParticle(oC,isRandom,type,baseX,baseY,obeyBoundaries) {

  var self = this;
  this.oC = oC;
  this.oID = 'fp'+(fc.gOID++); // may be unneeded
  this.o = fc.oFP.cloneNode(true);
  this.obeyBoundaries = obeyBoundaries;
  // set type: index becomes Y offset (for background image)
  this.type = null;

  this.oImg = this.o.getElementsByTagName('img')[0];
  this.oImg._src = this.oImg.src;
  this.o.style.display = 'none';
  this.baseX = baseX;
  this.baseY = baseY;
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.frame = 0;
  this.tween = [];
  this.active = null;
  this.tweenType = 'blast';
  this.states = [];
  this.state = parseInt(Math.random()*3, 10);
  this.isRandom = isRandom;
  this._mt = 5;

  this.moveTo = function(x,y) {
    self.o.style.left = x+'px';
    self.o.style.top = y+'px';
    self.vx = x-self.x;
    self.vy = y-self.y;
    self.x = x;
    self.y = y;
  };

  this.moveRel = function() {
    // continue last moveTo() pattern, bouncing off walls if applicable
    var toX = self.x+self.vx;
    var toY = self.y+self.vy;
    if (self.obeyBoundaries) {
      var xMax = fc.canvasX-self.baseX-fc.particleXY;
      var yMax = fc.canvasY-self.baseY-fc.particleXY;
      var yMin = fc.scrollY;
      if (self.vx>=0) {
        if (toX>=xMax) {
          self.vx *= -1;
        }
      } else if (self.vx<0 && toX+self.baseX<=0) {
        self.vx *= -1;
      }
      if (self.vy>=0) {
        if (toY>=yMax) {
          self.vy *= -1;
        }
      } else if (self.vy<0) {
        if (toY+self.baseY-yMin<=0) {
          self.vy *= -1;
        }
      }
    }
    self.moveTo(self.x+self.vx,self.y+self.vy);
  };

  this.setOpacity = function(n) { // where n = 0..100
    self.oImg.style.marginLeft = -100+(n*fc.particleXY/10)+'px';
  };

  this.nextState = function() {
    var vis = self.o.style.visibility;
    if (self.state == 2 && vis != 'hidden') {
      self.o.style.visibility = 'hidden';
    } else if (self.state != 2 && vis == 'hidden') {
      self.o.style.visibility = 'visible';
    }
    self.state = parseInt(Math.random()*3, 10);
  };

  this.slideTo = function(x1,y1) {
    // writeDebug('slideTo (x/y): '+x1+','+y1);
    if (self.isRandom) {
      // randomize a bit
      x1 += (x1*0.2*(Math.random()>0.5?1:-1));
      y1 += (y1*0.2*(Math.random()>0.5?1:-1));
    }
    self.tween = [fc.animator.createTween(self.x,x1,self.tweenType),fc.animator.createTween(self.y,y1,self.tweenType)];
    // prevent X overflow (scrolling)
    var xMax = fc.canvasX-fc.particleXY;
    var yMax = fc.canvasY-fc.particleXY;
    var xMin = fc.particleXY-self.baseX;
    var yMin = fc.scrollY;
    var toX = null;
    var toY = null;
    if (self.obeyBoundaries) {
      for (var i=self.tween[0].length; i--;) {
        // bounce off walls where applicable
        toX = self.tween[0][i].data+self.baseX;
        toY = self.tween[1][i].data+self.baseY;
        if (toX>=xMax) {
          self.tween[0][i].data -= (toX-xMax)*2;
          // self.tween[0][i].event = 'bounce';
        } else if (toX<0) {
          self.tween[0][i].data -= (toX*2);
          // self.tween[0][i].event = 'bounce';
        }
        if (toY>=yMax) {
          self.tween[1][i].data -= (toY-yMax)*2;
          // self.tween[1][i].event = 'bounce';
        } else if (toY-yMin<=0) {
          self.tween[1][i].data -= (toY-yMin)*2;
          // self.tween[1][i].event = 'bounce';
        }
      }
    }
  };

  this.animate = function() {
    var f0 = self.tween[0][self.frame].data;
    var f1 = self.tween[1][self.frame].data;
    self.moveTo(f0,f1);
    // possible bounce event/sound hooks
    // if (self.tween[0][self.frame].event) soundManager.play(self.tween[0][self.frame].event);
    // if (self.tween[1][self.frame].event) soundManager.play(self.tween[1][self.frame].event);
    if (self.frame++>=self.tween[0].length-1) {
      if (self._oncomplete) {
        self._oncomplete();
      }
      self._oncomplete = null;
      self.active = false;
      self.frame = 0;
      return false;
    } else if (self.frame>10) {
      self.nextState();
    }
    return true;
  };

  this.destructor = function() {
    self.oImg = null;
    self.oC.removeChild(self.o);
    self.oC = null;
    self.o = null;
  };

  this.setType = function(t) {
    self.type = t;
    self.oImg.style.marginTop = -(fc.particleXY*t)+'px';
  };

  self.setType(type);
  self.oC.appendChild(self.o);

}

function createFirework(nRadius,nParticles,nCircles,nBurstType,startX,startY,burstX,burstY,allowRandom,obeyBoundaries) {

  // check all arguments, supply random defaults if needed
  var tmp = '';
  for (var i in arguments) {
    if (arguments.hasOwnProperty(i)) {
      tmp += i+',';
    }
  }
  writeDebug('createFirework('+tmp+')');

  if (fc.isEmpty(startX)) {
    startX = parseInt(Math.random()*fc.canvasX, 10);
  } else {
    startX = parseInt(fc.canvasX*startX/100, 10);
  }

  if (fc.isEmpty(startY)) {
    startY = fc.canvasY-fc.particleXY;
  } else {
    startY = fc.canvasY-fc.screenY+parseInt(fc.screenY*startY/100, 10);
  }

  if (fc.isEmpty(burstX)) {
    burstX = parseInt(fc.canvasX*0.1+(Math.random()*fc.canvasX*0.8), 10);
  } else {
    burstX = parseInt(fc.canvasX*burstX/100, 10);
  }

  if (fc.isEmpty(burstY)) {
    burstY = fc.canvasY-parseInt(Math.random()*fc.screenY, 10);
  } else {
    burstY = fc.canvasY-parseInt(fc.screenY*(100-burstY)/100, 10);
  }

  if (fc.isEmpty(nBurstType)) {
    nBurstType = parseInt(Math.random()*fc.particleTypes, 10);
  }

  if (fc.isEmpty(nRadius)) {
    nRadius = 64+parseInt(Math.random()*fc.screenY*0.75, 10);
  } else if (nRadius.toString().indexOf('%')>=0) {
    nRadius = parseInt(parseInt(nRadius, 10)/100*fc.screenY, 10);
  } else if (nRadius.toString().indexOf('.')>=0) {
    nRadius = parseInt(nRadius*fc.screenY, 10);
  } else {
    nRadius = parseInt(nRadius*fc.screenY/100, 10);
  }

  if (fc.isEmpty(nParticles)) {
    nParticles = 4+parseInt(Math.random()*64, 10);
  }

  if (fc.isEmpty(nCircles)) {
    nCircles = Math.random()>0.5?2:1;
  }

  if (fc.isEmpty(allowRandom)) {
    allowRandom = Math.random()>0.5;
  }

  if (fc.isEmpty(obeyBoundaries)) {
    obeyBoundaries = Math.random()>0.5;
  }  

  // update screen coordinates
  fc.getWindowCoords();

  fc.fireworks[fc.fireworks.length] = new Firework(document.getElementById('fireContainer'),startX,startY,burstX,burstY,nBurstType,nRadius,nParticles,nCircles,allowRandom,obeyBoundaries);

}

soundManager.url = '/swf/';
soundManager.useHighPerformance = true;
soundManager.useHTML5Audio = true;
soundManager.wmode = 'transparent';

soundManager.onready(function() {

  var sounds = {
    'fire0': 'boom3.mp3',
    'fire1': 'boom4.mp3',
    'boom0': 'boom1.mp3',
    'boom1': 'boom2.mp3',
    'boom2': 'pop1.mp3',
    'boom3': 'pop2.mp3',
    'boom4': 'pop3.mp3',
    'boom5': 'pop4.mp3',
    'boom6': 'pop5.mp3',
    'boom7': 'pop6.mp3'
  };

  for (var item in sounds) {
    if (sounds.hasOwnProperty(item)) {
      soundManager.createSound({
        id: item,
        url: '/audio/' + sounds[item],
        autoLoad: true
      });
    }
  }

});

fc = new FireworksController();

// create null objects if APIs not present
if (typeof(writeDebug)=='undefined') {
  window.writeDebug = function() {
    return false;
  };
}

function addEventHandler(o,evtName,evtHandler) {
  return (typeof(attachEvent)=='undefined'?o.addEventListener(evtName,evtHandler,false):o.attachEvent('on'+evtName,evtHandler));
}

function removeEventHandler(o,evtName,evtHandler) {
  return (typeof(attachEvent)=='undefined'?o.removeEventListener(evtName,evtHandler,false):o.detachEvent('on'+evtName,evtHandler));
}

addEventHandler(window,'resize',fc.getWindowCoords);
addEventHandler(window,'scroll',fc.getWindowCoords);
addEventHandler(window,'unload',fc.destructor);
