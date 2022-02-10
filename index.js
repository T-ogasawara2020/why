var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var reasons = $('textarea[name="reasons"]').val();
        var late_time = document.getElementById("late_time")
        
        var late = document.getElementById('scales');
        var absent = document.getElementById('horns');
        if(late.checked === true) {
          var choice = late_time.value;
          if(reasons){
            var msg = `${key}\n・到着予定時刻：${choice}\n問い合わせ内容：${reasons}\n`;
          }else{
            var msg = `${key}\n・到着予定時刻：${choice}\n問い合わせ内容：なし`;

          }
        };
        if(absent.checked === true){
            var choice = absent.value;
            if(reasons){
                var msg = `${key}\n${choice}\n問い合わせ内容：${reasons}\n`;
              }else{
                var msg = `${key}\n${choice}\n問い合わせ内容：なし\n`;
    
            }
        };

        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
        //var msg = `${key}\n朝礼/終礼不参加の理由：${reasons}\n返信期限：${date}\n使用ツール：${tool}`;
        // var msg = `${key}\n理由：${reasons}`;
        sendText(msg);

        return false;
    });
});
