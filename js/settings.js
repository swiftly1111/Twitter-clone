

$(function(){
    /**
     * 変更状態を切り替える
     */
    $(".changeBtn").on("click", function(e){
        var settingItems = $(this).closest(".section").find("ul");
        console.log(settingItems);
        settingItems.toggleClass("change");
        syncValues();
    });

    /**
     * 登録ボタン
     */
    $("#registerBtn").on("click", function(e){
        syncValues();
        window.history.back();
    });

    /**
     * キャンセルボタン
     */
    $("#cancelBtn").on("click", function(e){
        syncValues();
        window.history.back();
    });
})

/**
 * 入力内容を同期させる
 */
function syncValues(){
    $("input").each((index, input) =>{
        var textVal = $(input).closest("li").find(".itemValue");
        textVal.text(input.value);
    })
}

