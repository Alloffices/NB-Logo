Drupal.locale = { 'pluralFormula': function ($n) { return Number(($n!=1)); }, 'strings': {"":{"An AJAX HTTP error occurred.":"Er is een AJAX HTTP fout opgetreden.","HTTP Result Code: !status":"HTTP-resultaatcode: !status","An AJAX HTTP request terminated abnormally.":"Een AJAX HTTP-aanvraag is onverwacht afgebroken","Debugging information follows.":"Debug informatie volgt.","Path: !uri":"Pad: !uri","StatusText: !statusText":"Statustekst: !statusText","ResponseText: !responseText":"Antwoordtekst: !responseText","ReadyState: !readyState":"ReadyState: !readyState","CustomMessage: !customMessage":"CustomMessage: !customMessage","@title dialog":"@title dialoog","Configure":"Instellen","Loading":"Laden","(active tab)":"(actieve tabblad)","All":"Alle","Hide":"Verbergen","Show":"Weergeven","Re-order rows by numerical weight instead of dragging.":"Herschik de rijen op basis van gewicht, in plaats van slepen.","Show row weights":"Gewicht van rijen tonen","Hide row weights":"Gewicht van rij verbergen","Drag to re-order":"Slepen om de volgorde te wijzigen","Changes made in this table will not be saved until the form is submitted.":"Wijzigingen in deze tabel worden pas opgeslagen wanneer het formulier wordt ingediend.","Edit":"Bewerken","Enabled":"Ingeschakeld","Disabled":"Uitgeschakeld","Requires a title":"Een titel is verplicht","Not published":"Niet gepubliceerd","Don\u0027t display post information":"Geen berichtinformatie weergeven","Please wait...":"Even geduld...","The response failed verification so will not be processed.":"Het antwoord kon niet geverifieerd worden en zal daarom niet worden verwerkt.","The callback URL is not local and not trusted: !url":"De callback-URL is niet lokaal en vertrouwd: !url","Hide summary":"Samenvatting verbergen","Edit summary":"Samenvatting bewerken","OK":"Ok","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"Het bestand %filename kan niet ge\u00fcpload worden. Alleen bestanden met de volgende extensies zijn toegestaan: %extensions","Alias: @alias":"Alias: @alias","No alias":"Geen alias","Done":"Gereed","Prev":"Vorige","Next":"Volgende","Today":"Vandaag","January":"januari","February":"februari","March":"maart","April":"april","May":"mei","June":"juni","July":"juli","August":"augustus","September":"september","October":"oktober","November":"november","December":"december","Jan":"jan","Feb":"feb","Mar":"mrt","Apr":"apr","Jun":"jun","Jul":"jul","Aug":"aug","Sep":"sep","Oct":"okt","Nov":"nov","Dec":"dec","Sunday":"zondag","Monday":"maandag","Tuesday":"dinsdag","Wednesday":"woensdag","Thursday":"donderdag","Friday":"vrijdag","Saturday":"zaterdag","Sun":"zo","Mon":"ma","Tue":"di","Wed":"wo","Thu":"do","Fri":"vr","Sat":"za","Su":"zo","Mo":"ma","Tu":"di","We":"wo","Th":"do","Fr":"vr","Sa":"za","mm\/dd\/yy":"mm\/dd\/jj","Not in menu":"Niet in een menu","New revision":"Nieuwe revisie","No revision":"Geen revisie","By @name on @date":"Door @name op @date","By @name":"Door @name","Autocomplete popup":"Popup voor automatisch aanvullen","Searching for matches...":"Zoeken naar overeenkomsten...","Select all rows in this table":"Selecteer alle regels van deze tabel","Deselect all rows in this table":"De-selecteer alle regels van deze tabel","Not restricted":"Geen beperking","Restricted to certain pages":"Beperkt tot bepaalde pagina\u0027s","Not customizable":"Niet aanpasbaar","The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\/em\u003E button is clicked.":"Wijzigingen aan de blokken worden pas opgeslagen wanneer u de knop \u003Cem\u003EBlokken opslaan\u003C\/em\u003E aanklikt.","The block cannot be placed in this region.":"Het blok kan niet worden geplaatst in dit gebied.","This permission is inherited from the authenticated user role.":"Dit toegangsrecht is ge\u00ebrfd van de rol \u0027geverifieerde gebruiker\u0027.","Add":"Toevoegen","Customize dashboard":"Dashboard aanpassen","Flag translations as outdated":"Markeer vertalingen als verouderd"}} };;
/*!
	Colorbox 1.6.4
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(A+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in x[0]&&!x[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),x.focus())}function c(t){c.str!==t&&(x.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){A=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),A=W.index(_.el),-1===A&&(W=W.add(_.el),A=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!U){U=$=!0,c(_.get("className")),x.css({visibility:"hidden",display:"block",opacity:""}),I=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(I),j=T.height()+k.height()+b.outerHeight(!0)-b.height(),D=C.width()+H.width()+b.outerWidth(!0)-b.width(),N=I.outerHeight(!0),z=I.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=Math.max((l!==!1?Math.min(h,a(l,"x")):h)-z-D,0),_.h=Math.max((f!==!1?Math.min(s,a(f,"y")):s)-N-j,0),I.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(F).hide(),x.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){x||(V=!1,E=t(i),x=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),L=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),y=n(se,"Wrapper"),b=n(se,"Content").append(F=n(se,"Title"),R=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),S=t('<button type="button"/>').attr({id:Z+"Slideshow"}),L),B=t('<button type="button"/>').attr({id:Z+"Close"}),y.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),M=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(R).add(S)),e.body&&!x.parent().length&&t(e.body).append(v,x.append(y,M))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return x?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;U&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),U&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if($=!0,q=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-N-j:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-z-D:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-z-D,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-N-j,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){L.show()},100),_.get("inline")){var c=t(e).eq(0);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),q=_.get("createImg"),t(q).addClass(Z+"Photo").bind("error."+Z,function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;_.get("retinaImage")&&i.devicePixelRatio>1&&(q.height=q.height/i.devicePixelRatio,q.width=q.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){q.height-=q.height*e,q.width-=q.width*e},_.mw&&q.width>_.mw&&(e=(q.width-_.mw)/q.width,o()),_.mh&&q.height>_.mh&&(e=(q.height-_.mh)/q.height,o())),_.h&&(q.style.marginTop=Math.max(_.mh-q.height,0)/2+"px"),W[1]&&(_.get("loop")||W[A+1])&&(q.style.cursor="pointer",t(q).bind("click."+Z,function(){J.next()})),q.style.width=q.width+"px",q.style.height=q.height+"px",h(q)},1)}),q.src=e):e&&M.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,x,y,b,T,C,H,k,W,E,I,M,L,F,R,S,K,P,B,O,_,j,D,N,z,A,q,U,$,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title},createImg:function(){var e=new Image,i=t(this).data("cbox-img-attrs");return"object"==typeof i&&t.each(i,function(t,i){e[t]=i}),e},createIframe:function(){var i=e.createElement("iframe"),n=t(this).data("cbox-iframe-attrs");return"object"==typeof n&&t.each(n,function(t,e){i[t]=e}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullscreen=!0,i}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[A+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){S.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),x.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),S.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),x.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,S.hide(),t(),ae.unbind(ne,e).unbind(ie,t),x.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),S.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;return e=e||{},t.isFunction(o)&&(o=t("<a/>"),e.open=!0),o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(x[0].style.width,10)-D+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(x[0].style.height,10)-j+"px"}var r,h,s,l=0,d=0,c=x.offset();if(E.unbind("resize."+Z),x.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,x.css({position:"fixed"})):(l=h,d=s,x.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-z-D-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-z-D,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-N-j-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-N-j,0)/2),x.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:_.w+z+D,height:_.h+N+j,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||x.css(r),x.dequeue().animate(r,{duration:e||0,complete:function(){n(),$=!1,y[0].style.width=_.w+z+D+"px",y[0].style.height=_.h+N+j+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;U&&(t=t||{},t.width&&(_.w=a(t.width,"x")-z-D),t.innerWidth&&(_.w=a(t.innerWidth,"x")),I.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-N-j),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=I.scrollTop(),I.css({height:"auto"}),_.h=I.height()),I.css({height:_.h}),e&&I.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||I.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||I.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if(U){var d,g="none"===_.get("transition")?0:_.get("speed");I.remove(),I=n(se,"LoadedContent").append(i),I.hide().appendTo(M.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),M.hide(),t(q).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&x[0].style.removeAttribute("filter")}var n,o,a=W.length;U&&(o=function(){clearTimeout(Q),L.hide(),u(ne),_.get("onComplete")},F.html(_.get("title")).show(),I.show(),a>1?("string"==typeof _.get("current")&&R.html(_.get("current").replace("{current}",A+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>A?"show":"hide"]().html(_.get("next")),P[_.get("loop")||A?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=_.get("createIframe"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),"class":Z+"Iframe"}).one("load",o).appendTo(I),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?x.fadeTo(g,1,i):i())},"fade"===_.get("transition")?x.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!$&&W[1]&&(_.get("loop")||W[A+1])&&(A=h(1),f(W[A]))},J.prev=function(){!$&&W[1]&&(_.get("loop")||A)&&(A=h(-1),f(W[A]))},J.close=function(){U&&!G&&(G=!0,U=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),x.stop().fadeTo(_.get("fadeOut")||0,0,function(){x.hide(),v.hide(),u(he),I.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){x&&(x.stop(),t[Y].close(),x.stop(!1,!0).remove(),v.remove(),G=!1,x=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);;
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }

    // Use "data-colorbox-gallery" if set otherwise use "rel".
    settings.colorbox.rel = function () {
      if ($(this).data('colorbox-gallery')) {
        return $(this).data('colorbox-gallery');
      }
      else {
        return $(this).attr('rel');
      }
    };

    $('.colorbox', context)
      .once('init-colorbox')
      .colorbox(settings.colorbox);

    $(context).bind('cbox_complete', function () {
      Drupal.attachBehaviors('#cboxLoadedContent');
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
  attach: function (context, settings) {
    $(context).bind('cbox_complete', function () {
      // Only run if there is a title.
      if ($('#cboxTitle:empty', context).length == false) {
        $('#cboxLoadedContent img', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideDown();
        });
        $('#cboxOverlay', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideUp();
        });
      }
      else {
        $('#cboxTitle', context).hide();
      }
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxLoad = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }

    $.urlParams = function (url) {
      var p = {},
          e,
          a = /\+/g,  // Regex for replacing addition symbol with a space
          r = /([^&=]+)=?([^&]*)/g,
          d = function (s) { return decodeURIComponent(s.replace(a, ' ')); },
          q = url.split('?');
      while (e = r.exec(q[1])) {
        e[1] = d(e[1]);
        e[2] = d(e[2]);
        switch (e[2].toLowerCase()) {
          case 'true':
          case 'yes':
            e[2] = true;
            break;
          case 'false':
          case 'no':
            e[2] = false;
            break;
        }
        if (e[1] == 'width') { e[1] = 'innerWidth'; }
        if (e[1] == 'height') { e[1] = 'innerHeight'; }
        p[e[1]] = e[2];
      }
      return p;
    };
    $('.colorbox-load', context)
      .once('init-colorbox-load', function () {
        var params = $.urlParams($(this).attr('href'));
        $(this).colorbox($.extend({}, settings.colorbox, params));
      });
  }
};

})(jQuery);
;

/* see Issue "autoresize" http://drupal.org/node/360549 */
(function ($) {
  Drupal.behaviors.iframeModule = {
    attach: function(context, settings) {
      $('iframe.autoresize').each(function() {
        var offsetHeight = 20;
        var thisIframe = $(this);
        var iframeWaitInterval;

        function resizeHeight(iframe) {
          if ($(iframe).length) { /* IFrame yet loaded ? */
            var iframeDoc = $(iframe)[0].contentDocument || $(iframe)[0].contentWindow.document;
            var contentheight = 0;

            try {
              contentheight = $(iframeDoc).find('body').height();
            } catch (e) {
              elem = $(iframe)[0];
              msg = $('<p><small>(' + Drupal.t('IFrame URL is not from the same domain - autoresize not working.') + ')</small></p>');
              $(elem).after(msg);
              clearInterval(iframeWaitInterval);
            }

            if (contentheight > 0) {
              clearInterval(iframeWaitInterval);
              try {
                var frameElement = $(iframe)[0].frameElement || $(iframe)[0];
                frameElement.style.height = (contentheight + offsetHeight) + 'px';
                frameElement.scrolling = 'no';
              } catch (e) {
                /* here, ist not an correctable error */
              }
            }
          }
        }
        var delayedResize = function() {
            resizeHeight(thisIframe);
        }

        iframeWaitInterval = setInterval(delayedResize, 300);
        //setTimeout(delayedResize, 300);
        //resizeHeight(thisIframe);
      });
    }
  }
})(jQuery);


;
(function($) {
  Drupal.behaviors.custom_search = {
    attach: function(context) {

      if (!Drupal.settings.custom_search.solr) {
        // Check if the search box is not empty on submit
        $('form.search-form', context).submit(function(){
          var $this = $(this);
          var box = $this.find('input.custom-search-box');
          if (box.val() != undefined && box.val() == '') {
            $this.find('input.custom-search-box').addClass('error');
            return false;
          }
          // If basic search is hidden, copy or value to the keys
          if ($this.find('#edit-keys').parents('div.element-invisible').attr('class') == 'element-invisible') {
            $this.find('#edit-keys').val($this.find('#edit-or').val());
            $this.find('#edit-or').val('');
          }
          return true;
        });
      }

      // Search from target
      $('form.search-form').attr('target', Drupal.settings.custom_search.form_target);

      // Displays Popup.
      $('form.search-form input.custom-search-box', context).bind('click focus', function(e){
        var $parentForm = $(this).parents('form');
        // check if there's something in the popup and displays it
        var popup = $parentForm.find('fieldset.custom_search-popup');
        if (popup.find('input,select').length && !popup.hasClass('opened')) {
          popup.fadeIn().addClass('opened');
        }
        e.stopPropagation();
      });
      $(document).bind('click focus', function(){
        $('fieldset.custom_search-popup').hide().removeClass('opened');
      });

      // Handle checkboxes
      $('.custom-search-selector input:checkbox', context).each(function(){
        var el = $(this);
        if (el.val() == 'c-all') {
          el.change(function(){
            $(this).parents('.custom-search-selector').find('input:checkbox[value!=c-all]').attr('checked', false);
          });
        }
        else {
          if (el.val().substr(0,2) == 'c-') {
            el.change(function(){
              $('.custom-search-selector input:checkbox').each(function(){
                if ($(this).val().substr(0,2) == 'o-') {
                  $(this).attr('checked', false);
                }
              });
              $(this).parents('.custom-search-selector').find('input:checkbox[value=c-all]').attr('checked', false);
            });
          } else {
            el.change(function(){
              $(this).parents('.custom-search-selector').find('input:checkbox[value!=' + el.val() + ']').attr('checked', false);
            });
          }
        }
      });

      // Handle popup.
      var popup = $('fieldset.custom_search-popup:not(.custom_search-processed)', context).addClass("custom_search-processed");
      popup.click(function(e){
        e.stopPropagation();
      })
      popup.append('<a class="custom_search-popup-close" href="#">' + Drupal.t('Close') + '</a>');
      $('a.custom_search-popup-close').click(function(e){
        $('fieldset.custom_search-popup.opened').hide().removeClass('opened');
        e.preventDefault();
      });

    }
  }
})(jQuery);
;
/**
 * @file better_exposed_filters.js
 *
 * Provides some client-side functionality for the Better Exposed Filters module
 */
(function ($) {
  Drupal.behaviors.betterExposedFilters = {
    attach: function(context) {
      // Add highlight class to checked checkboxes for better theming
      $('.bef-tree input[type=checkbox], .bef-checkboxes input[type=checkbox]')
        // Highlight newly selected checkboxes
        .change(function() {
          _bef_highlight(this, context);
        })
        .filter(':checked').closest('.form-item', context).addClass('highlight')
      ;
    }
  };

  Drupal.behaviors.betterExposedFiltersSelectAllNone = {
    attach: function(context) {

      /*
       * Add Select all/none links to specified checkboxes
       */
      var selected = $('.form-checkboxes.bef-select-all-none:not(.bef-processed)');
      if (selected.length) {
        var selAll = Drupal.t('Select All');
        var selNone = Drupal.t('Select None');

        // Set up a prototype link and event handlers
        var link = $('<a class="bef-toggle" href="#">'+ selAll +'</a>')
        link.click(function(event) {
          // Don't actually follow the link...
          event.preventDefault();
          event.stopPropagation();

          if (selAll == $(this).text()) {
            // Select all the checkboxes
            $(this)
              .html(selNone)
              .siblings('.bef-checkboxes, .bef-tree')
                .find('.form-item input:checkbox').each(function() {
                  $(this).attr('checked', true);
                  _bef_highlight(this, context);
                })
              .end()

              // attr() doesn't trigger a change event, so we do it ourselves. But just on
              // one checkbox otherwise we have many spinning cursors
              .find('input[type=checkbox]:first').change()
            ;
          }
          else {
            // Unselect all the checkboxes
            $(this)
              .html(selAll)
              .siblings('.bef-checkboxes, .bef-tree')
                .find('.form-item input:checkbox').each(function() {
                  $(this).attr('checked', false);
                  _bef_highlight(this, context);
                })
              .end()

              // attr() doesn't trigger a change event, so we do it ourselves. But just on
              // one checkbox otherwise we have many spinning cursors
              .find('input[type=checkbox]:first').change()
            ;
          }
        });

        // Add link to the page for each set of checkboxes.
        selected
          .addClass('bef-processed')
          .each(function(index) {
            // Clone the link prototype and insert into the DOM
            var newLink = link.clone(true);

            newLink.insertBefore($('.bef-checkboxes, .bef-tree', this));

            // If all checkboxes are already checked by default then switch to Select None
            if ($('input:checkbox:checked', this).length == $('input:checkbox', this).length) {
              newLink.click();
            }
          })
        ;
      }

      // Check for and initialize datepickers
      var befSettings = Drupal.settings.better_exposed_filters;
      if (befSettings && befSettings.datepicker && befSettings.datepicker_options && $.fn.datepicker) {
        var opt = [];
        $.each(befSettings.datepicker_options, function(key, val) {
          if (key && val) {
            opt[key] = JSON.parse(val);
          }
        });
        $('.bef-datepicker').datepicker(opt);
      }

    }                   // attach: function() {
  };                    // Drupal.behaviors.better_exposed_filters = {

  Drupal.behaviors.betterExposedFiltersAllNoneNested = {
    attach:function (context, settings) {
      $('.form-checkboxes.bef-select-all-none-nested li').has('ul').once('bef-all-none-nested', function () {
        $(this)
          // To respect term depth, check/uncheck child term checkboxes.
          .find('input.form-checkboxes:first')
          .click(function() {
            var checkedParent = $(this).attr('checked');
            if (!checkedParent) {
              // Uncheck all children if parent is unchecked.
              $(this).parents('li:first').find('ul input.form-checkboxes').removeAttr('checked');
            }
            else {
              // Check all children if parent is checked.
              $(this).parents('li:first').find('ul input.form-checkboxes').attr('checked', $(this).attr('checked'));
            }
          })
          .end()
          // When a child term is checked or unchecked, set the parent term's
          // status.
          .find('ul input.form-checkboxes')
          .click(function() {
            var checked = $(this).attr('checked');

            // Determine the number of unchecked sibling checkboxes.
            var ct = $(this).parents('ul:first').find('input.form-checkboxes:not(:checked)').size();

            // If the child term is unchecked, uncheck the parent.
            if (!checked) {
              // Uncheck parent if any of the childres is unchecked.
              $(this).parents('li:first').parents('li:first').find('input.form-checkboxes:first').removeAttr('checked');
            }

            // If all sibling terms are checked, check the parent.
            if (!ct) {
              // Check the parent if all the children are checked.
              $(this).parents('li:first').parents('li:first').find('input.form-checkboxes:first').attr('checked', checked);
            }
          });
      });
    }
  };

  Drupal.behaviors.better_exposed_filters_slider = {
    attach: function(context, settings) {
      var befSettings = settings.better_exposed_filters;
      if (befSettings && befSettings.slider && befSettings.slider_options) {
        $.each(befSettings.slider_options, function(i, sliderOptions) {
          var containing_parent = "#" + sliderOptions.viewId + " #edit-" + sliderOptions.id + "-wrapper .views-widget";
          var $filter = $(containing_parent);

          // If the filter is placed in a secondary fieldset, we may not have
          // the usual wrapper element.
          if (!$filter.length) {
            containing_parent = "#" + sliderOptions.viewId + " .bef-slider-wrapper";
            $filter = $(containing_parent);
          }

          // Only make one slider per filter.
          $filter.once('slider-filter', function() {
            var $input = $(this).find('input[type=text]');

            // This is a "between" or "not between" filter with two values.
            if ($input.length == 2) {
              var $min = $input.parent().find('input#edit-' + sliderOptions.id + '-min'),
                  $max = $input.parent().find('input#edit-' + sliderOptions.id + '-max'),
                  default_min,
                  default_max;

              if (!$min.length || !$max.length) {
                return;
              }

              // Get the default values.
              // We use slider min & max if there are no defaults.
              default_min = parseFloat(($min.val() == '') ? sliderOptions.min : $min.val(), 10);
              default_max = parseFloat(($max.val() == '') ? sliderOptions.max : $max.val(), 10);
              // Set the element value in case we are using the slider min & max.
              $min.val(default_min);
              $max.val(default_max);

              $min.parents(containing_parent).after(
                $('<div class="bef-slider"></div>').slider({
                  range: true,
                  min: parseFloat(sliderOptions.min, 10),
                  max: parseFloat(sliderOptions.max, 10),
                  step: parseFloat(sliderOptions.step, 10),
                  animate: sliderOptions.animate ? sliderOptions.animate : false,
                  orientation: sliderOptions.orientation,
                  values: [default_min, default_max],
                  // Update the textfields as the sliders are moved
                  slide: function (event, ui) {
                    $min.val(ui.values[0]);
                    $max.val(ui.values[1]);
                  },
                  // This fires when the value is set programmatically or the
                  // stop event fires.
                  // This takes care of the case that a user enters a value
                  // into the text field that is not a valid step of the slider.
                  // In that case the slider will go to the nearest step and
                  // this change event will update the text area.
                  change: function (event, ui) {
                    $min.val(ui.values[0]);
                    $max.val(ui.values[1]);
                  },
                  // Attach stop listeners.
                  stop: function(event, ui) {
                    // Click the auto submit button.
                    $(this).parents('form').find('.ctools-auto-submit-click').click();
                  }
                })
              );

              // Update the slider when the fields are updated.
              $min.blur(function() {
                befUpdateSlider($(this), 0, sliderOptions);
              });
              $max.blur(function() {
                befUpdateSlider($(this), 1, sliderOptions);
              });
            }
            // This is single value filter.
            else if ($input.length == 1) {
              if ($input.attr('id') != 'edit-' + sliderOptions.id) {
                return;
              }

              // Get the default value. We use slider min if there is no default.
              var default_value = parseFloat(($input.val() == '') ? sliderOptions.min : $input.val(), 10);
              // Set the element value in case we are using the slider min.
              $input.val(default_value);

              $input.parents(containing_parent).after(
                $('<div class="bef-slider"></div>').slider({
                  min: parseFloat(sliderOptions.min, 10),
                  max: parseFloat(sliderOptions.max, 10),
                  step: parseFloat(sliderOptions.step, 10),
                  animate: sliderOptions.animate ? sliderOptions.animate : false,
                  orientation: sliderOptions.orientation,
                  value: default_value,
                  // Update the textfields as the sliders are moved.
                  slide: function (event, ui) {
                    $input.val(ui.value);
                  },
                  // This fires when the value is set programmatically or the
                  // stop event fires.
                  // This takes care of the case that a user enters a value
                  // into the text field that is not a valid step of the slider.
                  // In that case the slider will go to the nearest step and
                  // this change event will update the text area.
                  change: function (event, ui) {
                    $input.val(ui.value);
                  },
                  // Attach stop listeners.
                  stop: function(event, ui) {
                    // Click the auto submit button.
                    $(this).parents('form').find('.ctools-auto-submit-click').click();
                  }
                })
              );

              // Update the slider when the field is updated.
              $input.blur(function() {
                befUpdateSlider($(this), null, sliderOptions);
              });
            }
            else {
              return;
            }
          })
        });
      }
    }
  };

  // This is only needed to provide ajax functionality
  Drupal.behaviors.better_exposed_filters_select_as_links = {
    attach: function(context, settings) {

      $('.bef-select-as-links', context).once(function() {
        var $element = $(this);

        // Check if ajax submission is enabled. If it's not enabled then we
        // don't need to attach our custom submission handling, because the
        // links are already properly built.

        // First check if any ajax views are contained in the current page.
        if (typeof settings.views == 'undefined' || typeof settings.views.ajaxViews == 'undefined') {
          return;
        }

        // Now check that the view for which the current filter block is used,
        // is part of the configured ajax views.
        var $uses_ajax = false;
        $.each(settings.views.ajaxViews, function(i, item) {
          var $view_name = item.view_name.replace(/_/g, '-');
          var $view_display_id = item.view_display_id.replace(/_/g, '-');
          var $id = 'views-exposed-form-' + $view_name + '-' + $view_display_id;
          var $form_id = $element.parents('form').attr('id');
          if ($form_id == $id) {
            $uses_ajax = true;
            return;
          }
        });

        // If no ajax is used for form submission, we quit here.
        if (!$uses_ajax) {
          return;
        }

        // Attach selection toggle and form submit on click to each link.
        $(this).find('a').click(function(event) {
          var $wrapper = $(this).parents('.bef-select-as-links');
          var $options = $wrapper.find('select option');
          // We have to prevent the page load triggered by the links.
          event.preventDefault();
          event.stopPropagation();
          // Un select old select value.
          $wrapper.find('select option').removeAttr('selected');

          // Set the corresponding option inside the select element as selected.
          var link_text = $(this).text();
          $selected = $options.filter(function() {
            return $(this).text() == link_text;
          });
          $selected.attr('selected', 'selected');
          $wrapper.find('.bef-new-value').val($selected.val());
          $wrapper.find('a').removeClass('active');
          $(this).addClass('active');
          // Submit the form.
          $wrapper.parents('form').find('.views-submit-button *[type=submit]').click();
        });
      });
    }
  };

  Drupal.behaviors.betterExposedFiltersRequiredFilter = {
    attach: function(context, settings) {
      // Required checkboxes should re-check all inputs if a user un-checks
      // them all.
      $('.bef-select-as-checkboxes', context).once('bef-required-filter').ajaxComplete(function (e, xhr, s) {
        var $element = $(this);

        if (typeof settings.views == 'undefined' || typeof settings.views.ajaxViews == 'undefined') {
          return;
        }

        // Now check that the view for which the current filter block is used,
        // is part of the configured ajax views.
        var $view_name;
        var $view_display_id;
        var $uses_ajax = false;
        $.each(settings.views.ajaxViews, function(i, item) {
          $view_name = item.view_name;
          $view_display_id = item.view_display_id;
          var $id = 'views-exposed-form-' + $view_name.replace(/_/g, '-') + '-' + $view_display_id.replace(/_/g, '-');
          var $form_id = $element.parents('form').attr('id');
          if ($form_id == $id) {
            $uses_ajax = true;
            return false;
          }
        });

        //Check if we have any filters at all because of Views Selective Filter
        if($('input', this).length > 0) {
          var $filter_name = $('input', this).attr('name').slice(0, -2);
          if (Drupal.settings.better_exposed_filters.views[$view_name].displays[$view_display_id].filters[$filter_name].required && $('input:checked', this).length == 0) {
            $('input', this).prop('checked', true);
          }
        }
      });
    }
  }

  /*
   * Helper functions
   */

  /**
   * Adds/Removes the highlight class from the form-item div as appropriate
   */
  function _bef_highlight(elem, context) {
    $elem = $(elem, context);
    $elem.attr('checked')
      ? $elem.closest('.form-item', context).addClass('highlight')
      : $elem.closest('.form-item', context).removeClass('highlight');
  }

  /**
   * Update a slider when a related input element is changed.
   *
   * We don't need to check whether the new value is valid based on slider min,
   * max, and step because the slider will do that automatically and then we
   * update the textfield on the slider's change event.
   *
   * We still have to make sure that the min & max values of a range slider
   * don't pass each other though, however once this jQuery UI bug is fixed we
   * won't have to. - http://bugs.jqueryui.com/ticket/3762
   *
   * @param $el
   *   A jQuery object of the updated element.
   * @param valIndex
   *   The index of the value for a range slider or null for a non-range slider.
   * @param sliderOptions
   *   The options for the current slider.
   */
  function befUpdateSlider($el, valIndex, sliderOptions) {
    var val = parseFloat($el.val(), 10),
        currentMin = $el.parents('div.views-widget').next('.bef-slider').slider('values', 0),
        currentMax = $el.parents('div.views-widget').next('.bef-slider').slider('values', 1);
    // If we have a range slider.
    if (valIndex != null) {
      // Make sure the min is not more than the current max value.
      if (valIndex == 0 && val > currentMax) {
        val = currentMax;
      }
      // Make sure the max is not more than the current max value.
      if (valIndex == 1 && val < currentMin) {
        val = currentMin;
      }
      // If the number is invalid, go back to the last value.
      if (isNaN(val)) {
        val = $el.parents('div.views-widget').next('.bef-slider').slider('values', valIndex);
      }
    }
    else {
      // If the number is invalid, go back to the last value.
      if (isNaN(val)) {
        val = $el.parents('div.views-widget').next('.bef-slider').slider('value');
      }
    }
    // Make sure we are a number again.
    val = parseFloat(val, 10);
    // Set the slider to the new value.
    // The slider's change event will then update the textfield again so that
    // they both have the same value.
    if (valIndex != null) {
      $el.parents('div.views-widget').next('.bef-slider').slider('values', valIndex, val);
    }
    else {
      $el.parents('div.views-widget').next('.bef-slider').slider('value', val);
    }
  }

}) (jQuery);
;
(function($){
/**
 * To make a form auto submit, all you have to do is 3 things:
 *
 * ctools_add_js('auto-submit');
 *
 * On gadgets you want to auto-submit when changed, add the ctools-auto-submit
 * class. With FAPI, add:
 * @code
 *  '#attributes' => array('class' => array('ctools-auto-submit')),
 * @endcode
 *
 * If you want to have auto-submit for every form element,
 * add the ctools-auto-submit-full-form to the form. With FAPI, add:
 * @code
 *   '#attributes' => array('class' => array('ctools-auto-submit-full-form')),
 * @endcode
 *
 * If you want to exclude a field from the ctool-auto-submit-full-form auto submission,
 * add the class ctools-auto-submit-exclude to the form element. With FAPI, add:
 * @code
 *   '#attributes' => array('class' => array('ctools-auto-submit-exclude')),
 * @endcode
 *
 * Finally, you have to identify which button you want clicked for autosubmit.
 * The behavior of this button will be honored if it's ajaxy or not:
 * @code
 *  '#attributes' => array('class' => array('ctools-use-ajax', 'ctools-auto-submit-click')),
 * @endcode
 *
 * Currently only 'select', 'radio', 'checkbox' and 'textfield' types are supported. We probably
 * could use additional support for HTML5 input types.
 */

Drupal.behaviors.CToolsAutoSubmit = {
  attach: function(context) {
    // 'this' references the form element
    function triggerSubmit (e) {
      if ($.contains(document.body, this)) {
        var $this = $(this);
        if (!$this.hasClass('ctools-ajaxing')) {
          $this.find('.ctools-auto-submit-click').click();
        }
      }
    }

    // the change event bubbles so we only need to bind it to the outer form
    $('form.ctools-auto-submit-full-form', context)
      .add('.ctools-auto-submit', context)
      .filter('form, select, input:not(:text, :submit)')
      .once('ctools-auto-submit')
      .change(function (e) {
        // don't trigger on text change for full-form
        if ($(e.target).is(':not(:text, :submit, .ctools-auto-submit-exclude)')) {
          triggerSubmit.call(e.target.form);
        }
      });

    // e.keyCode: key
    var discardKeyCode = [
      16, // shift
      17, // ctrl
      18, // alt
      20, // caps lock
      33, // page up
      34, // page down
      35, // end
      36, // home
      37, // left arrow
      38, // up arrow
      39, // right arrow
      40, // down arrow
       9, // tab
      13, // enter
      27  // esc
    ];
    // Don't wait for change event on textfields
    $('.ctools-auto-submit-full-form input:text, input:text.ctools-auto-submit', context)
      .filter(':not(.ctools-auto-submit-exclude)')
      .once('ctools-auto-submit', function () {
        // each textinput element has his own timeout
        var timeoutID = 0;
        $(this)
          .bind('keydown keyup', function (e) {
            if ($.inArray(e.keyCode, discardKeyCode) === -1) {
              timeoutID && clearTimeout(timeoutID);
            }
          })
          .keyup(function(e) {
            if ($.inArray(e.keyCode, discardKeyCode) === -1) {
              timeoutID = setTimeout($.proxy(triggerSubmit, this.form), 500);
            }
          })
          .bind('change', function (e) {
            if ($.inArray(e.keyCode, discardKeyCode) === -1) {
              timeoutID = setTimeout($.proxy(triggerSubmit, this.form), 500);
            }
          });
      });
  }
}
})(jQuery);
;

(function($) {

/**
 * Drupal FieldGroup object.
 */
Drupal.FieldGroup = Drupal.FieldGroup || {};
Drupal.FieldGroup.Effects = Drupal.FieldGroup.Effects || {};
Drupal.FieldGroup.groupWithfocus = null;

Drupal.FieldGroup.setGroupWithfocus = function(element) {
  element.css({display: 'block'});
  Drupal.FieldGroup.groupWithfocus = element;
}

/**
 * Implements Drupal.FieldGroup.processHook().
 */
Drupal.FieldGroup.Effects.processFieldset = {
  execute: function (context, settings, type) {
    if (type == 'form') {
      // Add required fields mark to any fieldsets containing required fields
      $('fieldset.fieldset', context).once('fieldgroup-effects', function(i) {
        if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
          $('legend span.fieldset-legend', $(this)).eq(0).append(' ').append($('.form-required').eq(0).clone());
        }
        if ($('.error', $(this)).length) {
          $('legend span.fieldset-legend', $(this)).eq(0).addClass('error');
          Drupal.FieldGroup.setGroupWithfocus($(this));
        }
      });
    }
  }
}

/**
 * Implements Drupal.FieldGroup.processHook().
 */
Drupal.FieldGroup.Effects.processAccordion = {
  execute: function (context, settings, type) {
    $('div.field-group-accordion-wrapper', context).once('fieldgroup-effects', function () {
      var wrapper = $(this);

      // Get the index to set active.
      var active_index = false;
      wrapper.find('.accordion-item').each(function(i) {
        if ($(this).hasClass('field-group-accordion-active')) {
          active_index = i;
        }
      });

      wrapper.accordion({
        heightStyle: "content",
        active: active_index,
        collapsible: true,
        changestart: function(event, ui) {
          if ($(this).hasClass('effect-none')) {
            ui.options.animated = false;
          }
          else {
            ui.options.animated = 'slide';
          }
        }
      });

      if (type == 'form') {

        var $firstErrorItem = false;

        // Add required fields mark to any element containing required fields
        wrapper.find('div.field-group-accordion-item').each(function(i) {

          if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
            $('h3.ui-accordion-header a').eq(i).append(' ').append($('.form-required').eq(0).clone());
          }
          if ($('.error', $(this)).length) {
            // Save first error item, for focussing it.
            if (!$firstErrorItem) {
              $firstErrorItem = $(this).parent().accordion("activate" , i);
            }
            $('h3.ui-accordion-header').eq(i).addClass('error');
          }
        });

        // Save first error item, for focussing it.
        if (!$firstErrorItem) {
          $('.ui-accordion-content-active', $firstErrorItem).css({height: 'auto', width: 'auto', display: 'block'});
        }

      }
    });
  }
}

/**
 * Implements Drupal.FieldGroup.processHook().
 */
Drupal.FieldGroup.Effects.processHtabs = {
  execute: function (context, settings, type) {
    if (type == 'form') {
      // Add required fields mark to any element containing required fields
      $('fieldset.horizontal-tabs-pane', context).once('fieldgroup-effects', function(i) {
        if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
          $(this).data('horizontalTab').link.find('strong:first').after($('.form-required').eq(0).clone()).after(' ');
        }
        if ($('.error', $(this)).length) {
          $(this).data('horizontalTab').link.parent().addClass('error');
          Drupal.FieldGroup.setGroupWithfocus($(this));
          $(this).data('horizontalTab').focus();
        }
      });
    }
  }
}

/**
 * Implements Drupal.FieldGroup.processHook().
 */
Drupal.FieldGroup.Effects.processTabs = {
  execute: function (context, settings, type) {
    if (type == 'form') {

      var errorFocussed = false;

      // Add required fields mark to any fieldsets containing required fields
      $('fieldset.vertical-tabs-pane', context).once('fieldgroup-effects', function(i) {
        if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
          $(this).data('verticalTab').link.find('strong:first').after($('.form-required').eq(0).clone()).after(' ');
        }
        if ($('.error', $(this)).length) {
          $(this).data('verticalTab').link.parent().addClass('error');
          // Focus the first tab with error.
          if (!errorFocussed) {
            Drupal.FieldGroup.setGroupWithfocus($(this));
            $(this).data('verticalTab').focus();
            errorFocussed = true;
          }
        }
      });
    }
  }
}

/**
 * Implements Drupal.FieldGroup.processHook().
 *
 * TODO clean this up meaning check if this is really
 *      necessary.
 */
Drupal.FieldGroup.Effects.processDiv = {
  execute: function (context, settings, type) {

    $('div.collapsible', context).once('fieldgroup-effects', function() {
      var $wrapper = $(this);

      // Turn the legend into a clickable link, but retain span.field-group-format-toggler
      // for CSS positioning.

      var $toggler = $('span.field-group-format-toggler:first', $wrapper);
      var $link = $('<a class="field-group-format-title" href="#"></a>');
      $link.prepend($toggler.contents());

      // Add required field markers if needed
      if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
        $link.append(' ').append($('.form-required').eq(0).clone());
      }

      $link.appendTo($toggler);

      // .wrapInner() does not retain bound events.
      $link.click(function () {
        var wrapper = $wrapper.get(0);
        // Don't animate multiple times.
        if (!wrapper.animating) {
          wrapper.animating = true;
          var speed = $wrapper.hasClass('speed-fast') ? 300 : 1000;
          if ($wrapper.hasClass('effect-none') && $wrapper.hasClass('speed-none')) {
            $('> .field-group-format-wrapper', wrapper).toggle();
          }
          else if ($wrapper.hasClass('effect-blind')) {
            $('> .field-group-format-wrapper', wrapper).toggle('blind', {}, speed);
          }
          else {
            $('> .field-group-format-wrapper', wrapper).toggle(speed);
          }
          wrapper.animating = false;
        }
        $wrapper.toggleClass('collapsed');
        return false;
      });

    });
  }
};

/**
 * Behaviors.
 */
Drupal.behaviors.fieldGroup = {
  attach: function (context, settings) {
    settings.field_group = settings.field_group || Drupal.settings.field_group;
    if (settings.field_group == undefined) {
      return;
    }

    // Execute all of them.
    $.each(Drupal.FieldGroup.Effects, function (func) {
      // We check for a wrapper function in Drupal.field_group as
      // alternative for dynamic string function calls.
      var type = func.toLowerCase().replace("process", "");
      if (settings.field_group[type] != undefined && $.isFunction(this.execute)) {
        this.execute(context, settings, settings.field_group[type]);
      }
    });

    // Fixes css for fieldgroups under vertical tabs.
    $('.fieldset-wrapper .fieldset > legend').css({display: 'block'});
    $('.vertical-tabs fieldset.fieldset').addClass('default-fallback');

    // Add a new ID to each fieldset.
    $('.group-wrapper .horizontal-tabs-panes > fieldset', context).once('group-wrapper-panes-processed', function() {
      // Tats bad, but we have to keep the actual id to prevent layouts to break.
      var fieldgroupID = 'field_group-' + $(this).attr('id');
      $(this).attr('id', fieldgroupID);
    });
    // Set the hash in url to remember last userselection.
    $('.group-wrapper ul li').once('group-wrapper-ul-processed', function() {
      var fieldGroupNavigationListIndex = $(this).index();
      $(this).children('a').click(function() {
        var fieldset = $('.group-wrapper fieldset').get(fieldGroupNavigationListIndex);
        // Grab the first id, holding the wanted hashurl.
        var hashUrl = $(fieldset).attr('id').replace(/^field_group-/, '').split(' ')[0];
        window.location.hash = hashUrl;
      });
    });

  }
};

})(jQuery);
;
(function ($) {

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || 'GET';
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  // The WAI-ARIA setting aria-live="polite" will announce changes after users
  // have completed their current activity and not interrupt the screen reader.
  this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
  this.element.html('<div class="bar"><div class="filled"></div></div>' +
                    '<div class="percentage"></div>' +
                    '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage + '%');
    $('div.percentage', this.element).html(percentage + '%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback.
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors.
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display.
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer.
        pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = $('<div class="messages error"></div>').html(string);
  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};

})(jQuery);
;
(function ($) {
    Drupal.behaviors.colorboxNode = {
        // Lets find our class name and change our URL to
        // our defined menu path to open in a colorbox modal.
        attach: function (context, settings) {
            // Make sure colorbox exists.
            if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
                return;
            }

            // Mobile detection extracted from the colorbox module.
            // If the mobile setting is turned on, it will turn off the colorbox modal for mobile devices.
            if (settings.colorbox.mobiledetect && window.matchMedia) {
                // Disable Colorbox for small screens.
                var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
                if (mq.matches) {
                    return;
                }
            }

            $('.colorbox-node', context).once('init-colorbox-node-processed', function () {
                $(this).colorboxNode({'launch': false});
            });

            // When using contextual links and clicking from within the colorbox
            // we need to close down colorbox when opening the built in overlay.
            $('ul.contextual-links a', context).once('colorboxNodeContextual').click(function () {
                $.colorbox.close();
            });
        }
    };

    // Bind our colorbox node functionality to an anchor
    $.fn.colorboxNode = function (options) {
        var settings = {
            'launch': true,
            'width': Drupal.settings.colorbox_node.width,
            'height': Drupal.settings.colorbox_node.height
        };

        $.extend(settings, options);

        var href = $(this).attr('data-href');
        if (typeof href == 'undefined' || href == false) {
            href = $(this).attr('href');
        }
        // Create an element so we can parse our a URL no matter if its internal or external.
        var parse = document.createElement('a');
        parse.href = href;

        if(!href) {
            alert(Drupal.t('No url found on element'));
        }

        // Lets add our colorbox link after the base path if necessary.
        var base_path = Drupal.settings.basePath;
        var path_prefix = Drupal.settings.pathPrefix;
        var pathname = parse.pathname;

        // Lets check to see if the pathname has a forward slash.
        // This problem happens in IE7/IE8
        if (pathname.charAt(0) != '/') {
            pathname = '/' + parse.pathname;
        }

        // If clean URL's are not turned on, lets check for that.
        var url = $.getParameterByName('q', href);
        if (base_path != '/') {
            if (url != '') {
                var link = pathname.replace(base_path, base_path + parse.search.replace('?q=', '?q=/' + path_prefix + 'colorbox/'));
            } else {
                var link = pathname.replace(base_path, base_path + path_prefix + 'colorbox/') + parse.search;
            }
        } else {
            if (url != '') {
                var link = base_path + parse.search.replace('?q=', '?q=/' + path_prefix + 'colorbox/');
            } else {
                var link = base_path + path_prefix + 'colorbox' + pathname + parse.search;
            }
        }

        // Bind Ajax behaviors to all items showing the class.
        var element_settings = {};

        // This removes any loading/progress bar on the clicked link
        // and displays the colorbox loading screen instead.
        element_settings.progress = { 'type': 'none' };
        // For anchor tags, these will go to the target of the anchor rather
        // than the usual location.
        if (href) {
            element_settings.url = link;
            element_settings.event = 'click';
        }

        $(this).click(function () {
            var $this = $(this).clone();

            // Clear out the rel to prevent any confusion if not using the gallery class.
            if(!$this.hasClass('colorbox-node-gallery')) {
                $this.attr('rel', '');
            }

            // Lets extract our width and height giving priority to the data attributes.
            var innerWidth = $this.data('inner-width');
            var innerHeight = $this.data('inner-height');
            if (typeof innerWidth != 'undefined' && typeof innerHeight != 'undefined') {
                var params = $.urlDataParams(innerWidth, innerHeight);
            } else {
                var params = $.urlParams(href);
            }

            // If we did not find a width or height, lets use the default.
            if (params.innerHeight == undefined) params.innerHeight = settings.height;
            if (params.innerWidth == undefined) params.innerWidth = settings.width;

            params.html = '<div id="colorboxNodeLoading"></div>';
            params.onComplete = function () {
                $this.colorboxNodeGroup();
            }
            params.open = true;

            // Launch our colorbox with the provided settings
            $this.colorbox($.extend({}, Drupal.settings.colorbox, params));
        });

        // Log our click handler to our ajax object
        var base = $(this).attr('id');
        Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);

        // Default to auto click for manual call to this function.
        if (settings.launch) {
            Drupal.ajax[base].eventResponse(this, 'click');
            $(this).click();
        }
    }

    // Allow for grouping on links to showcase a gallery with left/right arrows.
    // This function will find the next index of each link on the page by the rel
    // and manually force a click on the link to call that AJAX and update the
    // modal window.
    $.fn.colorboxNodeGroup = function () {
        // Lets do setup our gallery type of functions.
        var $this = $(this);
        var rel = $this.attr('rel');
        if(rel && $this.hasClass('colorbox-node-gallery')) {
            if ($('a.colorbox-node-gallery[rel="' + rel + '"]:not("#colorbox a[rel="' + rel + '"]")').length > 1) {
                $related = $('a.colorbox-node-gallery[rel="' + rel + '"]:not("#colorbox a[rel="' + rel + '"]")');

                // filter $related array by href, to have mutliple colorbox links to the same target
                // appear as one item in the gallery only
                var $related_unique = [];
                $related.each(function() {
                    $.findHref($related_unique, this.href);
                    if (!$.findHref($related_unique, this.href).length) {
                        $related_unique.push(this);
                    }
                });
                // we have to get the actual used element from the filtered list in order to get it's relative index
                var current = $.findHref($related_unique, $this.get(0).href);
                $related = $($related_unique);
                var idx = $related.index($(current));
                var tot = $related.length;

                // Show our gallery buttons
                $('#cboxPrevious, #cboxNext').show();
                $.colorbox.next = function () {
                    index = getIndex(1);
                    $related[index].click();
                };
                $.colorbox.prev = function () {
                    index = getIndex(-1);
                    $related[index].click();
                };

                // Setup our current HTML
                $('#cboxCurrent').html(Drupal.settings.colorbox.current.replace('{current}', idx + 1).replace('{total}', tot)).show();
                $('#cboxNext').html(Drupal.settings.colorbox.next).show();
                $('#cboxPrevious').html(Drupal.settings.colorbox.previous).show();

                var prefix = 'colorbox';
                // Remove Bindings and re-add
                // @TODO: There must be a better way?  If we don't remove it causes a memory to be exhausted.
                $(document).unbind('keydown.' + prefix);

                // Add Key Bindings
                $(document).bind('keydown.' + prefix, function (e) {
                    var key = e.keyCode;
                    if ($related[1] && !e.altKey) {
                        if (key === 37) {
                            e.preventDefault();
                            $.colorbox.prev();
                        } else if (key === 39) {
                            e.preventDefault();
                            $.colorbox.next();
                        }
                    }
                });
            }

            function getIndex(increment) {
                var max = $related.length;
                var newIndex = (idx + increment) % max;
                return (newIndex < 0) ? max + newIndex : newIndex;
            }

        }
    }

    // Find a colorbox link by href in an array
    $.findHref = function(items, href) {
        return $.grep(items, function(n, i){
            return n.href == href;
        });
    };

    // Utility function to parse out our width/height from our url params
    $.urlParams = function (url) {
        var p = {},
            e,
            a = /\+/g,  // Regex for replacing addition symbol with a space
            r = /([^&=]+)=?([^&]*)/g,
            d = function (s) {
                return decodeURIComponent(s.replace(a, ' '));
            },
            q = url.split('?');
        while (e = r.exec(q[1])) {
            e[1] = d(e[1]);
            e[2] = d(e[2]);
            switch (e[2].toLowerCase()) {
                case 'true':
                case 'yes':
                    e[2] = true;
                    break;
                case 'false':
                case 'no':
                    e[2] = false;
                    break;
            }
            if (e[1] == 'width') {
                e[1] = 'innerWidth';
            }
            if (e[1] == 'height') {
                e[1] = 'innerHeight';
            }
            p[e[1]] = e[2];
        }
        return p;
    };

    // Utility function to return our data attributes for width/height
    $.urlDataParams = function (innerWidth, innerHeight) {
        return {'innerWidth':innerWidth,'innerHeight':innerHeight};
    };

    $.getParameterByName = function(name, href) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexString = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexString);
        var found = regex.exec(href);
        if(found == null)
            return "";
        else
            return decodeURIComponent(found[1].replace(/\+/g, " "));
    }

})(jQuery);
;
(function($) {
  Drupal.behaviors.chosen = {
    attach: function(context, settings) {
      settings.chosen = settings.chosen || Drupal.settings.chosen;

      // Prepare selector and add unwantend selectors.
      var selector = settings.chosen.selector;

      // Function to prepare all the options together for the chosen() call.
      var getElementOptions = function (element) {
        var options = $.extend({}, settings.chosen.options);

        // The width default option is considered the minimum width, so this
        // must be evaluated for every option.
        if (settings.chosen.minimum_width > 0) {
          if ($(element).width() < settings.chosen.minimum_width) {
            options.width = settings.chosen.minimum_width + 'px';
          }
          else {
            options.width = $(element).width() + 'px';
          }
        }

        // Some field widgets have cardinality, so we must respect that.
        // @see chosen_pre_render_select()
        if ($(element).attr('multiple') && $(element).data('cardinality')) {
          options.max_selected_options = $(element).data('cardinality');
        }

        return options;
      };

      // Process elements that have opted-in for Chosen.
      // @todo Remove support for the deprecated chosen-widget class.
      $('select.chosen-enable, select.chosen-widget', context).once('chosen', function() {
        options = getElementOptions(this);
        $(this).chosen(options);
      });

      $(selector, context)
        // Disabled on:
        // - Field UI
        // - WYSIWYG elements
        // - Tabledrag weights
        // - Elements that have opted-out of Chosen
        // - Elements already processed by Chosen
        .not('#field-ui-field-overview-form select, #field-ui-display-overview-form select, .wysiwyg, .draggable select[name$="[weight]"], .draggable select[name$="[position]"], .chosen-disable, .chosen-processed')
        .filter(function() {
          // Filter out select widgets that do not meet the minimum number of
          // options.
          var minOptions = $(this).attr('multiple') ? settings.chosen.minimum_multiple : settings.chosen.minimum_single;
          if (!minOptions) {
            // Zero value means no minimum.
            return true;
          }
          else {
            return $(this).find('option').length >= minOptions;
          }
        })
        .once('chosen', function() {
          options = getElementOptions(this);
          $(this).chosen(options);
        });
    }
  };
})(jQuery);
;
