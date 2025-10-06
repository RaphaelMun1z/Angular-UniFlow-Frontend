# 🚀 Uniflow

### Uma plataforma de gestão acadêmica moderna e integrada.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Angular](https://img.shields.io/badge/Angular-v19-DD0031?logo=angular)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-v3-6DB33F?logo=spring)
![Java](https://img.shields.io/badge/Java-21-blue?logo=openjdk)

Uniflow é uma plataforma SaaS (Software as a Service) projetada para simplificar a gestão de atividades, a colaboração em grupos e o acompanhamento de desempenho no ambiente acadêmico. A solução atende às necessidades de **Estudantes**, **Professores** e **Administradores** com interfaces e funcionalidades específicas para cada perfil.



---

## 📋 Índice

* [Sobre o Projeto](#-sobre-o-projeto)
* [Principais Funcionalidades](#-principais-funcionalidades)
* [Tecnologias Utilizadas](#-tecnologias-utilizadas)
* [Começando (Guia de Instalação)](#-começando)
* [Documentação da API](#-documentação-da-api)
* [Licença](#-licença)

---

## 📖 Sobre o Projeto

A plataforma Uniflow foi desenvolvida para centralizar o fluxo de trabalho acadêmico. Para **estudantes**, ela oferece um dashboard para acompanhar prazos, entregar atividades e colaborar em grupos de estudo. Para **professores**, fornece ferramentas para criar e gerenciar turmas, distribuir e avaliar atividades, e acompanhar o progresso dos alunos. Para **administradores**, oferece um painel de controle completo para gerenciar usuários, planos de assinatura e a saúde geral do sistema.

---

## ✨ Principais Funcionalidades

### Para Alunos
* **Dashboard Pessoal**: Visão geral de atividades pendentes, prazos próximos e grupos.
* **Gerenciamento de Grupos**: Capacidade de criar grupos de estudo ou entrar em turmas com um código de convite.
* **Mural de Atividades**: Linha do tempo com todas as tarefas e seus status.
* **Entrega de Atividades**: Interface para submeter respostas e anexos.
* **Gerenciamento de Perfil**: Edição de dados pessoais, consulta de histórico de pagamentos e assinaturas.

### Para Professores
* **Dashboard Gerencial**: Métricas sobre alunos ativos, entregas para corrigir e engajamento das turmas.
* **Criação e Gestão de Turmas**: Ferramentas para criar turmas, gerar códigos de convite e gerenciar membros (promover a monitor, etc.).
* **Criação de Atividades**: Criação de atividades avaliativas, com opção de reutilizar templates.
* **Painel de Avaliação**: Interface com abas para filtrar entregas por status e atribuir notas e feedbacks.

### Para Administradores
* **Painel de Controle Central**: Layout com sidebar e visão geral de métricas do sistema (faturamento, novos usuários, etc.).
* **Gerenciamento de Usuários**: Tabela completa com todos os usuários, com filtros e menu de ações.
* **Gerenciamento de Planos e Papéis**: Interfaces para criar e editar os planos de assinatura e os papéis de acesso do sistema.
* **Segurança Granular**: Controle de acesso baseado em Papéis (`Roles`) e Permissões (`Authorities`).

---

## 💻 Tecnologias Utilizadas

O projeto é dividido em um backend robusto e um frontend moderno e reativo.

### Backend (API RESTful)
* **Java 21** e **Spring Boot 3**
* **Spring Security 6** com autenticação via **JWT (Access Token + Refresh Token)**
* **Spring Data JPA** e **Hibernate** para persistência de dados
* **PostgreSQL** como banco de dados relacional
* **Maven** para gerenciamento de dependências
* **Lombok** para redução de código boilerplate
* **OpenAPI 3 (Swagger)** para documentação da API

### Frontend
* **Angular 19** com componentes **Standalone**
* **TypeScript**
* **Tailwind CSS** para estilização utility-first
* **SCSS** para organização de estilos globais e de componentes
* **jwt-decode** para manipulação de tokens no lado do cliente

---

## 🚀 Começando

Siga os passos abaixo para configurar e executar o projeto localmente.

### Pré-requisitos
* **Java JDK 21**
* **Maven 3.8+** ou **Gradle 8+**
* **Node.js 20+** e **npm**
* **Angular CLI v19** (`npm install -g @angular/cli`)
* **PostgreSQL** ou **Docker** (para rodar um contêiner do banco)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/uniflow.git](https://github.com/seu-usuario/uniflow.git)
    ```

2.  **Execute o Backend:**
    * Navegue até a pasta do backend.
    * Configure seu arquivo `application.properties` (ou `.yml`) com os dados de conexão do seu banco PostgreSQL e a `secret-key` do JWT.
    * Execute o comando:
      ```bash
      # Usando Maven
      mvn spring-boot:run
      ```
    * O servidor backend estará rodando em `http://localhost:8080`.

3.  **Execute o Frontend:**
    * Em um novo terminal, navegue até a pasta do frontend.
    * Instale as dependências:
      ```bash
      npm install
      ```
    * Inicie o servidor de desenvolvimento:
      ```bash
      ng serve
      ```
    * Abra seu navegador e acesse `http://localhost:4200/`.

---

## 📄 Documentação da API

A API do backend é documentada com Swagger/OpenAPI 3. Com o servidor backend rodando, você pode acessar a documentação interativa no seguinte endereço:

[http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

---

## ⚖️ Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.