function Engine(){fullScreen(),sTransition(),detail(),mobile()}function fullScreen(){var e=$(window).height();$("section").css("height",e)}function MenuClose(){Close=!0,$("section, nav").removeClass("open")}function day(){$("section").removeClass("sky night polution").addClass("day")}function sky(){$("section").removeClass("day night polution").addClass("sky")}function night(){$("section").removeClass("day polution sky").addClass("night")}function polution(){$("section").removeClass("day sky night").addClass("polution")}function sTransition(){function e(){$("li[data-dest="+a+"]").addClass("selected").siblings().removeClass("selected"),a==t[0]?sky():a==t[2]?polution():a==t[5]?night():day()}var a="earth",i=!0,t=["earth","cities","greenHouse","seaLevelRise","cleanEnergy","greenPlanet"],l=new TimelineMax;l.add(TweenMax.to(".layer-one, .layer-three, .layer-seven",.35,{delay:.35,alpha:1})),l.add(TweenMax.to(".blink-star",.35,{display:"block",alpha:1})),l.add(TweenMax.to(".layer-eight",.35,{visibility:"visible",left:0})),l.add(TweenMax.to(".layer-nine",.35,{visibility:"visible",top:0})),l.add(TweenMax.to("section h1",.35,{delay:.2,alpha:1})),l.add(TweenMax.to(".start",.35,{delay:.2,display:"block",alpha:1}));var n=new TimelineMax;n.pause(),n.add(TweenMax.to(".layer-eleven",.35,{visibility:"visible",top:0})),n.add(TweenMax.to(".layer-twelve",.35,{visibility:"visible",top:0})),n.add(TweenMax.to(".layer-ten",.35,{visibility:"visible",left:0})),n.add(TweenMax.to(".layer-thirteen",.35,{visibility:"visible",left:0})),n.add(TweenMax.to(".layer-fourteen",.35,{visibility:"visible",top:0})),n.add(TweenMax.to(".layer-fifteen",.35,{visibility:"visible",left:0})),n.add(TweenMax.to('.detail[data-title="cities"]',.35,{display:"block",alpha:1})),n.add(TweenMax.to('.up[data-dest="earth"], .down[data-dest="greenHouse"]',.35,{delay:.2,display:"block",alpha:1}));var s=new TimelineMax;s.pause(),s.add(TweenMax.to(".layer-sixteen",.35,{visibility:"visible",top:0})),s.add(TweenMax.to(".layer-seventeen",.35,{visibility:"visible",top:0})),s.add(TweenMax.to(".layer-eighteen",.35,{visibility:"visible",left:0})),s.add(TweenMax.to(".layer-nineteen",.35,{visibility:"visible",left:0})),s.add(TweenMax.to(".layer-twenty",.35,{visibility:"visible",left:0})),s.add(TweenMax.to(".layer-twentyOne",.35,{visibility:"visible",top:0})),s.add(TweenMax.to('.detail[data-title="greenHouse"]',.35,{display:"block",alpha:1})),s.add(TweenMax.to('.up[data-dest="cities"], .down[data-dest="seaLevelRise"]',.35,{delay:.2,display:"block",alpha:1}));var o=new TimelineMax;o.pause(),o.add(TweenMax.to(".layer-thirtyFour",.35,{visibility:"visible",top:0})),o.add(TweenMax.to(".layer-thirtyFive",.35,{visibility:"visible",left:0})),o.add(TweenMax.to(".layer-thirtySix",.35,{visibility:"visible",top:0})),o.add(TweenMax.to(".layer-thirtySeven",.35,{visibility:"visible",left:0})),o.add(TweenMax.to(".layer-thirtyEight",.35,{visibility:"visible",left:0})),o.add(TweenMax.to(".layer-thirtyNine",.35,{visibility:"visible",top:0})),o.add(TweenMax.to('.detail[data-title="seaLevelRise"]',.35,{display:"block",alpha:1})),o.add(TweenMax.to('.up[data-dest="greenHouse"], .down[data-dest="cleanEnergy"]',.35,{delay:.2,display:"block",alpha:1}));var d=new TimelineMax;d.pause(),d.add(TweenMax.to(".layer-twentyTwo",.35,{visibility:"visible",left:0})),d.add(TweenMax.to(".layer-twentyThree",.35,{visibility:"visible",top:0})),d.add(TweenMax.to(".layer-twentyFour",.35,{visibility:"visible",top:0})),d.add(TweenMax.to(".layer-twentyFive",.35,{visibility:"visible",left:0})),d.add(TweenMax.to('.detail[data-title="cleanEnergy"]',.35,{display:"block",alpha:1})),d.add(TweenMax.to('.up[data-dest="seaLevelRise"], .down[data-dest="greenPlanet"]',.35,{delay:.2,display:"block",alpha:1}));var r=new TimelineMax;r.pause(),r.add(TweenMax.to(".layer-twentySix",.35,{alpha:1})),r.add(TweenMax.to(".layer-twentySeven",.35,{visibility:"visible",top:0})),r.add(TweenMax.to(".layer-twentyEight",.35,{visibility:"visible",left:0})),r.add(TweenMax.to(".layer-twentyNine",.35,{visibility:"visible",top:0})),r.add(TweenMax.to(".layer-thirty",.35,{visibility:"visible",left:0})),r.add(TweenMax.to(".layer-thirtyOne, .layer-thirtyTwo",.35,{visibility:"visible",left:0})),r.add(TweenMax.to(".layer-thirtyThree",.35,{visibility:"visible",top:0})),r.add(TweenMax.to('.detail[data-title="greenPlanet"]',.35,{display:"block",alpha:1})),r.add(TweenMax.to('.up[data-dest="cleanEnergy"], .review',.35,{delay:.2,display:"block",alpha:1})),r.add(TweenMax.to("footer",.35,{delay:.2,alpha:1}));var y=[l,n,s,o,d,r];$(".start").click(function(){a="cities",MenuClose(),l.timeScale(2).reverse().eventCallback("onReverseComplete",function(){e(a),n.restart().timeScale(1).play()})}),$(".down").click(function(){MenuClose();for(var i=$(this).data("dest"),l=0;l<=t.length;++l)if(i===t[l]){a=t[l],y[l-1].timeScale(2).reverse().eventCallback("onReverseComplete",function(){e(a),y[l].restart().timeScale(1).play()});break}}),$(".up").click(function(){MenuClose();for(var i=$(this).data("dest"),l=0;l<=t.length;++l)if(i===t[l]){a=t[l],y[l+1].timeScale(2).reverse().eventCallback("onReverseComplete",function(){e(a),y[l].restart().timeScale(1).play()});break}}),$(".review").click(function(){a="earth",MenuClose(),r.timeScale(2).reverse().eventCallback("onReverseComplete",function(){e(a),l.restart().timeScale(1).play()})}),$(document).keyup(function(i){i.preventDefault();for(var l=i.which,n=0;n<=t.length;++n){if(a==t[n]&&40==l&&"greenPlanet"!=a){a=t[n+1],MenuClose(),y[n].timeScale(2).reverse().eventCallback("onReverseComplete",function(){e(a),y[n+1].restart().timeScale(1).play()});break}if(a==t[n]&&38==l&&"earth"!=a){a=t[n-1],MenuClose(),y[n].timeScale(2).reverse().eventCallback("onReverseComplete",function(){e(a),y[n-1].restart().timeScale(1).play()});break}}}),$(".navicon").click(function(){i?($("section, nav").addClass("open"),i=!1):($("section, nav").removeClass("open"),i=!0)}),$("nav ul li").click(function(){var l=$(this).data("dest");if($("section, nav").removeClass("open"),i=!0,l!=a)for(var n=0;n<=t.length;++n)if(a==t[n])for(var s=0;s<=t.length;++s)if(l===t[s]){a=t[s],y[n].timeScale(2).reverse().eventCallback("onReverseComplete",function(){e(a),y[s].restart().timeScale(1).play()});break}}),$("nav ul li:last-child").unbind("click")}function detail(){$(".detail").click(function(){var e=$(this).data("title");TweenMax.to(".detail[data-title="+e+"]",.35,{alpha:0}),TweenMax.to("article[data-target="+e+"]",.35,{delay:.35,display:"block",alpha:1})}),$(".close").click(function(){var e=$(this).data("close");TweenMax.to("article[data-target="+e+"]",.35,{display:"none",alpha:0}),TweenMax.to(".detail[data-title="+e+"]",.35,{delay:.35,alpha:1})})}function mobile(){isMobile.phone&&($(".up").removeClass("normalUp").addClass("mobileUp"),$(".down").removeClass("normalDown").addClass("mobileDown"),$(".review").removeClass("normal").addClass("mobile"),$("footer").css({bottom:"14%",width:"100%",left:0}),$("#awwwards, #cssda, #cssreel, #csswinner").css("display","none")),isMobile.any&&$("nav ul li:last-child a").css("color","#499cd8"),isMobile.any||$("html").addClass("no-touch")}$(window).resize(fullScreen),$(window).orientationchange(fullScreen);