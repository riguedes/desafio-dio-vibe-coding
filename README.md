# Desafio DIO: Construindo uma Aplicação de Finanças Pessoais com Vibe Coding

Esse repositório é para mostrar o projeto de um bootcamp de Inteligência Artificial fornecido pela DIO, para aprender a criar soluções com IA de forma criativa, guiando ferramentas de Vibe Coding, sendo o foco desenvolver um Aplicativo de Organização de Finanças Pessoais.

## Vibe Coding

É uma forma leve e criativa de desenvolver com IA, baseada em conversas naturais e bem estruturadas sem precisar de escrever um código de programação, descrevendo suas ideias de forma clara, com intenção e contexto.

## Desafio

Atualmente, as pessoas não conseguem manter um controle financeiro devido aos aplicativos exigirem muita entrada de dados manual além da criação de orçamentos ser visto como algo tedioso. Logo, é relevante uma solução que permita controlar as finanças por meio de uma conversa simples, com agentes de IA capazes de criar planos de economia personalizados e automatizados, por meio das ideias de Vibe Coding e MVP para desenvolver o conceito desse aplicativo.

## Etapas

### 1. Engenharia de Prompts
Este prompt contém a evolução de um PRD (Product Requirements Document) tendo como objetivo mostrar o uso de IA e práticas de Vibe Coding no desenvolvimento de soft skills e a construção de produtos digitais mais humanos e acessíveis.

``` txt
# Engenharia de Prompt utilizada:

Revise o seguinte PRD para que seja usado no Lovable com o intuito de desenvolver minhas soft skills em Vibe Coding.
Como resposta, quero o PRD revisado e sintetize de forma didática os conceitos de PRD e Vibe Coding e acrescente na
engenharia de requisitos a questão do Design Universal

````

PRD utilizado como exemplo e anexado ao prompt:

```txt
# PRD exemplo:
# Contexto
Quero criar um aplicativo de Organização de Finanças Pessoais que funcione por meio de conversas com o usuário.  
A ideia é facilitar o controle financeiro de forma simples e natural, sem formulários manuais ou planilhas complexas.

# Problema
Muitas pessoas desistem de controlar seus gastos porque os apps atuais exigem muita entrada manual e pouca personalização.  
Quero resolver isso com uma experiência de conversa e recomendações automáticas de economia.

# Público-Alvo
Pessoas que querem começar a organizar suas finanças de forma prática e sem complicação, principalmente iniciantes.

# Funcionalidades-Chave
1. Registrar gastos via chat em linguagem natural.  
2. Classificar automaticamente as transações.  
3. Definir e acompanhar metas financeiras.  
4. Receber dicas de economia do “Agente Financeiro”.  
5. Visualizar relatórios simples e personalizados.

# Entregável da IA
Gerar um plano de MVP com as principais telas, recursos necessários e um esboço de validação inicial.  
Usar tom educativo e linguagem acessível, em português.
```

PRD resultante do prompt construído:

```txt
# PRD Revisado – App de Organização de Finanças Pessoais

## 1. Contexto  
Criar um aplicativo de Organização de Finanças Pessoais que funcione por meio de conversas naturais com o usuário.  
O objetivo é tornar o controle financeiro simples, acessível e humano, eliminando a necessidade de formulários complexos ou planilhas.

## 2. Problema  
- Usuários desistem de controlar gastos porque os apps atuais exigem **entrada manual excessiva.  
- Falta personalização e aconselhamento prático.  
- A experiência é mais burocrática do que educativa.  
- O app deve resolver isso com uma interface conversacional e recomendações automáticas que se adaptem ao perfil do usuário.

## 3. Público-Alvo  
- Pessoas que estão iniciando no controle financeiro.  
- Usuários que buscam simplicidade e orientação prática sem precisar de conhecimento técnico.  
- Jovens adultos e profissionais que querem organizar gastos sem complicação.

## 4. Funcionalidades-Chave  
1. Registro de gastos via chat em linguagem natural.  
2. Classificação automática das transações.  
3. Definição e acompanhamento de metas financeiras.  
4. Agente Financeiro: dicas de economia personalizadas e educativas.  
5. Relatórios visuais simples (gráficos e resumos adaptados ao perfil do usuário).  

## 5. Requisitos de Design Universal  
Para garantir acessibilidade e inclusão:  
- Compatibilidade com leitores de tela.  
- Contraste adequado entre texto e fundo, seguindo normas WCAG.  
- Tamanho de fonte ajustável e opção de modo alto contraste.  
- Navegação por voz e comandos simplificados para pessoas com mobilidade reduzida.  
- Feedback multimodal (visual, sonoro e tátil) para confirmar ações.  
- Linguagem clara e acessível, evitando jargões financeiros complexos.  
- Fluxos flexíveis: permitir que o usuário escolha entre interação por texto ou voz.  
- Design responsivo para diferentes dispositivos.  
- Inclusão cultural e linguística: suporte a diferentes variações do português e possibilidade de expansão para outros idiomas.  

## 6. Entregável da IA (MVP)  
- Principais telas:  
  - Tela de chat (entrada de dados)  
  - Tela de metas (configuração e acompanhamento)  
  - Tela de relatórios (gráficos e insights)  
- Recursos necessários:  
  - Processamento de linguagem natural (NLP)  
  - Motor de classificação automática de gastos  
  - Módulo de geração de relatórios visuais  
  - Sistema de dicas inteligentes (Agente Financeiro)  
  - Implementação de acessibilidade (design universal)  
- Validação inicial:  
  - Testes com usuários iniciantes e pessoas com diferentes necessidades de acessibilidade  
  - Feedback sobre clareza da conversa e usabilidade inclusiva  
  - Ajustes na personalização das metas e relatórios
```

### 2. Plano MVP
Link do Projeto: https://paycontrol-official.lovable.app

Siga as etapas:

```sh
# Etapa 1: Clone o repositório.
git clone <YOUR_GIT_URL>

# Etapa 2: Navegue pelo diretório do projeto.
cd <YOUR_PROJECT_NAME>

# Etapa 3: Instale as dependências do projeto.
npm i

# Etapa 4: Utilize o comando.
npm run dev
```

Tecnologias utilizadas no projeto:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
