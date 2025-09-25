# 🚀 Guia de Deploy - Outlet Automóveis

## 📋 Pré-requisitos

- Domínio: `outletautomoveisbm.com.br`
- Hospedagem web (recomendado: Hostinger, GoDaddy, ou similar)
- Acesso FTP/SFTP ou painel de controle da hospedagem

## 📁 Arquivos para Upload

Faça upload dos seguintes arquivos para a pasta `public_html` ou `www` do seu servidor:

```
outlet-automoveis/
├── index.html          ✅ Página principal
├── styles.css          ✅ Estilos CSS
├── script.js           ✅ Funcionalidades JavaScript
├── robots.txt          ✅ Para SEO
├── sitemap.xml         ✅ Mapa do site
├── .htaccess           ✅ Configurações do servidor
├── fotos/              ✅ Pasta com todas as imagens
│   ├── cb300.jpeg
│   ├── city(1).jpg
│   ├── duster(1).jpg
│   └── ... (todas as imagens)
└── DEPLOY.md           ❌ Não precisa fazer upload
```

## 🔧 Configurações do Servidor

### 1. Configuração de DNS
- Aponte o domínio `outletautomoveisbm.com.br` para o servidor de hospedagem
- Configure os registros DNS conforme instruções da sua hospedagem

### 2. Certificado SSL
- Ative o certificado SSL (HTTPS) no painel da hospedagem
- O arquivo `.htaccess` já está configurado para redirecionar HTTP para HTTPS

### 3. Configurações de Cache
- O arquivo `.htaccess` já inclui configurações de cache e compressão
- Isso melhorará a velocidade de carregamento do site

## 📱 Testes Pós-Deploy

Após fazer o upload, teste:

1. **Acesso ao site**: `https://outletautomoveisbm.com.br`
2. **Redirecionamento HTTPS**: `http://outletautomoveisbm.com.br` → `https://outletautomoveisbm.com.br`
3. **Funcionalidades**:
   - ✅ Visualização dos veículos
   - ✅ Filtros funcionando
   - ✅ Busca funcionando
   - ✅ Galeria de fotos
   - ✅ Botões do WhatsApp
   - ✅ Simulação de financiamento
   - ✅ Adicionar veículos
4. **Responsividade**: Teste em desktop, tablet e mobile
5. **SEO**: Verifique se o `robots.txt` e `sitemap.xml` estão acessíveis

## 🔍 Verificação de SEO

### Google Search Console
1. Acesse [Google Search Console](https://search.google.com/search-console)
2. Adicione a propriedade `https://outletautomoveisbm.com.br`
3. Verifique a propriedade (recomendado: método HTML)
4. Envie o sitemap: `https://outletautomoveisbm.com.br/sitemap.xml`

### Google Analytics (Opcional)
Para acompanhar visitantes, adicione o código do Google Analytics no `<head>` do `index.html`.

## 📞 Informações de Contato no Site

O site já está configurado com:
- **WhatsApp**: (24) 99219-5829
- **Endereço**: Av. Argemiro de Paula Coutinho, 310 - Centro, Barra Mansa - RJ
- **Loja**: Outlet Automóveis

## 🛠️ Manutenção

### Adicionar Novos Veículos
- Use o botão "+ Adicionar Veículo" no site
- Os dados são salvos no LocalStorage do navegador
- Para persistência permanente, considere implementar um backend

### Atualizar Informações
- Edite diretamente o arquivo `script.js` para alterar dados dos veículos
- Edite `index.html` para alterar informações de contato
- Faça upload dos arquivos modificados

## 🚨 Troubleshooting

### Site não carrega
- Verifique se todos os arquivos foram enviados
- Confirme se o domínio está apontando corretamente
- Verifique se o certificado SSL está ativo

### Imagens não aparecem
- Confirme se a pasta `fotos/` foi enviada completamente
- Verifique as permissões dos arquivos (644 para arquivos, 755 para pastas)

### WhatsApp não funciona
- Verifique se o número está correto no `script.js`
- Teste em diferentes dispositivos

## 📈 Otimizações Futuras

1. **Backend**: Implementar sistema de gerenciamento de veículos
2. **Banco de Dados**: Migrar do LocalStorage para banco de dados
3. **Analytics**: Adicionar Google Analytics
4. **SEO**: Implementar mais páginas (sobre, contato, etc.)
5. **Performance**: Otimizar imagens (WebP, lazy loading)

## 🎯 Próximos Passos

1. ✅ Fazer upload dos arquivos
2. ✅ Configurar DNS
3. ✅ Ativar SSL
4. ✅ Testar funcionalidades
5. ✅ Configurar Google Search Console
6. ✅ Monitorar performance

---

**Sucesso!** 🎉 Seu site estará online em `https://outletautomoveisbm.com.br`
