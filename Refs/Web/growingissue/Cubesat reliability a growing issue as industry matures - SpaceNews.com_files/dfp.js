var banner=null;var sidebarLarge=null;var sidebarSmall=null;var moveAds=function(refresh){var windowWidth=jQuery(window).width();var body=jQuery('body');refresh=refresh===true;if(windowWidth>1024){jQuery('#'+ DfpSlots.ad_large[0].id).insertAfter('#sidebar-search');if((body).hasClass('home')||(body).hasClass('archive')){jQuery('#'+ DfpSlots.banner[0].id).insertAfter('.article.large');}else if((body).hasClass('single')){jQuery('#'+ DfpSlots.banner[0].id).prependTo('.article-content');}else{jQuery('#'+ DfpSlots.banner[0].id).insertAfter('.page-title');}}else if(windowWidth<=1024&&windowWidth>=760){jQuery('#'+ DfpSlots.ad_large[0].id).insertAfter('#sidebar-search');jQuery('#'+ DfpSlots.banner[0].id).prependTo('#main-container');}else if(windowWidth<=759){if((body).hasClass('home')){jQuery('#'+ DfpSlots.banner[0].id).insertAfter('.article.large');jQuery('#'+ DfpSlots.ad_large[0].id).insertAfter('.two-row:first');}else if((body).hasClass('archive')){jQuery('#'+ DfpSlots.banner[0].id).prependTo('#main-container');jQuery('#'+ DfpSlots.ad_large[0].id).insertBefore('.launch-article:first');}else{jQuery('#'+ DfpSlots.banner[0].id).prependTo('#main-container');jQuery('#'+ DfpSlots.ad_large[0].id).prependTo('#aside');}}
if(refresh&&typeof googletag.pubads==='function'){googletag.pubads().refresh();}};var googletag=googletag||{};googletag.cmd=googletag.cmd||[];(function(){var gads=document.createElement('script');gads.async=true;gads.type='text/javascript';var useSSL='https:'===document.location.protocol;gads.src=(useSSL?'https:':'http:')+'//www.googletagservices.com/tag/js/gpt.js';var node=document.getElementsByTagName('script')[0];node.parentNode.insertBefore(gads,node);})();googletag.cmd.push(function(){var bannerSlot=googletag.sizeMapping().addSize([760,200],[728,90]).addSize([0,0],[300,50]).build();var contentSlot=googletag.sizeMapping().addSize([1240,200],[728,90]).addSize([0,0],[300,50]).build();var sidebarSlot_1=googletag.sizeMapping().addSize([1024,200],[[300,600],[300,250]]).addSize([300,200],[[300,600],[300,250]]).addSize([0,0],[300,250]).build();if(DfpSlots.banner.length!==0&&DfpVars.post_type!=='page'){banner=googletag.defineSlot('/2011711/'+ DfpSlots.banner[0].name,[[300,50],[728,90]],DfpSlots.banner[0].id).defineSizeMapping(bannerSlot).addService(googletag.pubads());}
if(DfpSlots.ad_large.length!==0){sidebarLarge=googletag.defineSlot('/2011711/'+ DfpSlots.ad_large[0].name,[[300,250],[300,600]],DfpSlots.ad_large[0].id).defineSizeMapping(sidebarSlot_1).addService(googletag.pubads());}
if(DfpSlots.ad_content.length!==0&&DfpVars.post_type==='post'){contentAd=googletag.defineSlot('/2011711/'+ DfpSlots.ad_content[0].name,[[300,50],[728,90]],DfpSlots.ad_content[0].id).defineSizeMapping(contentSlot).addService(googletag.pubads());var adLabel=$('<p class="ad-label"><i>Advertisement</i></p>');contentAd.renderEnded=function(e){adLabel.prependTo('.content-ad');};}
var name;for(name in DfpVars){if(!DfpVars.hasOwnProperty(name)){continue;}else{if(DfpVars[name]!==null&&DfpVars[name].length>0){googletag.pubads().setTargeting(name,DfpVars[name]);}}}
var sidebarLargeSize={};sidebarLarge.renderEnded=function(e){var sidebarInner='<script type="text/javascript">googletag.cmd.push(function() { googletag.display("'+ DfpSlots.ad_small[0].id+'"); });</script>';var node=document.getElementById(this.b.d).getElementsByTagName('iframe')[0];sidebarLargeSize.height=node.offsetHeight;var windowWidth=jQuery(window).width();var eleAdSpace=jQuery('#'+ DfpSlots.ad_small[0].id);if(sidebarLargeSize.height===250){if(eleAdSpace.length!==0){eleAdSpace.remove();}
if(!sidebarSmall){sidebarSmall=googletag.defineSlot('/2011711/'+ DfpSlots.ad_small[0].name,[[250,250],[300,250]],DfpSlots.ad_small[0].id).addService(googletag.pubads());}
eleAdSpace=jQuery('<div id="'+ DfpSlots.ad_small[0].id+'" class="ad"></div>');eleAdSpace.html(sidebarInner);var body=jQuery('body');if(windowWidth>=1024){eleAdSpace.insertAfter('#'+ DfpSlots.ad_large[0].id);}else if(windowWidth<1024&&windowWidth>=760){eleAdSpace.insertAfter('#social-box');}else if(windowWidth<=759){if((body).hasClass('home')){eleAdSpace.insertAfter('.latest');}else{eleAdSpace.appendTo('#aside');}}}else{eleAdSpace.remove();}};moveAds();googletag.pubads().collapseEmptyDivs();googletag.pubads().enableSingleRequest();googletag.pubads().setCentering(true);googletag.enableServices();});jQuery(document).ready(function(){var $window=jQuery(window);var windowWidth=$window.width();var sn_debounce=false;var sn_resize_timeout;$window.on('resize',function(e){var currentWidth=$window.width();var breakpointChange=false;if(currentWidth===windowWidth){return;}
switch(true){case currentWidth<1024&&windowWidth>=1024:case currentWidth>1024&&windowWidth<=1024:case currentWidth>760&&windowWidth<=760:case currentWidth<760&&windowWidth>=760:breakpointChange=true;break;}
windowWidth=currentWidth;if(!sn_debounce&&breakpointChange){sn_debounce=true;if(typeof sn_resize_timeout==='number'){clearTimeout(sn_resize_timeout);}
sn_resize_timeout=setTimeout(function(){sn_debounce=false;moveAds(true);},1000);}});});