const doctors_el = document.querySelector('.doctors')

const DOCTORS = [
    {
        name: `Sportafdeling <br>
        B. Singagerda`,
        nickanme: 'Kamer A',
        image: "https://i.ibb.co/Qnft4XM/doctor-1.png",

    },
    {
        name: `Hartafdeling <br>
        J. Dirksen`,
        nickanme: 'Kamer B',
        image: "https://i.ibb.co/S727WCn/0m7wbl4.png",
        
    },
    {
        name: `Longafdeling <br>
        M. Tuitert`,
        nickanme: 'Kamer C',
        image: "https://i.ibb.co/LhTWm4J/doctor-2.png",
        
    },

]

function createDelay(details, delay) {
    const div = document.createElement('div')
    div.classList.add('delay')
    div.addEventListener('click', () => addDelay(details, delay))
    div.innerText = "+" + delay
    
    return div
}

function createDoctorEl(doctor_details) {
    const doctor = document.createElement('div')
    doctor.classList.add('doctor')

    const delay_time = document.createElement('div')
    delay_time.classList.add('delay-time')

    delay_time.appendChild(createDelay(doctor_details, 5))
    delay_time.appendChild(createDelay(doctor_details, 10))
    delay_time.appendChild(createDelay(doctor_details, 15))

    const inp = document.createElement('input')
    inp.classList.add('delay')
    inp.classList.add('delay-inp')
    inp.setAttribute('readonly', true)
    inp.placeholder = '+ Vul zelf in'

    inp.addEventListener('click', (e) => {
        const user = getFromlocal('user')

        if(user?.role === 'RECEPTIONIST') {
            e.target.removeAttribute('readonly')
        } else {
            alert('You need RECEPTIONIST role')
        }
    })
    
    inp.addEventListener('blur', (e) => {
        e.target.setAttribute('readonly', true)
        addDelay(doctor_details, e.target.value)
    })

    delay_time.appendChild(inp)

    doctor.innerHTML = `
        <h2 class="doctor-name">${doctor_details.name}</h2>

        <div class="doctor-image-wrapper">
            <img src=${doctor_details.image} alt="doctor-image" class="doctor-image">
            <h3>${doctor_details.nickanme}</h3>
        </div>

    `
    
    doctor.appendChild(delay_time)

    return doctor
}

function addDelay(details, delay_time) {    
    const user = getFromlocal('user')

    if(user?.role !== 'RECEPTIONIST') {
        alert('You need RECEPTIONIST role')
    }

    console.log(details, delay_time);
    addToLocal('doctor', {
        doctor_details: details,
        delay: delay_time
    })

}

function addToLocal(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function getFromlocal(key) {
    return JSON.parse(localStorage.getItem(key))
}





DOCTORS.forEach((doctor) => {
    doctors_el.appendChild(createDoctorEl(doctor))
})





