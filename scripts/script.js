
const doctor_parent = document.querySelector('.doctor')

function getFromlocal(key) {
    return JSON.parse(localStorage.getItem(key))
}

const data = getFromlocal('doctor')

console.log(data);
if(data) {
    addContents()
}

function addContents() {

    // doctor update
    doctor_parent.innerHTML = `
                        <h2 class="doctor-name">${data.doctor_details.name}</h2>
    
                            <div class="doctor-image-wrapper">
                                <img src=${data.doctor_details.image} alt="doctor-image" class="doctor-image">
                                <h3>${data.doctor_details.nickanme}</h3>
                            </div>
    
                        <div class="delay-time">
                            <h2>+${data.delay || 10} min.</h2>
                            <p>uitloop</p>
                        </div>
    `

    // table update
    document.getElementById('delay-time-table').innerText = `${data.delay || 10} min`
}
