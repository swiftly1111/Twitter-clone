




/**
 * タブ切り替えを有効化
 * @param {string} selecter タブのセレクタ 
 * @param {number} firstTab 最初のタブ番号 
 */
function activateTabs(selecter, firstTab){
    var $tabs = $(selecter).find('.tab');
    $tabs.each((index, tab) => {
        if(!(tab.title)){
            console.log(tab.innerText + "にエリアが設定されていません。");
        }
    });
    $tabs.on("click", function() {
        var selectedTab = $(this)[0].title;
        var allTab = $(this).parent().find(".tab");
        allTab.each(function(index, tab) {
            $("#" + tab.title).hide();
        });
        $("#" + selectedTab).show();
        allTab.removeClass("active");
        $(this).addClass("active");
    });

    $tabs.eq(firstTab).click();
}



