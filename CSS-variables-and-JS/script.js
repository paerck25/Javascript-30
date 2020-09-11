const inputs = document.querySelectorAll(".controls input");

const handleStyle = (e) => {
    const px = e.target.dataset.sizing || ""
    document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + px)
}

inputs.forEach((input) => {
    input.addEventListener('change', handleStyle);
    input.addEventListener('mousemove',handleStyle);
})