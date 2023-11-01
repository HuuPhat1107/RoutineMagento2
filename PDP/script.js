
require([
    'jquery'
], function ($) {
    $(document).ready(function () {
        var height = $('.product-description').height();
        if (height > 247) {
            $('#read-more').css('display', 'block');
            $('.product.attribute.description').removeClass('product-description-collapsible');
        }
        $('#read-more').click(function () {
            $('.product.attribute.description').addClass('product-description-collapsible');
            $(this).css('display', 'none');
            $('#read-less').css('display', 'block');
        });
        $('#read-less').click(function () {
            var top = $('.product.attribute.description').position().top;
            $("html, body").animate({ scrollTop: top - 100 }, 200);
            $('.product.attribute.description').removeClass('product-description-collapsible');
            $(this).css('display', 'none');
            $('#read-more').css('display', 'block');
        });
    });
});