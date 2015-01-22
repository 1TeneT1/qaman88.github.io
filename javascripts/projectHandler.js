$(document).ready(function () {
    $(".projectDialog").dialog({
        autoOpen: false,
        buttons: {
            Close: function () {
                $(this).dialog("close");
            }
        },
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        },
        height: 400,
        width: 800,
        modal: true
    });

    $(".sticker").draggable();

    $("#stickerKalmanFilter").click(function () {
        $("#dialogKalmanfilter").dialog("open");

    });
    $("#stickerCyptography").click(function () {
        $(".sticker").animate({
            opacity: '0.5'
        });
    });
    $("#stickerUniversalApp").click(function () {
        $(".sticker").animate({
            height: 110
        });
    });
    $("#stickerComSci").click(function () {
        $(".sticker").animate({
            color: "red"
        });
    });

    $("#stickerPCBDesign").click(function () {
        $(".sticker").animate({
            opacity: '1'
        });
    });

    $("#stickerDigitalSystem").click(function () {
        $(".sticker").animate({
            color: "Toggle"
        });
    }); d

    $("#stickerControlEng").click(function () {
        $(".sticker").animate({
            font: 20
        });
    });
    $("#stickerEnergyPower").click(function () {
        $(".sticker").animate({
            color: "Toggle"
        });
    });
    $("#stickerNetworkDesign").click(function () {
        $(".sticker").animate({
            height: 100,
            width: 160
        });
    });
});