const caixaPrincipal = document.querySelector("caixa-principal");
const caixaPerguntas = document.querySelector("caixa-perguntas");
const caixaAlternativas = document.querySelector("caixa-alternativas");
const caixaResultado = document.querySelector("caixa-resultado");
const textoResultado = document.querySelector("texto-resultado");

const perguntas = [
   {
       enunciado: "A utilização de fardas no colgios ccm são obrigatorios em sua opinião isso é certo?",
       alternativas: [
           {
               texto: "não",
               afirmacao: "Pois isso é algo irrelevante na aprendizagem "
           },
           {
               texto: "sim ",
               afirmacao: "Pois traz as caracteristicas do colegio"
           }
       ]
   },
   {
       enunciado: "As grandes exigencias das vestimentas, dos colegio ccm tem relevância na aprendisagem?",
       alternativas: [
           {

            texto: "Isso é maravilhoso!",       
                    afirmacao: "As grandes exigências das vestimentas nos colégios têm relevância na aprendizagem? Essa questão envolve diferentes perspectivas e opiniões. Alguns argumentam que uniformes escolares podem promover um ambiente mais igualitário e focado nos estudos, pois eliminam as distrações causadas pela competição de moda entre os alunos. Além disso, uniformes podem criar um senso de identidade e pertencimento à instituição."
           },
           {
               texto: "Negativo",
               afirmacao: "No entanto, há também críticas em relação às exigências das vestimentas. Algumas pessoas consideram que impor um padrão de vestuário pode reprimir a expressão individual dos alunos, limitando sua criatividade e autoexpressão. Isso poderia potencialmente afetar negativamente o bem-estar emocional e a autoestima dos estudantes, especialmente durante a adolescência, quando a identidade pessoal está se formando."
           }
       ]
   },
   {
       enunciado: "Como os Colégios Cívico-Militares combinam elementos da educação civil com os valores e práticas militares?",
       alternativas: [
           {
               texto: "Positivo",
               afirmacao: "Resposta 1"
           },
           {
               texto: "Negativo",
               afirmacao: "Resposta 2"
           }
       ]
   },
   {
       enunciado: "A estrutura hierárquica pode limitar a liberdade de expressão e a diversidade de pensamento entre os alunos, essenciais para um debate saudável e uma educação completa.",
       alternativas: [
           {
               texto: "Positivo",
               afirmacao: "Embora a estrutura hierárquica dos colégios cívico-militares possa ser vista como limitadora da liberdade de expressão e diversidade de pensamento, há também perspectivas que destacam benefícios potenciais:"
           },
           {
               texto: "Negativo",
               afirmacao: "Portanto, enquanto os colégios cívico-militares oferecem muitos benefícios educacionais, é importante reconhecer os possíveis impactos negativos de uma estrutura hierárquica forte, especialmente no que diz respeito à liberdade de expressão, diversidade de pensamento e desenvolvimento individual dos alunos."
           }
       ]
   },
   {
       enunciado: "Como os Colégios Cívico-Militares combinam elementos da educação civil com os valores e práticas militares?",
       alternativas: [
           {
               texto:"Positivo",
               afirmacao: "Em resumo, os colégios cívico-militares podem integrar elementos da educação civil com valores e práticas militares de maneiras que proporcionam benefícios tangíveis aos alunos, incluindo o desenvolvimento de caráter, liderança e preparação abrangente para o futuro. Esses pontos positivos são frequentemente valorizados por defensores desses tipos de instituições educacionai"
           },
       
        {
               texto: "Negativo",
               afirmacao: "Em resumo, enquanto os Colégios Cívico-Militares têm o objetivo de integrar valores e práticas militares com a educação civil, eles podem enfrentar críticas relacionadas à rigidez disciplinar, hierarquia excessiva, falta de inclusão e ênfase desequilibrada em valores militares. A eficácia e o impacto dessas instituições variam consideravelmente com base na implementação específica e nas necessidades educacionais e culturais de cada comunidade."
           }
       ]
   },
];




let atual = 0;
let perguntaAtual;
let historiaFinal = "";


function mostraPergunta() {
   if (atual >= perguntas.length) {
       mostraResultado();
       return;
   }
   perguntaAtual = perguntas[atual];
   caixaPerguntas.textContent = perguntaAtual.enunciado;
   caixaAlternativas.textContent = "";
   mostraAlternativas();
}


function mostraAlternativas(){
   for(const alternativa of perguntaAtual.alternativas) {
       const botaoAlternativas = document.createElement("button");
       botaoAlternativas.textContent = alternativa.texto;
       botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
       caixaAlternativas.appendChild(botaoAlternativas);
   }
}


function respostaSelecionada(opcaoSelecionada) {
   const afirmacoes = opcaoSelecionada.afirmacao;
   historiaFinal += afirmacoes + " ";
   atual++;
   mostraPergunta();
}


function mostraResultado() {
   caixaPerguntas.textContent = "Em 2049...";
   textoResultado.textContent = historiaFinal;
   caixaAlternativas.textContent = "";
}


mostraPergunta();  
