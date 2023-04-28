function validar() {
    let nome = document.getElementById('nome').value;
    let senha = document.getElementById('Senha').value;

    if (!nome || senha) {
        alert("Você finalizou seu cadastro. Meus Parabens!");
    } else {
        alert("você preencheu todos os campos parábens");
    }
}