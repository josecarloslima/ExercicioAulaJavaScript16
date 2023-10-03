// Função
function contar(){
    // Variáveis
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    //Verificação de elementos vazios
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Os campos não podem ficar vazios.')
    } else {
        // loading
        res.innerHTML = 'Contando... <br>'
        // pegando os valores nos campos digitados
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        // Tratando erro do passo igual a zero
        if (p <= 1){
            alert(`Valor de Passo inválido. Tornando valor de passo igual a 1.`)
            p = 1
        }
        // 2 tipos de laço
        if (i < f) {
            // Contagem Crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{27A1}`
            }
        } else {
            // Contagem Decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{27A1}`
            }
        }
        // Bandeirada final
        res.innerHTML += `\u{1F3C1}`

    }
    
};