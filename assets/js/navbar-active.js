$(document).ready(function () {
    // Initial highlight on load
    $('.nav-link[href="#hero"]').addClass('text-[#E95927] font-bold');

    // Toggle mobile menu
    $('#menu-toggle input').change(function () {
        $('#menu').toggleClass('hidden');
    });

    $(window).on('scroll', function () {
        let scrollDistance = $(window).scrollTop();

        $('section').each(function () {
            let sectionTop = $(this).offset().top;
            let sectionHeight = $(this).outerHeight();
            let sectionId = $(this).attr('id');

            if (scrollDistance >= sectionTop - 100 && scrollDistance < sectionTop + sectionHeight) {
                // Remove active classes from all links
                $('.nav-link').removeClass('text-[#E95927] font-bold text-black');

                // Add active class to matching links
                $(`.nav-link[href="#${sectionId}"]`).each(function () {
                    $(this).addClass('font-bold');

                    if ($(`#${sectionId}`).hasClass('bg-[#E95927]')) {
                        $(this).addClass('text-black');
                    } else {
                        $(this).addClass('text-[#E95927]');
                    }
                });

                // Change navbar text color (desktop)
                if ($(this).hasClass('bg-[#07080A]') || $(this).hasClass('bg-[#E95927]') || $(this).hasClass('bg-black')) {
                    $('#navbar').removeClass('text-[#07080A]').addClass('text-white');
                } else {
                    $('#navbar').removeClass('text-white').addClass('text-[#07080A]');
                }

                // Change hamburger toggle color
                if ($(this).hasClass('bg-white')) {
                    $('.hamburger-line').css('stroke', 'black');
                } else if ($(this).hasClass('bg-black') || $(this).hasClass('bg-[#07080A]') || $(this).hasClass('bg-[#E95927]')) {
                    $('.hamburger-line').css('stroke', 'white');
                } else {
                    // Default fallback (optional)
                    $('.hamburger-line').css('stroke', '#101010');
                }
            }
        });
    });
});
