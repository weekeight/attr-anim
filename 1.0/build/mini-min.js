/*!build time : 2014-07-18 2:17:39 PM*/
KISSY.add("gallery/attr-anim/1.0/index",function(){function a(a,b,c){var d=this;d.elem=a,d.duration=c.duration,d.easingFunction=f[c.easing],d.complete=c.complete,d.endAttrsObj=b,d.alreadyStartRun=!1,d.isRunning=!1,d.isComplete=!1,d.isPaused=!1,d.nowTime=0,d.frameTime=16}var b=Math.PI,c=Math.pow,d=Math.sin,e=1.70158,f={swing:function(a){return.5-Math.cos(a*b)/2},easeNone:function(a){return a},linear:function(a){return a},easeIn:function(a){return a*a},easeOut:function(a){return(2-a)*a},easeBoth:function(a){return(a*=2)<1?.5*a*a:.5*(1- --a*(a-2))},easeInStrong:function(a){return a*a*a*a},easeOutStrong:function(a){return 1- --a*a*a*a},easeBothStrong:function(a){return(a*=2)<1?.5*a*a*a*a:.5*(2-(a-=2)*a*a*a)},elasticIn:function(a){var e=.3,f=e/4;return 0===a||1===a?a:0-c(2,10*(a-=1))*d(2*(a-f)*b/e)},elasticOut:function(a){var e=.3,f=e/4;return 0===a||1===a?a:c(2,-10*a)*d(2*(a-f)*b/e)+1},elasticBoth:function(a){var e=.45,f=e/4;return 0===a||2===(a*=2)?a:1>a?-.5*c(2,10*(a-=1))*d(2*(a-f)*b/e):c(2,-10*(a-=1))*d(2*(a-f)*b/e)*.5+1},backIn:function(a){return 1===a&&(a-=.001),a*a*((e+1)*a-e)},backOut:function(a){return(a-=1)*a*((e+1)*a+e)+1},backBoth:function(a){var b=e,c=(b*=1.525)+1;return(a*=2)<1?.5*a*a*(c*a-b):.5*((a-=2)*a*(c*a+b)+2)},bounceIn:function(a){return 1-f.bounceOut(1-a)},bounceOut:function(a){var b,c=7.5625;return b=1/2.75>a?c*a*a:2/2.75>a?c*(a-=1.5/2.75)*a+.75:2.5/2.75>a?c*(a-=2.25/2.75)*a+.9375:c*(a-=2.625/2.75)*a+.984375},bounceBoth:function(a){return.5>a?.5*f.bounceIn(2*a):.5*f.bounceOut(2*a-1)+.5}};return a.prototype.run=function(){var a=this;if(a.elem==window){if(a.elemInitScrollTop=document.documentElement.scrollTop+document.body.scrollTop,a.elemInitScrollLeft=document.documentElement.scrollLeft+document.body.scrollLeft,a.elemInitScrollLeft==a.endAttrsObj.scrollLeft||a.elemInitScrollTop==a.endAttrsObj.scrollTop)return void a.complete(a.elem)}else a.elemInitScrollLeft=a.elem.scrollLeft,a.elemInitScrollTop=a.elem.scrollTop;a.alreadyStartRun||(a.alreadyStartRun=!0,a.isRunning=!0,a.animTimer=setInterval(function(){a._elemInNextStep(a.nowTime),a.nowTime+=a.frameTime/1e3},a.frameTime))},a.prototype._elemInNextStep=function(a){var b=this;if(a<b.duration){var c=b.easingFunction(a/b.duration);if(b.elem==window){var d=b.endAttrsObj.scrollLeft?b.elemInitScrollLeft+(b.endAttrsObj.scrollLeft-b.elemInitScrollLeft)*c:0,e=b.endAttrsObj.scrollTop?b.elemInitScrollTop+(b.endAttrsObj.scrollTop-b.elemInitScrollTop)*c:0;window.scrollTo(d,e)}else b.endAttrsObj.scrollLeft&&(b.elem.scrollLeft=b.elemInitScrollLeft+(b.endAttrsObj.scrollLeft-b.elemInitScrollLeft)*c),b.endAttrsObj.scrollTop&&(b.elem.scrollTop=b.elemInitScrollTop+(b.endAttrsObj.scrollTop-b.elemInitScrollTop)*c)}else clearInterval(b.animTimer),b._jumpEnd(),b.isComplete=!0,b.complete(b.elem)},a.prototype.stop=function(a){var b=this;this.isRunning&&(a&&b._jumpEnd(),clearInterval(this.animTimer))},a.prototype._jumpEnd=function(){var a=this;if(a.elem==window){var b=a.endAttrsObj.scrollLeft?a.endAttrsObj.scrollLeft:0,c=a.endAttrsObj.scrollTop?a.endAttrsObj.scrollTop:0;window.scrollTo(b,c)}else a.endAttrsObj.scrollLeft&&(a.elem.scrollLeft=a.endAttrsObj.scrollLeft),a.endAttrsObj.scrollTop&&(a.elem.scrollTop=a.endAttrsObj.scrollTop)},a.prototype.pause=function(){var a=this;a.isRunning&&(clearInterval(a.animTimer),a.isRunning=!1,a.isPaused=!0)},a.prototype.resume=function(){var a=this;a.isPaused&&(a.isPaused=!1,a.isRunning=!0,a.animTimer=setInterval(function(){a.nowTime+=a.frameTime/1e3,a._elemInNextStep(a.nowTime)},a.frameTime))},a.prototype.isRunning=function(){return this.isRunning},a.prototype.isPaused=function(){return this.isPaused},a}),KISSY.add("gallery/attr-anim/1.0/mini",function(a,b){return b},{requires:["./index"]});