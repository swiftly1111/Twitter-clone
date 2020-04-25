/**
 * 画面遷移用の関数
 * @param 遷移先 url 
 */
function move(url){
    window.location.href = url;
}

$(function(){
    $("#menuProfile").on("click", function(e){
        move("./home.html");
    });

    $("#menuTopic").on("click", function(e){
        
    });

    $("#menuBookmark").on("click", function(e){

    });

    $("#settingsLink").on("click", function(e){
        move("./settings.html");
    });

    $("#helpLink").on("click", function(e){

    });

    $(".userIcon").on("click", function(e){
        $("#side-bar").animate({width:'toggle'}, 300);
    });
});

