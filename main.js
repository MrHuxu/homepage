$(() => {
  for (let block of $('.block')) {
    var $block = $(block);
    var blockTopOffset = $block.css('top');
    var duration = Math.random() * 1000;
    $block.css({
      top: 0
    }).animate({
      opacity: 1,
      top: blockTopOffset
    }, duration);
  }
});