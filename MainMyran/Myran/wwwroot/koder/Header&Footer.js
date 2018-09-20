function header() {
    return `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Myrornas planet</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="Startsida.html">Startsida <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="OmOss.html">Om Oss</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="myrKul.html">Spel</a>
            </li>
        </ul>
        <span class="navbar-text">
            funfunfun
        </span>
    </div>
</nav>
    `
}
function footer() {
    return `<footer class="container-fluid text-center">
  <p>Footer Text</p>
</footer>`
}
document.getElementById("header").innerHTML = header();
document.getElementById("footer").innerHTML = footer();
