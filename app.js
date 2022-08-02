let content = document.querySelector('.content')
let input = document.querySelector('.content input')
let removeAll = document.querySelector('.remove')

let tags = ['Reactjs', 'Angular']

function render() {
    content.innerHTML = ''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += `
                                <li>
                                ${tag}
                                <i class="fa-thin fa-x" onclick="removeTag(${i})"></i>
                            </li>`
    }

    content.appendChild(input)
    input.focus()
}

render()

input.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        tags.push(input.value.trim())
        input.value = ''
        render()
    }
})


function removeTag(index) {
    tags.splice(index, 1)
    render()
}

removeAll.addEventListener('click', function () {
    tags = []
    render()
})