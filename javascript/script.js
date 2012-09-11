 /*
 * TipTip
 * Copyright 2010 Drew Wilson
 * www.drewwilson.com
 * code.drewwilson.com/entry/tiptip-jquery-plugin
 *
 * Version 1.3   -   Updated: Mar. 23, 2010
 *
 * This Plug-In will create a custom tooltip to replace the default
 * browser tooltip. It is extremely lightweight and very smart in
 * that it detects the edges of the browser window and will make sure
 * the tooltip stays within the current window size. As a result the
 * tooltip will adjust itself to be displayed above, below, to the left 
 * or to the right depending on what is necessary to stay within the
 * browser window. It is completely customizable as well via CSS.
 *
 * This TipTip jQuery plug-in is dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($){$.fn.tipTip=function(options){var defaults={activation:"hover",keepAlive:false,maxWidth:"200px",edgeOffset:3,defaultPosition:"bottom",delay:400,fadeIn:200,fadeOut:200,attribute:"title",content:false,enter:function(){},exit:function(){}};var opts=$.extend(defaults,options);if($("#tiptip_holder").length<=0){var tiptip_holder=$('<div id="tiptip_holder" style="max-width:'+opts.maxWidth+';"></div>');var tiptip_content=$('<div id="tiptip_content"></div>');var tiptip_arrow=$('<div id="tiptip_arrow"></div>');$("body").append(tiptip_holder.html(tiptip_content).prepend(tiptip_arrow.html('<div id="tiptip_arrow_inner"></div>')))}else{var tiptip_holder=$("#tiptip_holder");var tiptip_content=$("#tiptip_content");var tiptip_arrow=$("#tiptip_arrow")}return this.each(function(){var org_elem=$(this);if(opts.content){var org_title=opts.content}else{var org_title=org_elem.attr(opts.attribute)}if(org_title!=""){if(!opts.content){org_elem.removeAttr(opts.attribute)}var timeout=false;if(opts.activation=="hover"){org_elem.hover(function(){active_tiptip()},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}else if(opts.activation=="focus"){org_elem.focus(function(){active_tiptip()}).blur(function(){deactive_tiptip()})}else if(opts.activation=="click"){org_elem.click(function(){active_tiptip();return false}).hover(function(){},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}function active_tiptip(){opts.enter.call(this);tiptip_content.html(org_title);tiptip_holder.hide().removeAttr("class").css("margin","0");tiptip_arrow.removeAttr("style");var top=parseInt(org_elem.offset()['top']);var left=parseInt(org_elem.offset()['left']);var org_width=parseInt(org_elem.outerWidth());var org_height=parseInt(org_elem.outerHeight());var tip_w=tiptip_holder.outerWidth();var tip_h=tiptip_holder.outerHeight();var w_compare=Math.round((org_width-tip_w)/2);var h_compare=Math.round((org_height-tip_h)/2);var marg_left=Math.round(left+w_compare);var marg_top=Math.round(top+org_height+opts.edgeOffset);var t_class="";var arrow_top="";var arrow_left=Math.round(tip_w-12)/2;if(opts.defaultPosition=="bottom"){t_class="_bottom"}else if(opts.defaultPosition=="top"){t_class="_top"}else if(opts.defaultPosition=="left"){t_class="_left"}else if(opts.defaultPosition=="right"){t_class="_right"}var right_compare=(w_compare+left)<parseInt($(window).scrollLeft());var left_compare=(tip_w+left)>parseInt($(window).width());if((right_compare&&w_compare<0)||(t_class=="_right"&&!left_compare)||(t_class=="_left"&&left<(tip_w+opts.edgeOffset+5))){t_class="_right";arrow_top=Math.round(tip_h-13)/2;arrow_left=-12;marg_left=Math.round(left+org_width+opts.edgeOffset);marg_top=Math.round(top+h_compare)}else if((left_compare&&w_compare<0)||(t_class=="_left"&&!right_compare)){t_class="_left";arrow_top=Math.round(tip_h-13)/2;arrow_left=Math.round(tip_w);marg_left=Math.round(left-(tip_w+opts.edgeOffset+5));marg_top=Math.round(top+h_compare)}var top_compare=(top+org_height+opts.edgeOffset+tip_h+8)>parseInt($(window).height()+$(window).scrollTop());var bottom_compare=((top+org_height)-(opts.edgeOffset+tip_h+8))<0;if(top_compare||(t_class=="_bottom"&&top_compare)||(t_class=="_top"&&!bottom_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_top"}else{t_class=t_class+"_top"}arrow_top=tip_h;marg_top=Math.round(top-(tip_h+5+opts.edgeOffset))}else if(bottom_compare|(t_class=="_top"&&bottom_compare)||(t_class=="_bottom"&&!top_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_bottom"}else{t_class=t_class+"_bottom"}arrow_top=-12;marg_top=Math.round(top+org_height+opts.edgeOffset)}if(t_class=="_right_top"||t_class=="_left_top"){marg_top=marg_top+5}else if(t_class=="_right_bottom"||t_class=="_left_bottom"){marg_top=marg_top-5}if(t_class=="_left_top"||t_class=="_left_bottom"){marg_left=marg_left+5}tiptip_arrow.css({"margin-left":arrow_left+"px","margin-top":arrow_top+"px"});tiptip_holder.css({"margin-left":marg_left+"px","margin-top":marg_top+"px"}).attr("class","tip"+t_class);if(timeout){clearTimeout(timeout)}timeout=setTimeout(function(){tiptip_holder.stop(true,true).fadeIn(opts.fadeIn)},opts.delay)}function deactive_tiptip(){opts.exit.call(this);if(timeout){clearTimeout(timeout)}tiptip_holder.fadeOut(opts.fadeOut)}}})}})(jQuery);





(function($){$.cluetip={version:'1.2.5',template:['<div>','<div class="cluetip-outer">','<h3 class="cluetip-title ui-widget-header ui-cluetip-header"></h3>','<div class="cluetip-inner ui-widget-content ui-cluetip-content"></div>','</div>','<div class="cluetip-extra"></div>','<div class="cluetip-arrows ui-state-default"></div>','</div>'].join(''),setup:{insertionType:'appendTo',insertionElement:'body'},defaults:{multiple:false,width:275,height:'auto',cluezIndex:97,positionBy:'auto',topOffset:15,leftOffset:15,local:false,localPrefix:null,localIdSuffix:null,hideLocal:true,attribute:'rel',titleAttribute:'title',splitTitle:'',escapeTitle:false,showTitle:true,cluetipClass:'default',hoverClass:'',waitImage:true,cursor:'help',arrows:false,dropShadow:true,dropShadowSteps:6,sticky:false,mouseOutClose:false,activation:'hover',clickThrough:true,tracking:false,delayedClose:0,closePosition:'top',closeText:'Close',truncate:0,fx:{open:'show',openSpeed:''},hoverIntent:{sensitivity:3,interval:50,timeout:0},onActivate:function(e){return true;},onShow:function(ct,ci){},onHide:function(ct,ci){},ajaxCache:true,ajaxProcess:function(data){data=data.replace(/<(script|style|title)[^<]+<\/(script|style|title)>/gm,'').replace(/<(link|meta)[^>]+>/g,'');return data;},ajaxSettings:{dataType:'html'},debug:false}};var $cluetipWait,standardClasses='cluetip ui-widget ui-widget-content ui-cluetip',caches={},counter=0,imgCount=0;$.fn.attrProp=$.fn.prop||$.fn.attr;$.fn.cluetip=function(js,options){var $cluetip,$cluetipInner,$cluetipOuter,$cluetipTitle,$cluetipArrows,$dropShadow;if(typeof js=='object'){options=js;js=null;}
if(js=='destroy'){var data=this.data('cluetip');if(data){$(data.selector).remove();$.removeData(this,'title');$.removeData(this,'cluetip');}
$(document).unbind('.cluetip');return this.unbind('.cluetip');}
options=$.extend(true,{},$.cluetip.defaults,options||{});counter++;var cluezIndex,cluetipId=$.cluetip.backCompat||!options.multiple?'cluetip':'cluetip-'+counter,cluetipSelector='#'+cluetipId,prefix=$.cluetip.backCompat?'#':'.',insertionType=$.cluetip.setup.insertionType,insertionElement=$.cluetip.setup.insertionElement||'body';insertionType=(/appendTo|prependTo|insertBefore|insertAfter/).test(insertionType)?insertionType:'appendTo';$cluetip=$(cluetipSelector);if(!$cluetip.length){$cluetip=$($.cluetip.template)
[insertionType](insertionElement).attr('id',cluetipId).css({position:'absolute',display:'none'});cluezIndex=+options.cluezIndex;$cluetipOuter=$cluetip.find(prefix+'cluetip-outer').css({position:'relative',zIndex:cluezIndex});$cluetipInner=$cluetip.find(prefix+'cluetip-inner');$cluetipTitle=$cluetip.find(prefix+'cluetip-title');}
$cluetipWait=$('#cluetip-waitimage');if(!$cluetipWait.length){$cluetipWait=$('<div></div>').attr('id','cluetip-waitimage').css({position:'absolute'});}
$cluetipWait.insertBefore($cluetip).hide();var cluetipPadding=(parseInt($cluetip.css('paddingLeft'),10)||0)+(parseInt($cluetip.css('paddingRight'),10)||0);this.each(function(index){var link=this,$link=$(this),opts=$.extend(true,{},options,$.metadata?$link.metadata():$.meta?$link.data():$link.data('cluetip')||{}),cluetipContents=false,isActive=false,closeOnDelay=0,tipAttribute=opts[opts.attribute]||(opts.attribute=='href'?$link.attr(opts.attribute):$link.attrProp(opts.attribute)||$link.attr(opts.attribute)),ctClass=opts.cluetipClass;cluezIndex=+opts.cluezIndex;$link.data('cluetip',{title:link.title,zIndex:cluezIndex,selector:cluetipSelector});if(!tipAttribute&&!opts.splitTitle&&!js){return true;}
if(opts.local&&opts.localPrefix){tipAttribute=opts.localPrefix+tipAttribute;}
if(opts.local&&opts.hideLocal&&tipAttribute){$(tipAttribute+':first').hide();}
var tOffset=parseInt(opts.topOffset,10),lOffset=parseInt(opts.leftOffset,10);var tipHeight,wHeight,defHeight=isNaN(parseInt(opts.height,10))?'auto':(/\D/g).test(opts.height)?opts.height:opts.height+'px';var sTop,linkTop,posY,tipY,mouseY,baseline;var tipInnerWidth=parseInt(opts.width,10)||275,tipWidth=tipInnerWidth+cluetipPadding+opts.dropShadowSteps,linkWidth=this.offsetWidth,linkLeft,posX,tipX,mouseX,winWidth;var tipParts;var tipTitle=(opts.attribute!='title')?$link.attrProp(opts.titleAttribute)||'':'';if(opts.splitTitle){tipParts=tipTitle.split(opts.splitTitle);tipTitle=opts.showTitle||tipParts[0]===''?tipParts.shift():'';}
if(opts.escapeTitle){tipTitle=tipTitle.replace(/&/g,'&amp;').replace(/>/g,'&gt;').replace(/</g,'&lt;');}
var localContent;function returnFalse(){return false;}
var activate=function(event){var pY,ajaxMergedSettings,cacheKey,continueOn=opts.onActivate.call(link,event);if(continueOn===false){return false;}
isActive=true;$cluetip=$(cluetipSelector).css({position:'absolute'});$cluetipOuter=$cluetip.find(prefix+'cluetip-outer');$cluetipInner=$cluetip.find(prefix+'cluetip-inner');$cluetipTitle=$cluetip.find(prefix+'cluetip-title');$cluetipArrows=$cluetip.find(prefix+'cluetip-arrows');$cluetip.removeClass().css({width:tipInnerWidth});if(tipAttribute==$link.attr('href')){$link.css('cursor',opts.cursor);}
if(opts.hoverClass){$link.addClass(opts.hoverClass);}
linkTop=posY=$link.offset().top;linkLeft=$link.offset().left;linkWidth=$link.innerWidth();if(event.type==focus){mouseX=linkLeft+(linkWidth/2)+lOffset;$cluetip.css({left:posX});mouseY=posY+tOffset;}else{mouseX=event.pageX;mouseY=event.pageY;}
if(link.tagName.toLowerCase()!='area'){sTop=$(document).scrollTop();winWidth=$(window).width();}
if(opts.positionBy=='fixed'){posX=linkWidth+linkLeft+lOffset;$cluetip.css({left:posX});}else{posX=(linkWidth>linkLeft&&linkLeft>tipWidth)||linkLeft+linkWidth+tipWidth+lOffset>winWidth?linkLeft-tipWidth-lOffset:linkWidth+linkLeft+lOffset;if(link.tagName.toLowerCase()=='area'||opts.positionBy=='mouse'||linkWidth+tipWidth>winWidth){if(mouseX+20+tipWidth>winWidth){$cluetip.addClass('cluetip-'+ctClass);posX=(mouseX-tipWidth-lOffset)>=0?mouseX-tipWidth-lOffset-parseInt($cluetip.css('marginLeft'),10)+parseInt($cluetipInner.css('marginRight'),10):mouseX-(tipWidth/2);}else{posX=mouseX+lOffset;}}
pY=posX<0?event.pageY+tOffset:event.pageY;if(posX<0||opts.positionBy=='bottomTop'){posX=(mouseX+(tipWidth/2)>winWidth)?winWidth/2-tipWidth/2:Math.max(mouseX-(tipWidth/2),0);}}
$cluetipArrows.css({zIndex:$link.data('cluetip').zIndex+1});$cluetip.css({left:posX,zIndex:$link.data('cluetip').zIndex});wHeight=$(window).height();if(js){if(typeof js=='function'){js=js.call(link);}
$cluetipInner.html(js);cluetipShow(pY);}
else if(tipParts){var tpl=tipParts.length;$cluetipInner.html(tpl?tipParts[0]:'');if(tpl>1){for(var i=1;i<tpl;i++){$cluetipInner.append('<div class="split-body">'+tipParts[i]+'</div>');}}
cluetipShow(pY);}
else if(!opts.local&&tipAttribute.indexOf('#')!==0){if(/\.(jpe?g|tiff?|gif|png)(?:\?.*)?$/i.test(tipAttribute)){$cluetipInner.html('<img src="'+tipAttribute+'" alt="'+tipTitle+'" />');cluetipShow(pY);}else{var optionBeforeSend=opts.ajaxSettings.beforeSend,optionError=opts.ajaxSettings.error,optionSuccess=opts.ajaxSettings.success,optionComplete=opts.ajaxSettings.complete;cacheKey=getCacheKey(tipAttribute,opts.ajaxSettings.data);var ajaxSettings={cache:opts.ajaxCache,url:tipAttribute,beforeSend:function(xhr,settings){if(optionBeforeSend){optionBeforeSend.call(link,xhr,$cluetip,$cluetipInner,settings);}
$cluetipOuter.children().empty();if(opts.waitImage){$cluetipWait.css({top:mouseY+20,left:mouseX+20,zIndex:$link.data('cluetip').zIndex-1}).show();}},error:function(xhr,textStatus){if(options.ajaxCache&&!caches[cacheKey]){caches[cacheKey]={status:'error',textStatus:textStatus,xhr:xhr};}
if(isActive){if(optionError){optionError.call(link,xhr,textStatus,$cluetip,$cluetipInner);}else{$cluetipInner.html('<i>sorry, the contents could not be loaded</i>');}}},success:function(data,textStatus,xhr){if(options.ajaxCache&&!caches[cacheKey]){caches[cacheKey]={status:'success',data:data,textStatus:textStatus,xhr:xhr};}
cluetipContents=opts.ajaxProcess.call(link,data);if(typeof cluetipContents=='object'&&cluetipContents!==null){tipTitle=cluetipContents.title;cluetipContents=cluetipContents.content;}
if(isActive){if(optionSuccess){optionSuccess.call(link,data,textStatus,$cluetip,$cluetipInner);}
$cluetipInner.html(cluetipContents);}},complete:function(xhr,textStatus){if(optionComplete){optionComplete.call(link,xhr,textStatus,$cluetip,$cluetipInner);}
var imgs=$cluetipInner[0].getElementsByTagName('img');imgCount=imgs.length;for(var i=0,l=imgs.length;i<l;i++){if(imgs[i].complete){imgCount--;}}
if(imgCount&&!$.browser.opera){$(imgs).bind('load.ct error.ct',function(){imgCount--;if(imgCount===0){$cluetipWait.hide();$(imgs).unbind('.ct');if(isActive){cluetipShow(pY);}}});}else{$cluetipWait.hide();if(isActive){cluetipShow(pY);}}}};ajaxMergedSettings=$.extend(true,{},opts.ajaxSettings,ajaxSettings);if(caches[cacheKey]){cachedAjax(caches[cacheKey],ajaxMergedSettings);}else{$.ajax(ajaxMergedSettings);}}}else if(opts.local){var $localContent=$(tipAttribute+(/^#\S+$/.test(tipAttribute)?'':':eq('+index+')')).clone(true).show();if(opts.localIdSuffix){$localContent.attr('id',$localContent[0].id+opts.localIdSuffix);}
$cluetipInner.html($localContent);cluetipShow(pY);}};var cluetipShow=function(bpY){var $closeLink,dynamicClasses,heightDiff,titleHTML=tipTitle||opts.showTitle&&'&nbsp;',bgY='',direction='';$cluetip.addClass('cluetip-'+ctClass);if(opts.truncate){var $truncloaded=$cluetipInner.text().slice(0,opts.truncate)+'...';$cluetipInner.html($truncloaded);}
if(titleHTML){$cluetipTitle.show().html(titleHTML);}else{$cluetipTitle.hide();}
if(opts.sticky){$closeLink=$('<div class="cluetip-close"><a href="#">'+opts.closeText+'</a></div>');(opts.closePosition=='bottom')?$closeLink.appendTo($cluetipInner):(opts.closePosition=='title')?$closeLink.prependTo($cluetipTitle):$closeLink.prependTo($cluetipInner);$closeLink.bind('click.cluetip',function(){cluetipClose();return false;});if(opts.mouseOutClose){$cluetip.bind('mouseleave.cluetip',function(){cluetipClose();});}else{$cluetip.unbind('mouseleave.cluetip');}}
$cluetipOuter.css({zIndex:$link.data('cluetip').zIndex,overflow:defHeight=='auto'?'visible':'auto',height:defHeight});tipHeight=defHeight=='auto'?Math.max($cluetip.outerHeight(),$cluetip.height()):parseInt(defHeight,10);tipY=posY;baseline=sTop+wHeight;if(opts.positionBy=='fixed'){tipY=posY-opts.dropShadowSteps+tOffset;}else if((posX<mouseX&&Math.max(posX,0)+tipWidth>mouseX)||opts.positionBy=='bottomTop'){if(posY+tipHeight+tOffset>baseline&&mouseY-sTop>tipHeight+tOffset){tipY=mouseY-tipHeight-tOffset;direction='top';}else{tipY=mouseY+tOffset;direction='bottom';}}else if(posY+tipHeight+tOffset>baseline){tipY=(tipHeight>=wHeight)?sTop:baseline-tipHeight-tOffset;}else if($link.css('display')=='block'||link.tagName.toLowerCase()=='area'||opts.positionBy=="mouse"){tipY=bpY-tOffset;}else{tipY=posY-opts.dropShadowSteps;}
if(direction===''){direction=posX<linkLeft?'left':'right';}
dynamicClasses=' clue-'+direction+'-'+ctClass+' cluetip-'+ctClass;if(ctClass=='rounded'){dynamicClasses+=' ui-corner-all';}
$cluetip.css({top:tipY+'px'}).attrProp({'className':standardClasses+dynamicClasses});if(opts.arrows){if(/(left|right)/.test(direction)){heightDiff=$cluetip.height()-$cluetipArrows.height();bgY=posX>=0&&bpY>0?(posY-tipY-opts.dropShadowSteps):0;bgY=heightDiff>bgY?bgY:heightDiff;bgY+='px';}
$cluetipArrows.css({top:bgY}).show();}else{$cluetipArrows.hide();}
$dropShadow=createDropShadows($cluetip,opts);if($dropShadow&&$dropShadow.length){$dropShadow.hide().css({height:tipHeight,width:tipInnerWidth,zIndex:$link.data('cluetip').zIndex-1}).show();}
$cluetip.hide()[opts.fx.open](opts.fx.openSpeed||0);if($.fn.bgiframe){$cluetip.bgiframe();}
if(opts.delayedClose>0){closeOnDelay=setTimeout(cluetipClose,opts.delayedClose);}
opts.onShow.call(link,$cluetip,$cluetipInner);};var inactivate=function(event){isActive=false;$cluetipWait.hide();if(!opts.sticky||(/click|toggle/).test(opts.activation)){cluetipClose();clearTimeout(closeOnDelay);}
if(opts.hoverClass){$link.removeClass(opts.hoverClass);}};var cluetipClose=function(el){var $closer=el&&el.data('cluetip')?el:$link,ct=$closer.data('cluetip')&&$closer.data('cluetip').selector,ctSelector=ct||'div.cluetip',$cluetip=$(ctSelector),$cluetipInner=$cluetip.find(prefix+'cluetip-inner'),$cluetipArrows=$cluetip.find(prefix+'cluetip-arrows');$cluetip.hide().removeClass();opts.onHide.call($closer[0],$cluetip,$cluetipInner);if(ct){$closer.removeClass('cluetip-clicked');$closer.css('cursor','');}
if(ct&&tipTitle){$closer.attrProp(opts.titleAttribute,tipTitle);}
if(opts.arrows){$cluetipArrows.css({top:''});}};$(document).unbind('hideCluetip.cluetip').bind('hideCluetip.cluetip',function(e){cluetipClose($(e.target));});if((/click|toggle/).test(opts.activation)){$link.bind('click.cluetip',function(event){if($cluetip.is(':hidden')||!$link.is('.cluetip-clicked')){activate(event);$('.cluetip-clicked').removeClass('cluetip-clicked');$link.addClass('cluetip-clicked');}else{inactivate(event);}
return false;});}else if(opts.activation=='focus'){$link.bind('focus.cluetip',function(event){$link.attrProp('title','');activate(event);});$link.bind('blur.cluetip',function(event){$link.attrProp('title',$link.data('cluetip').title);inactivate(event);});}else{$link[opts.clickThrough?'unbind':'bind']('click.cluetip',returnFalse);var mouseTracks=function(evt){if(opts.tracking){var trackX=posX-evt.pageX;var trackY=tipY?tipY-evt.pageY:posY-evt.pageY;$link.bind('mousemove.cluetip',function(evt){$cluetip.css({left:evt.pageX+trackX,top:evt.pageY+trackY});});}};if($.fn.hoverIntent&&opts.hoverIntent){$link.hoverIntent({sensitivity:opts.hoverIntent.sensitivity,interval:opts.hoverIntent.interval,over:function(event){activate(event);mouseTracks(event);},timeout:opts.hoverIntent.timeout,out:function(event){inactivate(event);$link.unbind('mousemove.cluetip');}});}else{$link.bind('mouseenter.cluetip',function(event){activate(event);mouseTracks(event);}).bind('mouseleave.cluetip',function(event){inactivate(event);$link.unbind('mousemove.cluetip');});}
$link.bind('mouseover.cluetip',function(event){$link.attrProp('title','');}).bind('mouseleave.cluetip',function(event){$link.attrProp('title',$link.data('cluetip').title);});}
function cachedAjax(info,settings){var status=info.status;settings.beforeSend(info.xhr,settings);if(status=='error'){settings[status](info.xhr,info.textStatus);}else if(status=='success'){settings[status](info.data,info.textStatus,info.xhr);}
settings.complete(info.xhr,settings.textStatus);}});function doNothing(){}
function getCacheKey(url,data){var cacheKey=url||'';data=data||'';if(typeof data=='object'){$.each(data,function(key,val){cacheKey+='-'+key+'-'+val;});}else if(typeof data=='string'){cacheKey+=data;}
return cacheKey;}
function createDropShadows($cluetip,options,newDropShadow){var dsStyle='',dropShadowSteps=(options.dropShadow&&options.dropShadowSteps)?+options.dropShadowSteps:0;if($.support.boxShadow){if(dropShadowSteps){dsStyle='1px 1px '+dropShadowSteps+'px rgba(0,0,0,0.5)';}
var dsOffsets=dropShadowSteps===0?'0 0 ':'1px 1px ';$cluetip.css($.support.boxShadow,dsStyle);return false;}
var oldDropShadow=$cluetip.find('.cluetip-drop-shadow');if(dropShadowSteps==oldDropShadow.length){return oldDropShadow;}
oldDropShadow.remove();var dropShadows=[];for(var i=0;i<dropShadowSteps;){dropShadows[i++]='<div style="top:'+i+'px;left:'+i+'px;"></div>';}
newDropShadow=$(dropShadows.join('')).css({position:'absolute',backgroundColor:'#000',zIndex:cluezIndex-1,opacity:0.1}).addClass('cluetip-drop-shadow').prependTo($cluetip);return newDropShadow;}
return this;};(function(){$.support=$.support||{};var div=document.createElement('div'),divStyle=div.style,styleProps=['boxShadow'],prefixes=['moz','Moz','webkit','o'];for(var i=0,sl=styleProps.length;i<sl;i++){var prop=styleProps[i],uProp=prop.charAt(0).toUpperCase()+prop.slice(1);if(typeof divStyle[prop]!=='undefined'){$.support[prop]=prop;}else{for(var j=0,pl=prefixes.length;j<pl;j++){if(typeof divStyle[prefixes[j]+uProp]!=='undefined'){$.support[prop]=prefixes[j]+uProp;break;}}}}
div=null;})();$.fn.cluetip.defaults=$.cluetip.defaults;})(jQuery);





jQuery.noConflict();

(function($) {    
    $(document).ready(function() {
		
		
		$('.cluetip').cluetip({activation: 'click', width: 400, attribute: 'href', showTitle: false, sticky: true, mouseOutClose: true, closePosition: 'title', ajaxCache: false,  onActivate: function(event){
			if($(this).hasClass("addAlert")){
			     img = $(this).children(":first").attr('src');
			     img = img.replace(/grey/, 'colour');
			     $(this).children(":first").attr('src', img);
			}
			else if($(this).hasClass("removeAlert")){ 
				img = $(this).children(":first").attr('src');
			    img = img.replace(/colour/, 'grey');
			    $(this).children(":first").attr('src', img);
			};
		}, onHide: function(event){ 
			if($(this).hasClass("addAlert")){
				$(this).removeClass('addAlert');
				$(this).addClass('removeAlert');
			}else if($(this).hasClass("removeAlert")){ 
				$(this).removeClass('removeAlert');
				$(this).addClass('addAlert');
			}
		}}); 
		
		$('.tiptop').tipTip({defaultPosition: 'left', delay: 0});
		$('.tiptop1').tipTip({defaultPosition: 'left', delay: 0});
		$( "#preferencing" ).sortable({
			revert: true,
			placeholder: 'placeholder',
			stop: function(event, ui) {
				$(this).find(".pos").each(function(i, elem) {
					$(elem).text(i+1);        
					});
				}			
		});
		
		ids = $('#preferencing').sortable('serialize');
			console.info(ids);
		
		$('.send-to-top').click(function(event) {
			$(this).parent().prependTo('#preferencing');
			$(this).parent().parent().find(".pos").each(function(i, elem) {
					$(elem).text(i+1);        
					});
		});
		$('.send-to-bottom').click(function(event) {
			$(this).parent().appendTo('#preferencing');
			$(this).parent().parent().find(".pos").each(function(i, elem) {
					$(elem).text(i+1);        
					});
		});
		$('#preferencing li').tipTip({defaultPosition: 'top', delay: 0});
		$('.send-to-top').tipTip({defaultPosition: 'top', delay: 0});
		$('.send-to-bottom').tipTip({defaultPosition: 'top', delay: 0});
		
		/* removes text from search form on focus and replaces it on unfocus - if text is entered then it does not get replaced with default on unfocus */
		$('#SearchForm_SearchForm_action_results').val('L');
		var searchField = $('#SearchForm_SearchForm_Search');
		var default_value = searchField.val();
		searchField.focus(function() {
			$(this).addClass('active');
			if(searchField.val() == default_value) {
				searchField.val('');
			}
		});
		searchField.blur(function() {
			  if(searchField.val() == '') {
					searchField.val(default_value);
			  }
		});
				
		if (!$.browser.msie || ($.browser.msie && (parseInt($.browser.version, 10) > 8))) {
			
			var searchBarButton = $("span.search-dropdown-icon");
			var searchBar = $('div.search-bar');
			var menuButton = $("span.nav-open-button");
			var menu = $('header .top-first-level-ul');										 
			var mobile = false;
			var changed = false;
			
			$('body').append('<div id="media-query-trigger"></div>');
			

			
 			
			
			
			function menuWidthCheck() {								  
				var header_w = $('header .inner').width();
				var elements_w = menu.width() + $('.brand').width();
				
				if ((header_w < elements_w) || ($(window).width() <= 768)) {
					$('body').addClass('tablet-nav');
				}
				else {
					$('body').removeClass('tablet-nav');				
				}
				
				mobile_old = mobile;
				if ($('#media-query-trigger').css('visibility') == 'hidden') {
					mobile = false;
				}
				else {
					mobile = true;
				}
				
				if (mobile_old != mobile) {
					changed = true;
				}
				else {
					changed = false;
				}
			}
			
			menuWidthCheck();
			
			$(window).resize(function() {
				console.log($(window).innerWidth());
				menuWidthCheck();
				
				if (!mobile) {
					menu.show();
					searchBar.show();
				}
				else {
					if (changed) {
						menu.hide();
						searchBar.hide();	
					}
				}
			});
			
			/* toggle navigation and search in mobile view */		
			searchBarButton.click(function() {
				menu.slideUp();													 
				searchBar.slideToggle(200);
			});
			
			menuButton.click(function() {
				searchBar.slideUp();													 
				menu.slideToggle(200);
			});	
		}
		
		$(function () {
      var tabContainers = $('div.tabs > div');
      tabContainers.hide().filter(this.hash).show();
      $('div.tabs ul.tabNavigation a').click(function () {
          
          tabContainers.hide().filter(this.hash).show();
          $('div.tabs ul.tabNavigation a').removeClass('selected');
          $(this).addClass('selected');
          _gaq.push(['_trackPageview', window.location.pathname + this.hash]);
          return false;
      });
      if(document.location.hash){
        $(document.location.hash).show();
      }else{
        $('div.tabs ul.tabNavigation a').filter(':first').click();
      }
  });  
  
  
  $('.vote').click(function(event) {
    event.preventDefault();
    
    if($(this).hasClass("voted")){
     
    }else{
      $.ajax({
        url: $(this).attr("href")
      }); 
      var score = $(this).html();
      score ++;
      $(this).html(score);
      $(this).removeClass("vote").addClass("voted");
    }
  });
  
  $('.readit').click(function(event) {
    event.preventDefault();
    $.ajax({url: $(this).attr("href")});
    
    var URL = window.location.pathname;
    var ID  = $(this).attr('id');
    
    if($(this).parent().parent().hasClass("alreadyreadit")){
      $(this).parent().parent().removeClass("alreadyreadit");
      $(this).html("Mark as Read");
      $(this).attr("href", URL+"readIt/"+ID);
    }else{
      $(this).parent().parent().addClass("alreadyreadit");
      $(this).html("Read");  
      $(this).attr("href", URL+"whoopsHaventReadIt/"+ID); 
    }
    });
    
    $('#view-notif').click(function(event) {
      event.preventDefault();
      $('.notifications').slideToggle();
      
    });
    
    $('#clear-notif').click(function(event) {
      event.preventDefault();
      $('.notifications').slideUp();
      $(this).parent().slideUp();
      $.ajax({url: $(this).attr("href")});
    });
    
    $('#add-lecture-button').click(function(event) {
      $(this).hide();
      $('#add-lecture').slideDown();
    });
    
    $('#add-reading-button').click(function(event) {
      $(this).hide();
      $('#add-reading').slideDown();
    });
    
    $('#add-case-button').click(function(event) {
      $(this).hide();
      $('#add-case').slideDown();
    });
    
    $('#add-note-button').click(function(event) {
      $(this).hide();
      $('#add-note').slideDown();
    });
    
    $('.add-question').click(function(event) {
      $('.add-question').hide();
      $('#quiz-block').slideUp();
      $('#add-question').slideDown();
      $('#show-questions').fadeIn();
    });
    
    $('#show-questions').click(function(event) {
      $(this).hide();
      $('#quiz-block').slideDown();
      $('#add-question').slideUp();
      $('#show-questions').fadeOut();
       $('#add-question-button').fadeIn();
    });
     
     $('.edit-lecture').click(function(event) {
    event.preventDefault();
    $.ajax({url: $(this).attr("href")}).done(function( html ) {
        $("#add-lecture").html(html);
      });
    $('#add-lecture-button').hide();
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    $('#add-lecture').slideDown();
    });
    
    
    $('.edit-reading').click(function(event) {
    event.preventDefault();
    $.ajax({url: $(this).attr("href")}).done(function( html ) {
        $("#add-reading").html(html);
      });
    $('#add-reading-button').hide();
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    $('#add-reading').slideDown();
    
    });
    
    
    $( "#maincase" ).accordion({ autoHeight: false });
    var autoHeight = $("#maincase").accordion( "option", "autoHeight" );
    $("#maincase").accordion( "option", "autoHeight", false );
    
    $( "#addcases" ).accordion({ autoHeight: false, collapsible: true, active: 'none' });
    var autoHeight = $("#addcases").accordion( "option", "autoHeight" );
    var collapsible = $( "#addcases" ).accordion( "option", "collapsible" );
    var active = $( "#addcases" ).accordion( "option", "active" );
    $("#addcases").accordion( "option", "autoHeight", false, "option", "collapsible", true, "option", "active", 'none' );    
    
    var numCorrect = $('.correct').length;
    var numCorrectLeft = numCorrect;
        
    $("#quiz ul li").click(function(event) {
      $(this).children().show();
      $(this).addClass("marked");
      if($(this).hasClass("correct")){
         numCorrectLeft = numCorrectLeft - 1;
      }
      if(numCorrectLeft == 0){
           $("#next").addClass("ready");
         }
    });
    
    $("#Form_addQuestionForm").validate({
      rules: {
        Questiion: "required",
        ShortAnswer: "required",
        Answer1: "required",
        Answer2: "required"
          }
        });
        
    $('#click-to-reveal').click(function(event) {     
      $('#short-answer-answer').slideDown();
      $(this).slideUp();  
      $(".next-holder").animate({ 'padding-top' : '20px' }, "slow");
    });
    
    
    
    $("#shortanswer").click(function() {
		  $(".multichoicetab").slideUp();
		  $(".CompositeField.singletab").slideDown();
		});
		
		$("#multichoice").click(function() {
		  $(".multichoicetab").slideDown();
		  $(".CompositeField.singletab").slideUp();
		});
   
    

    
    
  });
}(jQuery));


function recordOutboundLink(link, category, action) {
  try {
    var myTracker=_gat._getTrackerByName();
    _gaq.push(['myTracker._trackEvent', category ,  action ]);
    setTimeout('document.location = "' + link.href + '"', 100)
  }catch(err){}
}
