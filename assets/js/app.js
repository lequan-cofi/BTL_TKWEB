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


