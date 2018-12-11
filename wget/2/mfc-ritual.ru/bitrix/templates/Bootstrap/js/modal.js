
$(function(){
    $('.header_links_wrapper').click(function(e){
        e.preventDefault();
        var title = $(this).find('a.header_links').text();
        openModal(title);
    });

    $('.modal_wrapper').click(function(){
        $('.modal_wrapper,.modal_window').fadeOut(200)
    });

});

function openModal(title){
    $('.modal_window').show();
    $('.modal_wrapper').fadeIn(300);
    $('.modal_window .block_title').text(title);
    $('.modal_window input[type="hidden"]').val(title);
    $(".modal_header, .modal_body").css("display","block");
    $(".modal_window .success").css("display","none");
//    setTimeout(function(){$('.modal_window h2.block_title span').css({'position':'relative'});},100);
    $('.modal_window').animate({
        display: 'block',
        'margin-top': $(window).scrollTop()+100
    },300);
    $('.modal_window h2.block_title').css({'position':'relative'});
    
    //setTimeout(function(){$('.modal_window h2.block_title').css({'position':'relative'});},300);
    setTimeout(function(){$('.modal_window h2.block_title').css({'position':''});},100);
}

function closeModal(){
    $('.modal_window').animate({
        'margin-top': -800
    },300);
    $('.modal_window').hide();
    $('.wrapp_action').hide();
    $('.modal_wrapper').fadeOut(300);
}

  $(document).ready(function(){
        $(".produkts").hover(function(){
            $(this).find(".title_bot span").hide(20);
        }, function(){
            $(this).find(".title_bot span").show(20);
        });
    });

  $(document).ready(function(){
    $(this).find(".more_serv").css({'color':'#979797'});
        $(".wrapp_serv,.wrapp_info").hover(function(){
            $(this).find(".text_prev span, .more_serv").css({'color':'#00A5FB'});
        }, function(){
            $(this).find(".text_prev span").css({'color':'#000'});
            $(this).find(".more_serv").css({'color':'#979797'});
        });
    });
  $(document).ready(function() {
          $('a.more.on_start').click(function() {
            $('html, body').animate({scrollTop:'0'},500);
          })

   });
    $(document).ready(function(){
        var fullHeight = 0;
        var height = 0;

    $('.revi').each(function(i){
        if (i < 5 ) {
            height = $(this).height();
            fullHeight = fullHeight + height + 40;
        }
    });
    $('.reviews').height(fullHeight);
        $('.all_list a').toggle(function(){
          var elH = $('.reviews').find('.revi').height()+10;
          var elCnt = Math.ceil($('.reviews').find('.revi').size());
             
          var blH = elH*elCnt;
        $('.reviews').animate({height: blH}, 500);
        $(this).text('скрыть спиcок');

        },function(){

        $('.reviews').height(fullHeight);
        $('html, body').animate({scrollTop:'250'});
        $(this).text('полный спиcок');

});
    });
    $(document).ready(function(){
        var fullHeight = 0;
        var height = 0;

    $('.services').each(function(i){
        if (i < 2 ) {
            height = $(this).height();
            fullHeight = fullHeight + height + 15;
        }
    });
        $('.home_price').height(fullHeight);
    $('.more.up').toggle(function(){
      var elH = $('.home_price').find('.services').height() + 15;
      var elCnt = Math.ceil($('.home_price').find('.services').size()/3);
         
      var blH = elH*elCnt;
      console.log(blH)
    $('.home_price').animate({height: blH}, 300);
    $(this).text('скрыть спиcок услуг');
    },
    function(){
    $('.home_price').height(fullHeight);
    $('html, body').animate({scrollTop:'350'});
    $(this).text('полный спиcок услуг');

    });
    });

    $(document).ready(function() {
        $('.order_call').click(function(){
            $('.time').css({"display": "block"});
            $('label.textarea').css({"display":"none"});
        });
        $('.close_modal,.modal_wrapper').click(function(){
            $('.time').css({"display": "none"});
            $('label.textarea').css({"display":"block"});
        });
    });
    $(document).ready(function() {
        $('a.red.offer_prod').click(function(e){
            $('.block_title span').addClass('color');
        e.preventDefault();
        var title = $(this).find('.pevu_title p').text();
        openModaloffers(title);
   });
    $('.close_modal').click(function(){
        $('.block_title span').removeClass('color');
    });


    $(document).ready(function() {
    $("a.gallery").fancybox();
        $("#menu a, .anim").hover( function() {
        $(this).animate({"paddingLeft" : "0"}, 300)},
    function() {
        $(this).animate({"paddingLeft" : "0"}, 300);
});

        $("a.iframe").fancybox({
            "frameWidth" : 800,  // ширина окна, px (425px - по умолчанию)
            "frameHeight" : 600 // высота окна, px(355px - по умолчанию)
        });
});
});

    $(document).ready(function() {
    $('a.red.offer_prod').click(function(){
        $('.modal_window_offer').animate({'top':$(window).scrollTop()+70},300,
    function(){
        $(".modal_wrapper,.modal_window_offer").fadeIn(300);
    });
        });
 });
    $(document).ready(function() {
        $('.close_modal').click(function(){
        $(".modal_wrapper,.modal_window_offer").fadeOut(300);
        $('.contacts_form_wrap input').removeClass('r_error');
    (function(){
        $('.tooltip').hide();
 });
      });
 });
     $(document).ready(function() {
        $('.close_modal,.modal_wrapper').click(function(){
        $('.tooltip').hide();
      });
 });

        $(document).ready(function() {
        $('.modal_wrapper').click(function(){
        $('.modal_window_offer').fadeOut(300);
        $('.contacts_form_wrap input').removeClass('r_error');
    (function(){
        $('.tooltip').css({'display':'none'});
 });
      });

        $(document).ready(function(){
        $(".header_links_wrapper").click(function(){
        var a = new String;
        a = $('.block_title').html();
        var b = a.indexOf(' '); 
        if (b == -1) {
        b = a.length;
        }
        $('.block_title').html('<span class="first_word">'+a.substring(0, b)+'</span>'+a.substring(b, a.length));
        });
        });
 });

