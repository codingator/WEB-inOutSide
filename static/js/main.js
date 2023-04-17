$(window).resize(function () {
  var windowWidth = $(window).width();
  if (windowWidth < 500) {
    event.preventDefault();
    $("#products .item").addClass("list-group-item");
  } else {
    event.preventDefault();
    $("#products .item").removeClass("list-group-item");
    $("#products .item").addClass("grid-group-item");
  }
});