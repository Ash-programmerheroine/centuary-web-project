// Ready Function
$(document).ready(function () {
    // Default 
    $(".l1").addClass("active");
    $(".img1").show();
    $(".img2").hide();
    $(".img3").hide();
    $(".img4").hide();
    $(".img5").hide();
    $(".img6").hide();
    $(".img7").hide();

    $(".l1").click(function () {
        $(".l1").addClass("active");
        $(".img1").show();
        $(".l2").removeClass("active");
        $(".img2").hide();
        $(".l3").removeClass("active");
        $(".img3").hide();
        $(".l4").removeClass("active");
        $(".img4").hide();
        $(".l5").removeClass("active");
        $(".img5").hide();
        $(".l6").removeClass("active");
        $(".img6").hide();
        $(".l7").removeClass("active");
        $(".img7").hide();
    });

    $(".l2").click(function () {
        $(".l1").removeClass("active");
        $(".l2").addClass("active");
        $(".l3").removeClass("active");
        $(".l4").removeClass("active");
        $(".l5").removeClass("active");
        $(".l6").removeClass("active");
        $(".l7").removeClass("active");
        $(".img1").hide();
        $(".img2").show();
        $(".img3").hide();
        $(".img4").hide();
        $(".img5").hide();
        $(".img6").hide();
        $(".img7").hide();
    });

    $(".l3").click(function () {
        $(".l1").removeClass("active");
        $(".l2").removeClass("active");
        $(".l3").addClass("active");
        $(".l4").removeClass("active");
        $(".l5").removeClass("active");
        $(".l6").removeClass("active");
        $(".l7").removeClass("active");
        $(".img1").hide();
        $(".img2").hide();
        $(".img3").show();
        $(".img4").hide();
        $(".img5").hide();
        $(".img6").hide();
        $(".img7").hide();
    });

    $(".l4").click(function () {
        $(".l1").removeClass("active");
        $(".l2").removeClass("active");
        $(".l3").removeClass("active");
        $(".l4").addClass("active");
        $(".l5").removeClass("active");
        $(".l6").removeClass("active");
        $(".l7").removeClass("active");
        $(".img1").hide();
        $(".img2").hide();
        $(".img3").hide();
        $(".img4").show();
        $(".img5").hide();
        $(".img6").hide();
        $(".img7").hide();
    });

    $(".l5").click(function () {
        $(".l1").removeClass("active");
        $(".l2").removeClass("active");
        $(".l3").removeClass("active");
        $(".l4").removeClass("active");
        $(".l5").addClass("active");
        $(".l6").removeClass("active");
        $(".l7").removeClass("active");
        $(".img1").hide();
        $(".img2").hide();
        $(".img3").hide();
        $(".img4").hide();
        $(".img5").show();
        $(".img6").hide();
        $(".img7").hide();
    });

    $(".l6").click(function () {
        $(".l1").removeClass("active");
        $(".l2").removeClass("active");
        $(".l3").removeClass("active");
        $(".l4").removeClass("active");
        $(".l5").removeClass("active");
        $(".l6").addClass("active");
        $(".l7").removeClass("active");
        $(".img1").hide();
        $(".img2").hide();
        $(".img3").hide();
        $(".img4").hide();
        $(".img5").hide();
        $(".img6").show();
        $(".img7").hide();
    });

    $(".l7").click(function () {
        $(".l1").removeClass("active");
        $(".l2").removeClass("active");
        $(".l3").removeClass("active");
        $(".l4").removeClass("active");
        $(".l5").removeClass("active");
        $(".l6").removeClass("active");
        $(".l7").addClass("active");
        $(".img1").hide();
        $(".img2").hide();
        $(".img3").hide();
        $(".img4").hide();
        $(".img5").hide();
        $(".img6").hide();
        $(".img7").show();
    });

    // Owl Slider Codes
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});