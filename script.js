let form = document.forms.log_in
let form2 = document.forms.to_come_in

let input =  form.querySelectorAll("*[data-required]")
let input2 =  form.querySelectorAll('input')
/////


console.log(input );
// let pattern = {
//     email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
//     name:  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
//     surname:  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
//     password: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/ ,
// }

// function validate(inp, regex) {
//     if(regex.test(inp.value)) {
//         inp.classList.add('valid')
//         inp.classList.remove('invalid')
//     }else{
//         inp.classList.add('invalid')
//         inp.classList.remove('valid')
//     }
// }

// input.forEach(input => {
//     input.onkeyup = () => {
//         validate(input, pattern[input.name])
//     }
// });

form.onsubmit = (e) => {
    e.preventDefault()

    let arr = []

    input.forEach(inp => {
        if(inp.classList.contains('invalid') || inp.value.length == 0) {
            arr.push('invalid')
            inp.classList.add('invalid')
            setTimeout(() => {
                inp.classList.remove('invalid')
            }, 3000);
        }
    })

    if(arr.length == 0) {
        setTimeout(() => {
            submit()
            let us = JSON.parse(localStorage.getItem('user'))
            name(us)
        }, 2000);
    } 

}


function submit() {

    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    });

    input.forEach(inp => {
        inp.value = ""
        inp.classList.remove('valid')
    })
    localStorage.user = JSON.stringify(user)

}




function name(obj) {
    let form_div = document.querySelector('.form')
    let main = document.querySelector('.main')
    let name_polz = document.querySelector('.name_polz')
    form_div.style.width = '0px'
    main.style.width = '100%'
    main.style.display = 'block'
    // name_polz.innerHTML = obj.name

}

let ad = JSON.parse(localStorage.getItem('user'))

if(ad) {
    {
        let form_div = document.querySelector('.form')
        let main = document.querySelector('.main')
        form_div.style.width = '0px'
        main.style.width = '100%'
        main.style.display = 'block'
        // main.style.overflow = 'hidden'
        // name_polz.innerHTML = ad.name

}
}



let div_come_in = document.querySelector(`.to_come_in`)
let div_log_in = document.querySelector(`.log_in`)
let b_register = document.querySelector(`.log-in`)
let b_to_come_in = document.querySelector(`.to-come-in`)

b_register.onclick = () => {
    div_come_in.classList.add(`unactive`)
    div_log_in.classList.remove(`unactive`)
}

b_to_come_in.onclick = () => {
    div_come_in.classList.remove(`unactive`)
    div_log_in.classList.add(`unactive`)
}
    