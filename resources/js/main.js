$(function () {
  $(document).scroll(function () {
    $('#topbar').toggleClass('scrolled', $(this).scrollTop() > $('#topbar').height());
  });
});