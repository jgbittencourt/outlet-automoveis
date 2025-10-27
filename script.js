
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
      const vendor = this.counter % 2 === 1 ? 'vendedor1' : 'vendedor2';
      console.log(`Lead #${this.counter} → ${vendor} (${whatsappConfig[vendor].name})`);
      return vendor;
    } else if (this.method === 'aleatorio') {
      const vendor = Math.random() < 0.5 ? 'vendedor1' : 'vendedor2';
      console.log(`Lead aleatório → ${vendor} (${whatsappConfig[vendor].name})`);
      return vendor;
    }
    // Fallback para vendedor1
    console.log(`Lead fallback → vendedor1 (${whatsappConfig.vendedor1.name})`);
    return 'vendedor1';
  },
  
  // Função para definir método de distribuição
  setMethod(newMethod) {
    if (['alternado', 'aleatorio', 'manual'].includes(newMethod)) {
      this.method = newMethod;
      console.log(`Método de distribuição alterado para: ${newMethod}`);
    }
  },
  
  // Função para resetar o contador (útil para testes)
  resetCounter() {
    this.counter = 0;
    console.log('Contador de distribuição resetado');
  },
  
  // Função para obter estatísticas atuais
  getStats() {
    return {
      method: this.method,
      counter: this.counter,
      nextVendor: this.counter % 2 === 1 ? 'vendedor2' : 'vendedor1',
      vendedor1: whatsappConfig.vendedor1.name,
      vendedor2: whatsappConfig.vendedor2.name
    };
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
    id: 14,
    titulo: "Range Rover Evoque 2.0 Turbo AWD",
    preco: 89900,
    anoModelo: "2013/2013",
    km: 102,
    local: "Barra Mansa, RJ",
    loja: "Outlet Automóveis",
    imagem: "fotos/rangerrvoer1 (7).jpeg",
    imagens: [
      "fotos/rangerrvoer1 (1).jpeg",
      "fotos/rangerrvoer1 (2).jpeg",
      "fotos/rangerrvoer1 (3).jpeg",
      "fotos/rangerrvoer1 (4).jpeg",
      "fotos/rangerrvoer1 (5).jpeg",
      "fotos/rangerrvoer1 (6).jpeg",
      "fotos/rangerrvoer1 (7).jpeg",
      "fotos/rangerrvoer1 (8).jpeg",
      "fotos/rangerrvoer1 (9).jpeg",
      "fotos/rangerrvoer1 (10).jpeg",
      "fotos/rangerrvoer1 (11).jpeg"
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
    id: 24,
    titulo: "Renault Sandero Stepway",
    preco: 39900,
    anoModelo: "2013/2013",
    km: 120,
    local: "Barra Mansa, RJ",
    loja: "Outlet Automóveis",
    imagem: "fotos/renaulsandero (1).jpeg",
    imagens: [
      "fotos/renaulsandero (1).jpeg",
      "fotos/renaulsandero (2).jpeg",
      "fotos/renaulsandero (3).jpeg",
      "fotos/renaulsandero (4).jpeg",
      "fotos/renaulsandero (5).jpeg",
      "fotos/renaulsandero (6).jpeg",
      "fotos/renaulsandero (7).jpeg",
      "fotos/renaulsandero (8).jpeg",
      "fotos/renaulsandero (9).jpeg",
      "fotos/renaulsandero (10).jpeg"
    ]
  },
  {
    id: 26,
    titulo: "Hyundai I30 2.0 16v",
    preco: 41900,
    anoModelo: "2011/2011",
    km: 100,
    local: "Barra Mansa, RJ",
    loja: "Outlet Automóveis",
    imagem: "fotos/i (2).jpeg",
    imagens: [
      "fotos/i (1).jpeg",
      "fotos/i (2).jpeg",
      "fotos/i (3).jpeg",
      "fotos/i (4).jpeg",
      "fotos/i (5).jpeg",
      "fotos/i (6).jpeg",
      "fotos/i (7).jpeg",
      "fotos/i (8).jpeg",
      "fotos/i (9).jpeg"
    ]
  },
  {
    id: 27,
    titulo: "Fiat Punto Attractive Itália 1.4 GNV",
    preco: 35900,
    anoModelo: "2014/2014",
    km: 115,
    local: "Barra Mansa, RJ",
    loja: "Outlet Automóveis",
    imagem: "fotos/punto Ver (9).jpeg",
    imagens: [
      "fotos/punto Ver (1).jpeg",
      "fotos/punto Ver (2).jpeg",
      "fotos/punto Ver (3).jpeg",
      "fotos/punto Ver (4).jpeg",
      "fotos/punto Ver (5).jpeg",
      "fotos/punto Ver (6).jpeg",
      "fotos/punto Ver (7).jpeg",
      "fotos/punto Ver (8).jpeg",
      "fotos/punto Ver (9).jpeg",
      "fotos/punto Ver (10).jpeg"
    ]
  },
  {
    id: 28,
    titulo: "Fiat Idea Elx 1.4 Fire Flex",
    preco: 23900,
    anoModelo: "2007/2007",
    km: 100,
    local: "Barra Mansa, RJ",
    loja: "Outlet Automóveis",
    imagem: "fotos/idea (2).jpeg",
    imagens: [
      "fotos/idea (1).jpeg",
      "fotos/idea (2).jpeg",
      "fotos/idea (3).jpeg",
      "fotos/idea (4).jpeg",
      "fotos/idea (5).jpeg",
      "fotos/idea (6).jpeg",
      "fotos/idea (7).jpeg",
      "fotos/idea (8).jpeg",
      "fotos/idea (9).jpeg",
      "fotos/idea (10).jpeg"
    ]
  },
  {
    id: 29,
    titulo: "Ford Ka 1.0 Flex",
    preco: 22900,
    anoModelo: "2012/2012",
    km: 125,
    local: "Barra Mansa, RJ",
    loja: "Outlet Automóveis",
    imagem: "fotos/ford ka (12).jpeg",
    imagens: [
      "fotos/ford ka (1).jpeg",
      "fotos/ford ka (2).jpeg",
      "fotos/ford ka (3).jpeg",
      "fotos/ford ka (4).jpeg",
      "fotos/ford ka (5).jpeg",
      "fotos/ford ka (6).jpeg",
      "fotos/ford ka (7).jpeg",
      "fotos/ford ka (8).jpeg",
      "fotos/ford ka (9).jpeg",
      "fotos/ford ka (10).jpeg",
      "fotos/ford ka (11).jpeg",
      "fotos/ford ka (12).jpeg"
    ]
  },
  {
    id: 30,
    titulo: "Volkswagen Voyage 1.0 Flex",
    preco: 30900,
    anoModelo: "2012/2012",
    km: 118,
    local: "Barra Mansa, RJ",
    loja: "Outlet Automóveis",
    imagem: "fotos/voyage 12 (4).jpeg",
    imagens: [
      "fotos/voyage 12 (1).jpeg",
      "fotos/voyage 12 (2).jpeg",
      "fotos/voyage 12 (3).jpeg",
      "fotos/voyage 12 (4).jpeg",
      "fotos/voyage 12 (5).jpeg",
      "fotos/voyage 12 (6).jpeg",
      "fotos/voyage 12 (7).jpeg",
      "fotos/voyage 12 (8).jpeg",
      "fotos/voyage 12 (9).jpeg"
    ]
  },
  {
    id: 31,
    titulo: "Volkswagen Voyage Trendline 1.6 Flex",
    preco: 45900,
    anoModelo: "2018/2018",
    km: 95,
    local: "Barra Mansa, RJ",
    loja: "Outlet Automóveis",
    imagem: "fotos/voyvoy 12 (6).jpeg",
    imagens: [
      "fotos/voyvoy 12 (1).jpeg",
      "fotos/voyvoy 12 (2).jpeg",
      "fotos/voyvoy 12 (3).jpeg",
      "fotos/voyvoy 12 (4).jpeg",
      "fotos/voyvoy 12 (5).jpeg",
      "fotos/voyvoy 12 (6).jpeg",
      "fotos/voyvoy 12 (7).jpeg",
      "fotos/voyvoy 12 (8).jpeg",
      "fotos/voyvoy 12 (9).jpeg",
      "fotos/voyvoy 12 (10).jpeg"
    ]
  },
  {
    id: 33,
    titulo: "Fiat Grand Siena Essence 1.6 16v GNV",
    preco: 39900,
    anoModelo: "2016/2016",
    km: 100,
    local: "Barra Mansa, RJ",
    loja: "Outlet Automóveis",
    imagem: "fotos/g (9).jpeg",
    imagens: [
      "fotos/g (9).jpeg",
      "fotos/g (1).jpeg",
      "fotos/g (2).jpeg",
      "fotos/g (3).jpeg",
      "fotos/g (4).jpeg",
      "fotos/g (5).jpeg",
      "fotos/g (6).jpeg",
      "fotos/g (7).jpeg",
      "fotos/g (8).jpeg"
    ]
  },
  {
    id: 34,
    titulo: "Yamaha NMAX 160 Flex 2022",
    preco: 19900,
    anoModelo: "2022/2022",
    km: 100,
    local: "Barra Mansa, RJ",
    loja: "Outlet Automóveis",
    imagem: "fotos/moto b 1 (1).jpeg",
    imagens: [
      "fotos/moto b 1 (1).jpeg",
      "fotos/moto b 1 (2).jpeg",
      "fotos/moto b 1 (3).jpeg",
      "fotos/moto b 1 (4).jpeg",
      "fotos/moto b 1 (5).jpeg",
      "fotos/moto b 1 (6).jpeg"
    ]
  },
  {
    id: 35,
    titulo: "Honda CG FAN 160 2023",
    preco: 15900,
    anoModelo: "2023/2023",
    km: 100,
    local: "Barra Mansa, RJ",
    loja: "Outlet Automóveis",
    imagem: "fotos/cb160 (1).jpeg",
    imagens: [
      "fotos/cb160 (1).jpeg",
      "fotos/cb160 (2).jpeg",
      "fotos/cb160 (3).jpeg",
      "fotos/cb160 (4).jpeg",
      "fotos/cb160 (5).jpeg",
      "fotos/cb160 (6).jpeg",
      "fotos/cb160 (7).jpeg"
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
  console.log(`🧪 Testando distribuição de ${count} leads:`);
  const results = { vendedor1: 0, vendedor2: 0 };
  const sequence = [];
  
  for (let i = 0; i < count; i++) {
    const vendor = leadDistribution.getNextVendor();
    results[vendor]++;
    sequence.push(vendor);
  }
  
  console.log('📊 Resultados:', results);
  console.log('🔄 Sequência:', sequence);
  console.log('✅ Distribuição justa:', Math.abs(results.vendedor1 - results.vendedor2) <= 1);
  return results;
}

// Função para verificar o status atual da distribuição
function checkDistributionStatus() {
  const stats = leadDistribution.getStats();
  console.log('📈 Status da Distribuição:');
  console.log(`   Método: ${stats.method}`);
  console.log(`   Contador: ${stats.counter}`);
  console.log(`   Próximo vendedor: ${stats.nextVendor} (${stats[stats.nextVendor]})`);
  console.log(`   Vendedor 1: ${stats.vendedor1}`);
  console.log(`   Vendedor 2: ${stats.vendedor2}`);
  return stats;
}


// Sistema de Comparação
let comparisonList = [];

function toggleComparison(vehicleId) {
  const vehicle = inventory.find(item => item.id === vehicleId);
  if (!vehicle) return;
  
  const index = comparisonList.findIndex(item => item.id === vehicleId);
  if (index > -1) {
    comparisonList.splice(index, 1);
    showNotification('Removido da comparação', 'warning');
  } else {
    if (comparisonList.length >= 3) {
      showNotification('Máximo de 3 veículos para comparar', 'error');
      return;
    }
    comparisonList.push(vehicle);
    showNotification('Adicionado à comparação!', 'success');
  }
  
  updateComparisonBar();
  updateCompareButtons();
}

function updateComparisonBar() {
  const compareBar = document.getElementById('compareBar');
  const compareItemsList = document.getElementById('compareItemsList');
  
  if (comparisonList.length > 0) {
    compareBar.classList.add('show');
    compareItemsList.innerHTML = comparisonList.map(vehicle => 
      `<span class="compare-item">${vehicle.titulo}</span>`
    ).join('');
  } else {
    compareBar.classList.remove('show');
  }
}

function updateCompareButtons() {
  document.querySelectorAll('.compare-btn').forEach(btn => {
    const vehicleId = parseInt(btn.dataset.vehicleId);
    const isInComparison = comparisonList.some(item => item.id === vehicleId);
    if (isInComparison) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function clearComparison() {
  comparisonList = [];
  updateComparisonBar();
  updateCompareButtons();
  showNotification('Comparação limpa', 'warning');
}

function compareVehicles() {
  if (comparisonList.length < 2) {
    showNotification('Selecione pelo menos 2 veículos para comparar', 'error');
    return;
  }
  
  // Criar modal de comparação
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.setAttribute('aria-hidden', 'false');
  modal.innerHTML = `
    <div class="modal-backdrop" onclick="closeCompareModal()"></div>
    <div class="modal-content" style="max-width: 90vw; max-height: 90vh; overflow-y: auto;">
      <div class="modal-header">
        <h3>🔍 Comparação de Veículos</h3>
        <button class="modal-close" onclick="closeCompareModal()">&times;</button>
      </div>
      <div class="comparison-table">
        ${generateComparisonTable()}
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
}

function generateComparisonTable() {
  const features = ['titulo', 'preco', 'anoModelo', 'km', 'local'];
  const featureNames = ['Modelo', 'Preço', 'Ano', 'Quilometragem', 'Local'];
  
  let table = '<table style="width: 100%; border-collapse: collapse; margin-top: 20px;">';
  
  // Cabeçalho
  table += '<thead><tr><th style="padding: 12px; border: 1px solid #e2e8f0; background: var(--brand-light);">Característica</th>';
  comparisonList.forEach(vehicle => {
    table += `<th style="padding: 12px; border: 1px solid #e2e8f0; background: var(--brand-light);">${vehicle.titulo}</th>`;
  });
  table += '</tr></thead><tbody>';
  
  // Linhas de características
  features.forEach((feature, index) => {
    table += `<tr><td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: 600;">${featureNames[index]}</td>`;
    comparisonList.forEach(vehicle => {
      let value = vehicle[feature];
      if (feature === 'preco') value = formatPrice(value);
      if (feature === 'km') value = formatKm(value);
      table += `<td style="padding: 12px; border: 1px solid #e2e8f0;">${value}</td>`;
    });
    table += '</tr>';
  });
  
  table += '</tbody></table>';
  return table;
}

function closeCompareModal() {
  const modal = document.querySelector('.modal');
  if (modal) modal.remove();
}

// Sistema de Notificações
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => notification.classList.add('show'), 100);
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Sistema de Contadores
function generateViewCount() {
  return Math.floor(Math.random() * 500) + 200; // 200-700 visualizações
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
  
  // Determinar badges e características especiais
  const isSpecialOffer = item.preco < 40000;
  const isFeatured = item.km < 120000 && item.preco < 60000;
  const isNew = extractAno(item.anoModelo) >= 2020;
  const isLowKm = item.km < 80000;
  const isUrgent = item.preco < 35000;
  
  // Determinar qual badge mostrar (prioridade)
  let badge = '';
  if (isUrgent) {
    badge = '<div class="sale-badge animate-pulse">🔥 Urgente</div>';
  } else if (isSpecialOffer) {
    badge = '<div class="sale-badge">💰 Oferta</div>';
  } else if (isNew) {
    badge = '<div class="new-badge">✨ Novo</div>';
  } else if (isFeatured) {
    badge = '<div class="featured-badge">⭐ Destaque</div>';
  }
  
  // Texto de urgência
  let urgencyText = '';
  if (isUrgent) {
    urgencyText = '<div class="urgency-text">⚡ Últimas unidades disponíveis!</div>';
  } else if (isSpecialOffer) {
    urgencyText = '<div class="urgency-text">⚡ Oferta por tempo limitado!</div>';
  } else if (isLowKm) {
    urgencyText = '<div class="urgency-text">🛣️ Baixa quilometragem!</div>';
  }
  
  el.innerHTML = `
    <div class="card__media">
      <img src="${item.imagem}" alt="${item.titulo}" onerror="this.src=''; this.alt='Imagem não encontrada';" onclick="openPhotosModal(${item.id})" style="cursor: pointer;">
      ${badge}
      <button class="compare-btn" onclick="toggleComparison(${item.id})" data-vehicle-id="${item.id}">⚖️</button>
      <div class="view-count">👁️ ${generateViewCount()}</div>
      <div class="price-drop">💰 Oferta Especial!</div>
    </div>
    <div class="card__body">
      <h3 class="card__title">${item.titulo}</h3>
      <div class="price">${formatPrice(item.preco)}</div>
      ${urgencyText}
      <div class="card__meta">
        <span>${item.anoModelo}</span>
        <span>•</span>
        <span>${formatKm(item.km)}</span>
        <span>•</span>
        <span>${item.local}</span>
      </div>
      <div class="card__actions">
        <button class="button" onclick="openWhatsApp(${item.id})"><img src="fotos/icons8-whatsapp-48.png" alt="WhatsApp" style="width: 20px; height: 20px; margin-right: 8px; vertical-align: middle;"> WhatsApp</button>
        <button class="btn-secondary" onclick="openPhotosModal(${item.id})">📸 Fotos</button>
        <button class="btn-secondary" onclick="openSimulationModal(${item.id})">💰 Simular</button>
      </div>
    </div>
  `;
  return el;
}

function renderList(list) {
  const grid = document.getElementById("grid");
  
  // Mostrar loading
  grid.innerHTML = '<div class="loading">Carregando veículos...</div>';
  
  // Simular delay para mostrar o loading (opcional)
  setTimeout(() => {
    grid.innerHTML = "";
    
    // Adicionar cards com animação escalonada
    list.forEach((item, index) => {
      const card = createCard(item);
      card.style.animationDelay = `${index * 0.1}s`;
      card.classList.add('fade-in');
      grid.appendChild(card);
    });
    
    // Atualizar botões de comparação
    updateCompareButtons();
    
    document.getElementById("totalResultados").textContent = `${list.length} ofertas`;
  }, 300);
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

// Funções de debug para distribuição (disponíveis no console)
window.testDistribution = testDistribution;
window.checkDistributionStatus = checkDistributionStatus;
window.resetDistribution = () => leadDistribution.resetCounter();
window.setDistributionMethod = (method) => leadDistribution.setMethod(method);

// Log inicial do status
console.log('🚀 Sistema de distribuição de leads inicializado!');
console.log('💡 Use testDistribution(10) para testar a alternância');
console.log('💡 Use checkDistributionStatus() para ver o status atual');
console.log('💡 Use resetDistribution() para resetar o contador');


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


