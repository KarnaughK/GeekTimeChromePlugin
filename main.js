document.addEventListener('DOMContentLoaded', function() {
    // 
    setTimeout(function() {
        $('#app').css({ 'padding-top': '70px' })
        var audio = $('audio').first();
        audio.attr('controls', 'controls');
        audio.css({
            'width': '100%'
        });
        // 原来的那个播放按钮 盖住默认播放按钮的播放键
        audio.prev().css({
            'margin-right': '-40px',
            'z-index': '9999',
            'cursor': 'pointer'
        });
        // 把整个播放按钮浮动到顶部
        audio.parent().css({
            'position': 'fixed',
            'top': '10px',
            'z-index': '9999',
            'max-width': '44rem'
        })

        // console.log('上一个元素:', audio.prev())
        console.log('我被执行了！');
    }, 2000);
});
console.log('11111111')