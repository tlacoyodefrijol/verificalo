var btn_label = {
    'btn-notices-home-email' : 'notices-home-email',
    'btn-notices-home-phone' : 'notices-home-phone',
    'btn-notices-home-twitter' : 'notices-home-twitter'
};

$(document).ready(function() {
    $('.btn-notices-home').click(function (e) {
        e.preventDefault();
        ga('send', {
            'hitType': 'event',
            'eventCategory': 'button',
            'eventAction': 'click',
            'eventLabel': btn_label[this.id] });
        $('.btn-notices-home').addClass('btn-primary');
        $(this).addClass('btn-default');
        $(this).removeClass('btn-primary');
        $.ajax({ url: btn_subforms[this.id],
                 success: function (data) {
                     $('#notices-subform').fadeOut('slow', function() {
                         $('#notices-subform').html(data);
                         $("#notices-subform").fadeIn('slow', function () {
                             scroll_subform();
                         });
                     });
                 }});
    });
    if (typeof btn_active != "undefined") {
        $(btn_active).addClass('btn-default');
        $(btn_active).removeClass('btn-primary');        
        scroll_subform();
    }
});

function scroll_subform () {
    var y = $('#notices-subform').offset().top - 
        parseInt($('body').css('padding-top').replace("px", ""), 10);
    $('html,body').animate({ scrollTop: y }, 'slow');
}
