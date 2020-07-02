$(function(){

  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Message__box">
          <div class="Message__list">
            <div class="Message__name">
              ${message.user_name}
            </div>
            <div class="Message__time">
              ${message.created_at}
            </div>
          </div>
          <div class="Message__coment">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="Message__box">
        <div class="Message__list">
          <div class="Message__name">
            ${message.user_name}
          </div>
          <div class="Message__time">
            ${message.created_at}
          </div>
        </div>
        <div class="Message__coment">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.MessageForm__group').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Message').append(html);
      $('form')[0].reset();
      $('.Message').animate({ scrollTop: $('.Message')[0].scrollHeight});
      $('.MessageForm__post').prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
  });
});



