function sendUsers() {
    var nomeCompleto = document.getElementById('#nomeCompleto');
    var cpf = document.getElementById('#cpf');
    var dataNascimento = document.getElementById('#dataNascimento');
    var email = document.getElementById('#email');
    var telefone = document.getElementById('#telefone');

    userObject = {
        "nomeCompleto": "",
        "cpf": "",
        "dataNascimento": "",
        "email": "",
        "telefone": "",
    }
    userObject.nomeCompleto = nomeCompleto;
    userObject.cpf = cpf;
    userObject.dataNascimento = dataNascimento;
    userObject.email = email;
    userObject.telefone = telefone;

     var getLocalStorage = () => JSON.parse(localStorage.getItem('db_user')) ?? []
     var setLocalStorage = (userObject) => localStorage.setItem('db_user', JSON.stringify(userObject))
    
    return console.log(getLocalStorage, setLocalStorage )
}
