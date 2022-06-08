function sendUsers(evt) {
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

}
