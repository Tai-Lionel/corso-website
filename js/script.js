document.addEventListener("scroll", (e) => {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navbar.classList.add("bg-dark");
    } else {
        navbar.classList.remove("bg-dark");
    }
})

document.querySelector("button[data-bs-target='#navbarSupportedContent']").addEventListener("click", (e) => {
    const navbar = document.querySelector("nav");
    if (navbar.classList.contains("bg-dark"))
        navbar.classList.remove("bg-dark");
    else
        navbar.classList.add("bg-dark");
})