# 🚗 Controle de Veículos e Manutenções — API REST

Status do Projeto: Em Desenvolvimento 🛠️

API REST desenvolvida para a disciplina de Desenvolvimento Backend, com o objetivo de gerenciar o cadastro de usuários, o controle de seus respectivos veículos e o histórico de manutenções de cada automóvel. A aplicação foi construída utilizando o ecossistema robusto do AdonisJS, garantindo uma arquitetura MVC clara, persistência segura com PostgreSQL e rotas protegidas por autenticação.

# Arquitetura e relacionamentos
O banco de dados segue a estrutura relacional abaixo, mapeada via Lucid ORM:

- Usuário (1 : N) Veículos: Um usuário pode cadastrar vários veículos, mas cada veículo pertence a apenas um usuário.

- Veículo (1 : N) Manutenções: Um veículo pode possuir um histórico com múltiplas manutenções, enquanto cada registro de manutenção é exclusivo de um veículo.

# Tecnologias Utilizadas
- Framework Principal: AdonisJS

- Mapeamento Objeto-Relacional: Lucid ORM

- Banco de Dados: PostgreSQL

- Gerenciamento de Banco: Migrations nativas do AdonisJS

- Linguagem: TypeScript / JavaScript

# APIs - Em construção