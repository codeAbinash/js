function setCookie() {
    document.cookie = "user name = Abinash Karmakar"
}

function getCookie() {
    if (document.cookie.length != 0)
        console.log(document.cookie)
    else
        console.log('Cookie not available')
}


// Or Like this

function getCookie() {
    if (document.cookie.length != 0) {
        const cookies = document.cookie.split('=')
        console.log(`name : ${cookies[0]} value : ${cookies[1]}`)
    } else
        console.log('Cookie not available')
}