{/* <script src="https://unpkg.com/typed.js@2.0.132/dist/typed.umd.js"></script>

var typed = new Typed(".input", {
    strings: ["Web Developer", "UX Designer", "Photo Gharapher"],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
}); */}

let title = document.querySelector('.input');
let name = "Web Developer|"
let index = 1;

const typeWriter = () => {
    let new_title = name.slice(0,index);
    title.innerText = new_title;

    index > name.length ? index = 1 : index++;
    // index++;

    setTimeout(() => typeWriter(), 200)
}

typeWriter();