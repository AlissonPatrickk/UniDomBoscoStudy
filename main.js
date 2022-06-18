const sendUsers = (evt) => {
    evt.preventDefault()
    let nomeCompleto = document.getElementById('nomeCompleto').value;
    let cpf = document.getElementById('cpf').value;
    let dataNascimento = document.getElementById('dataNascimento').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;

    let userObject = {
        nomeCompleto: nomeCompleto,
        cpf: cpf,
        dataNascimento: dataNascimento,
        email: email,
        telefone: telefone
    }

    let saveArray = JSON.parse(localStorage.getItem('db_users'))

    if (!saveArray) {
        console.log(userObject)
        localStorage.setItem('db_users', JSON.stringify([userObject]))
    } else {
        saveArray.push(userObject);
        localStorage.setItem('db_users', JSON.stringify(saveArray))
    }

    document.getElementById('formUsers').reset();
    alert('Usuario Cadastrado com sucesso!')
}

const createTable = () =>{
    const tableUsers = localStorage.getItem('db_users')
    const users = JSON.parse(tableUsers)
    
    const arrayValue = (users) => {
        let html = "";
        users.forEach(user => {
        html += `
        <tr>
            <td>${user.nomeCompleto}</td>
            <td>${user.cpf}</td>
            <td>${user.dataNascimento}</td>
            <td>${user.email}</td>
            <td>${user.telefone}</td>
        </tr>
        `;
    });
    return html
    }

    document.getElementById('tableUser').innerHTML = `
        <div>
            <table class="table table-hover">
                <thead class="header-table">
                    <th scope="col">Nome Completo</th>
                    <th scope="col">CPF</th>
                    <th scope="col">Data de Nascimento</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telefone</th>
                </thead>
                <tbody>
                    ${arrayValue(users)}
                </tbody>
            </table>
        </div>
    `;

}

createTable()
