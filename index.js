let switcher = document.getElementsByClassName('switcher_button')

for (var i = 0; i < switcher.length; i++) {
    switcher[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("switcher_active");
        current[0].className = current[0].className.replace(" switcher_active", "");
        this.classList.add('switcher_active')
    });
}