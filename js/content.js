let ptDic = {
    "titulo_whatisit":"O que é isso?",
    "titulo_howitworks": "Como funciona?",
    "titulo_why":"Por que fiz isso?",
    "titulo_result":"Resultados",
    "titulo_tech":"Tecnologias",
    "roybot" : {
        title:"ROYBOT",
        headline: "Uma automação de cobrança de Royalties",
        whatIsIt: "Roybot é uma automação que usa dados de franqueados, gera um cálculo de cobrança de royalties, através de um enquadramento de regras e contratos, e envia para eles por e-mail uma cobrança via boleto registrado, usando o layout CNAB400 para registrar esses boletos.<br>Além de mostrar um detalhamento do que é devido, junto com o boleto registrado por e-mail, é gerado também um lote de RPS, para ser enviado para a prefeitura.",
        howItWorks: "Primeiro, é necessário alimentar o Roybot com dados. Para tanto, usa-se a geração de templates do Roybot para gerar uma planilha de carga.<br><img src='/showcase/img/roybot1.png' alt='Botões de geração de template'/><br>As planilhas são usadas porque esses dados vêm de outros sistemas, que não são conectados e não oferecem uma integração. Entretanto, é possível obter parte dos dados de um lado e de outro, então uma planilha que concentra esses dados é usada para alimentar uma base interna.<br>Após a carga inicial, configuram-se os parâmetros da ferramenta:<ul><li>Credenciais de e-mail</li><li>Servidor e porta de e-mail</li></ul>E também os opcionais, que vão configurar alguns comportamentos da aplicação<ul><li>Desviar o envio de e-mails</li><li>Responder para</li><li>Dia de vencimento do boleto</li><li>E-mails em cópia oculta</li><li>Dias mínimos para isenção de Royalties</li></ul><img src='/showcase/img/roybot2.png' alt='Parâmetros'/><br>Depois disso, basta gerar o modelo para preenchimento das informações de Royalties. O Roybot faz o preenchimento automático das empresas pra facilitar a extração dos dados dos outros sistemas. <br>Este passo é o que sempre se repetirá, até que haja alguma mudança de franqueados, dessa forma, basta carregar os novos franqueados na mesma planilha, junto com as regras e os contratos.<br>Depois da carga, o sistema está apto a realizar o processamento dos royalties, usando as regras já preenchidas.<br>O e-mail recebido será mais ou menos assim:<br><img src='/showcase/img/roybot3.png' alt='Exemplo de e-mail'/>",
        why:"Como não existe integração entre os sistemas, e o processo de validação das regras de royalties é um processo delicado devido a demanda do negócio, muitas vezes aconteciam divergências, então, pela atenção redobrada, era um esforço que tomava muito tempo, e mobilizava múltiplas equipes, também pela confecção dos boletos e registro dos mesmos, com o lote de serviços. <br>Com o Roybot, esse esforço foi reduzido drasticamente, para uma tarefa de poucos minutos, porque todo o cruzamento e cálculo das regras é gerado pela automação, que também produz e envia os boletos automaticamente, gerando o arquivo para registro dos boletos de lotes de serviço.",
        results:"Rodamos nosso primeiro teste no início de Janeiro/2022. Antes, imaginei que tomaria cerca de 30 minutos para fazer a execução completa, mas na verdade, o processo inteiro demorou 1 minuto e 24 segundos, com 51 franquias para processar. Os franqueados pagando os boletos emitidos pela ferramenta, e o processo muito mais seguro e controlado.",
        technology:[".NET Core", "WPF", "C#", "BoletoCore.NET", "NPOI", "Dapper"]
    },
    "katal" : {
        title:"Portal Interteck Katal",
        headline: "Portal institucional com recursos de gestão de conteúdo.",
        whatIsIt: "Trata-se de um website que tem informações institucionais da empresa, e também apresenta seus produtos, e também dá a opção de captação de dados dos clientes para que eles sejam contactados mediante seu interesse nos produtos ou suporte deles.<br>Este portal também tem uma área autenticada, que permite o cadastro desses produtos, manutenção de dados institucionais, gestão de conteúdo personalizada e contato com os clientes que entraram em contato através do site.",
        howItWorks: "O site dispõe de uma área para usuários, que podem ver informações institucionais da empresa, tais como missão, história, distribuidores, etc; e também acessar uma área de produtos, que são reagentes, programações e equipamentos.<br>Cada produto tem um link amigável de acesso, a fim de oferecer uma opção para o SEO, e cada produto possui uma árvore de categorias: Tudo aquilo que estiver na mesma árvore, será devidamente alocado em uma página específica. Os produtos possuem uma estrutura global similar, então em termos de estrutura de dados, pouco teve de se fazer para diferenciá-los, porque conceitualmente, o produto não muda.<br>Existe uma mudança no tratamento a nível de experiência para certos tipos de produtos que exijam uma diferenciação na hora de baixar algum item específico, por exemplo, programações, que demanda que o usuário coloque suas informações de contato para que lhe seja atribuído um suporte.<br>Existe também uma busca global da página (além das buscas internas quando o usuário está numa área específica), que varre informações de produtos e distribuidores, e retorna os resultados relevantes.<br><img src='/showcase/img/katal1.png' alt='Site'><br><br>Em termos de backend, a ferramenta dispõe de um painel administrativo que permite os usuários administradores manter os cadastros dos produtos, as páginas de âmbito institucional (bem como criar novas), manter atualizado os dados da empresa, gerar alertas na página, para quem acessar ser recebido com um aviso; gerir usuários (onde é possível delimitar níveis de acesso de administração), e também, lidar com o contato dos clientes.<br>O sistema também conta internamente com um registro amplo de logs, possibilitando a auditoria de cada passo realizado pelo usuário.<br><br><img src='/showcase/img/katal2.png' alt='Painel administrativo'><br>",
        why:"Diante de uma restruturação, havia a necessidade de reformar o site que já existia, que possuia uma curva de aprendizado íngreme, e também estava sem manutenção há um tempo. A abordagem também tinha o âmbito de dar um ar mais <i>clean</i> e intuitivo pro portal, e também, deixá-lo responsivo, o que possibilitou inclusive transformá-lo em um app usando a tecnologia de PWA <i>Progressive Web Application</i>. O desafio da troca de tecnologia era realizar o mínimo de impacto de custo a longo prazo, principalmente na infraestrutura.",
        results:"Sem muitas mudanças de infraestrutura, foi possível subir o site, que roda estável e reuniu desde meados do meio de 2020 até o início do último trimestre de 2021, mais de 6.000 contatos de clientes, 99 produtos e 30 distribuidores cadastrados. O site ainda assim recebe algumas melhorias de qualidade eventualmente.<br>O site está acessível em <a href='http://katal.com.br/' target='_blank'>katal.com.br</a>",
        technology:["Asp.NET Core", "MVC", ".NET Core", "CSS", "HTML"]
    },
    "hipsta" : {
        title:"Hipsta Adventures",
        headline: "Um pequeno jogo de plataforma feito em JavaScript.",
        whatIsIt: "Trata-se de um jogo de plataforma (<i>jumper</i>) que conta a história de Hipsta, a protagonista, que é uma bruxa que, após um ataque de pássaros, teve seus pertences derrubados por toda a floresta mágica. E o objetivo dela é, com ajuda das habilidades do jogador, resgatar seus pertences para poder voltar pra casa, evitando ao máximo colidir com os monstros habitantes da floresta, que estão correndo de encontro à protagonista porque eles não são sociáveis.<br>Os itens a serem recuperados são um <b>cajado</b>, que permite usar o feitiço de proteção, deixando-a invulnerável por alguns segundos; a <b>vassoura</b> que permite dar mais um salto, através da propulsão mágica da vassoura; o <b>grimório</b> que tem todo o estudo e trabalho da protagonista. Com os três itens, a protagonista pode voltar pra casa em paz, e mais atenta sobre as revoadas de pássaros da floresta.<br><br><img src='/showcase/img/hipsta1.png' alt='game screen'>",
        howItWorks: "O jogo foi criado em JavaScript, podendo ser rodado direto do navegador, com a ajuda da biblioteca <a href='https://p5js.org/' target='_blank'>p5.js</a>, é um jogo simples pra quem vê, mas que explora muitos aspectos do desenvolvimento de jogos, que é lidar com animações, sprites, cálculos de gravidade e colisão, gestão de variáveis e recursos, música e sons, mapeamento de teclas para eventos; e também temos aqui um efeito de paralaxe no fundo do jogo, aplicação de filtro no personagem quando é atingido, que também entra na atenção ao detalhe e no polimento do jogo. Outro aspecto importante, muito presente e pouco considerado também é o storytelling, que é ambientar o jogador com a história da protagonista, para você entender o que você está fazendo, e o porquê disso.<br>O jogo permite o personagem ser controlado pelas setinhas; barra de espaço faz um pulo (ou mais, se você estiver com a vassoura), Ctrl ativa o cajado protetor (dá invencibilidade por poucos segundos).",
        why:"Estava fazendo um workshop de desenvolvimento de jogos da Alura, usando essa biblioteca <a href='https://p5js.org/' target='_blank'>p5.js</a>.",
        results:"O resultado foi muito positivo, e até entrei como uma das menções honrosas no placar do workshop <a href='https://imersao-gamedev.github.io/placar/#:~:text=Hipsta%20Adventures' target='_blank'>Veja aqui</a>.<br>Divido minhas menções com outros excelentes trabalhos, que ganharam notoriedade por alguma sacada legal que fizeram no jogo, tornando-o único diante dos quase 500 trabalhos feitos. Abaixo, é possível acessar o link para jogar. Não vou colocar em um embutido aqui pois no celular pode nem ser possível ver direito o jogo.<br><h3><a href='https://upbeat-swanson-5add6b.netlify.app/' target='_blank'>Jogue aqui Hipsta Adventures</a></h3><iframe width='480' height='320' src='https://www.youtube.com/embed/gA93WnFzHuM' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
        technology:["Javascript", "P5.js"]
    },
    "spl" : {
        title:"Sabre SPL Interpreter",
        headline: "Um interpretador para o módulo de impressão do Sabre. Não temos imagens porque é uma automação.",
        whatIsIt: "Sabre é um GDS (<i>Global Distribution System</i>), que é um sistema de reserva e emissão de bilhetes (para passagens aéreas, hotéis e outras áreas correlatas ao turismo), que algumas companias de turismo usam para fazer a emissão ou a reserva para a geração desses bilhetes.<br>Entretanto, todo o dado produzido nesses sistemas, fica apenas nesses sistemas. Embora seja possível sim ter uma integração, normalmente é por uma API. Porém, chaves de API custam dinheiro, e a empresa onde tive a oportunidade de desenvolver este sistema, não podia contar com esse custo no momento.<br>Este sistema é uma suite de sistemas, onde um deles lê os registros de emissão e os transporta para a base de dados que é lida pelo sistema de registros da empresa, a fim de gerar métricas (<i>usando um dashboard com o Grafana</i>), e principalmente recolher esses dados para que sejam emitidas cobranças posteriormente. Outra funcionalidade também conta com um monitoramento de emissão de bilhetes, que lê também potenciais motivos para geração de multas administrativas, nos dando a possibilidade de nos antecipar e cancelar o bilhete antes que o mesmo possa gerar uma multa.<br>E por fim, temos também a funcionalidade de envio de cobranças para os clientes, conforme os dados dos bilhetes.",
        howItWorks: "O GDS, especificamente o do Sabre, possui uma ferramenta que \"imprime\" (através do SPM, que quer dizer <i>Sabre Printing Module</i>) em um arquivo delimitado por posições, dados de emissão de bilhetes. Com isso, após uma emissão ser concretizada, um arquivo é gerado, e com esse arquivo, é possível extrair dados sobre a emissão, e alimentar as informações pertinentes do sistema. O formato do arquivo é de fato um arquivo de texto imenso com diversas instruções e tipos de registro, cada um com sua especificação e layout, variando conforme o tipo de ação ou o tipo do bilhete. Com isso, o arquivo é lido sequencialmente por esta automação, e no final, é realizado o processamento desse arquivo, gerando registros diretamente no banco de dados.<br>Este programa foi feito para funcionar de maneira não atendida, então ele fica aberto, apenas monitorando o diretório que os bilhetes eram gerados, e fazendo a operação de processamento imediatamente. Com isso, o monitoramento era realizado também nos bilhetes, e gerava alertas para o emissor e também para a supervisão, para que fosse possível mitigar os efeitos do alerta o mais rápido possível.<br>Por fim, em dias específicos, outra automação era executada, de maneira quase assistida, que era o envio das cobranças para os clientes. Essa automação gerava boletos, arquivo de CNAB400 para registro dos boletos, e também o arquivo de RPS para ser enviado à prefeitura.",
        why:"Arcar com o custo de uma chave de API era fora de questão no momento que estava a empresa que necessitava dessa automação. Então, pudemos obter acesso aos manuais dessa funcionalidade antiga desse GDS, e desenvolver essa suíte de automações, eliminando a necessidade dos usuários emissores de ter que cadastrar cada bilhete emitido no sistema, que era absolutamente crítico e contraprodutivo, limitando a taxa de emissão de bilhetes diários, e também aliviar o trabalho operacional, com o principal intuito de deixar estritamente o trabalho analítico para poupar o máximo de tempo e permitir o máximo de produtividade.",
        results:"Com o devido treinamento sobre o preenchimento adicional de algumas instruções para incluir informações de nível de agência (que não são controlados pelo GDS), no primeiro ano de implantação (e além), batíamos recordes de metas mês a mês de emissão de bilhetes, porque a automação isentou a parte mais demorada do processo de emissão, liberando a emissão exclusivamente para a emissão de bilhete e contato com clientes que queriam emitir bilhetes. A taxa de acertos a nível de controle da informação aumentou em um nível que qualquer erro de dado se resumia a um erro na própria emissão do bilhete, podendo mitigá-lo posteriormente e evitar multas enviadas pelas companhias aéreas. Também oferecendo um ganho de tempo drástico para a equipe de operações, possibilitando que o time se especializasse com muito mais facilidade, e fosse possível manter uma rotina de trabalho com maior nível de controle, tal qual a criação de um calendário de cobranças, evitando problemas de fluxo de caixa e mitigando outros problemas que nem havíamos pensado que a automação viria a resolver no futuro, que mais tarde virou o sistema de alertas.",
        technology:[".NET Framework", "Console Application"]
    },
    "passcalc" : {
        title:"Pass Calculator",
        headline: "Uma calculadora para analisar pacotes de passes de raids para o Pokémon GO.",
        whatIsIt: "De tempos em tempos, a empresa que desenvolve o Pokémon GO, lança pacotes de passes, que permite o jogador a participar de batalhas, e ter a chance de capturar pokémons específicos.<br>Esses passes custam pokécoins, a moeda do jogo, e a mesma pode ser comprada com dinheiro real, e alguns jogadores investem dinheiro real em suas contas, ou, em outros casos, usam dos mecanismos do jogo para obter essas moedas.<br>Esta é uma calculadora que analisa a quantidade de pokécoins envolvida (até mesmo o valor em dinheiro envolvido, se for o caso), e aponta qual é o pacote mais vantajoso para se comprar diante da situação especificada.",
        howItWorks: "O usuário pode configurar os pacotes que deseja comparar (os pacotes mais relevantes já vem pré-configurados de acordo com o estado atual do jogo), e então, pode escolher entre:<ul><li>Uma quantidade em dinheiro</li><li>Uma quantidade em Pokécoins</li></ul>Com isso, o site calcula a entrada e oferece uma análise do que é melhor gastar suas moedas, apontando a diferença e até mesmo o troco (seja em moedas ou em dinheiro).<br>Um ponto muito interessante é que você pode criar mais pacotes, e a comparação é feita com cada pacote, mostrando uma análise individual, par a par, e uma análise global, indicando qual de todos os pacotes vale mais a pena obter.",
        why:"Além de ser um jogador, eu também participo de comunidades do jogo. Quis oferecer esta calculadora para ajudar meus colegas a prosperarem no jogo, tendo um gasto otimizado desses recursos do jogo, que seja lá com dinheiro ou interações no jogo, a diferença pode ser significativa e prejudicar um jogador desavisado. Essa calculadora era uma <a href='https://docs.google.com/spreadsheets/d/1nIKa1sC6rhStHq8cxS3CcWNlQPINuD_GCOGycqA-l6I' target='_blank'>planilha de excel</a>, mas eu vi que não é todo mundo que consegue mexer em uma planilha, e pode ser muitas vezes contraintuitivo. Uma aplicação web seria muito mais fácil de usar. E também, estava aprendendo Blazor, e resolvi unir o útil ao agradável.",
        results:"Pode-se ter acesso à calculadora no site abaixo:<h3><a href='https://pogopasscalc.netlify.app/' target='_blank'>Acesso à Calculadora de Passes</a></h3>A calculadora foi muito bem aceita nas comunidades que enviei. Espero ter ajudado meus colegas.",
        technology:[".NET Core", "Blazor", "WebAssembly", "CSS", "HTML"]
    },
    "epgm":{
        title:"EPG Manager",
        headline: "Um gerador de grades para equipamento de EPG.",
        whatIsIt: "Esta é uma aplicação que monta grades de programação para equipamentos EPG <i>Electronic Programming Guide</i> que serve para apresentar para um espectador a relação de programas de um determinado canal, com sua classificação etária, descritivo e nome do programa, entre outros dados relevantes.<br>Existe um formato específico para alimentar esses equipamentos, e essa aplicação toma cargo disso.",
        howItWorks: "Espera-se do usuário entradas relevantes para a grade de programação, através do cadastro, e após o término do cadastro, o usuário exporta essas entradas para um arquivo, diretamente no formato que o equipamento espera.<br>A seguir, um exemplo de como era a tela de trabalho:<br><img src='/showcase/img/epg1.png' alt='tela do programa'>",
        why:"Era um processo que, pelo formato ser muito extenso, poderia ocasionar em erros de preenchimento. Então este programa sanitiza essas entradas e permite que uma pessoa que não tenha conhecimento do padrão consiga gerar as grades sem qualquer problema.",
        results:"A proposta da ferramenta foi muito interessante, pois o próprio formato em si exigia muita atenção para preenchê-la. O formato em si apresenta 66 campos para preencher, com códigos específicos para denotar categorias, subcategorias, classificações etárias. O programa reduziu essa complexidade para 9 campos, sendo eles com a formatação travada para aceitar apenas o dado tratado, e também apresentar os dados de maneira fácil de ler. Exceto dados como Título e descrição do programa, que são textos abertos.",
        technology:[".NET Framework", "Windows Forms"]
    }
};

let enDic = {
    "titulo_whatisit":"What is it?",
    "titulo_howitworks": "How it works?",
    "titulo_why":"Why did I do that?",
    "titulo_result":"Results",
    "titulo_tech":"Technologies",
    "roybot" : {
        title:"ROYBOT",
        headline: "A Royalties charging automation.",
        whatIsIt: "Roybot is an automation that uses data from franchisees, generates a royalty billing calculation, through a framework of rules and contracts, and sends them by e-mail a billing via registered bill, using the CNAB400 layout to register these bills. <br>In addition to showing a breakdown of what is due, along with the bank slip registered by e-mail, a batch of RPS is also generated, to be sent to the city hall.",
        howItWorks: "First, you need to feed data to the Roybot. To do this, use Roybot's template generation to generate a load sheet.<br><img src='/showcase/img/roybot1.png' alt='Template generation buttons'/><br> Spreadsheets are used because this data comes from other systems, which are not connected and do not offer integration. However, it is possible to obtain part of the data from one side and the other, so a spreadsheet that concentrates this data is used to feed an internal database.<br>After the initial load, the tool parameters are configured:<ul><li>Email credentials</li><li>Email server and port</li></ul>And optional ones, which will configure some behavior of the application.<ul><li>E-mail override to detour them when sent</li><li>Reply to</li><li>Bill expiration date</li><li>BCC addresses for e-mails</li><li>Minimum days for exemption from Royalties charge</li></ul><img src='/showcase/img/roybot2.png' alt='Parameters'/><br>After that, just generate the template to fill in the Royalties information. Roybot autocompletes companies to facilitate the extraction of data from other systems. <br>This step is what will always be repeated, until there is any change of franchisees, in this way, just load the new franchisees in the same spreadsheet, along with the rules and contracts.<br>After loading, the system is able to process the royalties, using the rules already filled in.<br>The email received will look something like this:<br><img src='/showcase/img/roybot3.png' alt='Example of e-mail'/>",
        why:"As there is no integration between the systems, and the royalty rules validation process is a delicate process due to the demand of the business, there were often divergences, so, due to increased attention, it was an effort that took a lot of time, and it mobilized multiple teams, also for the preparation of slips and their registration, with the batch of services. <br>With Roybot, this effort has been drastically reduced, to a task of just a few minutes, because all the crossing and calculation of rules is generated by automation, which also automatically produces and sends bills, generating the file for registering the bills and the batches of service bills.",
        results:"We ran our first test in early January/2022. Before, I imagined that it would take about 30 minutes to do the complete run, but in fact, the entire process took 1 minute and 24 seconds, with 51 franchises to process. Franchisees paying the slips issued by the tool, and the process is much safer and controlled.",
        technology:[".NET Core", "WPF", "C#", "BoletoCore.NET", "NPOI", "Dapper"]
    },
    "katal" : {
        title:"Interteck Katal Portal",
        headline: "Institutional portal with Content Management features.",
        whatIsIt: "This is a website that has institutional information about the company, and also presents its products, and also gives the option of capturing customer data so that they can be contacted based on their interest in their products or support.<br>This portal also it has an authenticated area, which allows the registration of these products, maintenance of institutional data, personalized content management and contact with customers who contacted us through the website.",
        howItWorks: "The site has an area for users, who can see institutional information about the company, such as mission, history, distributors, etc; and also access an area of ​​products, which are reagents, programming and equipment.<br>Each product has a user-friendly access link in order to offer an option for SEO, and each product has a category tree: Everything that is in the same tree, it will be properly allocated to a specific page. The products have a similar overall structure, so in terms of data structure, little had to be done to differentiate them, because conceptually, the product doesn't change.<br>There is a change in the experience level treatment for certain types of products that require a differentiation when downloading a specific item, for example, programming, which require the user to enter their contact information in order to get the designated support.<br>There is also a global page search (in addition to the internal search option when the user is in a specific area), which scans product and distributor information, and returns the relevant results.<br><img src='/showcase/img/katal1.png' alt='Site'><br> <br>In terms of the backend, the tool has an administrative panel that allows administrator users to maintain product records, institutional pages (as well as create new ones), keep company data updated, generate alerts on the page, so, whoever access the page will be greeted with a notice; managing users (where it is possible to delimit administration access levels), and also dealing with customer contact.<br>The system also has internally a thoroughly log record, allowing the auditing of each step performed by the user.<br><br><img src='/showcase/img/katal2.png' alt='Admin Panel'><br>",
        why:"Because a restructuring, there was a need to overhaul the existing website, which had a steep learning curve, and had also been out of maintenance for a while. The approach also had the scope of giving a more <i>clean</i> and intuitive feel to the portal, and also making it responsive, which even made it possible to turn it into an app using PWA technology <i>Progressive Web Application</i>. The challenge of switching technology was to realize the least long-term cost impact, particularly on infrastructure.",
        results:"Without many infrastructure changes, it was possible to upload the site, which runs stable and gathered from mid-mid 2020 to the beginning of the last quarter of 2021, more than 6,000 customer contacts, 99 products and 30 registered distributors. The site still gets some quality improvements eventually.<br>The site is accessible at <a href='http://katal.com.br/' target='_blank'>katal.com.br</a>",
        technology:["Asp.NET Core", "MVC", ".NET Core", "CSS", "HTML"]
    },
    "hipsta" : {
        title:"Hipsta Adventures",
        headline: "A small platform game made in JavaScript.",
        whatIsIt: "It is a platform game (<i>jumper</i>) that tells the story of Hipsta, the protagonist, who is a witch who, after an attack of birds, had her belongings overturned throughout the magical forest. And her objective is, with the help of the player's skills, to rescue her belongings to be able to return home, avoiding as much as possible colliding with the forest-dwelling monsters, who are running towards the protagonist because they are not sociable.<br>The items to be recovered are a <b>staff</b>, which allows you to cast the protection spell, leaving it invulnerable for a few seconds; the <b>broom</b> that allows one more jump, through the broom's magical propulsion; the <b>spell book</b> that has all the study and work of the protagonist. With the three items, the protagonist can return home in peace, and more attentive to the flocks of birds in the forest.<br><br><img src='/showcase/img/hipsta1.png' alt='game screen'>",
        howItWorks: "The game was created in JavaScript and can be run directly from the browser, with the help of the <a href='https://p5js.org/' target='_blank'>p5.js</a> library, it is a game simple for the viewer, but that explores many aspects of game development, which is dealing with animations, sprites, gravity and collision calculations, variable and resource management, music and sounds, key mapping to events; and we also have here a parallax effect in the background of the game, applying a filter to the character when it is hit, which also enters into the attention to detail and polishing of the game. Another important aspect, very present and little considered is also the storytelling, which is to get the player acquainted with the protagonist's story, so you can understand what you are doing, and why.<br>The game allows the character to be controlled by the arrows; spacebar makes a jump (or more if you have the broom), Ctrl activates the protective spell (gives invincibility for a few seconds).",
        why:"I was doing a game development workshop at Alura, using this <a href='https://p5js.org/' target='_blank'>p5.js</a> library.",
        results:"The result was very positive, and I even entered as one of the honorable mentions on the workshop scoreboard <a href='https://imersao-gamedev.github.io/placar/#:~:text=Hipsta%20Adventures' target=' _blank'>See here</a>.<br>I share my mentions with other excellent works, which gained notoriety for some cool stuff they made in the game, making it unique in the face of almost 500 works done. Below, you can access the link to play. I'm not going to put it in an embedded one here because on the mobile it may not even be possible to see the game properly.<br><h3><a href='https://upbeat-swanson-5add6b.netlify.app/' target='_blank' >Play Hipsta Adventures here</a></h3><iframe width='480' height='320' src='https://www.youtube.com/embed/gA93WnFzHuM' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
        technology:["Javascript", "P5.js"]
    },
    "spl" : {
        title:"Sabre SPL Interpreter",
        headline: "An interpreter for Sabre Printing Module. We have no images because it's an automation.",
        whatIsIt: "Sabre is a GDS (<i>Global Distribution System</i>), which is a booking and ticketing system (for airline tickets, hotels and other tourism-related areas) that some tourism companies use it to issue or book in order to generate those tickets.<br>However, all the data produced in those systems, is only in those systems. Although it is possible to have an integration, it is usually through an API. But, API keys cost money, and the company where I had the opportunity to develop this system couldn't count on that cost at the moment.<br>This system is actually a suite of systems, one of which reads the issuance logs and the transports it to the database that is read by the company's records system, in order to generate metrics (<i>using a dashboard with Grafana</i>), and mainly collect this data so that bills can be issued later. Another feature also has a ticketing monitoring, which also reads potential reasons for generating administrative fines, giving us the possibility to anticipate and cancel the ticket before it can generate a fines, thus, reducing costs.<br>And finally, We also have the functionality to send bills to customers, according to ticket data.",
        howItWorks: "The GDS, specifically Saber's, has a tool that \"prints\" (via the SPM, which means <i>Sabre Printing Module</i>) in a file delimited by position, ticketing data. Thus, after an issue is carried out, a file is generated, and with this file, it is possible to extract data about the issuance, and feed the pertinent information to the system. The file format is in fact a huge text file with several instructions and record types, each with its specification and layout, depending on the type of action or type of ticket. With that, the file is read sequentially by this automation, and in the end, the processing of this file is carried out, generating records directly in the database.<br>This program was made to work in an unattended way, so it stays open, just monitoring the directory that the tickets were generated, and doing the processing operation immediately. With that, the monitoring was also done on the tickets, and generated alerts for the issuer and also for the supervision, so that it would be possible to mitigate the effects of the alert as quickly as possible.<br>Finally, on specific days, another automation was executed, in an almost assisted manner, which was the sending of charges to customers. This automation generated bills, a CNAB400 file to record those bills, and also the RPS file to be sent to the city hall.",
        why:"Bearing the cost of an API key was out of the question when the company needed this automation. So, we were able to gain access to the manuals of this old GDS functionality, and develop this suite of automations, eliminating the need for issuing users to have to register each ticket issued in the system, which was absolutely critical and counterproductive, limiting the daily ticketing rate, and also make operational work easier, with the main aim of strictly leaving the analytical work to save maximum time and allow maximum productivity.",
        results:"With the proper training on completing some additional instructions to include agency-level information (which is not controlled by the GDS), in the first year of rollout (and beyond), we were setting month-to-month ticketing goal records because automation exempted the most time-consuming part of the issuance process, releasing issuance exclusively for ticketing and contacting customers who wanted to issue tickets. The rate of correct data in terms of information control increased to a level that any data error was reduced to an error in the ticket issuance, being able to mitigate it later and avoid fines sent by airlines. Also offering a drastic time gain for the operations team, allowing the team to specialize more easily, and it was possible to maintain a work routine with a greater level of control, such as the creation of a billing calendar, avoiding problems with cash flow and mitigating other problems that we had not even thought that automation would solve in the future, that later became the alerting system.",
        technology:[".NET Framework", "Console Application"]
    },
    "passcalc" : {
        title:"Pass Calculator",
        headline: "A calculator to analyze raid passes bundles for Pokémon GO.",
        whatIsIt: "From time to time, the company that develops Pokémon GO releases bundles, containing raid passes, which allow the player to participate in  raid battles, and have the chance to catch specific Pokémon.<br>These passes cost pokécoins, the in-game currency, and it can be purchased with real money, and some players invest real money in their accounts, or in other cases use the game mechanisms to obtain these coins.<br>This is a calculator that analyzes the amount of pokécoins involved (even the cash value involved, if any), and points out which is the most advantageous bundle to buy given the situation.",
        howItWorks: "The user can configure the bundles he wants to compare (the most relevant bundles come pre-configured according to the current state of the game), and then it can choose between:<ul><li>A cash amount</li> <li>An amount in Pokécoins</li></ul>With this, the site calculates the entry and offers an analysis of what is better to spend your coins, pointing out the difference and even the change (either in coins or in cash).<br>A very interesting point is that you can add more bundles, and the comparison is done with each package, showing an individual analysis, pair by pair, and a global analysis, indicating which of all the bundles is the worthiest.",
        why:"In addition to being a player, I also participate in game communities. I wanted to offer this calculator to help my peers thrive in the game, having an optimized spending of these game resources, either with money or in-game interactions, the difference can be significant and hurt an unsuspecting player. This calculator was an <a href='https://docs.google.com/spreadsheets/d/1nIKa1sC6rhStHq8cxS3CcWNlQPINuD_GCOGycqA-l6I' target='_blank'>excel spreadsheet</a>, but I saw that not everyone can tinker with a spreadsheet, and it can often be counterintuitive. A web application would be much easier to use. Also, I was learning Blazor, and I decided to combine the best of both situations.",
        results:"You can access the calculator at the website below:<h3><a href='https://pogopasscalc.netlify.app/' target='_blank'>Access to the Passes Calculator</a></h3>A calculator was very well accepted in the communities I sent. I hope I have helped my colleagues.",
        technology:[".NET Core", "Blazor", "WebAssembly", "CSS", "HTML"]
    },
    "epgm":{
        title:"EPG Manager",
        headline: "Grid generator for EPG equipment.",
        whatIsIt: "This is an application that assembles programming schedules for EPG equipment <i>Electronic Programming Guide</i> that serves to present to a viewer the list of programs on a given channel, with its age rating, description and program name, among other relevant data.<br>There is a specific format to feed this equipment, and this application takes care of that.",
        howItWorks: "The user is expected to input relevant entries for the programming grid, through registration, and after the registration is completed, the user exports these entries to a file, directly in the format that the equipment expects.<br>The following is an example of how was the working screen:<br><img src='/showcase/img/epg1.png' alt='program screen'>",
        why:"It was a process that, as the format was very extensive, could lead to filling errors. So this program sanitizes these entries and allows a person who is not aware of the pattern to be able to generate the grids without any problem.",
        results:"The tool's proposal was very interesting, as the format itself required a lot of attention to fill it out. The format itself features 66 fields to fill in, with specific codes to denote categories, subcategories, age ratings. The program reduced this complexity to 9 fields, with the formatting locked to accept only the treated data, and also to present the data in an easy-to-read way. Except data like Title and description of the program, which are open texts.",
        technology:[".NET Framework", "Windows Forms"]
    }
};

var lang = readLanguage();
var mainDic = {};
switch(lang){
    case "en":mainDic=enDic;break;
    default: mainDic=ptDic;break;
}

var project = getProjectDic(mainDic);

function getProjectDic(dic){
    let site = document.location.search.replace("?","");
    let cdic = dic[site];
    let l = readLanguage();

    if (!cdic){
        cdic = {
            title: l==="en"?"Not available":"Indisponível",
            headline: l==="en"?"It seems there's something incorrect.":"Parece que tem algo de errado.",
            whatIsIt: l==="en"?"It's better to use the links from the Showcase section.":"É melhor usar os links da área Showcase.",
            howItWorks: l==="en"?"Just go back and try again :)":"Só volte e tente novamente :)",
            why:l==="en"?"Because if you try to access a link to a project that doesn't exist, it will not appear here.":"Porque se você tentar acessar um link de um projeto que não existe, ele não vai aparecer aqui."
        };
    }

    return cdic;
}

function setScreen(){
    document.getElementById("title").textContent=project.title;
    document.getElementById("headline").textContent=project.headline;
    document.getElementById("what").textContent = mainDic.titulo_whatisit;
    document.getElementById("how").textContent = mainDic.titulo_howitworks;
    document.getElementById("why").textContent = mainDic.titulo_why;
    document.getElementById("results").textContent = mainDic.titulo_result;
    document.getElementById("tech").textContent = mainDic.titulo_tech;

    document.getElementById("ctwhat").innerHTML = project.whatIsIt;
    document.getElementById("cthow").innerHTML = project.howItWorks;
    document.getElementById("ctwhy").innerHTML = project.why;
    document.getElementById("ctresults").innerHTML = project.results;
    for(let i=0;i<project.technology.length;i++){
        document.getElementById("cttech").innerHTML += "<div class='pill'>"+project.technology[i]+"</div>";
    }


}

setScreen();