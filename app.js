const input = document.querySelector('#tasks-input');
const button_add = document.querySelector('#tasks-button');
const tr = document.querySelector('#datos');
const button_delete = document.querySelector('#delete')
const body = document.body;
let tasks = [];

function createTd() {
    const input_value = input.value;
    tr.innerHTML += 
    `
        <tr>
         <td>${input_value}</td>
        <td><button type="button" id="completed">Completed</button>
        <button type="button" id="delete">Delete</button></td>
        </tr>
        `
        tasks.push(input_value)
        console.log(tasks)
}

button_add.addEventListener('click', () => {
    createTd();
    input.value = ``;
})

body.addEventListener('click', (e) => {
    if (e.target.id == 'delete') {
        const fila_index = e.target.closest('tr');
        fila_index.remove();
        const array_index = e.target.parentNode.parentNode;
        tasks.splice(array_index, 1)
    } else if (e.target.id == 'completed') {
        const fila_index = e.target.closest('tr');
        fila_index.classList.add('completed');
    }
})