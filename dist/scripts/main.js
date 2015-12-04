function getData(){var t="68e4108b43354b028b96be615901fab1",i="ddbsfadvent",a="https://api.instagram.com/v1/tags/"+i+"/media/recent?",e={client_id:t,count:25},n=$.Deferred();return $.ajax({url:a,type:"GET",dataType:"jsonp",data:e}).success(function(t){var i=t.data.reverse();n.resolve(i)}).error(function(t,i,a){console.log("Error getting the data: ",a.toString()),n.reject()}),n.promise()}function pad(t){return 10>t?"0"+t.toString():t.toString()}function fractal(t,i,a){if(0>a)return null;var e=divide(add(multiply(t,2),i),3),n=divide(add(multiply(i,2),t),3),o=divide(add(t,i),2),s=divide(minus(o,t),length(o,t)),r=[s[1],-s[0]],l=add(multiply(r,Math.sqrt(3)/6*length(i,t)),o);if(DrawLine(t,i,"black"),0!=a)for(var c=0;10>c;c++)DrawLine(e,n,"white");fractal(t,e,a-1),fractal(e,l,a-1),fractal(l,n,a-1),fractal(n,i,a-1)}function multiply(t,i){return[t[0]*i,t[1]*i]}function divide(t,i){return[t[0]/i,t[1]/i]}function add(t,i){return[t[0]+i[0],t[1]+i[1]]}function minus(t,i){return[t[0]-i[0],t[1]-i[1]]}function length(t,i){return Math.sqrt(Math.pow(t[0]-i[0],2)+Math.pow(t[1]-i[1],2))}function DrawLine(t,i,a){ctx.beginPath(),ctx.strokeStyle=a,ctx.moveTo(t[0],t[1]),ctx.lineTo(i[0],i[1]),ctx.stroke(),ctx.closePath()}function debounce(t,i,a){var e;return function(){var n=this,o=arguments,s=function(){e=null,a||t.apply(n,o)},r=a&&!e;clearTimeout(e),e=setTimeout(s,i),r&&t.apply(n,o)}}!function(t,i,a,e){function n(i,a){this.element=i,this.options=t.extend({},r,a),this._defaults=r,this._name=s,this.init()}var o,s="parallaxify",r={positionProperty:"position",horizontalParallax:!0,verticalParallax:!0,parallaxBackgrounds:!0,parallaxElements:!0,responsive:!1,useMouseMove:!0,useGyroscope:!0,alphaFilter:.9,motionType:"natural",mouseMotionType:"gaussian",inputPriority:"mouse",motionAngleX:80,motionAngleY:80,adjustBasePosition:!0,alphaPosition:.05},l={position:{setLeft:function(t,i){t.css("left",i)},setTop:function(t,i){t.css("top",i)}},transform:{setPosition:function(t,i,a,e,n){t[0].style[g]="translate3d("+(i-a)+"px, "+(e-n)+"px, 0)"}}},c=function(t,i,a){return null===i?t:("undefined"==typeof a&&(a=.5),a*t+(1-a)*i)},h=[],d={linear:function(t,i){return-i>=t?1:t>=i?-1:-t/i},natural:function(t,i){return-i>=t?1:t>=i?-1:(h["n"+i]===e&&(h["n"+i]=Math.tan(.01745*i)),-Math.tan(.01745*t)/h["n"+i])},performance:function(t,i){return-i>=t?1:t>=i?-1:(h["p"+i]===e&&(h["p"+i]=i/90+4.2*Math.pow(i/90,7)),-(t/90+4.2*Math.pow(t/90,7))/h["p"+i])},gaussian:function(t,i){return 1-2*(1/(1+Math.exp(-(.07056*(135/i)*(t/90^3))-1.5976*(135/i)*(t/90))))}},p=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,u=t("script")[0].style,m="";for(o in u)if(p.test(o)){m=o.match(p)[0];break}"WebkitOpacity"in u&&(m="Webkit"),"KhtmlOpacity"in u&&(m="Khtml");var g=m+(0<m.length?"T"+"transform".slice(1):"transform"),f=(p=t("<div />",{style:"background:#fff"}).css("background-position-x")!==e)?function(t,i,a){t.css({"background-position-x":i,"background-position-y":a})}:function(t,i,a){t.css("background-position",i+" "+a)},v=p?function(t){return[t.css("background-position-x"),t.css("background-position-y")]}:function(t){return t.css("background-position").split(" ")},b=i.requestAnimationFrame||i.webkitRequestAnimationFrame||i.mozRequestAnimationFrame||i.oRequestAnimationFrame||i.msRequestAnimationFrame||function(t){setTimeout(t,1e3/30)};n.prototype={init:function(){this.options.name=s+"_"+Math.floor(1e9*Math.random()),this.tilt={beta:0,gamma:0},this._defineElements(),this._defineGetters(),this._defineSetters(),this._detectMobile(),this._detectMotionType(),this._detectViewport(),this._handleWindowLoadAndResize(),this.refresh({firstLoad:!0}),this._startAnimation()},_defineElements:function(){this.$element=t(this.element===a.body||this.element===i?"body":this.element),this.$viewportElement=t(i)},_defineGetters:function(){var t=d[this.options.motionType],i=d[this.options.mouseMotionType];this._getMoveHorizontal=function(){if(this.useMouseMove&&null!==this.clientX&&this.clientX!==this.oldClientX)return i(this.options.motionAngleX*(1-2*this.clientX/this.viewportWidth),this.options.motionAngleX);if(this.useSensor&&null!==this.beta&&null!==this.gamma){var a=this.tilt;return this.viewportLandscape?this.viewportFlipped?t(-a.beta,this.options.motionAngleX):t(a.beta,this.options.motionAngleX):this.viewportFlipped?t(-a.gamma,this.options.motionAngleX):t(a.gamma,this.options.motionAngleX)}return this.useSensor=!1,i(this.options.motionAngleX*(1-2*this.oldClientX/this.viewportWidth),this.options.motionAngleX)},this._getMoveVertical=function(){if(this.options.useMouseMove&&null!==this.clientY&&this.clientY!==this.oldClientY)return i(this.options.motionAngleY*(1-2*this.clientY/this.viewportHeight),this.options.motionAngleY);if(this.useSensor&&null!==this.beta&&null!==this.gamma){var a=this.tilt;return this.viewportLandscape?this.viewportFlipped?t(-a.gamma,this.options.motionAngleY):t(a.gamma,this.options.motionAngleY):this.viewportFlipped?t(-a.beta,this.options.motionAngleY):t(a.beta,this.options.motionAngleY)}return this.useSensor=!1,i(this.options.motionAngleY*(1-2*this.oldClientY/this.viewportHeight),this.options.motionAngleY)}},_defineSetters:function(){var t=this,i=l[t.options.positionProperty];this._setPosition=i.setPosition||function(a,e,n,o,s){t.options.horizontalParallax&&i.setLeft(a,e,n),t.options.verticalParallax&&i.setTop(a,o,s)}},refresh:function(a){(!a||!a.firstLoad)&&this._reset(),this._findElements(),this._findBackgrounds(),a&&a.firstLoad&&/WebKit/.test(navigator.userAgent)&&t(i).load(function(){var i=t("body");oldLeft=i.scrollLeft(),oldTop=i.scrollTop(),i.scrollLeft(oldLeft+1),i.scrollTop(oldTop+1),i.scrollLeft(oldLeft),i.scrollTop(oldTop)})},_detectViewport:function(){this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.useSensor&&(this.viewportFlipped=180===i.orientation,this.viewportLandscape=90===Math.abs(i.orientation))},_detectMobile:function(){var t=navigator.userAgent||navigator.vendor||i.opera;this.isMobile=/(bb\d+|meego).+mobile|android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|playbook|plucker|pocket|psp|series(4|6)0|silk|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))},_detectMotionType:function(){this.useMouseMove=this.useSensorMoz=this.useSensorWebkit=this.useSensor=!1,this.options.useGyroscope&&(this.isMobile||"gyroscope"===this.options.inputPriority)&&(this.useSensorWebkit=i.DeviceOrientationEvent!==e,this.useSensorMoz=i.OrientationEvent!==e,this.useSensor=this.useSensorWebkit||this.useSensorMoz),this.options.useMouseMove&&!this.isMobile&&(this.useMouseMove=this.$viewportElement.mousemove!==e)},_findElements:function(){var i=this;if(this.elements!==e)for(var a=this.elements.length-1;a>=0;a--)this.elements[a].$element.data("parallaxify-ElementIsActive",e);this.elements=[],this.options.parallaxElements&&this.$element.find("[data-parallaxify-range],[data-parallaxify-range-x],[data-parallaxify-range-y]").each(function(){var a=t(this);if(a.data("parallaxify-ElementIsActive")){if(a.data("parallaxify-ElementIsActive")!==this)return}else a.data("parallaxify-ElementIsActive",this);a.data("parralaxify-originalLeft")?(a.css("left",a.data("parallaxify-originalLeft")),a.css("top",a.data("parallaxify-originalTop"))):(a.data("parallaxify-originalLeft",a.css("left")),a.data("parallaxify-originalTop",a.css("top"))),i.elements.push({$element:a,originalPositionLeft:a.position().left,originalPositionTop:a.position().top,parallaxDistanceX:a.data("parallaxify-range-x")!==e?a.data("parallaxify-range-x"):a.data("parallaxify-range")!==e?a.data("parallaxify-range"):0,parallaxDistanceY:a.data("parallaxify-range-y")!==e?a.data("parallaxify-range-y"):a.data("parallaxify-range")!==e?a.data("parallaxify-range"):0,width:a.outerWidth(!0),height:a.outerHeight(!0)})})},_findBackgrounds:function(){var i,a=this;this.backgrounds=[],this.options.parallaxBackgrounds&&(i=this.$element.find("[data-parallaxify-background-range],[data-parallaxify-background-range-x],[data-parallaxify-background-range-y]"),(this.$element.data("parallaxify-background-range")||this.$element.data("parallaxify-background-range-x")||this.$element.data("parallaxify-background-range-y"))&&(i=i.add(this.$element)),i.each(function(){var i=t(this),n=v(i);if(i.data("parallaxify-backgroundIsActive")){if(i.data("parallaxify-backgroundIsActive")!==this)return}else i.data("parallaxify-backgroundIsActive",this);i.data("parralaxify-backgroundOriginalLeft")?f(i,i.data("parallaxify-backgroundOriginalLeft"),i.data("parallaxify-backgroundOriginalTop")):(i.data("parallaxify-backgroundOriginalLeft",n[0]),i.data("parallaxify-backgroundOriginalTop",n[1])),a.backgrounds.push({$element:i,originalValueLeft:n[0],originalValueTop:n[1],originalBackgroundPositionLeft:isNaN(parseInt(n[0],10))?0:parseInt(n[0],10),originalBackgroundPositionTop:isNaN(parseInt(n[1],10))?0:parseInt(n[1],10),originalPositionLeft:i.position().left,originalPositionTop:i.position().top,parallaxDistanceX:i.data("parallaxify-background-range-x")!==e?i.data("parallaxify-background-range-x"):i.data("parallaxify-background-range")!==e?i.data("parallaxify-background-range"):0,parallaxDistanceY:i.data("parallaxify-background-range-y")!==e?i.data("parallaxify-background-range-y"):i.data("parallaxify-background-range")!==e?i.data("parallaxify-background-range"):0})}))},_reset:function(){var t,i,a,e;for(e=this.elements.length-1;e>=0;e--)t=this.elements[e],i=t.$element.data("parallaxify-originalLeft"),a=t.$element.data("parallaxify-originalTop"),this._setPosition(t.$element,i,i,a,a),t.$element.data("parallaxify-originalLeft",null).data("parallaxify-originalLeft",null).data("parallaxify-elementIsActive",null).data("parallaxify-backgroundIsActive",null);for(e=this.backgrounds.length-1;e>=0;e--)t=this.backgrounds[e],t.$element.data("parallaxify-backgroundOriginalLeft",null).data("parallaxify-backgroundOriginalTop",null).data("parallaxify-backgroundIsActive",null),f(t.$element,t.originalValueLeft,t.originalValueTop)},destroy:function(){this._reset(),this.useMouseMove&&this.$viewportElement.unbind("mousemove."+this.name),this.useSensorWebkit&&i.removeEventListener("deviceorientation",this._handleSensorWebkit,!1),this.useSensorMoz&&i.removeEventListener("MozOrientation",this._handleSensorMoz,!1),t(i).unbind("load."+this.name).unbind("resize."+this.name).unbind("orientationchange."+this.name)},_processSensorData:function(){if(this.useSensor){var t=this.beta,i=this.gamma,a=0,n=0;t>90&&(t-=180),i>180&&(i-=360),this.initialBeta===e&&null!==t&&(this.initialBeta=t,this.useSensor&&"gyroscope"===this.options.inputPriority&&(this.useMouseMove=!1)),this.initialGamma===e&&null!==i&&(this.initialGamma=i,this.useSensor&&"gyroscope"===this.options.inputPriority&&(this.useMouseMove=!1)),this.options.adjustBasePosition&&this.initialGamma!==e&&this.initialBeta!==e&&(this.initialGamma=-180>i-this.initialGamma?c(i+360,this.initialGamma,this.options.alphaPosition):180<i-this.initialGamma?c(i-360,this.initialGamma,this.options.alphaPosition):c(i,this.initialGamma,this.options.alphaPosition),this.initialBeta=-90>t-this.initialBeta?c(t+180,this.initialBeta,this.options.alphaPosition):90<t-this.initialBeta?c(t-180,this.initialBeta,this.options.alphaPosition):c(t,this.initialBeta,this.options.alphaPosition)),a=this.initialBeta!==e?t-this.initialBeta:t,n=this.initialGamma!==e?i-this.initialGamma:i,a>100?a-=180:-100>a&&(a+=180),n>200?n-=360:-200>n&&(n+=360),a=c(a,this.tilt.beta,this.options.alphaFilter),n=c(n,this.tilt.gamma,this.options.alphaFilter),this.tilt.beta=a,this.tilt.gamma=n}},_repositionElements:function(){var t,i,a,e,n=this._getMoveHorizontal(),o=this._getMoveVertical();if(this.currentMoveHorizontal!==n||this.currentMoveVertical!==o||this.currentWidth!==this.viewportWidth||this.currentHeight!==this.viewportHeight){for(this.currentMoveHorizontal=n,this.currentMoveVertical=o,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight,e=this.elements.length-1;e>=0;e--)t=this.elements[e],i=this.options.horizontalParallax?Math.floor(n*t.parallaxDistanceX/2)+t.originalPositionLeft:t.originalPositionLeft,a=this.options.verticalParallax?Math.floor(o*t.parallaxDistanceY/2)+t.originalPositionTop:t.originalPositionTop,this._setPosition(t.$element,i,t.originalPositionLeft,a,t.originalPositionTop);for(e=this.backgrounds.length-1;e>=0;e--)t=this.backgrounds[e],i=this.options.horizontalParallax?Math.floor(n*t.parallaxDistanceX/2)+t.originalBackgroundPositionLeft+"px":t.originalValueLeft,a=this.options.verticalParallax?Math.floor(o*t.parallaxDistanceY/2)+t.originalBackgroundPositionTop+"px":t.originalValueTop,f(t.$element,i,a)}},_handleWindowLoadAndResize:function(){var a=this,e=t(i);a.options.responsive&&e.bind("load."+this.name,function(){a.refresh()}),e.bind("resize."+this.name,function(){a._detectViewport(),a.options.responsive&&a.refresh()}),e.bind("orientationchange."+this.name,function(){a._detectViewport(),a.options.responsive&&a.refresh()})},_startAnimation:function(){var t=this,a=!1;this.gamma=this.beta=0,this.clientX=this.oldClientX=Math.round(t.viewportWidth/2),this.clientY=this.oldClientY=Math.round(t.viewportHeight/2);var n=function(){t._processSensorData(),t._repositionElements(),a=!1},o=function(){a||(b(n),a=!0)};this._handleSensorWebkit=function(i){t.gamma=i.gamma,t.beta=i.beta,o()},this._handleSensorMoz=function(i){t.gamma=180*i.x,t.beta=-90*i.y,o()},this._handleMouseMove=function(i){t.oldClientX=t.clientX,t.oldClientY=t.clientY,i.clientX!==e?t.clientX=i.clientX:t.clientX=i.pageX,i.clientY!==e?t.clientY=i.clientY:t.clientY=i.pageY,o()},this.useSensorWebkit?i.addEventListener("deviceorientation",t._handleSensorWebkit,!1):this.useSensorMoz&&i.addEventListener("MozOrientation",t._handleSensorMoz,!1),this.useMouseMove&&this.$viewportElement.bind("mousemove."+this.name,t._handleMouseMove),o()}},t.fn[s]=function(i){var a=arguments;return i===e||"object"==typeof i?this.each(function(){t.data(this,"plugin_"+s)||t.data(this,"plugin_"+s,new n(this,i))}):"string"==typeof i&&"_"!==i[0]&&"init"!==i?this.each(function(){var e=t.data(this,"plugin_"+s);e instanceof n&&"function"==typeof e[i]&&e[i].apply(e,Array.prototype.slice.call(a,1)),"destroy"===i&&t.data(this,"plugin_"+s,null)}):void 0},t[s]=function(a){var e=t(i);return e[s].apply(e,Array.prototype.slice.call(arguments,0))},t[s].positionProperty=l,t[s].motionType=d,i[s]=n}(jQuery,this,document);var utils=utils||{presumeHandheld:function(){var t=!1,i=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(i=!0)}(navigator.userAgent||navigator.vendor||window.opera),Modernizr.touch&&i&&($(document.body).addClass("handheld"),t=!0),t}},api_key="R_c5a205dfb9f18bebba3359508b9c32ff",login="o_4ap51r11lp",share=share||{init:function(){var t="http://advent.ddbcalifornia.com/",i="DDB Ad-Vent Calendar ",a=t+"images/facebook-share.jpg",e="http://www.facebook.com/sharer.php?s=100&p[title]="+i+"&p[summary]=DDB San Francisco is giving the greatest gif(t) of all: a reaction gif about ad agency life every day 'til Christmas. Check out the Ad-vent Calendar &p[url]="+t+"&p[images][0]="+a,n="http://twitter.com/intent/tweet?status=I'm counting down the days until Gifmas with the DDB Ad-Vent Calendar (get it?) at "+t;$(document.body).on("click",".fbsharesite",function(t){t.preventDefault();var i=520,a=350,n=screen.height/2-a/2,o=screen.width/2-i/2;window.open(e,"sharer","top="+n+",left="+o+",toolbar=0,status=0,width="+i+",height="+a)}),$(document.body).on("click",".twsharesite",function(t){t.preventDefault();var i=520,a=350,e=screen.height/2-a/2,o=screen.width/2-i/2;window.open(n,"sharer","top="+e+",left="+o+",toolbar=0,status=0,width="+i+",height="+a)}),$(document.body).on("click",".fbsharecontent",function(t){t.preventDefault();var i=window.location.href;FB.ui({method:"feed",link:i,caption:$(this).data("text"),picture:$(this).data("imgurl")},function(t){})}),$(document.body).on("click",".twsharecontent",function(t){t.preventDefault();var i=window.location.href,a=$(this).data("text"),e=new RegExp("#([^\\s]*)","g");a=a.replace(e,"");var n=520,o=350,s=screen.height/2-o/2,r=screen.width/2-n/2,l=window.open("about:blank","sharer","top="+s+",left="+r+",toolbar=0,status=0,width="+n+",height="+o);$.getJSON("http://api.bitly.com/v3/shorten?callback=?",{format:"json",apiKey:api_key,longUrl:i,login:login},function(t){var i;i=t.data.url?encodeURIComponent(t.data.url):encodeURIComponent(window.location.href);var e="https://twitter.com/intent/tweet?url="+i+"&text="+encodeURIComponent(a)+"&hashtags=ddbsfadvent";l.location=e})})}},$dates=$("div.date"),source=$("#modal-template").html(),template=Handlebars.compile(source),cal=cal||{allGrams:{},init:function(){var t=this,i=t.whichDay();t.binds(),$dates.each(function(t,a){var e=$(a);$(a).find(".ch-item").attr("data-date",t+1),i>t+1?e.addClass("passed"):t+1===i&&e.addClass("active passed")});var a=getData();a.then(function(i){t.allGrams=i,t.popData(i),$(document.body).trigger({type:"all-loaded"})})},binds:function(){var t=this;$(document.body).on("click",".passed .ch-item",function(){$(this).addClass("open");var i=$(this).data("date");t.allGrams[i-1]&&t.setModal(i)}),$("#modal").on("shown.bs.modal",function(){document.getElementById("thevideo");$("#thevideo").on("canplay",function(){console.log("loaded"),$(".modal-dialog").css("height",$(".modal-dialog").outerHeight()+60)}),$(".modal-dialog").css("height",$(".modal-dialog").outerHeight()+60)}),$("#modal").on("hidden.bs.modal",function(){$(".ch-item").removeClass("open"),$(".modal-dialog").css("height","auto"),$("video").find("source").attr("src",""),window.location.hash="/"})},setModal:function(t){window.location.hash="/day/"+t;var i=this,a=i.allGrams[t-1];if(a){var e={date:pad(t),videoUrl:a.videos.standard_resolution.url,imageUrl:a.images.standard_resolution.url,caption:a.caption.text.parseHashtag(),captionPlain:a.caption.text},n=template(e);$(".modal-content").html(n),$("#modal").modal("show")}},popData:function(t){for(var i=0;i<t.length;i++){var a=$dates[i];$(a).find(".ch-info-wrap").css({"background-image":"url("+t[i].images.low_resolution.url+")"})}},whichDay:function(){var t=new Date,i=t.getMonth(),a=t.getDate(),e=new Array;return e[0]="January",e[1]="February",e[2]="March",e[3]="April",e[4]="May",e[5]="June",e[6]="July",e[7]="August",e[8]="September",e[9]="October",e[10]="November",e[11]="December",11===i?a:25}},canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),snow=snow||{flakes:[],W:null,H:null,numberFlakes:60,angle:0,timer:"",makeit:function(){var t=this;t.W=$(document.body).width(),t.H=$(document.body).height(),canvas.width=t.W,canvas.height=t.H,t.angle=0,t.numberFlakes=60,t.timer&&clearInterval(t.timer),ctx.clearRect(0,0,t.W,t.H),t.flakes=[];for(var i=0;i<t.numberFlakes;i++)t.flakes.push({x:Math.random()*t.W,y:Math.random()*t.H,radius:8*Math.random()+1});t.timer=setInterval(function(){t.drawFlakes()},30)},moveFlakes:function(){var t=this;t.angle+=.01;for(var i=0;i<t.numberFlakes;i++){var a=t.flakes[i];a.y+=Math.cos(t.angle)+1+a.radius/2,a.x+=2*Math.sin(t.angle),(a.x>t.W+5||a.x<-5||a.y>t.H)&&(i%3>0?t.flakes[i]={x:Math.random()*t.W,y:-10,radius:a.radius}:Math.sin(t.angle)>0?t.flakes[i]={x:-5,y:Math.random()*t.H,radius:a.radius}:t.flakes[i]={x:t.W+5,y:Math.random()*t.H,radius:a.radius})}},drawFlakes:function(){var t=this;ctx.clearRect(0,0,t.W,t.H);for(var i=0;i<t.numberFlakes;i++){var a=t.flakes[i];ctx.moveTo(a.x,a.y),ctx.arc(a.x,a.y,a.radius,0,2*Math.PI,!0),ctx.beginPath(),ctx.arc(a.x,a.y,a.radius,0,2*Math.PI,!0),ctx.lineWidth=a.radius/1.5,ctx.strokeStyle="rgba(255, 255, 255, 0.8)",ctx.stroke()}t.moveFlakes()}},app=app||{kickoff:function(){$.routes.add("/day/{id:int}/",function(){var t=this.id;$(document.body).on("all-loaded",function(){cal.setModal(t)})}),cal.init(),share.init();var t=utils.presumeHandheld();t||this.desktopFeatures()},desktopFeatures:function(){snow.makeit();var t=debounce(function(){snow.makeit()},250);window.addEventListener("resize",t),$(".footer").parallaxify({positionProperty:"transform",responsive:!0,motionType:"natural",mouseMotionType:"gaussian",motionAngleX:80,motionAngleY:80,alphaFilter:.5,adjustBasePosition:!0,alphaPosition:.025})}};app.kickoff(),String.prototype.parseHashtag=function(){return this.replace(/[#]+[A-Za-z0-9-_]+/g,function(t){var i=t;return'<a href="https://www.instagram.com/explore/tags/'+i+'" target="_blank">'+i+"</a>"})};