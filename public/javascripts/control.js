$(document).ready(function() {
    $('h1').click(function() {
        $(this).css('color', 'red');
    });
});

//受信テスト
$("button#update").click(function() {
    // 多重送信を防ぐため通信完了までボタンをdisableにする
    var button = $(this);
    button.attr("disabled", true);

    $.get('/getComment',{url:location.href}).done(function(data) {
        /*optional stuff to do after success */

        button.attr("disabled", false);
        alert(data[0].content);
    });
    
    // 通信実行
    // $.ajax({
    //     type:"get",                // method = "POST"
    //     url:"/getComment",        // POST送信先のURL
    //     contentType: 'application/json', // リクエストの Content-Type
    //     dataType: "json",           // レスポンスをJSONとしてパースする
    //     success: function(json_data) {   // 200 OK時
    //         // JSON Arrayの先頭が成功フラグ、失敗の場合2番目がエラーメッセージ
    //         if (!json_data[0]) {    // サーバが失敗を返した場合
    //             alert("Transaction error. " + json_data[1]);
    //             return;
    //         }
    //         // 成功時処理
    //         alert(json_data[0].user);
    //     },
    //     error: function() {         // HTTPエラー時
    //         alert("Server Error. Pleasy try again later.");
    //     },
    //     complete: function() {      // 成功・失敗に関わらず通信が終了した際の処理
    //         button.attr("disabled", false);  // ボタンを再び enableにする
    //     }
    // });
});



