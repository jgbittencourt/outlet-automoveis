
// ========================================
// CONFIGURAÇÃO DOS NÚMEROS DE WHATSAPP
// ========================================
// 
// Este sistema permite distribuir leads de forma justa entre 2 vendedores
// 
// COMO FUNCIONA:
// - João (Vendedor 1): Recebe leads alternados (1º, 3º, 5º...)
// - Junior (Vendedor 2): Recebe leads alternados (2º, 4º, 6º...)
// 
// PARA ALTERAR O MÉTODO DE DISTRIBUIÇÃO:
// - Alternado: setLeadDistributionMethod('alternado') - Distribui 1 por 1
// - Aleatório: setLeadDistributionMethod('aleatorio') - Distribui aleatoriamente
// 
// PARA TESTAR A DISTRIBUIÇÃO:
// - testDistribution(20) - Testa 20 leads e mostra quantos cada vendedor recebeu
// 
// ========================================

// Configuração dos números de WhatsApp
const whatsappConfig = {
  vendedor1: {
    number: "5524992195829", // (24) 99219-5829 - João
    name: "João",
    description: "Vendas e atendimento"
  },
  vendedor2: {
    number: "5524981072933", // (24) 98107-2933 - Junior
    name: "Junior", 
    description: "Vendas e atendimento"
  },
  principal: {
    number: "5524992195829", // (24) 99219-5829 - João (WhatsApp Principal)
    name: "WhatsApp Principal",
    description: "Consultas gerais e informações"
  },
  financiamento: {
    number: "5524981072933", // (24) 98107-2933 - Junior
    name: "WhatsApp Financiamento", 
    description: "Simulações e financiamento"
  },
  suporte: {
    number: "5524992195829", // (24) 99219-5829 - João
    name: "WhatsApp Suporte",
    description: "Ajuda e suporte técnico"
  }
};

// Sistema de distribuição de leads entre vendedores
const leadDistribution = {
  // Contador para rotação automática
  counter: 0,
  
  // Método de distribuição: 'alternado', 'aleatorio', 'manual'
  method: 'alternado', // Você pode mudar para 'aleatorio' se preferir
  
  // Função para obter o próximo vendedor
  getNextVendor() {
    if (this.method === 'alternado') {
      this.counter++;
      return this.counter % 2 === 1 ? 'vendedor1' : 'vendedor2';
    } else if (this.method === 'aleatorio') {
      return Math.random() < 0.5 ? 'vendedor1' : 'vendedor2';
    }
    // Fallback para vendedor1
    return 'vendedor1';
  },
  
  // Função para definir método de distribuição
  setMethod(newMethod) {
    if (['alternado', 'aleatorio', 'manual'].includes(newMethod)) {
      this.method = newMethod;
      console.log(`Método de distribuição alterado para: ${newMethod}`);
    }
  }
};

const inventory = [
  {
    id: 5,
    titulo: "Onix Plus Joy 1.0 Flex",
    preco: 54900,
    anoModelo: "2020/2020",
    km: 110,
    local: "Barra Mansa, RJ",
    loja: "Outlet Automóveis",
    imagem: "fotos/WhatsApp Image 2025-09-15 at 17.25.28.jpeg",
    imagens: [
      "fotos/WhatsApp Image 2025-09-15 at 17.25.28.jpeg",
      "fotos/onix 2.2.jpeg",
      "fotos/onix 2.5.jpeg",
      "fotos/onix 2.6.jpeg",
      "fotos/onix 2.7.jpeg",
      "fotos/onix 2.8.jpeg",
      "fotos/onix 2.9.jpeg",
      "fotos/onix 20.jpeg",
      "fotos/onix2.0.jpeg",
      "fotos/onix2.1.jpeg",
      "fotos/onix2.3.jpeg",
      "fotos/onix2.4.jpeg",
      "fotos/onix3.0.jpeg"
    ]
  },
  {
    id: 6,
    titulo: "Peugeot 208 Active 1.5 GNV",
    preco: 36900,
    anoModelo: "2014/2014",
    km: 130,
    local: "Barra Mansa, RJ",
    loja: "Outlet Automóveis",
    imagem: "fotos/WhatsApp Image 2025-09-15 at 17.25.30.jpeg",
    imagens: [
      "fotos/WhatsApp Image 2025-09-15 at 17.25.30.jpeg",
      "fotos/pegeout(1).jpg",
      "fotos/pegeout(2).jpg",
      "fotos/pegeout(3).jpg",
      "fotos/pegeout(4).jpg",
      "fotos/pegeout(5).jpg",
      "fotos/pegeout(6).jpg",
      "fotos/pegeout(8).jpg",
      "fotos/pegeout(10).jpg",
      "fotos/pegeout(11).jpg",
      "fotos/pegeut(dentro).jpg"
    ]
  },
  {
    id: 7,
    titulo: "Renault Duster 1.6 GNV",
    preco: 47900,
    anoModelo: "2013/2013",
    km: 145,
    local: "Barra Mansa, RJ",
    loja: "Outlet Automóveis",
    imagem: "fotos/WhatsApp Image 2025-09-15 at 17.25.33.jpeg",
    imagens: [
      "fotos/WhatsApp Image 2025-09-15 at 17.25.33.jpeg",
      "fotos/duster(1).jpg",
      "fotos/duster(2).jpg",
      "fotos/duster(3).jpg",
      "fotos/duster(4).jpg",
      "fotos/duster(5).jpg",
      "fotos/duster(6).jpg",
      "fotos/duster(7).jpg",
      "fotos/dusterdento.jpg"
    ]
  },
  {
    id: 8,
    titulo: "Volkswagen Gol 1.6 GNV",
    preco: 38900,
    anoModelo: "2014/2014",
    km: 150,
    local: "Barra Mansa, RJ",
    loja: "Outlet Automóveis",
    imagem: "fotos/WhatsApp Image 2025-09-15 at 17.25.34.jpeg",
    imagens: [
      "fotos/WhatsApp Image 2025-09-15 at 17.25.34.jpeg",
      "fotos/gol (7).jpeg",
      "fotos/gol 10.jpeg",
      "fotos/gol(2).jpeg",
      "fotos/gol(3).jpeg",
      "fotos/gol(4).jpeg",
      "fotos/gol(5).jpeg",
      "fotos/gol(6).jpeg",
      "fotos/gol(8).jpeg",
      "fotos/gol(9).jpeg",
      "fotos/gol(11).jpeg"
    ]
  },
  {
    id: 11,
    titulo: "Fiat Siena ELX 1.4 Flex",
    preco: 29900,
    anoModelo: "2010/2010",
    km: 138,
    local: "Barra Mansa, RJ",
    loja: "Outlet Automóveis",
    imagem: "fotos/siena (1).jpeg",
    imagens: [
      "fotos/siena (1).jpeg",
      "fotos/siena(2).jpeg",
      "fotos/siena(3).jpeg",
      "fotos/siena(4).jpeg",
      "fotos/siena(5).jpeg",
      "fotos/siena(6).jpeg",
      "fotos/siena(7).jpeg"
    ]
  },
  {
    id: 12,
    titulo: "Honda City LX 1.5 Flex",
    preco: 49900,
    anoModelo: "2012/2012",
    km: 171,
    local: "Barra Mansa, RJ",
    loja: "Outlet Automóveis",
    imagem: "fotos/WhatsApp Image 2025-09-15 at 17.51.55.jpeg",
    imagens: [
      "fotos/WhatsApp Image 2025-09-15 at 17.51.55.jpeg",
      "fotos/city(1).jpg",
      "fotos/city(2).jpg",
      "fotos/city(3).jpg",
      "fotos/city(4).jpg",
      "fotos/city(5).jpg",
      "fotos/city(6).jpg",
      "fotos/city(7).jpg",
      "fotos/city(8).jpg",
      "fotos/city(9).jpg"
    ]
  },
  
  
  {
    id: 14,
    titulo: "Range Rover Evoque 2.0 Turbo AWD",
    preco: 89900,
    anoModelo: "2013/2013",
    km: 102,
    local: "Barra Mansa, RJ",
    loja: "Outlet Automóveis",
    imagem: "fotos/WhatsApp Image 2025-09-15 at 17.25.26.jpeg",
    imagens: [
      "fotos/WhatsApp Image 2025-09-15 at 17.25.26.jpeg"
    ]
  },
  {
    id: 17,
    titulo: "Fiat Punto Attractive Itália 1.4 GNV",
    preco: 35900,
    anoModelo: "2011/2011",
    km: 140,
    local: "Barra Mansa, RJ",
    loja: "Outlet Automóveis",
    imagem: "fotos/WhatsApp Image 2025-09-15 at 17.51.58.jpeg",
    imagens: [
      "fotos/WhatsApp Image 2025-09-15 at 17.51.58.jpeg",
      "fotos/punto c (1).jpeg",
      "fotos/punto c (2).jpeg",
      "fotos/punto c (3).jpeg",
      "fotos/punto c (4).jpeg",
      "fotos/punto c (5).jpeg",
      "fotos/punto c (6).jpeg",
      "fotos/punto c (7).jpeg",
      "fotos/punto c (8).jpeg",
      "fotos/punto c (9).jpeg"
    ]
  },
  {
    id: 18,
    titulo: "Honda CB300R",
    preco: 10900,
    anoModelo: "2012/2012",
    km: 120,
    local: "Barra Mansa, RJ",
    loja: "Outlet Automóveis",
    imagem: "fotos/cb306.jpeg",
    imagens: [
      "fotos/cb306.jpeg",
      "fotos/cb300.jpeg",
      "fotos/cb301.jpeg",
      "fotos/cb302.jpeg",
      "fotos/cb303.jpeg",
      "fotos/cb304.jpeg",
      "fotos/cb305.jpeg",
      "fotos/cb307.jpeg"
    ]
  },
  {
    id: 20,
    titulo: "Volkswagen Paraty City 1.6 Flex",
    preco: 22900,
    anoModelo: "2005/2005",
    km: 251,
    local: "Barra Mansa, RJ",
    loja: "Outlet Automóveis",
    imagem: "fotos/parati (2).jpeg",
    imagens: [
      "fotos/parati (2).jpeg",
      "fotos/parati (1).jpeg",
      "fotos/parati (3).jpeg",
      "fotos/parati (4).jpeg",
      "fotos/parati (5).jpeg",
      "fotos/parati (6).jpeg",
      "fotos/parati (7).jpeg",
      "fotos/parati (8).jpeg",
      "fotos/parati (9).jpeg",
      "fotos/parati (10).jpeg"
    ]
  },
  {
    id: 22,
    titulo: "Honda CR-V LX 2.0 FLEX/GNV",
    preco: 51900,
    anoModelo: "2010/2010",
    km: 150,
    local: "Barra Mansa, RJ",
    loja: "Outlet Automóveis",
    imagem: "fotos/honda crv.jpeg",
    imagens: [
      "fotos/honda crv.jpeg",
      "fotos/honda crv (2).jpeg",
      "fotos/honda crv (3).jpeg",
      "fotos/honda crv (4).jpeg",
      "fotos/honda crv (5).jpeg",
      "fotos/honda crv (6).jpeg",
      "fotos/honda crv (7).jpeg"
    ]
  },
  {
    id: 23,
    titulo: "Chevrolet Onix LT 1.0 GNV",
    preco: 44900,
    anoModelo: "2016/2016",
    km: 158,
    local: "Barra Mansa, RJ",
    loja: "Outlet Automóveis",
    imagem: "fotos/onix p(4).jpeg",
    imagens: [
      "fotos/onix p(4).jpeg",
      "fotos/onix p.jpeg",
      "fotos/dentro onix.jpeg",
      "fotos/onix p(2).jpeg",
      "fotos/onix p(3).jpeg",
      "fotos/onix p(5).jpeg",
      "fotos/onix motor.jpeg"
    ]
  },
  {
    id: 24,
    titulo: "Fiat Palio 1.0 Flex",
    preco: 23900,
    anoModelo: "2008/2008",
    km: 150,
    local: "Barra Mansa, RJ",
    loja: "Outlet Automóveis",
    imagem: "fotos/palio principal.jpeg",
    imagens: [
      "fotos/palio principal.jpeg",
      "fotos/palio.jpeg",
      "fotos/palio2.jpeg",
      "fotos/palio3.jpeg",
      "fotos/palio4.jpeg"
    ]
  },
];

function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function formatKm(value) {
  return `${value.toLocaleString("pt-BR")} Km`;
}

// Função utilitária para abrir WhatsApp com configuração específica
function openWhatsAppWithConfig(configKey, message) {
  const config = whatsappConfig[configKey];
  if (!config) {
    console.error(`Configuração de WhatsApp não encontrada: ${configKey}`);
    return;
  }
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${config.number}?text=${encodedMessage}`;
  
  try {
    window.location.href = whatsappUrl;
  } catch (error) {
    window.open(whatsappUrl, '_blank');
  }
}

// Função para obter informações de um número de WhatsApp
function getWhatsAppInfo(configKey) {
  return whatsappConfig[configKey] || null;
}

// Funções para gerenciar a distribuição de leads
function setLeadDistributionMethod(method) {
  leadDistribution.setMethod(method);
}

function getCurrentDistributionMethod() {
  return leadDistribution.method;
}

function getDistributionStats() {
  return {
    method: leadDistribution.method,
    counter: leadDistribution.counter,
    vendedor1: whatsappConfig.vendedor1.name,
    vendedor2: whatsappConfig.vendedor2.name
  };
}

// Função para testar a distribuição (opcional - para debug)
function testDistribution(count = 10) {
  console.log(`Testando distribuição de ${count} leads:`);
  const results = { vendedor1: 0, vendedor2: 0 };
  
  for (let i = 0; i < count; i++) {
    const vendor = leadDistribution.getNextVendor();
    results[vendor]++;
  }
  
  console.log('Resultados:', results);
  return results;
}

function openWhatsApp(vehicleId) {
  // Encontra o veículo pelo ID
  const vehicle = inventory.find(item => item.id === vehicleId);
  if (!vehicle) return;
  
  // Obtém o próximo vendedor usando o sistema de distribuição
  const vendorKey = leadDistribution.getNextVendor();
  const vendor = whatsappConfig[vendorKey];
  
  // Mensagem personalizada com dados do veículo
  const message = `Olá! Vim através do site da Outlet Automóveis e tenho interesse no veículo:

🚗 *${vehicle.titulo}*
💰 Preço: ${formatPrice(vehicle.preco)}
📅 Ano/Modelo: ${vehicle.anoModelo}
🛣️ Quilometragem: ${formatKm(vehicle.km)}
📍 Local: ${vehicle.local}
🏪 Loja: ${vehicle.loja}

Gostaria de mais informações sobre este veículo.`;

  // Usa a função utilitária para abrir o WhatsApp
  openWhatsAppWithConfig(vendorKey, message);
  
  // Log para controle (opcional - pode remover em produção)
  console.log(`Lead direcionado para: ${vendor.name} (${vendorKey})`);
}

function openWhatsAppGeneral() {
  // Usa o WhatsApp principal para consultas gerais
  const whatsappNumber = whatsappConfig.principal.number;
  
  // Mensagem geral
  const message = `Olá! Vim através do site da Outlet Automóveis e gostaria de mais informações sobre os veículos disponíveis.`;
  
  // Codifica a mensagem para URL
  const encodedMessage = encodeURIComponent(message);
  
  // Cria o link do WhatsApp
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
  // Abre o WhatsApp (melhorado para mobile)
  try {
    // Tenta abrir diretamente no app do WhatsApp
    window.location.href = whatsappUrl;
  } catch (error) {
    // Fallback para window.open
    window.open(whatsappUrl, '_blank');
  }
}

function openWhatsAppHelp() {
  // Usa o WhatsApp de suporte para ajuda
  const whatsappNumber = whatsappConfig.suporte.number;
  
  // Mensagem de ajuda
  const message = `Olá! Vim através do site da Outlet Automóveis e preciso de ajuda. Tenho algumas dúvidas e gostaria de esclarecimentos.`;
  
  // Codifica a mensagem para URL
  const encodedMessage = encodeURIComponent(message);
  
  // Cria o link do WhatsApp
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
  // Abre o WhatsApp (melhorado para mobile)
  try {
    // Tenta abrir diretamente no app do WhatsApp
    window.location.href = whatsappUrl;
  } catch (error) {
    // Fallback para window.open
    window.open(whatsappUrl, '_blank');
  }
}

function openPrivacyModal() {
  const modal = document.getElementById('privacyModal');
  modal.setAttribute('aria-hidden', 'false');
}

function closePrivacyModal() {
  const modal = document.getElementById('privacyModal');
  modal.setAttribute('aria-hidden', 'true');
}

function openWhatsAppPrivacy() {
  // Usa o WhatsApp de suporte para questões de privacidade
  const whatsappNumber = whatsappConfig.suporte.number;
  
  // Mensagem sobre privacidade
  const message = `Olá! Vim através do site da Outlet Automóveis e tenho dúvidas sobre a política de privacidade. Gostaria de esclarecimentos sobre como meus dados são tratados.`;
  
  // Codifica a mensagem para URL
  const encodedMessage = encodeURIComponent(message);
  
  // Cria o link do WhatsApp
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
  // Fecha o modal
  closePrivacyModal();
  
  // Abre o WhatsApp (melhorado para mobile)
  try {
    // Tenta abrir diretamente no app do WhatsApp
    window.location.href = whatsappUrl;
  } catch (error) {
    // Fallback para window.open
    window.open(whatsappUrl, '_blank');
  }
}

function extractAno(anoModelo) {
  const partes = String(anoModelo).split("/");
  const ano = parseInt(partes[0], 10);
  return Number.isFinite(ano) ? ano : 0;
}


function createCard(item) {
  const el = document.createElement("article");
  el.className = "card";
  el.setAttribute("data-vehicle-id", item.id);
  
  el.innerHTML = `
    <div class="card__media">
      <img src="${item.imagem}" alt="${item.titulo}" onerror="this.src=''; this.alt='Imagem não encontrada';">
    </div>
    <div class="card__body">
      <h3 class="card__title">${item.titulo}</h3>
      <div class="price">${formatPrice(item.preco)}</div>
      <div class="card__meta">
        <span>${item.anoModelo}</span>
        <span>•</span>
        <span>${formatKm(item.km)}</span>
        <span>•</span>
        <span>${item.local}</span>
      </div>
      <div class="card__actions">
        <button class="button" onclick="openWhatsApp(${item.id})">WhatsApp</button>
        <button class="btn-secondary" onclick="openPhotosModal(${item.id})">📸 Fotos</button>
        <button class="btn-secondary" onclick="openSimulationModal(${item.id})">Simular</button>
      </div>
    </div>
  `;
  // Remover funcionalidade de lightbox - imagens aparecem normalmente
  return el;
}

function renderList(list) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  list.forEach(item => grid.appendChild(createCard(item)));
  document.getElementById("totalResultados").textContent = `${list.length} ofertas`;
}

function applyFilters() {
  const termo = (document.getElementById("q").value || "").toLowerCase();
  const maxPreco = parseInt(document.getElementById("filtroPreco").value || "0", 10) || Infinity;
  const minAno = parseInt(document.getElementById("filtroAno").value || "0", 10) || 0;
  const localSel = (document.getElementById("filtroLocal").value || "").toLowerCase();
  const ordenar = document.getElementById("ordenarPor").value;

  let list = inventory.filter(item => {
    const atendeBusca = termo ? item.titulo.toLowerCase().includes(termo) : true;
    const atendePreco = item.preco <= maxPreco;
    const atendeAno = extractAno(item.anoModelo) >= minAno;
    const atendeLocal = item.local.toLowerCase().includes("barra mansa, rj");
    return atendeBusca && atendePreco && atendeAno && atendeLocal;
  });

  switch (ordenar) {
    case "menor_preco":
      list.sort((a, b) => a.preco - b.preco);
      break;
    case "maior_preco":
      list.sort((a, b) => b.preco - a.preco);
      break;
    case "menor_km":
      list.sort((a, b) => a.km - b.km);
      break;
    case "mais_novo":
      list.sort((a, b) => extractAno(b.anoModelo) - extractAno(a.anoModelo));
      break;
    default:
      // relevância simples: combinar preço e ano
      list.sort((a, b) => (extractAno(b.anoModelo) - extractAno(a.anoModelo)) || (a.preco - b.preco));
  }

  renderList(list);
}

document.getElementById("searchForm").addEventListener("submit", e => {
  e.preventDefault();
  applyFilters();
});

document.getElementById("filtroPreco").addEventListener("change", applyFilters);
document.getElementById("filtroAno").addEventListener("change", applyFilters);
document.getElementById("filtroLocal").addEventListener("change", applyFilters);
document.getElementById("ordenarPor").addEventListener("change", applyFilters);

// Função para verificar se todas as imagens existem
function checkImages() {
  console.log("Verificando imagens dos veículos...");
  inventory.forEach(vehicle => {
    console.log(`Veículo ${vehicle.id}: ${vehicle.titulo}`);
    console.log(`  Imagem principal: ${vehicle.imagem}`);
    if (vehicle.imagens) {
      vehicle.imagens.forEach((img, idx) => {
        console.log(`  Imagem ${idx + 1}: ${img}`);
      });
    }
  });
}

// Inicial
renderList(inventory);

// Debug: verificar imagens (remover em produção)
checkImages();


// Sistema de fotos dos veículos
let currentPhotos = [];
let currentPhotoIndex = 0;

function openPhotosModal(vehicleId) {
  const vehicle = inventory.find(item => item.id === vehicleId);
  if (!vehicle) return;
  
  currentPhotos = vehicle.imagens || [vehicle.imagem];
  currentPhotoIndex = 0;
  
  const modal = document.getElementById('photosModal');
  const title = document.getElementById('photosModalTitle');
  
  title.textContent = `Fotos: ${vehicle.titulo}`;
  modal.setAttribute('aria-hidden', 'false');
  
  renderPhotos();
}

function closePhotosModal() {
  const modal = document.getElementById('photosModal');
  modal.setAttribute('aria-hidden', 'true');
}

function renderPhotos() {
  const mainPhoto = document.getElementById('mainPhoto');
  const thumbnails = document.getElementById('photosThumbnails');
  const counter = document.getElementById('photoCounter');
  
  if (currentPhotos.length === 0) return;
  
  // Atualizar foto principal
  mainPhoto.src = currentPhotos[currentPhotoIndex];
  mainPhoto.alt = `Foto ${currentPhotoIndex + 1} do veículo`;
  
  // Atualizar contador
  counter.textContent = `${currentPhotoIndex + 1} / ${currentPhotos.length}`;
  
  // Atualizar miniaturas
  thumbnails.innerHTML = '';
  currentPhotos.forEach((photo, index) => {
    const thumb = document.createElement('img');
    thumb.src = photo;
    thumb.alt = `Miniatura ${index + 1}`;
    thumb.className = index === currentPhotoIndex ? 'thumbnail active' : 'thumbnail';
    thumb.onclick = () => {
      currentPhotoIndex = index;
      renderPhotos();
    };
    thumbnails.appendChild(thumb);
  });
  
  // Atualizar botões de navegação
  const prevBtn = document.querySelector('.photo-nav--prev');
  const nextBtn = document.querySelector('.photo-nav--next');
  
  prevBtn.style.display = currentPhotos.length > 1 ? 'block' : 'none';
  nextBtn.style.display = currentPhotos.length > 1 ? 'block' : 'none';
}

function previousPhoto() {
  if (currentPhotos.length <= 1) return;
  currentPhotoIndex = (currentPhotoIndex - 1 + currentPhotos.length) % currentPhotos.length;
  renderPhotos();
}

function nextPhoto() {
  if (currentPhotos.length <= 1) return;
  currentPhotoIndex = (currentPhotoIndex + 1) % currentPhotos.length;
  renderPhotos();
}

// Navegação por teclado
document.addEventListener('keydown', function(e) {
  const modal = document.getElementById('photosModal');
  if (modal.getAttribute('aria-hidden') === 'false') {
    if (e.key === 'Escape') {
      closePhotosModal();
    } else if (e.key === 'ArrowLeft') {
      previousPhoto();
    } else if (e.key === 'ArrowRight') {
      nextPhoto();
    }
  }
});

// Sistema de Simulação
let currentSimulationVehicleId = null;

function openSimulationModal(vehicleId) {
  currentSimulationVehicleId = vehicleId;
  const modal = document.getElementById('simulationModal');
  modal.setAttribute('aria-hidden', 'false');
  
  // Limpar formulário
  document.getElementById('simulationCpf').value = '';
  document.getElementById('simulationBirthDate').value = '';
  document.querySelectorAll('input[name="hasCnh"]').forEach(radio => radio.checked = false);
}

function closeSimulationModal() {
  const modal = document.getElementById('simulationModal');
  modal.setAttribute('aria-hidden', 'true');
  currentSimulationVehicleId = null;
}

function submitSimulation(event) {
  event.preventDefault();
  
  if (!currentSimulationVehicleId) {
    alert('Erro: Veículo não identificado');
    return;
  }
  
  const vehicle = inventory.find(item => item.id === currentSimulationVehicleId);
  if (!vehicle) {
    alert('Erro: Veículo não encontrado');
    return;
  }
  
  const cpf = document.getElementById('simulationCpf').value;
  const birthDate = document.getElementById('simulationBirthDate').value;
  const hasCnh = document.querySelector('input[name="hasCnh"]:checked')?.value;
  
  if (!cpf || !birthDate || !hasCnh) {
    alert('Por favor, preencha todos os campos obrigatórios');
    return;
  }
  
  // Formatar CPF
  const formattedCpf = cpf.replace(/\D/g, '');
  if (formattedCpf.length !== 11) {
    alert('CPF deve ter 11 dígitos');
    return;
  }
  
  // Obtém o próximo vendedor para simulação de financiamento
  const vendorKey = leadDistribution.getNextVendor();
  const vendor = whatsappConfig[vendorKey];
  const whatsappNumber = vendor.number;
  const message = `🚗 *SOLICITAÇÃO DE SIMULAÇÃO DE FINANCIAMENTO*

📋 *Dados do Cliente:*
• CPF: ${cpf}
• Data de Nascimento: ${birthDate}
• Possui CNH: ${hasCnh === 'sim' ? 'Sim' : 'Não'}

🚙 *Veículo de Interesse:*
• Modelo: ${vehicle.titulo}
• Preço: ${formatPrice(vehicle.preco)}
• Ano/Modelo: ${vehicle.anoModelo}
• Quilometragem: ${formatKm(vehicle.km)}
• Local: ${vehicle.local}

Por favor, entre em contato para realizar a simulação de financiamento.

_Esta simulação foi solicitada através do site da Outlet Automóveis._`;
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
  // Fechar modal
  closeSimulationModal();
  
  // Log para controle (opcional - pode remover em produção)
  console.log(`Simulação de financiamento direcionada para: ${vendor.name} (${vendorKey})`);
  
  // Abrir WhatsApp (melhorado para mobile)
  try {
    // Tenta abrir diretamente no app do WhatsApp
    window.location.href = whatsappUrl;
  } catch (error) {
    // Fallback para window.open
    window.open(whatsappUrl, '_blank');
  }
  
  // Mostrar confirmação
  alert('Dados enviados com sucesso! Você será redirecionado para o WhatsApp.');
}

// Máscara para CPF
document.addEventListener('DOMContentLoaded', function() {
  const cpfInput = document.getElementById('simulationCpf');
  if (cpfInput) {
    cpfInput.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      e.target.value = value;
    });
  }
});


