# Plano de Testes de Software

<!-- <span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-e1-exemplo-vida-de-estudante/tree/main/documentos/02-Especificação%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-e1-exemplo-vida-de-estudante/tree/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a> -->

Os requisitos para realização dos testes de software são:

<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento do cadastro do produto assim como a busca de produtos cadastrados e visualizar suas informações</td>
  <td>
   <ul>
    <li>RF-003:	O site deve permitir ao usuário cadastrar um produto.</li>
   <li>RF-004:	O site deve permitir ao usuário busque produtos cadastrados.</li>
   <li>RF-005:	O site deve permitir ao usuário visualizar as informações sobre o produto.</li>
   </ul>
  </td>
  <td>Verificar se o site permite que o usuário cadastre um produto com uma breve descrição, adicione ingredientes de sua composição e uma imagem do produto. Também, verificar se, após o cadastro do produto, o site permite a busca e direcionamento correto do produto.</td>
  <td>
   <ol>
    <li>Acessar a página de cadastro.</li>
    <li>Inserir o nome do produto.</li>
    <li> Inserir uma breve descrição do produto. </li>
    <li> Inserir um link com a imagem do produto.</li>
    <li> Inserir ingredientes que compõem o produto de forma separada.</li>
    <li> Visualizar a página de busca de produto.</li>
    <li> Ser direcionado corretamente ao produto pesquisado.</li>
    <li> Visualizar as informações do produto. </li>
   </ol>
   </td>
  <td>O produto deve ser cadastrado corretamente, com uma imagem, uma descrição e ingredientes de sua composição. Além disso, ao realizar a busca, o site deve direcionar o usuário à página correta e exibir as informações cadastradas corretamente. .</td>
  <td><a href = "https://youtu.be/kC80mWChGIQ">Davi Bicalho da Silva</a></td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o funcionamento da página Cadastrar Conta</td>
  <td>
   <ul>
    <li>RF-001:	O site deve permitir ao usuário cadastrar uma conta.</li>
   </ul>
  </td>
  <td>Verificar se o site permite o usuário cadastrar uma conta e verificar o encaminhamento do usuário para á pagina correspondente de login </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clique no login.</li>
    <li>Clique em "Não possui cadastro? Clique aqui!" </li>
   </ol>
   </td>
  <td>O usuário deve ser capaz de criar sua conta.</td>
  <td>Louise Dias</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03: Verificar o funcionamento da página Login</td>
  <td>
   <ul>
    <li>RF-02	O site deve permitir que o usuário faça o login da sua conta.</li>
   </ul>
  </td>
  <td>Verificar se o site permite que o usuário faça login com seu perfil cadastrado. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clique no login.</li>
    <li>Preencher os campos designados com seus dados, como email e senha</li>
    <li> Clicar no botão "Entrar"</li>
   </ol>
   </td>
  <td>O usuário deve ser capaz de fazer o Login.</td>
  <td>Louise Dias</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar o funcionamento da página de Ajuda</td>
  <td>
   <ul>
    <li>RF-10 O site deve permitir que o usuário requisite auxilio.</li>
   </ul>
  </td>
  <td>Verificar se o site permite que o usuário peça auxilio na página de Ajuda.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em Ajuda</li>
    <li>Preencher os campos requisitados (Nome, E-mail e Mensagem).</li>
    <li> Clicar no botão "Enviar"</li>
   </ol>
   </td>
  <td>Abrir o programa de e-mali para enviar a mensagem.</td>
  <td>Marcos Takamatsu</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-05: Verificar o funcionamento da página Favoritos</td>
  <td>
   <ul>
    <li>RF-11	O site deve apresentar ao usuário produtos favoritados e desfavorita-lós.</li>
   </ul>
  </td>
  <td>Verificar se o site permite que o usuário visualize os itens favoritados.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em Favoritos</li>
    <li>Verificar se os itens favoritados estão listados na página.</li>
    <li>E em seguida clicar no botão desfavoritar.</li>
   </ol>
   </td>
  <td>Exibir corretamente os itens e se o item sai da lista ao desfavoritar.</td>
  <td>Marcos Takamatsu</td>
 </tr>
</table>