"use strict";$(document).ready(function(){var e=document.querySelector(".get_subscribe"),t=document.querySelector(".formSubscribe"),n=document.getElementById("get_subscribe_email"),i=document.getElementById("get_subscribe_btn"),a=document.getElementById("error-subscribe"),r=/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;n&&i&&$(i).on("click",function(){var s=n.value;s.match(r)&&s.length>=3&&s.length<=100?$.ajax({url:"../users/subscribe",type:"POST",data:{email_subscribe:s}}).done(function(a){n.setAttribute("disabled","disabled"),i.setAttribute("disabled","disabled"),t.innerHTML="",e.innerHTML="<h2>Спасибо за подписку</h2>"}).fail(function(){a.innerText="Ошибка"}):a.innerText="Ошибка при заполнении E-Mail'a"}),$(window).scroll(function(){var e=.4*$(window).scrollTop()/$(window).height();e=1-e,$(".arrow-main").css("opacity",e)}),$('a[href^="#blocks-info"]').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if((e=e.length?e:$("[name="+this.hash.slice(1)+"]")).length)return $("html,body").animate({scrollTop:e.offset().top},1e3),!1}}),$("#slider").responsiveSlides({auto:!0,pager:!1,nav:!0,speed:800,namespace:"callbacks",before:function(){$(".events").append("<li>before event fired.</li>")},after:function(){$(".events").append("<li>after event fired.</li>")}})});