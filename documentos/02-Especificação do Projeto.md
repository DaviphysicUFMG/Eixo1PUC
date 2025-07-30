# Especificações do Projeto

## Perfis de Usuários
| **Perfil**                              | **Descrição**                                                                                                                                                            | **Necessidades**                                                                                                                                                                                |
|-----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Perfil 01: Consumidor Geral**          | • Pessoa comum, de qualquer idade ou origem, que deseja entender melhor os produtos que compra e consome regularmente. <br> • Pode estar buscando melhorar sua saúde e bem-estar, ou está preocupada com os efeitos de certos ingredientes. | • Acesso a informações claras e de fácil compreensão sobre os ingredientes e composições químicas presentes nos rótulos dos produtos. <br> • Ferramentas que permitam identificar rapidamente os possíveis riscos à saúde. <br> • Orientação sobre como escolher produtos mais seguros e adequados às suas necessidades de saúde. |
| **Perfil 02: Pessoas com Condições de Saúde Específicas** | • Pessoas que têm alergias a certos ingredientes e precisam evitar produtos que possam causar reações adversas.                                                             | • Encontrar os ingredientes que causam alergia de forma clara e objetiva.                                                                                                                        |
| **Perfil 03: Pais e Responsáveis por Crianças** | • Adultos que compram produtos para seus filhos e querem garantir que estão oferecendo itens seguros e saudáveis, preocupados com os efeitos de substâncias potencialmente nocivas em produtos de uso diário. | • Informações detalhadas sobre ingredientes que possam ser prejudiciais para crianças. <br> • Alerta automático sobre ingredientes a serem evitados em produtos infantis. <br> • Recomendações de produtos alternativos mais seguros. |




## Personas
# Personas - Rótulo Fácil

## Persona 1: João Silva (Consumidor Geral)
**Nome**: João Silva  
**Idade**: 35 anos  
**Ocupação**: Gerente de vendas  
**Cenário de Vida**: João vive em uma grande cidade e trabalha como gerente de vendas. Ele se preocupa com a aparência e uso de produtos de cuidados pessoais, mas muitas vezes tem dificuldade em entender os rótulos dos cosméticos, especialmente em relação a ingredientes que podem afetar sua pele

**Como o *Rótulo Fácil* o ajuda**: O *Rotulo Fácil* oferece uma plataforma que simplifica a leitura dos rótulos de produtos, destacando ingredientes prejudiciais. João pode acessar a ferramenta em seu smartphone enquanto faz compras, tornando mais rápido e prático tomar decisões informadas sobre os cosmeticos que compra.

## Persona 2 : Ana Martins (Pessoa com Condições de Saúde Específicas)
**Nome**: Ana Martins   
**Idade**: 42 anos  
**Ocupação**: Professora de Educação Física  
**Cenário de Vida**: Ana é uma mulher ativa e preocupada com sua saúde e bem-estar. A prática regular de atividades físicas faz parte da sua rotina e exige cuidados especiais com a pele. No entanto, Ana possui uma pele sensível e propensa a alergias, o que dificulta a escolha de produtos de beleza adequados. A grande variedade de produtos disponíveis no mercado, aliada à complexidade dos rótulos, torna a busca por cosméticos seguros e eficazes um verdadeiro desafio para ela.

**Como o *Rótulo Fácil* a ajuda**:
O *Rótulo Fácil* pode fornecer informações detalhadas sobre os ingredientes de cada produto, facilitando a identificação de produtos seguros para pessoas com peles sensíveis e alergias. A dificuldade em encontrar produtos que atendam a todos esses critérios a deixa sobrecarregada e ansiosa em relação à saúde da pele do seu filho.



## Persona 3: Mariana Silva (Mãe de Criança)
**Nome**: Mariana Silva  
**Idade**: 30 anos  
**Ocupação**: Enfermeira  
**Cenário de Vida**: Mariana é mãe de um menino de 5 anos, preocupada com a saúde e o bem-estar do filho, ela busca ativamente por produtos de higiene e beleza, seguros e naturais, livres de químicos nocivos. Além disso, Mariana tem um forte senso de responsabilidade ambiental e procura por marcas que utilizem embalagens sustentáveis e ingredientes provenientes da agricultura orgânica. 

**Como o *Rótulo Fácil* a ajuda**:
O *Rótulo Fácil* pode fornecer informações claras e detalhadas sobre os componentes de cada produto, permitindo que Mariana identifique facilmente produtos livres de químicos nocivos e com ingredientes naturais e orgânicos.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Consumidor         |Entender Rotulós de maneira mais consistente | Fazer escolhas mais seguras para minha saúde |
| Pessoa com condição de saúde específicas    | Informações claras e precisas sobre o rótulo | Evitar reações adversas |
| Pais e Responsáveis por Crianças | Entender de maneira clara e consistente o rótulos e os produtos são seguros para crianças | Garantir a segurança de crianças em relação a componentes. Evitar produtos com substâncias potencialmente nocivas e encontrar alternativas mais saudáveis. |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

#### Requisitos Funcionais

| ID  | Descrição                                                     | Prioridade |
|------|---------------------------------------------------------------|------------|
| RF-01 | O site deve permitir ao usuário cadastrar uma conta.          | Alta       |
| RF-02 | O site deve permitir ao usuário fazer o login da sua conta.   | Alta       |
| RF-03 | O site deve permitir ao usuário fazer o cadastro do produto.  | Alta      |
| RF-04 | O site deve permitir buscas por produtos específicos.         | Média      |
| RF-05 | O site deve permitir ao usuário visualizar as informações sobre o produto. | Alta |
| RF-06 | O site deve permitir que o usuário verifique as informações registradas no cadastro na página Perfil, após fazer seu login. | Média |
| RF-07 | O site deve permitir que o usuário requisite auxilio.           | Baixa  |

**Prioridade Alta/Média/Baixa

#### Requisitos não Funcionais

| ID     | Descrição do Requisito  | Prioridade |
|--------|-------------------------|------------|
| RNF-001 | O sistema deve ser responsivo para rodar em dispositivos móveis. | Alta |
| RNF-002 | Deve processar requisições do usuário em no máximo 3 segundos. | Baixa |
| RNF-003 | A aplicação deve ser publicada em um ambiente acessível ao público na Internet. | Alta |
| RNF-004 | A aplicação deve ter uma interface amigável e intuitiva. | Média |
| RNF-005 | A aplicação deve ser compatível com os principais navegadores do mercado: Google Chrome, Firefox, Microsoft Edge e Opera. | Alta |

**Prioridade Alta/Média/Baixa
