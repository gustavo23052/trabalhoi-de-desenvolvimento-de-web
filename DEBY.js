// Simulando um banco de dados com array de objetos
let vagas = [
    { placa: 'AAA-1111', proprietario: 'João', apartamento: '101', bloco: 'A', modelo: 'Carro A', cor: 'Preto', vaga: 1 },
    { placa: 'BBB-2222', proprietario: 'Maria', apartamento: '202', bloco: 'B', modelo: 'Carro B', cor: 'Branco', vaga: 2 },
    // Mais vagas reservadas podem ser adicionadas aqui...
];

const totalVagas = 10;  // Definindo o total de vagas disponíveis

// Função para salvar uma nova vaga (Cadastro de reserva)
document.getElementById('cadastroForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const novaVaga = {
        placa: document.getElementById('placa').value,
        proprietario: document.getElementById('proprietario').value,
        apartamento: document.getElementById('apartamento').value,
        bloco: document.getElementById('bloco').value,
        modelo: document.getElementById('modelo').value,
        cor: document.getElementById('cor').value,
        vaga: parseInt(document.getElementById('vaga').value),
    };

    // Adicionando a nova vaga ao array
    vagas.push(novaVaga);

    alert('Reserva salva com sucesso!');
    window.location.href = 'index.html';  // Redireciona para a página de listagem
});

// Função para listar as vagas reservadas e disponíveis
function listarVagas() {
    const listaVagasReservadas = document.getElementById('listaVagasReservadas');
    const listaVagasDisponiveis = document.getElementById('listaVagasDisponiveis');

    // Limpa as listas
    listaVagasReservadas.innerHTML = '';
    listaVagasDisponiveis.innerHTML = '';

    // Exibe as vagas reservadas
    vagas.forEach(vaga => {
        const li = document.createElement('li');
        li.textContent = `Vaga ${vaga.vaga} - ${vaga.proprietario} (${vaga.placa}) - ${vaga.modelo} - ${vaga.cor}`;
        listaVagasReservadas.appendChild(li);
    });

    // Exibe as vagas disponíveis
    for (let i = 1; i <= totalVagas; i++) {
        if (!vagas.some(v => v.vaga === i)) {
            const li = document.createElement('li');
            li.textContent = `Vaga ${i} disponível`;
            listaVagasDisponiveis.appendChild(li);
        }
    }
}

// Executa a função de listar as vagas quando a página de listagem for carregada
if (document.getElementById('listaVagasReservadas')) {
    listarVagas();
}
