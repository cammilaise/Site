// DADOS DO CARDÁPIO - CORRIGIDO
const cardapio = [
    // NOVIDADE 2024
    { id: 1, nome: "Frango com Cheddar", categoria: "novidade2024", descricao: "Frango grelhado, cheddar cremoso, alface, tomate e maionese caseira", preco: 46.90, imagem: "FRANGO COM CHEDDAR.jpg" },
    { id: 2, nome: "Frango com Catupiry", categoria: "novidade2024", descricao: "Frango grelhado, catupiry cremoso, alface e tomate", preco: 46.90, imagem: "FRANGO COM CATUPIRY.png" },
    
    // BARATÍSSIMOS
    { id: 3, nome: "Magnifico Queijo", categoria: "baratissimos", descricao: "Hambúrguer artesanal, queijo, alface, tomate e maionese", preco: 32.90, imagem: "magnifico queijo.jpeg" },
    { id: 4, nome: "Magnífico Cheddar", categoria: "baratissimos", descricao: "Hambúrguer artesanal, cheddar, alface, tomate e maionese", preco: 34.90, imagem: "magnifico cheddar.jpeg" },
    
    // ARTESANAIS
    { id: 5, nome: "Cheddar Sticker", categoria: "artesanais", descricao: "Hambúrguer 140g, cheddar, bacon, cebola caramelizada", preco: 42.90, imagem: "cheddar sticker.png" },
    { id: 6, nome: "4 Queijos", categoria: "artesanais", descricao: "Hambúrguer 140g, mussarela, prato, parmesão, gorgonzola", preco: 42.90, imagem: "4 queijos.png" },
    { id: 7, nome: "Bacon Cheddar", categoria: "artesanais", descricao: "Hambúrguer 140g, cheddar, bacon, alface, tomate", preco: 37.90, imagem: "bacon cheddar.png" },
    { id: 8, nome: "Costelinha Barbecue", categoria: "artesanais", descricao: "Hambúrguer 140g, molho barbecue, costelinha, cebola caramelizada", preco: 42.90, imagem: "costelinha barbecue.png" },
    { id: 9, nome: "Duplo Cheddar Bacon", categoria: "artesanais", descricao: "2 hambúrgueres 140g, duplo cheddar, bacon, alface", preco: 44.90, imagem: "(barato do dia) cheddar duplo rustico + refri 200 ml.png" },
    { id: 10, nome: "Kids", categoria: "artesanais", descricao: "Hambúrguer 100g, queijo, alface, tomate - perfeito para crianças", preco: 32.90, imagem: "kids.png" },
    { id: 11, nome: "Dignissimo Cheddar", categoria: "artesanais", descricao: "Hambúrguer 160g, cheddar premium, bacon, onion rings", preco: 46.90, imagem: "dignissimo cheddar.png" },
    { id: 12, nome: "Esplêndido Cheese", categoria: "artesanais", descricao: "Triplo hambúrguer 120g, triplo cream cheese, bacon", preco: 46.90, imagem: "esplendido chesse.png" },
    { id: 13, nome: "Onion Rings Cheese", categoria: "artesanais", descricao: "Hambúrguer 140g, queijo, onion rings, molho especial", preco: 44.90, imagem: "onion ring chesse.png" },
    { id: 14, nome: "Classico", categoria: "artesanais", descricao: "Hambúrguer 140g, queijo, alface, tomate, maionese", preco: 38.90, imagem: "classico.png" },
    { id: 15, nome: "Cheddar duplo Rústico", categoria: "artesanais", descricao: "2 hambúrgueres 140g, duplo cheddar, molho rústico", preco: 49.90, imagem: "cheddar duplo rustico.png" },
    { id: 16, nome: "Romeu e Julieta", categoria: "artesanais", descricao: "Hambúrguer 140g, queijo coalho, goiabada, uma combinação doce e salgada", preco: 42.90, imagem: "romeu e julieta.png" },
    { id: 17, nome: "Tradicional bacon e ovo", categoria: "artesanais", descricao: "Hambúrguer 140g, bacon, ovo, queijo, alface, tomate", preco: 37.90, imagem: "tradicional bacon e ovo.png" },
    
    // COMBOS
    { id: 18, nome: "Bacon Cheddar + Refri 200ml", categoria: "combos", descricao: "1 Bacon Cheddar + Fritas + Coca-Cola 200ml", preco: 39.90, imagem: "bacon chedarr + refri 200 ml.png" },
    { id: 19, nome: "Hexa Combo + Refrigerante 2l", categoria: "combos", descricao: "6 hambúrgueres artesanais + 2 porções de fritas + Refri 2L", preco: 155.90, imagem: "hexa combo.png" },
    { id: 20, nome: "Todo meu + Refri 200ml", categoria: "combos", descricao: "1 hambúrguer artesanal + fritas + refrigerante 200ml", preco: 54.90, imagem: "todo meu.png" },
    { id: 21, nome: "Pesadão + Refrigerante 2l", categoria: "combos", descricao: "3 X-Egg Burgers + fritas + refrigerante 2L", preco: 119.90, imagem: "pesadao mais refri 2 l.png" },
    { id: 22, nome: "Combo Família + Kuat 2l", categoria: "combos", descricao: "5 hambúrgueres suculentos + fritas + Kuat 2L", preco: 136.90, imagem: "como familia + refri 2l.png" },
    { id: 23, nome: "Pesado + Refrigerante 2l", categoria: "combos", descricao: "2 X-Egg Burguers + fritas + Kuat 2L", preco: 97.90, imagem: "pesado mais refri 2 l.png" },
    { id: 24, nome: "Meu combo artesanal + Refrigerante 200ml", categoria: "combos", descricao: "1 hambúrguer artesanal + fritas + refrigerante 200ml", preco: 52.90, imagem: "meu combo artesanal + refri 2 l.png" },
    { id: 25, nome: "Quarteto + Refrigerante 2l", categoria: "combos", descricao: "4 hambúrgueres suculentos + fritas + refrigerante 2L", preco: 127.90, imagem: "quarteto combo.jpg" },
    { id: 26, nome: "Combo Família + Refrigerante 2l", categoria: "combos", descricao: "5 hambúrgueres suculentos + fritas + refrigerante 2L", preco: 146.90, imagem: "como familia + refri 2l.png" },
    { id: 27, nome: "Combo Maravilha + Refrigerante 1l", categoria: "combos", descricao: "2 hambúrgueres artesanais + fritas com cheddar + cubos de frango + anéis de cebola + refrigerante 1L", preco: 99.90, imagem: "combo maravilha + refrigerante 1l.png" },
    { id: 28, nome: "Mega Combo Artesanal + Refrigerante 2l", categoria: "combos", descricao: "3 hambúrgueres artesanais 120g + fritas + refrigerante 2L", preco: 149.90, imagem: "mega combo.jpeg" },
    
    // PORÇÕES
    { id: 29, nome: "Fritas", categoria: "porcoes", descricao: "Porção de batatas fritas crocantes e douradas", preco: 33.90, imagem: "FRITAS INDIVIDUAL.png" },
    { id: 30, nome: "Fritas Queijo e Bacon", categoria: "porcoes", descricao: "Fritas cobertas com queijo derretido e bacon crocante", preco: 39.90, imagem: "fritas e cheddar certo.jpeg" },
    { id: 31, nome: "Especial caseiro", categoria: "porcoes", descricao: "Contra filé acebolado + lombo acebolado - serve até 5 pessoas", preco: 129.90, imagem: "especial caseiro.png" },
    { id: 32, nome: "Cebolas empanadas cheddar e bacon", categoria: "porcoes", descricao: "Anéis de cebola empanados com cheddar e bacon", preco: 40.90, imagem: "onion ring cheddar e bacon.jpeg" },
    { id: 33, nome: "Lombo com fritas", categoria: "porcoes", descricao: "Lombo suculento acebolado acompanhado de fritas", preco: 75.90, imagem: "fritas e lombo.jpeg" },
    { id: 34, nome: "Contrá filé com fritas", categoria: "porcoes", descricao: "Contra filé acebolado com fritas crocantes", preco: 87.90, imagem: "CONTRA COM FRITAS.png" },
    { id: 35, nome: "Fritas (caixa pizza 20 cm)", categoria: "porcoes", descricao: "Fritas crocantes servidas em caixa de pizza 20cm", preco: 30.90, imagem: "Porque as batatas fritas murcham.jpeg" },
    
    // PORÇÕES INDIVIDUAIS
    { id: 36, nome: "Cubos de frango empanado + Fritas queijo e bacon", categoria: "porcoes", descricao: "Cubos de frango empanados com fritas, queijo e bacon", preco: 33.90, imagem: "CUBO DE FRANGO + FRITA CHEDDAR E BACON - Copia.png" },
    { id: 37, nome: "Cubos de frango empanado", categoria: "porcoes", descricao: "Cubos de frango empanados crocantes", preco: 29.90, imagem: "CUBO DE FRANGO EMPANADO - Copia.png" },
    { id: 38, nome: "Cubos de frango empanados + fritas, cheddar e bacon", categoria: "porcoes", descricao: "Cubos de frango empanados com fritas, cheddar e bacon", preco: 29.90, imagem: "CUBO DE FRANGO + FRITA CHEDDAR E BACON.png" },
    { id: 39, nome: "Fritas individual", categoria: "porcoes", descricao: "Porção individual de batatas fritas", preco: 11.90, imagem: "FRITAS INDIVIDUAL.png" },
    { id: 40, nome: "Onion's rings", categoria: "porcoes", descricao: "Anéis de cebola empanados crocantes", preco: 18.90, imagem: "ONION RING TRADICIONAL.png" },
    
    // BEBIDAS
    { id: 41, nome: "Coca Cola 200ml", categoria: "bebidas", descricao: "Refrigerante Coca-Cola 200ml", preco: 4.00, imagem: "coca-cola200ml.jpeg" },
    { id: 42, nome: "Coca-Cola 600ml", categoria: "bebidas", descricao: "Refrigerante Coca-Cola 600ml", preco: 9.00, imagem: "GASEOSA COCA COLA ORIGINAL  600ML.jpeg" },
    { id: 43, nome: "Suco Tial Néctar Manga 330ml", categoria: "bebidas", descricao: "Suco de manga Tial 330ml", preco: 7.00, imagem: "suco tial manga.jpeg" },
    { id: 44, nome: "Suco Néctar de Uva Tial 330ml", categoria: "bebidas", descricao: "Suco de uva Tial 330ml", preco: 7.00, imagem: "suco tial uva.jpeg" },
    { id: 45, nome: "Coca Cola Zero 600ml", categoria: "bebidas", descricao: "Refrigerante Coca-Cola Zero 600ml", preco: 9.00, imagem: "coca cola zero 600ml.jpeg" },
    { id: 46, nome: "Coca-Cola Original 350ml", categoria: "bebidas", descricao: "Coca-Cola em lata 350ml", preco: 8.00, imagem: "coca lata.jpeg" },
    { id: 47, nome: "Sprite Original 350ml", categoria: "bebidas", descricao: "Sprite em lata 350ml", preco: 8.00, imagem: "refrigerante sprite original.jpeg" },
    
    // SACHÊS
    { id: 48, nome: "Catchup", categoria: "saches", descricao: "Sachê de catchup 20g", preco: 0.90, imagem: "KETCHUP.png" },
    { id: 49, nome: "Maionese Verde", categoria: "saches", descricao: "Maionese verde artesanal 20g", preco: 4.00, imagem: "MAIONESE VERDE.png" },
    { id: 50, nome: "Maionese", categoria: "saches", descricao: "Sachê de maionese tradicional", preco: 0.90, imagem: "maionese.jpeg" },
    
    // DIA DOS NAMORADOS
    { id: 51, nome: "2 Bacon Cheddar + 2 batatas + Coca Cola 600ml", categoria: "dianamorados", descricao: "Combo especial para casais - 2 hambúrgueres + 2 porções + refrigerante", preco: 82.90, imagem: "bacon chedarr + refri 200 ml.png" }
];

// VARIÁVEIS GLOBAIS
let carrinho = [];
let produtoAtual = null;
let quantidadeAtual = 1;

// INICIALIZAÇÃO QUANDO A PÁGINA CARREGA
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Página carregada! Iniciando sistema...');
    console.log('📦 Total de produtos no cardápio:', cardapio.length);
    configurarEventos();
    carregarCarrinhoSalvo();
    configurarFiltrosCardapio();
    criarBolinhasFlutuantes();
});

// CONFIGURAR TODOS OS EVENTOS
function configurarEventos() {
    console.log('⚙️ Configurando eventos...');
    
    // Botão abrir carrinho
    const btnAbrirCarrinho = document.getElementById('btn-abrir-carrinho');
    if (btnAbrirCarrinho) {
        btnAbrirCarrinho.addEventListener('click', abrirCarrinho);
        console.log('✅ Botão abrir carrinho configurado');
    } else {
        console.log('❌ Botão abrir carrinho não encontrado');
    }
    
    // Fechar modais
    const closeModal = document.querySelector('.close-modal');
    const closeCarrinho = document.querySelector('.close-carrinho');
    
    if (closeModal) {
        closeModal.addEventListener('click', fecharModalProduto);
        console.log('✅ Botão fechar modal produto configurado');
    }
    if (closeCarrinho) {
        closeCarrinho.addEventListener('click', fecharModalCarrinho);
        console.log('✅ Botão fechar modal carrinho configurado');
    }
    
    // Controles de quantidade
    const incrementar = document.getElementById('incrementar');
    const decrementar = document.getElementById('decrementar');
    
    if (incrementar) {
        incrementar.addEventListener('click', incrementarQuantidade);
        console.log('✅ Botão incrementar configurado');
    }
    if (decrementar) {
        decrementar.addEventListener('click', decrementarQuantidade);
        console.log('✅ Botão decrementar configurado');
    }
    
    // Botão adicionar ao carrinho no modal
    const btnPedidoModal = document.getElementById('btn-pedido-modal');
    if (btnPedidoModal) {
        btnPedidoModal.addEventListener('click', adicionarAoCarrinhoModal);
        console.log('✅ Botão pedido modal configurado');
    } else {
        console.log('❌ Botão pedido modal não encontrado');
    }
    
    // Forma de pagamento
    document.querySelectorAll('input[name="forma-pagamento"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const campoTroco = document.getElementById('campo-troco');
            if (campoTroco) {
                campoTroco.style.display = this.value === 'dinheiro' ? 'block' : 'none';
            }
        });
    });
    
    // Botões de pagamento
    const btnPix = document.getElementById('btn-pix');
    const btnOutrasFormas = document.getElementById('btn-outras-formas');
    
    if (btnPix) {
        btnPix.addEventListener('click', gerarPix);
        console.log('✅ Botão PIX configurado');
    }
    
    if (btnOutrasFormas) {
        btnOutrasFormas.addEventListener('click', function() {
            finalizarPedidoWhatsApp();
        });
        console.log('✅ Botão outras formas configurado');
    }
    
    // Fechar modais clicando fora
    window.addEventListener('click', function(e) {
        const modalProduto = document.getElementById('modal-produto');
        const modalCarrinho = document.getElementById('modal-carrinho');
        
        if (modalProduto && e.target === modalProduto) fecharModalProduto();
        if (modalCarrinho && e.target === modalCarrinho) fecharModalCarrinho();
    });
}

// FUNÇÃO PRINCIPAL PARA ABRIR MODAL DO PRODUTO - CORRIGIDA
function abrirModal(produtoId) {
    console.log('🔄 Abrindo modal para produto ID:', produtoId);
    
    // Converter para número para garantir comparação correta
    produtoId = parseInt(produtoId);
    produtoAtual = cardapio.find(item => item.id === produtoId);
    console.log('📋 Produto encontrado:', produtoAtual);
    
    if (produtoAtual) {
        // Preencher modal com dados do produto
        const modalImagem = document.getElementById('modal-imagem');
        const modalCategoria = document.getElementById('modal-categoria');
        const modalNome = document.getElementById('modal-nome');
        const modalDescricao = document.getElementById('modal-descricao');
        const modalPreco = document.getElementById('modal-preco');
        
        if (modalImagem) {
            modalImagem.src = produtoAtual.imagem;
            modalImagem.alt = produtoAtual.nome;
        }
        if (modalCategoria) modalCategoria.textContent = formatarCategoria(produtoAtual.categoria);
        if (modalNome) modalNome.textContent = produtoAtual.nome;
        if (modalDescricao) modalDescricao.textContent = produtoAtual.descricao;
        if (modalPreco) modalPreco.textContent = `R$ ${produtoAtual.preco.toFixed(2)}`;
        
        // Resetar quantidade
        quantidadeAtual = 1;
        const quantidadeElement = document.getElementById('quantidade');
        if (quantidadeElement) quantidadeElement.textContent = quantidadeAtual;
        
        // Mostrar modal
        const modalProduto = document.getElementById('modal-produto');
        if (modalProduto) {
            modalProduto.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Previne scroll
            console.log('✅ Modal aberto com sucesso');
        }
    } else {
        console.log('❌ Produto não encontrado no cardápio');
        alert('❌ Produto não encontrado!');
    }
}

// Função auxiliar para formatar categorias
function formatarCategoria(categoria) {
    const formatacoes = {
        'novidade2024': 'NOVIDADE 2024',
        'baratissimos': 'BARATÍSSIMO',
        'artesanais': 'ARTESANAL',
        'combos': 'COMBO',
        'porcoes': 'PORÇÃO',
        'bebidas': 'BEBIDA',
        'saches': 'SACHÊ',
        'dianamorados': 'DIA DOS NAMORADOS'
    };
    return formatacoes[categoria] || categoria.toUpperCase();
}

// FECHAR MODAL DO PRODUTO
function fecharModalProduto() {
    const modalProduto = document.getElementById('modal-produto');
    if (modalProduto) {
        modalProduto.style.display = 'none';
        document.body.style.overflow = 'auto';
        produtoAtual = null;
    }
}

// FECHAR MODAL DO CARRINHO
function fecharModalCarrinho() {
    const modalCarrinho = document.getElementById('modal-carrinho');
    if (modalCarrinho) {
        modalCarrinho.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// INCREMENTAR QUANTIDADE
function incrementarQuantidade() {
    quantidadeAtual++;
    const quantidadeElement = document.getElementById('quantidade');
    if (quantidadeElement) quantidadeElement.textContent = quantidadeAtual;
}

// DECREMENTAR QUANTIDADE
function decrementarQuantidade() {
    if (quantidadeAtual > 1) {
        quantidadeAtual--;
        const quantidadeElement = document.getElementById('quantidade');
        if (quantidadeElement) quantidadeElement.textContent = quantidadeAtual;
    }
}

// FUNÇÕES DO CARRINHO - CORRIGIDAS
function adicionarAoCarrinhoModal() {
    console.log('🔄 Adicionando ao carrinho modal...');
    if (produtoAtual) {
        adicionarAoCarrinho(produtoAtual.id, quantidadeAtual);
        fecharModalProduto();
        alert(`✅ ${quantidadeAtual}x ${produtoAtual.nome} adicionado ao carrinho!`);
    } else {
        console.log('❌ Nenhum produto selecionado');
        alert('❌ Erro: Nenhum produto selecionado!');
    }
}

function adicionarAoCarrinho(produtoId, quantidade) {
    console.log('🛒 Adicionando produto ID:', produtoId, 'Quantidade:', quantidade);
    
    const produto = cardapio.find(p => p.id === produtoId);
    if (!produto) {
        console.log('❌ Produto não encontrado no cardápio');
        return;
    }
    
    const itemExistente = carrinho.find(item => item.id === produtoId);
    
    if (itemExistente) {
        itemExistente.quantidade += quantidade;
        console.log('📈 Quantidade atualizada:', itemExistente.quantidade);
    } else {
        carrinho.push({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            quantidade: quantidade,
            imagem: produto.imagem
        });
        console.log('🆕 Novo item adicionado ao carrinho');
    }
    
    salvarCarrinho();
    atualizarContadorCarrinho();
    console.log('🛒 Carrinho atual:', carrinho);
}

// ABRIR CARRINHO
function abrirCarrinho() {
    console.log('🛒 Abrindo carrinho...');
    const modalCarrinho = document.getElementById('modal-carrinho');
    if (modalCarrinho) {
        renderizarCarrinho();
        modalCarrinho.style.display = 'block';
        document.body.style.overflow = 'hidden';
        console.log('✅ Carrinho aberto');
    } else {
        console.log('❌ Modal carrinho não encontrado');
    }
}

// RENDERIZAR CARRINHO
function renderizarCarrinho() {
    const itensCarrinho = document.getElementById('itens-carrinho');
    if (!itensCarrinho) return;

    if (carrinho.length === 0) {
        itensCarrinho.innerHTML = '<p class="carrinho-vazio">Seu carrinho está vazio</p>';
        atualizarTotaisCarrinho();
        return;
    }

    itensCarrinho.innerHTML = carrinho.map(item => `
        <div class="item-carrinho">
            <div class="item-info">
                <h4>${item.nome}</h4>
                <p>R$ ${item.preco.toFixed(2)}</p>
            </div>
            <div class="item-controles">
                <button onclick="alterarQuantidade(${item.id}, -1)">-</button>
                <span>${item.quantidade}</span>
                <button onclick="alterarQuantidade(${item.id}, 1)">+</button>
                <button onclick="removerDoCarrinho(${item.id})" class="btn-remover">🗑️</button>
            </div>
            <div class="item-total">
                R$ ${(item.preco * item.quantidade).toFixed(2)}
            </div>
        </div>
    `).join('');

    atualizarTotaisCarrinho();
}

// ALTERAR QUANTIDADE NO CARRINHO
function alterarQuantidade(produtoId, alteracao) {
    const item = carrinho.find(item => item.id === produtoId);
    if (item) {
        item.quantidade += alteracao;
        if (item.quantidade <= 0) {
            removerDoCarrinho(produtoId);
        } else {
            salvarCarrinho();
            renderizarCarrinho();
            atualizarContadorCarrinho();
        }
    }
}

// REMOVER DO CARRINHO
function removerDoCarrinho(produtoId) {
    carrinho = carrinho.filter(item => item.id !== produtoId);
    salvarCarrinho();
    renderizarCarrinho();
    atualizarContadorCarrinho();
}

// ATUALIZAR TOTAIS DO CARRINHO
function atualizarTotaisCarrinho() {
    const subtotal = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    const taxaEntrega = 5.00;
    const total = subtotal + taxaEntrega;

    const subtotalElement = document.getElementById('subtotal');
    const taxaEntregaElement = document.getElementById('taxa-entrega');
    const totalElement = document.getElementById('total-geral');

    if (subtotalElement) subtotalElement.textContent = `R$ ${subtotal.toFixed(2)}`;
    if (taxaEntregaElement) taxaEntregaElement.textContent = `R$ ${taxaEntrega.toFixed(2)}`;
    if (totalElement) totalElement.textContent = `R$ ${total.toFixed(2)}`;
}

// ATUALIZAR CONTADOR DO CARRINHO
function atualizarContadorCarrinho() {
    const contador = document.getElementById('contador-carrinho');
    if (contador) {
        const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
        contador.textContent = totalItens;
    }
}

// SALVAR CARRINHO NO LOCALSTORAGE
function salvarCarrinho() {
    localStorage.setItem('carrinhoSaborCaseiro', JSON.stringify(carrinho));
}

// CARREGAR CARRINHO SALVO
function carregarCarrinhoSalvo() {
    const carrinhoSalvo = localStorage.getItem('carrinhoSaborCaseiro');
    if (carrinhoSalvo) {
        carrinho = JSON.parse(carrinhoSalvo);
        atualizarContadorCarrinho();
        console.log('📦 Carrinho carregado:', carrinho);
    }
}

// CONFIGURAR FILTROS DO CARDÁPIO
function configurarFiltrosCardapio() {
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const cards = document.querySelectorAll('.card-hamburguer');

    filtroBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover active de todos os botões
            filtroBtns.forEach(b => b.classList.remove('active'));
            // Adicionar active ao botão clicado
            this.classList.add('active');
            
            const categoria = this.getAttribute('data-categoria');
            
            cards.forEach(card => {
                if (categoria === 'todos' || card.getAttribute('data-categoria') === categoria) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// CRIAR BOLINHAS FLUTUANTES
function criarBolinhasFlutuantes() {
    const container = document.getElementById('floatingElements');
    if (!container) return;
    
    for (let i = 0; i < 15; i++) {
        const bolinha = document.createElement('div');
        bolinha.className = 'floating-circle';
        bolinha.style.cssText = `
            position: absolute;
            width: ${Math.random() * 20 + 5}px;
            height: ${Math.random() * 20 + 5}px;
            background: rgba(255, 107, 0, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;
        container.appendChild(bolinha);
    }
}

// FUNÇÃO FINALIZAR PEDIDO WHATSAPP
function finalizarPedidoWhatsApp() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    const nome = document.getElementById('nome-cliente')?.value;
    const telefone = document.getElementById('telefone')?.value;
    const endereco = document.getElementById('endereco')?.value;
    const cidade = document.getElementById('cidade')?.value;
    const formaPagamento = document.querySelector('input[name="forma-pagamento"]:checked')?.value;
    const troco = document.getElementById('troco')?.value;

    // Validação dos campos obrigatórios
    if (!nome || !telefone || !endereco || !cidade) {
        alert('Por favor, preencha todos os dados obrigatórios!');
        return;
    }
    
    const mensagem = formatarMensagemWhatsApp(nome, telefone, endereco, cidade, formaPagamento, troco);
    const numeroWhatsApp = "5531994293091";
    
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(urlWhatsApp, '_blank');
    
    // Limpar carrinho após envio
    carrinho = [];
    salvarCarrinho();
    atualizarContadorCarrinho();
    renderizarCarrinho();
    fecharModalCarrinho();
}

// FORMATAR MENSAGEM WHATSAPP
function formatarMensagemWhatsApp(nome, telefone, endereco, cidade, formaPagamento, troco) {
    let mensagem = `🍔 *PEDIDO - SABOR CASEIRO* 🍔\n\n`;
    mensagem += `*Cliente:* ${nome}\n`;
    mensagem += `*Telefone:* ${telefone}\n`;
    mensagem += `*Endereço:* ${endereco}\n`;
    mensagem += `*Cidade:* ${cidade}\n`;
    mensagem += `*Forma de Pagamento:* ${formaPagamento}\n`;
    if (troco && formaPagamento === 'dinheiro') {
        mensagem += `*Troco para:* R$ ${troco}\n`;
    }
    mensagem += `\n*ITENS DO PEDIDO:*\n`;
    
    carrinho.forEach((item, index) => {
        mensagem += `${index + 1}. ${item.quantidade}x ${item.nome} - R$ ${(item.preco * item.quantidade).toFixed(2)}\n`;
    });
    
    const subtotal = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    const taxaEntrega = 5.00;
    const total = subtotal + taxaEntrega;
    
    mensagem += `\n*RESUMO DO VALOR:*\n`;
    mensagem += `Subtotal: R$ ${subtotal.toFixed(2)}\n`;
    mensagem += `Taxa de entrega: R$ ${taxaEntrega.toFixed(2)}\n`;
    mensagem += `*TOTAL: R$ ${total.toFixed(2)}*\n\n`;
    mensagem += `_Pedido gerado via site_`;
    
    return mensagem;
}

// FUNÇÃO PARA GERAR E COPIAR PIX
function gerarPix() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    // Calcular total do pedido
    const subtotal = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    const taxaEntrega = 5.00;
    const total = subtotal + taxaEntrega;

    // Gerar código PIX estático (você pode substituir por um código dinâmico se preferir)
    const chavePix = "seu.email@empresa.com"; // Substitua pela sua chave PIX
    const nomeBeneficiario = "Sabor Caseiro";
    const cidade = "Sua Cidade";
    const valor = total.toFixed(2);
    
    // Formatar código PIX no padrão BR Code
    const codigoPix = `00020126580014BR.GOV.BCB.PIX0136${chavePix}520400005303986540${valor.length}${valor}5802BR59${nomeBeneficiario.length}${nomeBeneficiario}60${cidade.length}${cidade}62070503***6304`;

    // Criar modal de PIX
    criarModalPix(codigoPix, total);
}

// CRIAR MODAL DE PIX
function criarModalPix(codigoPix, total) {
    // Remover modal existente se houver
    const modalExistente = document.getElementById('modal-pix');
    if (modalExistente) {
        modalExistente.remove();
    }

    // Criar modal
    const modalPix = document.createElement('div');
    modalPix.id = 'modal-pix';
    modalPix.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 3000;
    `;

    modalPix.innerHTML = `
        <div style="
            background: #1a1a1a;
            padding: 30px;
            border-radius: 15px;
            border: 2px solid #FF6B00;
            max-width: 400px;
            width: 90%;
            text-align: center;
            color: white;
        ">
            <h2 style="color: #FF6B00; margin-bottom: 20px;">💰 Pagamento via PIX</h2>
            
            <div style="background: white; padding: 15px; border-radius: 10px; margin: 20px 0;">
                <p style="color: #333; font-weight: bold; margin-bottom: 10px;">Valor: R$ ${total.toFixed(2)}</p>
                <p style="color: #666; font-size: 14px; margin-bottom: 15px;">Chave PIX: seu.email@empresa.com</p>
                
                <div style="background: #f8f8f8; padding: 15px; border-radius: 8px; word-break: break-all;">
                    <p style="color: #333; font-size: 12px; margin: 0;">Código PIX Copia e Cola:</p>
                    <textarea id="codigo-pix-text" readonly 
                        style="width: 100%; height: 80px; border: none; background: transparent; 
                               resize: none; color: #333; font-size: 10px; margin-top: 10px;"></textarea>
                </div>
            </div>

            <button onclick="copiarPix()" 
                style="background: #FF6B00; color: white; border: none; padding: 12px 20px; 
                       border-radius: 25px; cursor: pointer; font-weight: bold; margin: 10px;">
                📋 Copiar Código PIX
            </button>

            <div style="margin: 20px 0; padding: 15px; background: #2a2a2a; border-radius: 10px;">
                <p style="color: #FF6B00; font-weight: bold;">⚠️ IMPORTANTE</p>
                <p style="font-size: 14px; color: #ccc;">
                    1. Copie o código PIX acima<br>
                    2. Abra seu app do banco<br>
                    3. Cole o código e pague<br>
                    4. Volte aqui e confirme
                </p>
            </div>

            <div style="display: flex; gap: 10px; justify-content: center;">
                <button onclick="fecharModalPix()" 
                    style="background: #666; color: white; border: none; padding: 12px 20px; 
                           border-radius: 25px; cursor: pointer;">
                    Cancelar
                </button>
                <button onclick="confirmarPagamentoPix()" 
                    style="background: #25D366; color: white; border: none; padding: 12px 20px; 
                           border-radius: 25px; cursor: pointer; font-weight: bold;">
                    ✅ Já Paguei
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modalPix);
    
    // Preencher o código PIX
    const textarea = document.getElementById('codigo-pix-text');
    if (textarea) {
        textarea.value = codigoPix;
    }
}

// COPIAR CÓDIGO PIX
function copiarPix() {
    const textarea = document.getElementById('codigo-pix-text');
    if (textarea) {
        textarea.select();
        textarea.setSelectionRange(0, 99999);
        
        try {
            navigator.clipboard.writeText(textarea.value).then(() => {
                alert('✅ Código PIX copiado! Agora cole no seu app do banco.');
            }).catch(() => {
                // Fallback para navegadores mais antigos
                document.execCommand('copy');
                alert('✅ Código PIX copiado! Agora cole no seu app do banco.');
            });
        } catch (err) {
            alert('❌ Erro ao copiar. Selecione e copie manualmente.');
        }
    }
}

// FECHAR MODAL PIX
function fecharModalPix() {
    const modalPix = document.getElementById('modal-pix');
    if (modalPix) {
        modalPix.remove();
    }
}

// CONFIRMAR PAGAMENTO E IR PARA WHATSAPP
function confirmarPagamentoPix() {
    fecharModalPix();
    
    // Aguardar um pouco antes de abrir o WhatsApp
    setTimeout(() => {
        finalizarPedidoWhatsAppComPix();
    }, 500);
}

// FUNÇÃO FINALIZAR PEDIDO COM PIX
function finalizarPedidoWhatsAppComPix() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    const nome = document.getElementById('nome-cliente')?.value;
    const telefone = document.getElementById('telefone')?.value;
    const endereco = document.getElementById('endereco')?.value;
    const cidade = document.getElementById('cidade')?.value;

    // Validação dos campos obrigatórios
    if (!nome || !telefone || !endereco || !cidade) {
        alert('Por favor, preencha todos os dados obrigatórios!');
        return;
    }
    
    const mensagem = formatarMensagemWhatsAppPix(nome, telefone, endereco, cidade);
    const numeroWhatsApp = "5531994293091";
    
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(urlWhatsApp, '_blank');
    
    // Limpar carrinho após envio
    carrinho = [];
    salvarCarrinho();
    atualizarContadorCarrinho();
    renderizarCarrinho();
    fecharModalCarrinho();
}

// FORMATAR MENSAGEM WHATSAPP COM PIX
function formatarMensagemWhatsAppPix(nome, telefone, endereco, cidade) {
    let mensagem = `💰 *PEDIDO PAGO VIA PIX* 🍔\n\n`;
    mensagem += `*Cliente:* ${nome}\n`;
    mensagem += `*Telefone:* ${telefone}\n`;
    mensagem += `*Endereço:* ${endereco}\n`;
    mensagem += `*Cidade:* ${cidade}\n`;
    mensagem += `*Status:* ✅ Pagamento via PIX realizado\n\n`;
    
    mensagem += `*ITENS DO PEDIDO:*\n`;
    carrinho.forEach((item, index) => {
        mensagem += `${index + 1}. ${item.quantidade}x ${item.nome} - R$ ${(item.preco * item.quantidade).toFixed(2)}\n`;
    });
    
    const subtotal = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    const taxaEntrega = 5.00;
    const total = subtotal + taxaEntrega;
    
    mensagem += `\n*RESUMO DO VALOR:*\n`;
    mensagem += `Subtotal: R$ ${subtotal.toFixed(2)}\n`;
    mensagem += `Taxa de entrega: R$ ${taxaEntrega.toFixed(2)}\n`;
    mensagem += `*TOTAL PAGO: R$ ${total.toFixed(2)}*\n\n`;
    mensagem += `💳 *Pagamento confirmado via PIX*\n`;
    mensagem += `_Pedido gerado via site_`;
    
    return mensagem;
}

// TESTE RÁPIDO
function testarSistema() {
    console.log('🧪 Testando sistema...');
    console.log('📦 Cardápio carregado:', cardapio.length, 'itens');
    console.log('🛒 Carrinho atual:', carrinho);
    console.log('🔍 Botões encontrados:');
    console.log('- Abrir carrinho:', !!document.getElementById('btn-abrir-carrinho'));
    console.log('- Modal produto:', !!document.getElementById('modal-produto'));
    console.log('- Modal carrinho:', !!document.getElementById('modal-carrinho'));
}

// Execute o teste quando a página carregar
setTimeout(testarSistema, 1000);

console.log('✅ JavaScript carregado com sucesso!');
// Execute o teste quando a página carregar
setTimeout(testarSistema, 1000);

console.log('✅ JavaScript carregado com sucesso!');
/* =========================================
   CORREÇÕES ESPECÍFICAS PARA iOS SAFARI
   ========================================= */


// Execute o teste quando a página carregar
setTimeout(testarSistema, 1000);

console.log('✅ JavaScript carregado com sucesso!');

// Função para detectar iOS e aplicar correções
function aplicarCorrecoesIOS() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
    if (isIOS) {
        console.log('📱 Dispositivo iOS detectado - Aplicando correções...');
        
        // Correção para altura no Safari iOS
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.minHeight = '-webkit-fill-available';
        }
        
        // Correção para scroll suave
        const modais = document.querySelectorAll('.modal-content');
        modais.forEach(modal => {
            modal.style.WebkitOverflowScrolling = 'touch';
        });
        
        // Correção para viewport height
        function ajustarAlturaViewport() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
        
        ajustarAlturaViewport();
        window.addEventListener('resize', ajustarAlturaViewport);
    }
}

// Aplicar correções iOS quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    aplicarCorrecoesIOS();
});