// JQuery hover event with timeout by Taufik Nurrohman - https://plus.google.com/108949996304093815163/about
(function(c){c.fn.hoverTimeout=function(d,e,f,g){return this.each(function(){var a=null,b=c(this);b.hover(function(){clearTimeout(a);a=setTimeout(function(){e.call(b)},d)},function(){clearTimeout(a);a=setTimeout(function(){g.call(b)},f)})})}})(jQuery);
// jquery replacetext plugin https://github.com/cowboy/jquery-replacetext
(function(e){e.fn.replaceText=function(t,n,r){return this.each(function(){var i=this.firstChild,s,o,u=[];if(i){do{if(i.nodeType===3){s=i.nodeValue;o=s.replace(t,n);if(o!==s){if(!r&&/</.test(o)){e(i).before(o);u.push(i)}else{i.nodeValue=o}}}}while(i=i.nextSibling)}u.length&&e(u).remove()})}})(jQuery);
// Timeago jQuery plugin ~ URL: http://timeago.yarp.com
(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){function r(){var n=i(this);var r=t.settings;if(!isNaN(n.datetime)){if(r.cutoff==0||Math.abs(o(n.datetime))<r.cutoff){e(this).text(s(n.datetime))}}return this}function i(n){n=e(n);if(!n.data("timeago")){n.data("timeago",{datetime:t.datetime(n)});var r=e.trim(n.text());if(t.settings.localeTitle){n.attr("title",n.data("timeago").datetime.toLocaleString())}else if(r.length>0&&!(t.isTime(n)&&n.attr("title"))){n.attr("title",r)}}return n.data("timeago")}function s(e){return t.inWords(o(e))}function o(e){return(new Date).getTime()-e.getTime()}e.timeago=function(t){if(t instanceof Date){return s(t)}else if(typeof t==="string"){return s(e.timeago.parse(t))}else if(typeof t==="number"){return s(new Date(t))}else{return s(e.timeago.datetime(t))}};var t=e.timeago;e.extend(e.timeago,{settings:{refreshMillis:6e4,allowPast:true,allowFuture:false,localeTitle:false,cutoff:0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"in a moment",seconds:"a few seconds",minute:"%d minute",minutes:"%d mins",hour:"%d hour",hours:"%d hrs",day:"%d day",days:"%d days",month:"month",months:"%d months",year:"%d year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(t){function l(r,i){var s=e.isFunction(r)?r(i,t):r;var o=n.numbers&&n.numbers[i]||i;return s.replace(/%d/i,o)}if(!this.settings.allowPast&&!this.settings.allowFuture){throw"timeago allowPast and allowFuture settings can not both be set to false."}var n=this.settings.strings;var r=n.prefixAgo;var i=n.suffixAgo;if(this.settings.allowFuture){if(t<0){r=n.prefixFromNow;i=n.suffixFromNow}}if(!this.settings.allowPast&&t>=0){return this.settings.strings.inPast}var s=Math.abs(t)/1e3;var o=s/60;var u=o/60;var a=u/24;var f=a/365;var c=s<45&&l(n.seconds,Math.round(s))||s<90&&l(n.minute,1)||o<45&&l(n.minutes,Math.round(o))||o<90&&l(n.hour,1)||u<24&&l(n.hours,Math.round(u))||u<42&&l(n.day,1)||a<30&&l(n.days,Math.round(a))||a<45&&l(n.month,1)||a<365&&l(n.months,Math.round(a/30))||f<1.5&&l(n.year,1)||l(n.years,Math.round(f));var h=n.wordSeparator||"";if(n.wordSeparator===undefined){h=" "}return e.trim([r,c,i].join(h))},parse:function(t){var n=e.trim(t);n=n.replace(/\.\d+/,"");n=n.replace(/-/,"/").replace(/-/,"/");n=n.replace(/T/," ").replace(/Z/," UTC");n=n.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");n=n.replace(/([\+\-]\d\d)$/," $100");return new Date(n)},datetime:function(n){var r=t.isTime(n)?e(n).attr("datetime"):e(n).attr("title");return t.parse(r)},isTime:function(t){return e(t).get(0).tagName.toLowerCase()==="time"}});var n={init:function(){var n=e.proxy(r,this);n();var i=t.settings;if(i.refreshMillis>0){this._timeagoInterval=setInterval(n,i.refreshMillis)}},update:function(n){var i=t.parse(n);e(this).data("timeago",{datetime:i});if(t.settings.localeTitle)e(this).attr("title",i.toLocaleString());r.apply(this)},updateFromDOM:function(){e(this).data("timeago",{datetime:t.parse(t.isTime(this)?e(this).attr("datetime"):e(this).attr("title"))});r.apply(this)},dispose:function(){if(this._timeagoInterval){window.clearInterval(this._timeagoInterval);this._timeagoInterval=null}}};e.fn.timeago=function(e,t){var r=e?n[e]:n.init;if(!r){throw new Error("Unknown function name '"+e+"' for timeago")}this.each(function(){r.call(this,t)});return this};document.createElement("abbr");document.createElement("time")});
// Simple Tab JQuery Plugin by Taufik Nurrohman - https://plus.google.com/108949996304093815163/about
(function(a){a.fn.simplyTab=function(b){b=jQuery.extend({active:1,fx:null,showSpeed:400,hideSpeed:400,showEasing:null,hideEasing:null,show:function(){},hide:function(){},change:function(){}},b);return this.each(function(){var e=a(this),c=e.children("[data-tab]"),d=b.active-1;e.addClass("simplyTab").prepend('<ul class="wrap-tab"></ul>');c.addClass("content-tab").each(function(){a(this).hide();e.find(".wrap-tab").append('<li><a href="#">'+a(this).data("tab")+"</a></li>")}).eq(d).show();e.find(".wrap-tab a").on("click",function(){var f=a(this).parent().index();a(this).closest(".wrap-tab").find(".activeTab").removeClass("activeTab");a(this).addClass("activeTab");if(b.fx=="slide"){if(c.eq(f).is(":hidden")){c.slideUp(b.hideSpeed,b.hideEasing,function(){b.hide.call(e)}).eq(f).slideDown(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(b.fx=="fade"){if(c.eq(f).is(":hidden")){c.hide().eq(f).fadeIn(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(b.fx=="fancyslide"){if(c.eq(f).is(":hidden")){c.slideUp(b.hideSpeed,b.hideEasing,function(){b.hide.call(e)}).eq(f).delay(b.hideSpeed).slideDown(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(c.eq(f).is(":hidden")){c.hide().eq(f).show()}}}}b.change.call(e);return false}).eq(d).addClass("activeTab")})}})(jQuery);
// Main Scripts 

$(document)['ready'](function() {
    $('.cmm-tabs')['simplyTab']({
        active: 1,
        fx: 'fade',
        showSpeed: 400,
        hideSpeed: 400
    });
    $('.blogger-tab')['append']($('#comments'));
    $('.cmm-tabs.simplyTab .wrap-tab')['wrap']('<div class=\'cmm-tabs-header\'/>');
    $('.cmm-tabs-header')['prepend']('<h3><h8>Post </h8>Comment<h9>s</h9></h3>')
});
$(document)['ready'](function(_0x75edx1) {
    _0x75edx1('abbr.timeago')['timeago']()
});
$(document)['ready'](function() {
    $('ul#sub-menu')['parent']('li')['addClass']('hasSub');
    (jQuery)
});
$(document)['ready'](function() {
    $('a[name="ads-post-in"]')['before']($('#ads-post10')['html']());
    $('#ads-post10')['html']('')
});
$(document)['ready'](function() {
    $('.sidebar-wrapper .widget h2')['wrap']('<div class=\'widget-title\'/>');
    $('.footer-sections .widget h2')['wrap']('<div class=\'widget-title\'/>');
    $('#menu ul li')['each'](function() {
        $(this)['hoverTimeout'](0, function() {
            $(this)['children']('ul')['slideDown']()
        }, 0, function() {
            $(this)['children']('ul')['hide']()
        })
    });
    $('.index .post-outer,.archive .post-outer')['each'](function() {
        $(this)['find']('.block-image .thumb a')['attr']('style', function(_0x75edx1, _0x75edx2) {
            return _0x75edx2['replace']('/default.jpg', '/mqdefault.jpg')
        })['attr']('style', function(_0x75edx1, _0x75edx2) {
            return _0x75edx2['replace']('s72-c', 's1600')
        })
    });
    $('.widget-content')['each'](function() {
        var _0x75edx1 = $(this)['text']();
        if (_0x75edx1['substr'](0, 10)['match']('page')) {
            _0x75edx1 = _0x75edx1['replace']('page/', '');
            $(this)['html']('<center><div id="fb-root"></div><div class="fb-page" data-href="' + _0x75edx1 + '" data-width="300" data-height="230" data-hide-cover="false" data-show-facepile="true" data-show-posts="false"></center>')
        }
    });
    $(window)['scroll'](function() {
        if ($(this)['scrollTop']() > 200) {
            $('#back-to-top')['fadeIn']()
        } else {
            $('#back-to-top')['fadeOut']()
        }
    });
    $('#back-to-top')['hide']()['click'](function() {
        $('html, body')['animate']({
            scrollTop: 0
        }, 1000);
        return false
    });
    var _0x75edx3 = $('.search');
    _0x75edx3['click'](function(_0x75edx1) {
        _0x75edx1['preventDefault']();
        if (_0x75edx3['is']('.active') && $(_0x75edx1['target'])['is'](_0x75edx3)) {
            _0x75edx3['removeClass']('active')
        } else {
            _0x75edx3['addClass']('active');
            _0x75edx3['find']('input')['focus']()
        }
    });
    $('body')['click'](function(_0x75edx1) {
        if (_0x75edx3['is']('.active') && !$(_0x75edx1['target'])['is']('.search, .search form, .search input')) {
            _0x75edx3['removeClass']('active')
        }
    });
    var _0x75edx1 = '[';
    var _0x75edx2 = ']';
    $('.social-widget')['each'](function() {
        var _0x75edx1 = $(this);
        var _0x75edx2 = $(this)['find']('.sw-item');
        if (_0x75edx2['length'] === 0) {
            _0x75edx1['remove']()
        };
        $(this)['find']('.widget')['removeClass']('LinkList');
        $('.social-widget .sw-item.facebook')['find']('.sw-desc')['text']('Likes');
        $('.social-widget .sw-item.rss,.social-widget .sw-item.youtube')['find']('.sw-desc')['text']('Subscribes');
        var _0x75edx4 = '[';
        var _0x75edx5 = ']';
        $('.social-widget *')['replaceText'](_0x75edx4, '<span class="sw-counter">');
        $('.social-widget *')['replaceText'](_0x75edx5, '</span>');
        $('.sw-item')['each'](function() {
            var _0x75edx1 = $(this)['find']('.delete-count');
            var _0x75edx2 = $(this)['find']('.sw-counter');
            $(_0x75edx1)['before']($(_0x75edx2));
            $(_0x75edx1)['remove']()
        })
    });
    var _0x75edx4 = $('#sidebar_tabs #tab1 .widget h2')['text']();
    $('.tab-opt .opt-1 a')['text'](_0x75edx4);
    var _0x75edx5 = $('#sidebar_tabs #tab2 .widget h2')['text']();
    $('.tab-opt .opt-2 a')['text'](_0x75edx5);
    var _0x75edx6 = $('#sidebar_tabs #tab3 .widget h2')['text']();
    $('.tab-opt .opt-3 a')['text'](_0x75edx6);
    $('#tab1 .widget h2,#tab2 .widget h2,#tab3 .widget h2,#tab1 .widget-title,#tab2 .widget-title,#tab3 .widget-title')['remove']();
    $('.sidebar_tabs')['tabslet']({
        mouseevent: 'click',
        attribute: 'href',
        animation: true
    });
    if ($('.sidebar_tabs .widget')['length'] === 0) {
        $('.sidebar_tabs')['remove']()
    };
    var _0x75edx7 = '[full_width]';
    var _0x75edx8 = '[left_sidebar]';
    var _0x75edx9 = '[right_sidebar]';
    $('.post *')['replaceText'](_0x75edx7, '<style>@media screen and (min-width: 980px){.item #main-wrapper{width:100% !important;float:none!important;border-right:0!important;border-left:0!important}.item .sidebar-wrapper{display:none;}.item #main-wrapper #main{margin-left:0!important;margin-right:0!important}.related li {width: 31.655%;}.related-thumb,.related li .related-img{height: 150px;}}</style>');
    $('.post-body *')['replaceText'](_0x75edx8, '<style>@media screen and (min-width: 980px){.item #main-wrapper{float:right!important;border-right:0!important;margin-right: 0px !important;}.item .sidebar-wrapper{float:left!important;padding-left:0!important;}}</style>');
    $('.post-body *')['replaceText'](_0x75edx9, '<style>@media screen and (min-width: 980px){.item #main-wrapper{float:left!important;border-right:0!important;margin-right: 0px !important;}.item .sidebar-wrapper{float:right!important;padding-left:0!important;}}</style>');
    (function(_0x75edx1) {
        var _0x75edx2 = _0x75edx1('a.newer-link');
        var _0x75edx4 = _0x75edx1('a.older-link');
        _0x75edx1['get'](_0x75edx2['attr']('href'), function(_0x75edx4) {
            _0x75edx2['html']('<strong>Next</strong><span>' + _0x75edx1(_0x75edx4)['find']('.post h1.post-title')['text']() + '</span>')
        }, 'html');
        _0x75edx1['get'](_0x75edx4['attr']('href'), function(_0x75edx2) {
            _0x75edx4['html']('<strong>Previous</strong><span>' + _0x75edx1(_0x75edx2)['find']('.post h1.post-title')['text']() + '</span>')
        }, 'html')
    })(jQuery)
});
(function(_0x75edxa, _0x75edx7, _0x75edxb) {
    var _0x75edxc, _0x75edxd = _0x75edxa['getElementsByTagName'](_0x75edx7)[0];
    if (_0x75edxa['getElementById'](_0x75edxb)) {
        return
    };
    _0x75edxc = _0x75edxa['createElement'](_0x75edx7);
    _0x75edxc['id'] = _0x75edxb;
    _0x75edxc['src'] = '//connect.facebook.net/ar/sdk.js#xfbml=1&version=v2.5';
    _0x75edxd['parentNode']['insertBefore'](_0x75edxc, _0x75edxd)
}(document, 'script', 'facebook-jssdk'));
$(document)['ready'](function() {
});