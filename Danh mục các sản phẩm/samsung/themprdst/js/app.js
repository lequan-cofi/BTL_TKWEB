var wrapper = document.querySelector("#about")

console.log(wrapper)

wrapper.style.height = "200px"

var button = document.querySelector("#more-button")

var overlay = document.querySelector("#overlay-2")

var is_open = false


button.addEventListener('click', function(){
    console.log('hihihi')
    if(is_open)
    {
        is_open = false
        wrapper.style.height = "200px"
        overlay.style.display = 'block'
    } else {
        is_open = true
        wrapper.style.height = "300px"
        overlay.style.display = 'none'
    }
})

const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);
