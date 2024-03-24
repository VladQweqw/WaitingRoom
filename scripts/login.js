// here add your accounts as others
const ACCOUNTS = [
    {
        name: 'admin',
        password: '123',
        role: 'RECEPTIONIST',
        gender: 'male'

    },
    {
        name: '123456',
        password: '123',
        role: 'USER',
        gender: 'male'
    },
    
]


function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}


const login_btn_el = document.getElementById('login-btn')
const form_el = document.getElementById('login-form')

function validate_login(user_details) {
    const account = ACCOUNTS.find((user) => user.name === user_details.name)
    
    if(account != undefined) {

        if(account.password === user_details.password) {
            saveToLocal('user', account)
            if(account.role === 'USER') {
                return window.location.pathname = '/index.html'
            }else {
                return window.location.pathname = '/pages/calendar.html'
            }
        }else {
            return alert('Name / Password incorrect')
        }
        
    }
}


login_btn_el.addEventListener('click', (e) => {
    const name_el = form_el['name']
    const password_el = form_el['password']

    let gender = 'MALE'
    if(document.querySelectorAll('.gender')[0].checked) {
        gender = 'FEMALE'
    }

    if(name_el.value.length < 3) {
        return alert('Name too short')
    }else {
        validate_login({
            name: name_el.value,
            password: password_el.value,
            gender: gender,
        })
    }


})
