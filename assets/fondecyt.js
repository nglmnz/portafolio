(function(){
"use strict";
const valid=["es","en","pt"];let lang=new URLSearchParams(location.search).get("lang")||"es";if(!valid.includes(lang))lang="es";
const root=document.getElementById("fondecyt-app");let data=null,gallery=null,threadIndex=0,mediaFilter="all";
const locale={
es:{back:"Portafolio",research:"Proyecto de investigación",role:"Participación personal",approach:"Contexto y enfoque",methods:"Cómo una investigación se convierte en exposición",threads:"Cuatro hilos para recorrer la muestra",chronology:"Del trabajo de campo a la circulación pública",team:"Créditos y responsabilidades",media:"Documentación, prensa y material audiovisual",visual:"Archivo visual del encuentro",ethic:"Una nota sobre ética y autoría",goSite:"Conocer el proyecto",read:"Ver fuente original",full:"Explorar exposición",sources:"Fuentes verificadas y materiales complementarios",thesis:"Volver al portafolio",photo:"Fotografías por incorporar",noPhoto:"El registro fotográfico se añadirá en una segunda etapa, con créditos y autorización de uso.",other:"Material compartido, por cotejar",sourceCats:{all:"Todos",research:"Investigación",exhibition:"Exposición",press:"Prensa",audiovisual:"Audiovisual",international:"Proyección internacional",social:"Redes",other:"Otros"},verified:"Información cotejada",pending:"Material aportado · pendiente de cotejo",index:"Ejes de la exposición",prev:"Anterior",next:"Siguiente",source:"Leer publicación original",attribution:"Responsabilidades documentadas",photoSource:"Archivo de imágenes",photoCredit:"Créditos por documentar",researchContext:"FONDECYT Regular N.º 1220508",ourWork:"Colaboración externa",discover:"Descubrir los cuatro hilos",sourceWarning:"Los enlaces no verificados se conservan como recursos facilitados, sin atribuirles un contenido o autoría específicos.",workScope:"Mi participación",projectScope:"El proyecto colectivo",metaNotice:"Este portafolio es una presentación profesional independiente. No sustituye el sitio oficial del proyecto ni constituye una publicación institucional de la UPLA o ANID.",privacy:"Los materiales sensibles de participantes y sobrevivientes requieren autorización y revisión ética antes de exhibirse.",photosAvailable:"Fotografías incorporadas",photoCaption:"Abrir fotografía",sourceText:"Consulta la publicación original para obtener detalles, créditos y contexto.",credits:"Equipo e instituciones",exhibit:"Exposición pública",international:"Difusión internacional"},
en:{back:"Portfolio",research:"Research project",role:"Individual contribution",approach:"Context and approach",methods:"From research to an exhibition",threads:"Four threads through the exhibition",chronology:"From research to public circulation",team:"Credits and responsibilities",media:"Reporting, press and audiovisual material",visual:"Event's visual archive",ethic:"A note on ethics and authorship",goSite:"Visit the research project",read:"Open original source",full:"Explore exhibition",sources:"Verified reporting and supplementary material",thesis:"Back to portfolio",photo:"Photographs forthcoming",noPhoto:"Photographs will be added later with verified credits and usage permissions.",other:"Shared material, awaiting review",sourceCats:{all:"All",research:"Research",exhibition:"Exhibition",press:"Press",audiovisual:"Audiovisual",international:"International",social:"Social",other:"Other"},verified:"Source verified",pending:"Submitted link · content not independently checked",index:"Exhibition themes",prev:"Previous",next:"Next",source:"Original publication",attribution:"Documented responsibilities",photoSource:"Photo archive",photoCredit:"Credits pending",researchContext:"FONDECYT Regular 1220508",ourWork:"External collaboration",discover:"Explore four threads",sourceWarning:"Unverified links are retained as submitted resources without claims about specific content or authorship.",workScope:"My contribution",projectScope:"Collective project",metaNotice:"This is an independent professional portfolio, not an official UPLA or ANID publication.",privacy:"Sensitive material from research participants and survivors requires authorization and ethical review before publication.",photosAvailable:"Photos added",photoCaption:"View photograph",sourceText:"See the original publication for full credits and context.",credits:"Team and institutions",exhibit:"Public exhibition",international:"International dissemination"},
pt:{back:"Portfólio",research:"Projeto de pesquisa",role:"Participação individual",approach:"Contexto e abordagem",methods:"Da pesquisa à exposição",threads:"Quatro fios para percorrer a exposição",chronology:"Da pesquisa à circulação pública",team:"Créditos e responsabilidades",media:"Documentação, imprensa e audiovisual",visual:"Arquivo visual do encontro",ethic:"Nota sobre ética e autoria",goSite:"Conhecer o projeto",read:"Abrir fonte original",full:"Explorar exposição",sources:"Fontes verificadas e material complementar",thesis:"Voltar ao portfólio",photo:"Fotografias a acrescentar",noPhoto:"As fotografias serão acrescentadas com créditos e permissões de uso.",other:"Material compartilhado, pendente de análise",sourceCats:{all:"Todos",research:"Pesquisa",exhibition:"Exposição",press:"Imprensa",audiovisual:"Audiovisual",international:"Internacional",social:"Redes",other:"Outros"},verified:"Fonte verificada",pending:"Link compartilhado · conteúdo não verificado",index:"Eixos da exposição",prev:"Anterior",next:"Próximo",source:"Publicação original",attribution:"Responsabilidades documentadas",photoSource:"Arquivo de imagens",photoCredit:"Créditos pendentes",researchContext:"FONDECYT Regular N.º 1220508",ourWork:"Colaboração externa",discover:"Descobrir os quatro fios",sourceWarning:"Links não verificados são mantidos como recursos fornecidos, sem inferir conteúdo ou autoria.",workScope:"Minha participação",projectScope:"Projeto coletivo",metaNotice:"Este portfólio independente não substitui o site oficial do projeto e não é publicação institucional da UPLA ou ANID.",privacy:"Materiais sensíveis de participantes e sobreviventes exigem autorização e revisão ética antes de publicar.",photosAvailable:"Fotos incorporadas",photoCaption:"Abrir fotografia",sourceText:"Confira a publicação original para créditos e contexto.",credits:"Equipe e instituições",exhibit:"Exposição pública",international:"Divulgação internacional"}};
const i=k=>locale[lang][k]??locale.es[k]??k;
const tr=v=>typeof v==="string"?v:v?.[lang]??v?.es??"";
const node=(tag,cl,txt)=>{let n=document.createElement(tag);if(cl)n.className=cl;if(txt!==undefined&&txt!==null)n.textContent=String(txt);return n};
const append=(p,...items)=>{items.forEach(x=>{if(x)p.appendChild(x)});return p};
const h=(s,n=2)=>node("h"+n,"",s);
const para=(s,cl="")=>node("p",cl,s);
const a=(s,href,cl="")=>{let el=node("a",cl,s);el.href=href;if(/^https?:\/\//.test(href)){el.target="_blank";el.rel="noopener noreferrer"}return el};
const b=(s,click,cl="",on=false)=>{let el=node("button",cl,s);el.type="button";el.setAttribute("aria-pressed",String(on));el.addEventListener("click",click);return el};
const section=(id,kicker,title,lead)=>{let x=node("section","case-section");x.id=id;let body=node("div","case-shell");append(body,node("span","kicker",kicker),h(title));if(lead)append(body,para(lead,"section-intro"));append(x,body);root.appendChild(x);return body};
function render(){
document.documentElement.lang=lang;document.title="Hilvanar · FONDECYT 1220508 · Ángel Muñoz";root.replaceChildren();
const nav=node("header","topbar"),bar=node("div","case-shell bar-inner"),right=node("nav","bar-links");
right.setAttribute("aria-label","Portfolio navigation");
append(right,a(i("back"),"../?lang="+lang),a(i("goSite"),"https://violenciasyresistencias.cl/"));
const langs=node("div","langs");
["es","en","pt"].forEach(l=>append(langs,b(l.toUpperCase(),()=>{lang=l;history.replaceState(null,"",location.pathname+"?lang="+lang+location.hash);render()}, "",lang===l)));
append(right,langs);append(bar,a("ÁNGEL / MUÑOZ","../?lang="+lang,"brand"),right);append(nav,bar);root.appendChild(nav);
const hero=node("section","hero"),heroShell=node("div","case-shell hero-inner"),copy=node("div","hero-copy"),orn=node("div","hero-art");
orn.setAttribute("aria-hidden","true");
for(let j=0;j<4;j++)append(orn,node("span","thread-line line-"+j));
append(orn,node("span","thread-knot"));
append(copy,node("span","kicker",i("research")+" · 2022–2026"),h(tr(data.headline),1),para(tr(data.intro),"hero-lead"),para(tr(data.subtitle),"hero-role"));
const actions=node("div","hero-actions");
append(actions,a(i("discover"),"#hilos","action primary"),a(i("goSite"),"https://violenciasyresistencias.cl/","action"));
append(copy,actions);append(heroShell,copy,orn);append(hero,heroShell);root.append(hero);
const stats=node("div","case-shell keyfacts");
[[data.meta.project,"ANID · 2022–2026"],["15.04 — 15.05",i("exhibit")+" · 2026"],["4",i("index")],["12.06",i("international")+" · UAB 2026"]].forEach(([num,lab])=>{let c=node("div","fact");append(c,node("strong","",num),node("span","",lab));append(stats,c)});
root.append(stats);
const project=section("investigacion","01 / "+i("research"),i("approach"),tr(data.context));
const scope=node("div","scope-duo");
let collective=node("article","scope-card research-card");
append(collective,node("span","kicker",i("projectScope")),h(i("researchContext"),3),para(tr(data.attribution)),a(i("read")+" ↗","https://violenciasyresistencias.cl/proyectos/","source-link"));
let my=node("article","scope-card my-card");
append(my,node("span","kicker",i("workScope")),h(tr(data.role.title),3),para(tr(data.role.statement)),para(tr(data.role.scope),"scope-caveat"));
append(scope,collective,my);append(project,scope);
const question=section("metodo","02 / "+i("methods"),i("methods"),tr(data.method.response));
const heroQuestion=node("blockquote","big-question",tr(data.method.question));
append(question,heroQuestion);
const pillars=node("div","pillars");
data.role.pillars.forEach((p,j)=>{const x=node("article","pillar");append(x,node("span","pillar-id","0"+(j+1)),h(tr(p.title),3),para(tr(p.text)));append(pillars,x)});append(question,pillars);
const themes=section("hilos","03 / "+i("exhibit"),i("threads"),lang==="es"?"Un recorrido conceptual por los lenguajes que puso en relación la exposición.":lang==="en"?"A conceptual itinerary through the exhibition's interconnected media.":"Um percurso conceitual pelas linguagens relacionadas na exposição.");
const threadTabs=node("div","theme-tabs");threadTabs.setAttribute("role","group");threadTabs.setAttribute("aria-label",i("index"));
data.threads.forEach((x,j)=>append(threadTabs,b(x.number+" · "+tr(x.subtitle),()=>{threadIndex=j;drawThread(threadTabs,threadPanel)},"thread-tab",threadIndex===j)));
const threadPanel=node("article","thread-panel");append(themes,threadTabs,threadPanel);
drawThread(threadTabs,threadPanel);
const timeline=section("cronologia","04 / "+i("chronology"),i("chronology"));
const axis=node("div","timeline");
data.timeline.forEach((x,k)=>{let row=node("article","moment"),time=node("div","moment-date",x.date),body=node("div","moment-body");append(body,h(tr(x.label),3),para(tr(x.detail)));if(x.url)append(body,a(i("source")+" ↗",x.url,"source-link"));append(row,time,body);append(axis,row)});
append(timeline,axis);
const credits=section("equipo","05 / "+i("credits"),i("team"),lang==="es"?"Se conserva la autoría y responsabilidad de la investigación, la curaduría y las funciones de colaboración.":lang==="en"?"Research, curation and collaboration roles are carefully distinguished.":"São diferenciadas as responsabilidades pela pesquisa, pela curadoria e pela colaboração.");
let creditGrid=node("div","credit-grid");
data.credits.forEach(p=>{let x=node("article","credit-card");append(x,h(p.name,3),para(tr(p.role)));if(p.link)append(x,a(i("read")+" ↗",p.link,"source-link"));append(creditGrid,x)});
append(credits,creditGrid);
const media=section("archivo","06 / "+i("media"),i("sources"),lang==="es"?"Prensa, documentos institucionales y enlaces audiovisuales para continuar explorando la experiencia.":lang==="en"?"Press, institutional reporting and audiovisual links for further exploration.":"Imprensa, publicações institucionais e links audiovisuais para conhecer a experiência.");
const filters=node("div","media-filters");
const groups=["all","research","exhibition","press","audiovisual","international","social","other"];
groups.forEach(c=>append(filters,b(i("sourceCats")[c],()=>{mediaFilter=c;drawMedia(filters,mediaGrid)},"media-filter",mediaFilter===c)));
const mediaGrid=node("div","media-grid");
append(media,filters,mediaGrid);
drawMedia(filters,mediaGrid);
append(media,para(i("sourceWarning"),"source-caveat"));
const photos=section("fotografias","07 / "+i("photoSource"),i("visual"),tr(data.gallery.placeholder));
const grid=node("div","photo-grid");
const photoEntries=Array.isArray(gallery?.images)?gallery.images:[];
if(!photoEntries.length){
 const empty=node("div","photo-empty");
 const art=node("div","photo-empty-art");art.setAttribute("aria-hidden","true");append(art,node("span","","◇"),node("span","","○"),node("span","","◇"));
 append(empty,art,h(i("photo"),3),para(i("noPhoto")),node("span","file-hint","fondecyt/assets/images/"));
 append(grid,empty);
}else{
 photoEntries.forEach(item=>{
  if(!item.src||item.sensitive===true||typeof item.permission!=="string"||!/(autoriz|consent|permission granted|licensed|licencia)/i.test(item.permission))return;
  let figure=node("figure","photo-card"),img=node("img");
  img.src="assets/"+item.src;img.loading="lazy";img.alt=tr(item.alt)||tr(item.caption);
  let cap=node("figcaption","");append(cap,node("strong","",tr(item.caption)),node("small","",item.credit||i("photoCredit")));
  append(figure,img,cap);append(grid,figure);
 });
}
append(photos,grid,para(i("privacy"),"photo-ethics"));
const ethics=section("etica","08 / "+i("ethic"),i("ethic"));
const callout=node("div","ethic-panel");
append(callout,h(i("attribution"),3),para(tr(data.attribution)),para(i("privacy")),para(i("metaNotice")));
append(ethics,callout);
const foot=node("footer","footer");let ft=node("div","case-shell footer-inner");
append(ft,a("← "+i("thesis"),"../?lang="+lang),a(i("goSite")+" ↗","https://violenciasyresistencias.cl/"));append(foot,ft);root.append(foot);
}
function drawThread(tabs,panel){
 Array.from(tabs.querySelectorAll("button")).forEach((n,j)=>n.setAttribute("aria-pressed",String(j===threadIndex)));
 const x=data.threads[threadIndex];
 panel.replaceChildren();
 const top=node("div","thread-meta");
 append(top,node("span","thread-big-num",x.number),node("span","thread-kind",tr(x.subtitle)));
 const content=node("div","thread-text");
 append(content,h(tr(x.title),3),para(tr(x.text)),a(i("read")+" ↗",x.source,"source-link"));
 const arrows=node("div","thread-arrows");
 append(arrows,b("← "+i("prev"),()=>{threadIndex=(threadIndex+3)%4;drawThread(tabs,panel)},"thread-arrow"),b(i("next")+" →",()=>{threadIndex=(threadIndex+1)%4;drawThread(tabs,panel)},"thread-arrow"));
 append(panel,top,content,arrows);
}
function drawMedia(filters,grid){
 Array.from(filters.querySelectorAll("button")).forEach((n,j)=>n.setAttribute("aria-pressed",String(["all","research","exhibition","press","audiovisual","international","social","other"][j]===mediaFilter)));
 grid.replaceChildren();
 data.sources.filter(x=>mediaFilter==="all"||mediaFilter===x.category).forEach(src=>{
  let article=node("article","media-card");
  const top=node("div","media-top");append(top,node("span","media-category",i("sourceCats")[src.category]),node("span","media-date",src.year));
  const checked=node("span","media-status "+(src.verified?"verified":"pending"),i(src.verified?"verified":"pending"));
  append(article,top,h(tr(src.name),3),para(tr(src.desc)),checked,a(i("read")+" ↗",src.url,"media-link"));
  append(grid,article);
 });
}
Promise.all([fetch("../assets/fondecyt-datos.json"),fetch("assets/galeria.json")]).then(async([a,b])=>{
 if(!a.ok)throw Error("Main data unavailable");
 data=await a.json();
 gallery=b.ok?await b.json():{images:[]};
 render();
}).catch(e=>{console.error(e);root.textContent=lang==="es"?"No se pudo cargar el archivo editorial.":lang==="pt"?"Não foi possível carregar o arquivo.":"Could not load the editorial archive."});
})();