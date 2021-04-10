(function () {



    $('.workspace-display').on('click', function () {
        if ($('.profile-option').hasClass('show')) {
            $('.profile-option').removeClass('show')
        }
        $('.workspace-options').toggleClass('show');
    });

    $('.create-btn').on('click', function () {
        $('.create-options').toggleClass('show');
    });

    $('.love-work').each(function () {
        $(this).on('click', function (e) {
            e.preventDefault();
            $(this).children().toggleClass('loved');
            //$('.love-work span').toggleClass('loved');
        });
    });

    $('.profile-btn').on('click', function () {
        if ($('.workspace-options').hasClass('show')) {
            $('.workspace-options').removeClass('show')
        }
        $('.profile-option').toggleClass('show');
    });

    $('.floating-lock').each(function () {
        $(this).on('click', function () {
            if ($(this).children().hasClass('flaticon-lock')) {
                $(this).children().removeClass('flaticon-lock');
                $(this).children().addClass('flaticon-open-padlock-silhouette');
            } else {
                $(this).children().removeClass('flaticon-open-padlock-silhouette');
                $(this).children().addClass('flaticon-lock');
            }
        });
    });



    $('.campaign-box').each(function () {
        $(this).on('click', function () {
            removeActive($('.campaign-box'));
            $(this).addClass('active');
        });

    });

    $('.btn-submit-ad').on('click', function (e) {
        e.preventDefault();
        $('.large-display-notif').addClass('show-flex');

        setTimeout(function () {
            $('.large-display-notif').removeClass('show-flex');
        }, 3000);
    });

    $('.page-desc ~ .d-flex .campaign-title').on('click', function () {
        $('.campaigns-list-wrap').toggleClass('show');
    });

    $('.campaigns-list-wrap .nav-item').each(function () {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.campaign-target-img').attr('src', $(this).attr('data-img'));
            $('.campaign-target-text').text($(this).attr('data-name'))
        });

    });

    $('#email-type-select').on('click', function (e) {
        // $(this).val('help')
        // alert($(this).val());
        $('.email-types-wrap').toggleClass('show');
    });

    $('.email-type-item').each(function () {
        $(this).on('click', function () {
            var value;
            value = $(this).children('.email-type-content').children('.title').text();
            $('#email-type-select .email-type-display').text(value);
            $('#email-type').val(value);
        });
    });

    $('#select-email-view').on('change', function () {
        var value = $(this).val();
        switch (value) {
            case 'tablet':
                $('.prev-icon').removeClass('flaticon-desktop-monitor');
                $('.prev-icon').removeClass('flaticon-smartphone');
                $('.prev-icon').addClass('flaticon-tablet');
                break;
            case 'mobile':
                $('.prev-icon').removeClass('');
                $('.prev-icon').removeClass('flaticon-tablet');
                $('.prev-icon').addClass('flaticon-smartphone');
                break;
            default:
                $('.prev-icon').removeClass('flaticon-smartphone');
                $('.prev-icon').removeClass('flaticon-tablet');
                $('.prev-icon').addClass('flaticon-desktop-monitor');
        }
    });

    $('.open-slide-in').on('click', function () {
        $('.slide-in-wrap').toggleClass('show');
    });

    $('.btn-close').on('click', function () {
        $('.slide-in-wrap').removeClass('show');
    });

    $('[data-toggle="tooltip"]').tooltip();



    var keywords = [];
    var keywordsToAvoid = [];
    var charList = [];


    function attachKeypressEvent(input, target, arr) {
        $(input).keypress(function (e) {

            if (e.which === 13) {
                if (this.value.length > 0) {

                    var elem = '<div class="keyword-main">' +
                        '<div style = "display: inline-block;" class = "mt-1 mb-1" > ' +
                        '<div class = "keyword-items">' +
                        '<span>' + this.value + '</span>' +
                        '<img data-value=" ' + this.value + ' "  src="../assets/icons/times-icon.8fb56838.svg" class="times-icon close-keyword">' +
                        '</div>' +
                        '</div>' +
                        '</div>';

                    $(target).append(elem);

                    arr.push(this.value);
                    this.value = "";
                    console.log(keywords);
                }

            }
        });
    }

    attachKeypressEvent('#product-char', '#char-list', charList);
    attachKeypressEvent('#keyword', '#keyword-list', keywords);
    attachKeypressEvent('#keyword-avoid', '#keyword-avoid-list', keywordsToAvoid);

    $('.btn-search-campaign').on('click', function () {
        if ($('.search-wrap').hasClass('active')) {
            $('.search-wrap').removeClass('active');
            return;
        }
        $('.search-wrap').addClass('active');
        $('.search-wrap input').focus();
    });

    $('.forward-btn').on('click', function () {
        $('.floating-socials').toggleClass('show');
    });

    $('.editor-top').on('click', function () {
        $(this).attr('id', 'top-content');
    });

    $('.ql-picker-label').on('mousedown', function (e) {
        e.preventDefault();
    });

    $('.image-box').each(function () {
        $(this).on('click', function () {
            // $(this).children('input').prop("checked", true);
            // console.log($(this).children('input').prop('checked'));
            // //removeCheck($(this));
            for (var i = 0; i < $('.image-box').children('input').length; i++) {
                $('.image-box').children('input')[i].checked = false;
            }
            $(this).children('input').prop("checked", true);
        });
    });

    $('.editor-image-wrap img').on('click', function () {
        $('.bd-example-modal-lg').modal('show')
    });



    // var checkboxes = document.getElementsByTagName('input');
    // for (var i=0; i<checkboxes.length; i++)  {
    //     if (checkboxes[i].type == 'checkbox')   {
    //       checkboxes[i].checked = false;
    //     }
    //   }

    $(document).on('click', '.close-keyword', function () {
        // This will work!
        removeTag(this);
    });
    autosize($('#textarea-title'));
    autosize($('#textarea-desc'));
    editCopy('#title-comp', '#textarea-title');
    editCopy('#desc-comp', '#textarea-desc');

    function editCopy(elem, targetArea) {
        $(elem).on('click', function () {
            $(targetArea).val($(this).text().replace(/\s+/g, " ").trim());
            console.log($.trim($(this).text()));
            $(this).css('display', 'none');
            $(targetArea).css('display', 'inline');
        });

        $(targetArea).on('blur', function () {
            $(elem).text($(this).val());
            $(this).css('display', 'none');
            $(elem).css('display', 'block');
        });
    }


    $('body').click(function () {
        // closeMenu();

    });


    function removeTag(x) {
        $(x).parent().parent().parent('.keyword-main').remove();
        console.log(x);
        // keywords = keywords.filter((keyword) => {
        //     console.log('Keyword: ' + keyword);
        //     console.log('data-value' + x.getAttribute('data-value'));
        //     return keyword !== x.getAttribute('data-value');
        // });
        keywords = $.grep(keywords, function (value) {
            return value != x.getAttribute('data-value');
        });

        console.log(typeof x.getAttribute('data-value'));
        console.log(keywords);
    }

    function removeCheck(elem) {
        $(elem).each(function () {
            $(this).children('input').prop('checked', false);
        });
    }





    function addKeyword(val, target) {
        var elem = '<div class="keyword-main">' +
            '<div style = "display: inline-block;" class = "mt-1 mb-1" > ' +
            '<div class = "keyword-items">' +
            '<span>' + val + '</span>' +
            '<img src = "../assets/icons/times-icon.8fb56838.svg" class = "times-icon" >' +
            '</div>' +
            '</div>' +
            '</div>';
        target.append(elem);
    }

    var closeMenu = function (elem) {
        elem.each(function () {
            if ($(this).hasClass('show') || $(this).hasClass('show-flex')) {
                $(this).removeClass('');
            }

        });
    };







    function removeActive(elem) {
        for (var i = 0; i < elem.length; i++) {
            if (elem.hasClass('active')) {
                elem.removeClass('active');
            }
        }
    }
})();