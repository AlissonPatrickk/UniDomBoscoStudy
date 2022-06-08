const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem('db_client', JSON.stringify(dbClient))

const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}
const readClient = () => getLocalStorage()

const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push(client)
    setLocalStorage(dbClient)
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

const clearFields = () => {
    const fields = document.querySelectorAll('.form-control')
    fields.forEach(field => field.value = '')
    document.getElementById('nomeCompleto').dataset.index = 'new'
}

const saveClient = () => {

    if (isValidFields()) {
        const client = {
            nomeCompleto: document.getElementById('nomeCompleto').value,
            cpf: document.getElementById('cpf').value,
            dataNascimento: document.getElementById('dataNascimento').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value
        }
        const index = document.getElementById('nomeCompleto').dataset.index
        if (index == 'new') {
            createClient(client)
            updateTable()
        } else {
            updateClient(index, client)
            updateTable()
        }
    }
}
const createRow = (client, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.nomeCompleto}</td>
        <td>${client.cpf}</td>
        <td>${client.dataNascimento}</td>
        <td>${client.email}</td>
        <td>${client.telefone}</td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbClient = readClient()
    clearTable()
    dbClient.forEach(createRow)
}

const fillFields = (client) => {
    document.getElementById('nomeCompleto').value = client.nomeCompleto
    document.getElementById('cpf').value = client.cpf
    document.getElementById('dataNascimento').value = client.dataNascimento
    document.getElementById('email').value = client.email
    document.getElementById('telefone').value = client.telefone
    document.getElementById('nomeCompleto').dataset.index = client.index
}

updateTable()


document.getElementById('salvar')
    .addEventListener('click', saveClient, false)


