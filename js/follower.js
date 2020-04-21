
$(function(){
    /**
     * タブ切り替え
     */
    $('.tab').on("click", function() {
        var selectedTab = $(this)[0].title;
        var allTab = $(this).parent().find(".tab");
        allTab.each(function(index, tab) {
            $("#" + tab.title).hide();
        });
        $("#" + selectedTab).show();
        $(".tab").removeClass("active");
        $(this).addClass("active");
    });
    
    $(".tab").eq(0).click();
});


