
function requiredCheck(selector, type){
    if(!type){
        type = 'placeholder';
    }
    else{
        type = 'tooltip';
    }
    var error = false;
    $(selector).css('position', 'relative');
    $(selector + ' .required').removeClass('r_error');
    $(selector + ' .required').each(function(i, el) {
        if ($(el).hasClass('r_phone')) {
            var myRe = /^((8|\+3|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,11}$/i;
            if (!myRe.exec($(el).val())) {
                error = true;
                $(el).addClass('r_error');
                if(type == 'tooltip'){
                    $('<div class="tooltip">Неверный формат номера</div>').insertAfter($(el)).css({'top':$(el).position().top, 'left' : ($(el).position().left-$(el).width())});
                }
                else{
                    $(el).val('').attr('placeholder', 'Неверный формат номера');
                }

            }
        }
        else if ($(el).hasClass('r_email')) {
            if ($(el).val().length) {
                var myRe = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
                if (!myRe.exec($(el).val())) {
                    error = true;
                    $(el).addClass('r_error');
                    if(type == 'tooltip') {
                        $('<div class="tooltip">E-mail указан неправильно</div>').insertAfter($(el)).css({'top':$(el).position().top, 'left' : ($(el).position().left-$(el).width())});
                    }
                    else{
                        $(el).val('').attr('placeholder', 'E-mail указан неправильно');
                    }
                }
            }
            else {
                error = true;
                $(el).addClass('r_error');
                if(type == 'tooltip') {
                    $('<div class="tooltip">Поле E-mail не должно быть пустым</div>').insertAfter($(el)).css({'top':$(el).position().top, 'left' : ($(el).position().left-$(el).width())});
                }
                else{
                    $(el).val('').attr('placeholder', 'поле E-mail не должно быть пустым');
                }
            }
        }
        else {
            if (!$(el).val().length) {
                error = true;
                $(el).addClass('r_error');
                $(el).parent().css('position','relative');
                if(type == 'tooltip') {
                    $('<div class="tooltip">Поле не должно быть пустым</div>').insertAfter($(el)).css({'top':$(el).position().top, 'left' : ($(el).position().left-$(el).width())});
                }
                else{
                    $(el).val('').attr('placeholder', 'Поле не должно быть пустым');
                }
            }
        }

        $(".r_error").focusin(function() {
            $(el).attr("placeholder", $(el).attr("data-val"));
            $(el).next('.tooltip').remove();
            $(this).removeClass("r_error");
        });
    });
    return error;


}
$(document).ready(function(){
    $('#modal_order_help').submit(function(e){
        var thifForm = $(this);
        var formId = thifForm.attr('id');
        e.preventDefault();
        var req = requiredCheck('#' + formId);
        if(!req){
        var form = $(this).serialize();
        $.post('/ajax/feedback.php',form,function(data){
            thifForm.trigger( 'reset' );
            $(".modal_header, .modal_body").css("display","none");
            $(".success").css("display","block");
        });
        }
    });
    $('.form_contact').submit(function(e){
        e.preventDefault();
        var req = requiredCheck('.form_contact');
        if(!req){
        var form = $(this).serialize();
        $.post('/ajax/feedback.php',form,function(data){
            console.log(data);
            $('.form_contact').trigger( 'reset' );
        });
        }
    });
});