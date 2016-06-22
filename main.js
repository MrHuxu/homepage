$(() => {
  $('.detail li').addClass('animated fadeInLeft');
  $('.detail .label').addClass('animated fadeInRight');

  var bindHoverEvent = (label) => {
    var $label = $(label);
    var labelLeftOffset = $label.css('left');
    var labelWidth = $label.css('width');
    $label.hover(() => {
      $label.animate({
        left: -(parseInt(labelWidth) - 25)
      }, 300);
    }, () => {
      $label.animate({
        left: labelLeftOffset
      }, 300);
    });
  };

  for (let label of $('.left-panel .label')) {
    bindHoverEvent(label);
  }
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