
 $(window).resize(function() {
    if ($(window).width() > 769) {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('home').style.display = 'inline-block';
        document.getElementById('sobre').style.display = 'inline-block';
        document.getElementById('contato').style.display = 'inline-block';

    }
   else {
    document.getElementById('menu').style.display = 'block';
    document.getElementById('home').style.display = 'none';
    document.getElementById('sobre').style.display = 'none';
    document.getElementById('contato').style.display = 'none';
}
  });