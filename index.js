$(() => {
  var $body = $('body');
  var bodyWidth = Number($body.css('width').match(/\d+/)[0]);
  var bodyHeight = Number($body.css('height').match(/\d+/)[0]);

  var columnWidth = Number(bodyWidth / 100);
  
  var blocks = [];
  for (var i = 0; i < 100; ++i) {
    blocks.push($('<div class="block" />'));
  }
  $('.container').append(blocks);

  for (let block of blocks) {
    block.animate({
      left: Math.random() * 200,
      bottom: Math.random() * 400
    }, Math.random() * 1000);
  }
});