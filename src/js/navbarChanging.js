let NavbarChanging = ( function() {
    console.log("c");
    let navbar_list = document.getElementById('navbar--list');
    let navbar_toggle = document.getElementById('navbar--toggle');
    navbar_toggle.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            navbar_list.style.display = "none";
            this.classList.remove('active');
        } else {
            navbar_list.style.display = "flex";
            this.classList.add('active');
        }
    })
})();
export {NavbarChanging};