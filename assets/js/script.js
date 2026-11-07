const $navbar = document.querySelector("[data-navbar]");
const $navToggler = document.querySelector("[data-nav-toggler]");

console.log("Navbar:", $navbar);
console.log("Toggler:", $navToggler);


if ($navbar && $navToggler) {
    $navToggler.addEventListener("click", () => {
        $navbar.classList.toggle("active");
    });
}

// HEADER SCROLL STATE

const $header = document.querySelector("[data-header]")
console.log($header)
window.addEventListener("scroll", e => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active")
})


// ADD TO FAVORITE BUTTON TOGGLE

const $toggleBtns = document.querySelectorAll("[data-toggle-btn]")
$toggleBtns.forEach($toggleBtn => {
    $toggleBtn.addEventListener("click", () => {
        $toggleBtn.classList.toggle("active")
    })
})