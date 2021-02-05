$(function() {
    // Hover
    $("#services .card").hover(function() {
        var rIcon = this.children[0].children[0];
        var rTitle = this.children[1];

        $(this).addClass("active");
        $(rIcon).addClass("active");
        $(rTitle).addClass("active");
    }, function() {
        var rIcon = this.children[0].children[0];
        var rTitle = this.children[1];

        $(this).removeClass("active");
        $(rIcon).removeClass("active");
        $(rTitle).removeClass("active");
    });

    $("#portfolio .nav-tab ul li").on("click", function() {
        $("#portfolio .nav-tab ul li").removeClass("active");
        $("#" + this.id).addClass("active");
    });
});