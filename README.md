
# Manager — Frontend

Frontend do sistema de gerenciamento para estúdio de tatuagem, desenvolvido em **React + TypeScript** com **Vite**.

## 🎯 Motivação do Projeto

Esse projeto nasceu com dois principais objetivos:

1. **Estudo de desenvolvimento fullstack de ponta a ponta**, praticando desde a modelagem do banco de dados até a criação do frontend e deploy completo em produção.  
2. **Resolver uma necessidade real:** desenvolver um sistema para que minha esposa pudesse se organizar melhor na gestão dos atendimentos no estúdio de tatuagem, centralizando informações de clientes, pedidos, pagamentos e agendamentos.

Ao longo do desenvolvimento, aprendi e pratiquei:

- Modelagem de banco de dados usando **PostgreSQL** com **Prisma ORM**.  
- Deploy completo, incluindo configuração de ambientes, hospedagem do backend, frontend e banco de dados na nuvem.  
- Implementação de autenticação segura via **Google OAuth2**, com sessões persistentes usando cookies httpOnly.  

Além deste frontend, também desenvolvi a API backend utilizando **NestJS**, que está disponível no repositório: [Manager API (NestJS)](https://github.com/lucasvitalmelo/manager-server)


---

## 🛠️ Tecnologias

- [Vite](https://vitejs.dev/) — Bundler rápido
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) — Estilização
- [React Query (TanStack Query)](https://tanstack.com/query/latest) — Gerenciamento de estado assíncrono
- [Shadcn UI](https://ui.shadcn.com/) — Componentes UI acessíveis e bonitos
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) — Validação de formulários
- [React Router DOM](https://reactrouter.com/) — Roteamento SPA
- [Axios](https://axios-http.com/) — Requisições HTTP

---

## 🚩 Funcionalidades

- Login via Google OAuth2
- Gerenciamento de sessão com cookies httpOnly
-  Gerenciamento de clientes
- Gerenciamento de pedidos
- Registro de pagamentos
- Gestão de tags
- Tipos de tatuagem
- Interface leve, responsiva e acessível

---

## 📦 Instalação

```bash
# Crie seu fork 
https://github.com/lucasvitalmelo/manager-server

# Clone o repositório
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo

# Instale as dependências
npm install
```

---

## 🗒️ Variáveis de ambiente

Crie um arquivo `.env` com o seguinte conteúdo:

```env
VITE_API_SERVER=http://localhost:3000/
```

- **`VITE_API_SERVER`** → URL da API NestJS (backend)

---

## 🔨 Rodando o projeto

```bash
# Ambiente de desenvolvimento
npm run dev
```

Acesse:  
👉 `http://localhost:5173`

---

## 🗂️ Estrutura de pastas

```
src/
├── components/          # Componentes reutilizáveis
├── hooks/               # Hooks customizados (useAuth, useForm, etc.)
├── pages/               # Páginas da aplicação (rotas)
├── services/            # Axios e configs de API
├── routes/              # Definição de rotas protegidas e públicas
├── context/             # Contextos globais
├── utils/               # Funções utilitárias
├── types/               # Tipagens globais
├── settings/            # Algumas configs do projeto
├── router/              # Configuração das rotas
├── providers.tsx        # Importaçãos dos providers
└── App.tsx              # App principal
```

---

## 🔥 Scripts disponíveis

| Comando           | Descrição                          |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Inicia o ambiente de desenvolvimento |
| `npm run build`   | Cria a build de produção           |
| `npm run preview` | Visualiza a build localmente       |
| `npm run lint`    | (Se configurado) Rodar linter      |

---

## 🔐 Autenticação

- Login via Google OAuth.
- Sessão gerenciada via cookies httpOnly pela API.
- Rotas protegidas usando um hook de autenticação (`useAuth`) combinado com `ProtectedRoute`.

---

## 🌟 Telas principais

- **Sign In** → Login com Google
- **Orders** → Gerenciamento de pedidos (com cálculo de valor e pagamentos)
- **Settings** → Adição de novos clientes, tags e Tipos de Tattoo

---

## 🏗️ Stack completa

| Camada | Tecnologia                       |
|--------|-----------------------------------|
| Frontend | React + Vite + Tailwind + Shadcn UI |
| Backend  | NestJS + Prisma + PostgreSQL    |
| Autenticação | Google OAuth + JWT + Cookies |
| Deploy | Railway        |

---


## 🔮 Próximos passos

- 🔗 **Automatização de agendamentos:** Integração com **Google Calendar** usando **n8n**, para refletir automaticamente os agendamentos feitos no sistema na agenda do Google.  
- 📱 Melhorias na interface para tornar o uso mobile mais fluido.  
- ☁️ Funcionalidade para upload de imagens de referência das tatuagens.  
- 🔔 Implementar notificações e lembretes automáticos para clientes via WhatsApp ou e-mail.

---

## 👨‍💻 Autor

- Desenvolvido por [Lucas Vital de Melo](https://github.com/lucasvitalmelo)

---

## 🏆 Licença

MIT — Sinta-se livre para usar e modificar.
