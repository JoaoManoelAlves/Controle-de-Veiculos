# 🚗 Controle de Veículos e Manutenções: API REST

API REST para cadastro de usuários, controle dos seus veículos e registro do histórico de manutenções de cada automóvel. Desenvolvida para a disciplina de Desenvolvimento Backend com AdonisJS 6, TypeScript e PostgreSQL.

> **Status:** concluido.

## Funcionalidades

- Cadastro e listagem de usuários
- Login com token de acesso (Bearer) e logout
- Cadastro, listagem, consulta, edição e exclusão de veículos do usuário logado
- Registro de manutenções por veículo, com consulta, edição e exclusão
- Rotas de veículos e manutenções protegidas por autenticação, com isolamento por usuário

## Modelo de dados

- **Usuário (1 : N) Veículos:** um usuário pode cadastrar vários veículos, e cada veículo pertence a um único usuário.
- **Veículo (1 : N) Manutenções:** um veículo pode ter várias manutenções, e cada manutenção pertence a um único veículo.

Ao excluir um usuário ou um veículo, os registros dependentes são removidos em cascata.

## Tecnologias

- [AdonisJS 6](https://adonisjs.com/) (framework)
- Lucid ORM e migrations do AdonisJS
- [VineJS](https://vinejs.dev/) (validação)
- PostgreSQL
- TypeScript
- Docker e Docker Compose (opcional)

## Pré-requisitos

- Node.js 24 (a imagem Docker usa `node:24-alpine`)
- npm
- PostgreSQL 16 (ou use Docker para subir o banco)
- Docker e Docker Compose (opcional)

## Instalação

```bash
git clone https://github.com/JoaoManoelAlves/Controle-de-Veiculos.git
cd Controle-de-Veiculos
npm install
```

## Variáveis de ambiente

Copie o arquivo de exemplo:

```bash
cp .env.example .env
```

Gere a chave da aplicação (`APP_KEY`):

```bash
node ace generate:key
```

Variáveis definidas em `.env.example`:

| Variável | Descrição | Exemplo |
|---|---|---|
| `TZ` | Fuso horário | `UTC` |
| `PORT` | Porta da aplicação | `3333` |
| `HOST` | Host da aplicação | `localhost` |
| `NODE_ENV` | Ambiente (`development`, `production` ou `test`) | `development` |
| `LOG_LEVEL` | Nível de log | `info` |
| `APP_KEY` | Chave de criptografia (gerada com `node ace generate:key`) | |
| `APP_URL` | URL base da aplicação | `http://localhost:3333` |
| `SESSION_DRIVER` | Driver de sessão (`cookie`, `memory` ou `database`) | `cookie` |
| `CORS_ORIGIN` | Origens permitidas para acesso à API (opcional, separadas por vírgula) | `http://localhost:5173` |
| `DB_HOST` | Host do PostgreSQL | `127.0.0.1` |
| `DB_PORT` | Porta do PostgreSQL | `5432` |
| `DB_USER` | Usuário do banco | `postgres` |
| `DB_PASSWORD` | Senha do banco | |
| `DB_DATABASE` | Nome do banco | `controle_veiculos` |

Crie o banco de dados antes de rodar as migrations, com o nome definido em `DB_DATABASE`.

## Banco de dados

Execute as migrations:

```bash
node ace migration:run
```

## Execução

Modo desenvolvimento, com recarregamento automático:

```bash
npm run dev
```

Modo produção:

```bash
npm run build
npm start
```

A API ficará disponível em `http://localhost:3333`.

### Com Docker Compose

O `docker-compose.yml` sobe o PostgreSQL e a aplicação. Antes, preencha no `.env` as variáveis `APP_KEY`, `DB_USER`, `DB_PASSWORD` e `DB_DATABASE`.

```bash
docker compose up
```

As migrations são executadas automaticamente ao iniciar o container.

## Autenticação

As rotas de veículos e manutenções exigem o token retornado no login, enviado no cabeçalho:

```
Authorization: Bearer <token>
```

## Endpoints

| Método | Rota | Descrição | Autenticação |
|---|---|---|---|
| POST | `/register` | Cadastra um usuário | Não |
| POST | `/login` | Autentica e retorna o token | Não |
| DELETE | `/logout` | Invalida o token atual | Sim |
| GET | `/usuarios` | Lista usuários | Não |
| DELETE | `/usuarios/:id` | Remove um usuário | Não |
| GET | `/veiculos` | Lista os veículos do usuário logado | Sim |
| POST | `/veiculos` | Cadastra um veículo | Sim |
| GET | `/veiculos/:id` | Consulta um veículo | Sim |
| PUT/PATCH | `/veiculos/:id` | Atualiza um veículo | Sim |
| DELETE | `/veiculos/:id` | Remove um veículo | Sim |
| GET | `/manutencoes` | Lista as manutenções dos veículos do usuário | Sim |
| POST | `/veiculos/:veiculoId/manutencoes` | Registra uma manutenção | Sim |
| GET | `/veiculos/:veiculoId/manutencoes/:id` | Consulta uma manutenção | Sim |
| PUT | `/veiculos/:veiculoId/manutencoes/:id` | Atualiza a descrição de uma manutenção | Sim |
| DELETE | `/veiculos/:veiculoId/manutencoes/:id` | Remove uma manutenção | Sim |

## Uso

### 1. Cadastrar e autenticar

```bash
curl -X POST http://localhost:3333/register \
  -H "Content-Type: application/json" \
  -d '{"nome": "Maria", "email": "maria@exemplo.com", "password": "senha123"}'

curl -X POST http://localhost:3333/login \
  -H "Content-Type: application/json" \
  -d '{"email": "maria@exemplo.com", "password": "senha123"}'
```

### 2. Cadastrar um veículo

```bash
curl -X POST http://localhost:3333/veiculos \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{"placa": "ABC1D23", "modelo": "Onix", "marca": "Chevrolet", "ano": 2022}'
```

### 3. Registrar uma manutenção

```bash
curl -X POST http://localhost:3333/veiculos/1/manutencoes \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{"descricao": "Troca de óleo", "data": "2026-11-01", "custo": 250.00}'
```

## Estrutura de pastas

```
app/
├── controllers/   # Lógica das rotas
├── models/        # Models do Lucid (User, Veiculo, Manutencao)
├── validators/    # Regras de validação (VineJS)
├── transformers/  # Formatação da resposta de usuários
├── middleware/    # Autenticação e demais middlewares
database/
├── migrations/    # Criação das tabelas
start/
├── routes.ts      # Definição das rotas
├── env.ts         # Validação das variáveis de ambiente
config/            # Configurações da aplicação (banco, auth, sessão, CORS etc.)
scripts/           # Scripts de teste da API
tests/             # Testes automatizados
```

## Autor

João Manoel Alves ([GitHub](https://github.com/JoaoManoelAlves))