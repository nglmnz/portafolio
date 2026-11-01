(function(){
"use strict";
const root=document.getElementById("cedeus-app");let lang=new URLSearchParams(location.search).get("lang")||"es";if(!["es","en","pt"].includes(lang))lang="es";
let data=null,activeLens=0,sourceFilter="core";
const ui={
es:{back:"Portafolio",year:"2024 · EXPERIENCIA DE CAMPO",project:"Investigación doctoral vinculada a CEDEUS",role:"Mi trabajo en el levantamiento",collect:"Cómo se produce una encuesta de terreno",question:"Una pregunta sobre ciudad y convivencia",city:"El Gran Santiago como territorio del estudio",areas:"Comunas recorridas",areaNote:"No se muestran puntos geográficos de entrevistas ni distribución muestral",lenses:"Cuatro claves para comprender el problema",lenseNote:"Preguntas sociológicas ilustrativas; no son resultados de la encuesta",policy:"Investigación urbana y discusión gubernamental",policyScope:"Otro estudio de CEDEUS · enero 2026",distinction:"No confundir los dos estudios",s1:"Investigación doctoral (2024)",s2:"Contexto y debate público (2026)",evidence:"Fuentes y procedencia",limitations:"Qué puede y qué no puede afirmarse",read:"Ver fuente ↗",source:"Documento y fuentes",sourceLabel:"Origen del dato",more:"Explorar otras fuentes",opening:"Para investigar una ciudad también hay que escuchar a quienes la habitan.",field:"Aplicación y verificación de encuestas",place:"Santiago de Chile",transparency:"La página no presenta resultados empíricos de la encuesta de 2024: no se proporcionó la base de datos.",next:"Siguiente tema →",previous:"← Tema anterior",sources:"Archivos de investigación",public:"Contexto institucional",showAll:"Todas las fuentes",subtitle:"Encuestador · CEDEUS / Pontificia Universidad Católica de Chile",note:"La vinculación con políticas públicas refleja el campo de trabajo del centro y el debate documentado, no un uso gubernamental comprobado de los datos que yo recogí.",moreAbout:"Profundizar en el proyecto",methods:"Proceso de terreno"},
en:{back:"Portfolio",year:"2024 · FIELD EXPERIENCE",project:"Doctoral research linked to CEDEUS",role:"My role in survey fieldwork",collect:"The process of field data collection",question:"A question about city life and social ties",city:"Greater Santiago as research territory",areas:"Municipalities visited",areaNote:"No interview coordinates or geographic sample weights shown",lenses:"Four lenses to understand the question",lenseNote:"Illustrative social research questions, not survey results",policy:"Urban research and government dialogue",policyScope:"A different CEDEUS study · January 2026",distinction:"Keep the studies distinct",s1:"Doctoral research (2024)",s2:"Policy dialogue (2026)",evidence:"Sources and provenance",limitations:"What the evidence does and does not say",read:"View source ↗",source:"Research sources",sourceLabel:"Evidence",more:"Explore other sources",opening:"Studying a city also means listening to its residents.",field:"Field surveying and quality control",place:"Santiago, Chile",transparency:"No empirical results from the 2024 survey are presented; its dataset has not been provided.",next:"Next topic →",previous:"← Previous topic",sources:"Research archive",public:"Institutional context",showAll:"All sources",subtitle:"Survey enumerator · CEDEUS / Pontificia Universidad Católica de Chile",note:"The policy relevance of the center's work does not establish governmental use of the survey data I personally collected.",moreAbout:"Explore the project",methods:"Fieldwork process"},
pt:{back:"Portfólio",year:"2024 · PESQUISA DE CAMPO",project:"Pesquisa doutoral vinculada ao CEDEUS",role:"Minha participação na coleta",collect:"O processo da pesquisa de campo",question:"Uma questão sobre cidade e convivência",city:"Grande Santiago como território",areas:"Comunas percorridas",areaNote:"Não são apresentados pontos de entrevistas nem pesos amostrais",lenses:"Quatro lentes para entender o problema",lenseNote:"Questões sociológicas ilustrativas, não resultados da pesquisa",policy:"Pesquisa urbana e diálogo governamental",policyScope:"Outra pesquisa do CEDEUS · janeiro 2026",distinction:"Não confundir as duas pesquisas",s1:"Pesquisa doutoral (2024)",s2:"Diálogo sobre políticas públicas (2026)",evidence:"Fontes e procedência",limitations:"O que as evidências sustentam",read:"Ver fonte ↗",source:"Fontes da pesquisa",sourceLabel:"Evidência",more:"Explorar outras fontes",opening:"Pesquisar uma cidade também é escutar seus moradores.",field:"Questionários e controle de qualidade",place:"Santiago do Chile",transparency:"Não foram apresentados resultados empíricos da pesquisa de 2024 porque não temos a base de dados.",next:"Próximo tema →",previous:"← Tema anterior",sources:"Arquivo da pesquisa",public:"Contexto institucional",showAll:"Todas as fontes",subtitle:"Entrevistador · CEDEUS / Pontificia Universidad Católica de Chile",note:"A relevância para políticas públicas não comprova uso governamental dos dados que coletei.",moreAbout:"Conhecer o projeto",methods:"Processo de campo"}
};
const i=k=>ui[lang][k]||ui.es[k]||k;
const tr=x=>typeof x==="string"?x:x?.[lang]||x?.es||"";
const make=(tag,cl,content)=>{const n=document.createElement(tag);if(cl)n.className=cl;if(content!==undefined)n.textContent=String(content);return n};
const add=(el,...children)=>{children.forEach(c=>{if(c)el.appendChild(c)});return el};
const h=(txt,l=2)=>make("h"+l,"",txt),p=(txt,cl="")=>make("p",cl,txt);
const a=(txt,url,cl="")=>{const n=make("a",cl,txt);n.href=url;if(/^https?:\/\//.test(url)){n.target="_blank";n.rel="noopener noreferrer"}return n};
const btn=(txt,action,cl="",selected=false)=>{const n=make("button",cl,txt);n.type="button";n.setAttribute("aria-pressed",String(selected));n.addEventListener("click",action);return n};
const part=(id,kicker,title,description)=>{const s=make("section","city-section");s.id=id;const box=make("div","city-shell");add(box,make("span","city-kicker",kicker),h(title));if(description)add(box,p(description,"city-lead"));add(s,box);root.appendChild(s);return box};
function render(){
document.documentElement.lang=lang;document.title="CEDEUS · Espacios colectivos y cohesión social · Ángel Muñoz";root.replaceChildren();
const nav=make("header","city-nav"),navBox=make("div","city-shell city-nav-inner"),navLinks=make("nav","city-nav-links"),langs=make("div","city-langs");
add(navLinks,a(i("back"),"../?lang="+lang),a("CEDEUS ↗","https://www.cedeus.cl/"));
["es","en","pt"].forEach(x=>add(langs,btn(x.toUpperCase(),()=>{lang=x;history.replaceState(null,"",location.pathname+"?lang="+x+location.hash);render()},"city-lang",lang===x)));
add(navLinks,langs);add(navBox,a("ÁNGEL / MUÑOZ","../?lang="+lang,"city-logo"),navLinks);add(nav,navBox);root.appendChild(nav);
const hero=make("section","city-hero"),shell=make("div","city-shell city-hero-inner"),copy=make("div","city-copy");
add(copy,make("span","city-eyebrow",i("year")),h(tr(data.hero.title),1),p(tr(data.hero.description),"city-hero-desc"),p(tr(data.hero.subtitle),"city-hero-sub"));
const links=make("div","city-actions");add(links,a(i("moreAbout"),data.sources[0].url,"city-action primary"),a(i("role"),"#participacion","city-action"));add(copy,links);
const visual=make("div","city-visual");visual.setAttribute("aria-hidden","true");
const word=make("div","city-visual-label","SANTIAGO"),lines=make("div","city-streets");
for(let c=0;c<11;c++)add(lines,make("span","street street-"+c));
const dots=make("div","city-nodes");for(let c=0;c<8;c++)add(dots,make("span","city-node node-"+c));
add(visual,lines,dots,word,make("div","city-map-note",lang==="es"?"Composición conceptual · no representa puntos muestrales":lang==="en"?"Conceptual composition · not survey coordinates":"Composição conceitual · sem coordenadas de amostra"));
add(shell,copy,visual);add(hero,shell);root.appendChild(hero);
const facts=make("div","city-shell city-facts");
[["2024",i("year")],["8+",i("areas")],["CEDEUS",i("project")],["UC",i("place")]].forEach(([number,caption])=>{const cell=make("div","city-fact");add(cell,make("strong","",number),make("span","",caption));add(facts,cell)});
root.appendChild(facts);
const overview=part("investigacion","01 / "+i("project"),tr(data.research.title),tr(data.research.description));
const two=make("div","city-two");
const institutional=make("article","city-info");add(institutional,make("span","city-eyebrow","DOCTORADO · UC / CEDEUS"),h(data.meta.researcher,3),p(tr(data.research.scope)),a(i("read"),data.sources[0].url,"city-text-link"));
const scope=make("article","city-info bright");add(scope,make("span","city-eyebrow",i("question")),h(tr(data.question),3),p(tr(data.research.authorship)));
add(two,institutional,scope);add(overview,two);
const contribution=part("participacion","02 / "+i("role"),i("collect"),tr(data.hero.description));
const steps=make("div","field-steps");data.tasks.forEach(x=>{const card=make("article","field-step");add(card,make("span","field-index",x.symbol),h(tr(x.title),3),p(tr(x.description)));add(steps,card)});add(contribution,steps);
const territory=part("territorio","03 / "+i("place"),i("city"),tr(data.communesContext));
const strip=make("div","commune-strip");data.communes.forEach((x,j)=>add(strip,make("span","commune",String(j+1).padStart(2,"0")+" / "+x)));
add(territory,strip);
const lenses=part("preguntas","04 / "+i("question"),i("lenses"),i("lenseNote"));
const tabbox=make("div","lens-tabs"),panel=make("article","lens-panel");
const tabs=data.analyticalLenses.map((x,j)=>{const button=btn("0"+(j+1)+" · "+tr(x.title),()=>{activeLens=j;drawLens(tabs,panel)},"lens-tab",activeLens===j);add(tabbox,button);return button});
add(lenses,tabbox,panel,p(tr(data.scopeNote),"city-footnote"));
function drawLens(buttons,target){buttons.forEach((button,j)=>button.setAttribute("aria-pressed",String(j===activeLens)));
const item=data.analyticalLenses[activeLens];
target.replaceChildren(make("span","lens-number",String(activeLens+1).padStart(2,"0")+" / 04"),h(tr(item.title),3),p(tr(item.body)),make("strong","lens-example",lang==="es"?"EJEMPLO PARA IMAGINARLO":lang==="en"?"A PRACTICAL EXAMPLE":"EXEMPLO PARA ENTENDER"),p(tr(item.example),"lens-example-text"));
const controls=make("div","lens-controls");add(controls,btn(i("previous"),()=>{activeLens=(activeLens+3)%4;drawLens(buttons,target)},"lens-step"),btn(i("next"),()=>{activeLens=(activeLens+1)%4;drawLens(buttons,target)},"lens-step"));add(target,controls);
}
drawLens(tabs,panel);
const policy=part("politica-publica","05 / "+i("policyScope"),tr(data.policy.heading),tr(data.policy.description));
const policyCards=make("div","policy-comparison");
const baseline=make("article","policy-panel original");add(baseline,make("span","policy-year","2024"),h(i("s1"),3),p(tr(data.research.title)),p(tr(data.research.authorship),"policy-note"));
const newer=make("article","policy-panel related");add(newer,make("span","policy-year","2026"),h(i("s2"),3),p(data.meta.relatedStudy),p(tr(data.policy.event.separation),"policy-note"));
add(policyCards,baseline,newer);add(policy,policyCards);
const gov=make("div","government-feature");const side=make("div","gov-date");add(side,make("span","",data.policy.event.date),make("strong","","SANTIAGO"));const content=make("div","gov-body");
add(content,make("span","city-eyebrow","CEDEUS · IEUT UC · 2026"),h(tr(data.policy.title),3),p(tr(data.policy.additional)),make("strong","minister-name",data.policy.event.minister),p(tr(data.policy.event.ministerRole),"minister-title"));
add(gov,side,content);add(policy,gov,p(tr(data.policy.event.separation),"city-footnote"));
const sources=part("fuentes","06 / "+i("evidence"),i("sources"),tr(data.sourcePolicy));
const buttons=make("div","source-filters");const sourceKinds=["core","policy","context","all"];
const filterLabels=[i("s1"),i("s2"),i("public"),i("showAll")];
const box=make("div","source-cards");
const btns=sourceKinds.map((k,j)=>{const item=btn(filterLabels[j],()=>{sourceFilter=k;drawSources()},"source-filter",k===sourceFilter);add(buttons,item);return item});
function drawSources(){btns.forEach((b,j)=>b.setAttribute("aria-pressed",String(sourceKinds[j]===sourceFilter)));box.replaceChildren();
data.sources.filter(x=>sourceFilter==="all"||sourceFilter===x.kind).forEach(x=>{
const card=make("article","source-card");add(card,make("span","city-eyebrow",x.kind.toUpperCase()),h(tr(x.label),3),p(tr(x.description)),a(i("read"),x.url,"city-text-link"));add(box,card);
});}
add(sources,buttons,box);drawSources();
const end=part("limites","07 / "+i("limitations"),i("limitations"),tr(data.limits));
add(end,p(i("transparency"),"city-notice"),p(tr(data.sourcePolicy),"city-footnote"));
const foot=make("footer","city-footer"),footBox=make("div","city-shell");add(footBox,a("← "+i("back"),"../?lang="+lang),a("CEDEUS ↗","https://www.cedeus.cl/"));add(foot,footBox);root.appendChild(foot);
}
fetch("../assets/cedeus-datos.json").then(r=>{if(!r.ok)throw Error("Cannot fetch CEDEUS data");return r.json()}).then(x=>{data=x;render()}).catch(err=>{console.error(err);root.textContent=lang==="es"?"No se pudo cargar el caso CEDEUS.":"Unable to load CEDEUS case."});
})();