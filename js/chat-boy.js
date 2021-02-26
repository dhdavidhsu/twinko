var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});




var $messages = $('.messages-content'),
  d, h, m,
  i = 0;

$(window).load(function () {
  $messages.mCustomScrollbar();
  setTimeout(function () {
    fakeMessage();
  }, 100);
});


function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate() {
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
    $('<div class="checkmark-sent-delivered">&check;</div>').appendTo($('.message:last'));
    $('<div class="checkmark-read">&check;</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function () {
    fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function () {
  insertMessage();
});

$(window).on('keydown', function (e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

var Fake = [
  'Hey, 女孩! 我叫HANSON，你呢?',
  '很高興認識你',
  '女孩你今天好嗎?',
  '我今天工作有點忙...',
  '一言難盡...所以你是做哪一行的啊?',
  '聽起來好厲害🤘',
  '你常上來嗎?',
  '對了，不知道為什麼，覺得你人還不錯',
  '是喔。為什麼你這樣想呢?',
  '不太懂欸...',
  'Anyways，朋友突然找我出去。',
  '很開心跟你聊天',
  '下次有機會碰到再聊囉~',
  'See you!',
  ':)'
]

function fakeMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="img/chat/avatar-boy.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  setTimeout(function () {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="img/chat/avatar-boy.png" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + (Math.random() * 20) * 100);

}

$('.button').click(function () {
  $('.chat-menu .items span').toggleClass('active');
  $('.chat-menu .button').toggleClass('active');
});


// Closing and showing the chat window
function show(target) {
  document.getElementById(target).style.display = 'block';
}

function hide(target) {
  document.getElementById(target).style.display = 'none';
}


// Close chat
function goBack() {
  window.history.back()
}

//Confirm Closing
function confirmQuit() {
  if (confirm("確定要離開對話? \n按OK離開。\n按CANCEL取消。")) {
    redirect();
  } else {
  }
}

//
function redirect() {
  location.replace("chat.html")
}