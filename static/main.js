icon = document.querySelector('.logo .icon')
container = document.querySelector('.container')

function setLocalStorage(mode){
    localStorage.setItem('mode' , mode)
}




icon.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("fa-moon")) {
        e.currentTarget.classList.replace("fa-moon", "fa-sun");
        container.classList.add("dark");
        setLocalStorage('dark')
    } else {
        e.currentTarget.classList.replace("fa-sun", "fa-moon");
        container.classList.remove("dark");
        setLocalStorage('light')
    }
});

document.addEventListener('DOMContentLoaded' , () => {
    if (localStorage.getItem('mode') === 'light') {
        icon.classList.replace("fa-sun", "fa-moon");
        container.classList.remove("dark");
    }

    else if (localStorage.getItem('mode') === 'dark') {
        icon.classList.replace("fa-moon", "fa-sun");
        container.classList.add("dark");
    }

    else
    {
        setLocalStorage('light')
    }
})