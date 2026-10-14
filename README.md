# GS Estética Avançada — Website Institucional Premium

Site institucional e editorial de alto padrão desenvolvido para **GS Estética Avançada**, associada à profissional **Gabrielly Sampaio** ([@gs_esteticaavancadaa](https://www.instagram.com/gs_esteticaavancadaa/)).

---

## 💎 Direção Visual e Conceito

- **Identidade Editorial de Luxo**: Inspirada em publicações de moda e dermatologia sofisticada, com tipografia serifada de alto impacto (*Cormorant Garamond*) aliada a uma sans-serif contemporânea e limpa (*Manrope*).
- **Paleta de Cores Refinada**:
  - Marfim: `#FAF7F3`
  - Branco Quente: `#FFFCF9`
  - Rosa Nude: `#EAD7D3`
  - Malva Suave: `#C6AAB9`
  - Dourado Discreto: `#B69A60` (utilizado exclusivamente em detalhes e acentos)
  - Grafite: `#292625`
- **Princípios UX/UI**: Espaçamento generoso, composição assimétrica, microinterações sutis, contraste em conformidade com acessibilidade, e total responsividade (mobile, tablet e desktop).

---

## 📁 Estrutura de Arquivos

```
clinica 5/
├── index.html                   # Página principal completa com todos os módulos
├── package.json                 # Configuração de dependências e scripts Vite
├── vite.config.ts               # Configuração do Vite
├── tsconfig.json                # Configuração do TypeScript
├── README.md                    # Documentação do projeto
├── public/
│   └── images/
│       └── README.md            # Guia de imagens recomendadas
└── src/
    ├── config/
    │   ├── business.ts          # Arquivo central TypeScript com dados do negócio
    │   └── business.js          # Exportação JS do config para consumo direto no browser
    ├── styles/
    │   └── main.css             # Estilos customizados, variáveis e componentes de luxo
    └── scripts/
        └── app.js               # Lógica interativa (FAQ, Lightbox, Modais, Tratamentos)
```

---

## 🚀 Como Executar Localmente

### Opção 1: Execução Imediata (Sem Instalação)
Basta abrir o arquivo `index.html` em qualquer navegador web moderno (Google Chrome, Edge, Safari, Firefox) ou clicar com o botão direito e escolher **"Open with Live Server"** no VS Code.

### Opção 2: Com Vite e Node.js
Se você tiver o Node.js instalado em sua máquina:
```bash
# 1. Instalar as dependências de desenvolvimento
npm install

# 2. Iniciar o servidor local de desenvolvimento
npm run dev

# 3. Compilar para produção (quando for publicar)
npm run build
```

---

## ⚙️ Configuração Centralizada (`src/config/business.ts`)

Todas as informações essenciais estão centralizadas em um único arquivo de configuração:
- `src/config/business.ts` (e refletido em `src/config/business.js`).

### Como Ativar o WhatsApp Oficial:
Quando o número estiver confirmado, abra o arquivo e atualize:
```typescript
whatsapp: {
  isPending: false, // Alterar para false
  phoneNumber: "5511999999999", // Inserir número com DDI e DDD
  formattedDisplay: "(11) 99999-9999",
  customMessage: "Olá! Gostaria de agendar uma avaliação na GS Estética Avançada."
}
```

### Como Ativar o Endereço Oficial:
```typescript
address: {
  isPending: false, // Alterar para false
  street: "Nome da Rua, 123 - Sala 405",
  neighborhood: "Bairro",
  city: "Sua Cidade",
  state: "SP",
  postalCode: "00000-000",
  googleMapsUrl: "https://maps.google.com/..."
}
```

---

## 📋 Checklist de Dados e Materiais Pendentes para Publicação

Conforme as diretrizes éticas e de integridade do projeto, os seguintes itens estão explicitamente identificados como pendentes e devem ser fornecidos antes do deploy oficial:

1. **Número Oficial do WhatsApp**: Para habilitar o redirecionamento direto nos botões de agendamento.
2. **Endereço Completo & Cidade**: Para atualização do rodapé, seção de contato e inclusão do link do Google Maps.
3. **Horários Oficiais de Atendimento**: Dias de semana e eventuais plantões aos sábados.
4. **Fotografias Oficiais em Alta Resolução**:
   - Retrato profissional da Gabrielly Sampaio.
   - Fotos da clínica (recepção, cabine de procedimentos, detalhes de acolhimento).
   - Fotos dos equipamentos próprios em funcionamento.
5. **Revisão Final da Nomenclatura dos Tratamentos**: Confirmação dos nomes comerciais e protocolos ofertados.
