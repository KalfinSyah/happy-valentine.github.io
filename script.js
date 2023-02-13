const pass = document.querySelector('.pass');
const pass_input = pass.querySelector('input');
const enter = pass.querySelector('button');

const container = document.querySelector('.container');
const big_pic_img = document.querySelector('.big_pic img');
const small_pic_img = Array.from(document.querySelectorAll('.small_pic img'));

enter.addEventListener('click', function(){
    if(pass_input.value == "rifkacantik") {
        pass.style.display = 'none';
        container.style.display = 'grid';
    } else {
        pass.firstElementChild.style.display = 'unset';
        pass.firstElementChild.nextElementSibling.value = '';
    }
});

small_pic_img.forEach(function(buffer){
    buffer.addEventListener('click', function(){
        for(let i = 0; i < small_pic_img.indexOf(buffer); i++){
            if(small_pic_img[i].getAttribute('class') == 'active') {
                small_pic_img[i].classList.toggle('active');
                break;
            } 
        }
        for(let i = small_pic_img.indexOf(buffer); i < small_pic_img.length; i++){
            if(small_pic_img[i].getAttribute('class') == 'active') {
                small_pic_img[i].classList.toggle('active');
                break;
            } 
        }

        buffer.classList.toggle('active');
        big_pic_img.setAttribute('src', buffer.getAttribute('src'));
    })
})

