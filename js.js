const sub_array = ["Кыргыз тил","Кыргыз Адабият","Дене тарбия","табият таануу","музыка"]

console.log( sub_array)

const count_subjects = document.querySelector(".aa")
const count_sub = document.querySelector(".sub")
const sort_btn = document.querySelector(".sort_btn")

count_subjects.textContent = `Мои любимые предметов : ${sub_array.length} `

function render() { 
    const sub_html = sub_array.map((s) => {
        return `
         <li class="sub">${s}<li>
        `
    } )

    count_sub.innerHTML = sub_html.join("")
}

render()

sort_btn.addEventListener("click" , function(){
    sub_array.sort((a, b) => a.localeCompare(b))
    render()
})