var pageState = 1;

$(function () {

    $('#btn-1').on("click", () => {
        if (pageState != 1) {
            $('.main').animate({ left: "0vw" }, 700)
                .animate({ top: "0px" });
            pageState = 1;
        }
    });
    $('#btn-2').on("click", () => {
        if (pageState != 2) {
            $('.main').animate({ left: "-100vw", top: '0px' }, 700);
            pageState = 2;
        }
    });
    $('#btn-3').on("click", () => {
        if (pageState != 3) {
            $('.main').animate({ left: "-200vw" }, 700);
            pageState = 3;
        }
    });
    $('#btn-4').on("click", () => {
        if (pageState != 4) {
            $('.main').animate({ left: "-300vw", top: '0px' }, 700);
            pageState = 4;
        }
    });
});



