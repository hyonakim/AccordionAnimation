
$('.divs').on('click', 'h1', function (event) {
  var newPara = $(this);
  newPara.siblings().addClass('para').removeClass('closePara');
  newPara.parent().siblings().find(".para").removeClass('para').addClass('closePara');
})
  

