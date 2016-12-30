// Выполняется как только будет загружен весь HTML
$(document).ready(function(){
    console.log('Document is ready in ' + getTime());

    $('input').on('focus click keyup keypres keydown', function(){
        console.log('Input is focused');
    });
});

// Выполнится как только будут загружены все картинки, стили и скрипты
$(window).load(function(){
    console.log('Window is load in ' + getTime());
})

/**
  * Функция вывода времени в формате Ч:М:С.мс (00:00:00.000)
  *
  */
function getTime() {
    var date = new Date();
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + '.' + date.getMilliseconds();
}
