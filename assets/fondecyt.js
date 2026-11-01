(function(){
"use strict";
const valid=["es","en","pt"];let lang=new URLSearchParams(location.search).get("lang")||"es";if(!valid.includes(lang))lang="es";
const root=document.getElementById("fondecyt-app");let data=null,gallery=null,threadIndex=0,mediaFilter="all",photoCategory="all",photoLimit=12,cleanupHero=null;
const locale={
es:{back:"Portafolio",research:"Proyecto de investigación",role:"Participación personal",approach:"Contexto y enfoque",methods:"Cómo una investigación se convierte en exposición",threads:"Cuatro hilos para recorrer la muestra",chronology:"Del trabajo de campo a la circulación pública",team:"Créditos y responsabilidades",media:"Documentación, prensa y material audiovisual",visual:"Archivo visual del encuentro",ethic:"Una nota sobre ética y autoría",goSite:"Conocer el proyecto",read:"Ver fuente original",full:"Explorar exposición",sources:"Fuentes verificadas y materiales complementarios",thesis:"Volver al portafolio",photo:"Fotografías por incorporar",noPhoto:"El registro fotográfico se añadirá en una segunda etapa, con créditos y autorización de uso.",other:"Material compartido, por cotejar",sourceCats:{all:"Todos",research:"Investigación",exhibition:"Exposición",press:"Prensa",audiovisual:"Audiovisual",international:"Proyección internacional",social:"Redes",other:"Otros"},verified:"Información cotejada",pending:"Material aportado · pendiente de cotejo",index:"Ejes de la exposición",prev:"Anterior",next:"Siguiente",source:"Leer publicación original",attribution:"Responsabilidades documentadas",photoSource:"Archivo de imágenes",photoCredit:"Créditos por documentar",researchContext:"FONDECYT Regular N.º 1220508",ourWork:"Colaboración externa",discover:"Descubrir los cuatro hilos",sourceWarning:"Los enlaces no verificados se conservan como recursos facilitados, sin atribuirles un contenido o autoría específicos.",workScope:"Mi participación",projectScope:"El proyecto colectivo",metaNotice:"Este portafolio es una presentación profesional independiente. No sustituye el sitio oficial del proyecto ni constituye una publicación institucional de la UPLA o ANID.",privacy:"Los materiales sensibles de participantes y sobrevivientes requieren autorización y revisión ética antes de exhibirse.",photosAvailable:"Fotografías incorporadas",photoCaption:"Abrir fotografía",sourceText:"Consulta la publicación original para obtener detalles, créditos y contexto.",credits:"Equipo e instituciones",exhibit:"Exposición pública",international:"Difusión internacional"},
en:{back:"Portfolio",research:"Research project",role:"Individual contribution",approach:"Context and approach",methods:"From research to an exhibition",threads:"Four threads through the exhibition",chronology:"From research to public circulation",team:"Credits and responsibilities",media:"Reporting, press and audiovisual material",visual:"Event's visual archive",ethic:"A note on ethics and authorship",goSite:"Visit the research project",read:"Open original source",full:"Explore exhibition",sources:"Verified reporting and supplementary material",thesis:"Back to portfolio",photo:"Photographs forthcoming",noPhoto:"Photographs will be added later with verified credits and usage permissions.",other:"Shared material, awaiting review",sourceCats:{all:"All",research:"Research",exhibition:"Exhibition",press:"Press",audiovisual:"Audiovisual",international:"International",social:"Social",other:"Other"},verified:"Source verified",pending:"Submitted link · content not independently checked",index:"Exhibition themes",prev:"Previous",next:"Next",source:"Original publication",attribution:"Documented responsibilities",photoSource:"Photo archive",photoCredit:"Credits pending",researchContext:"FONDECYT Regular 1220508",ourWork:"External collaboration",discover:"Explore four threads",sourceWarning:"Unverified links are retained as submitted resources without claims about specific content or authorship.",workScope:"My contribution",projectScope:"Collective project",metaNotice:"This is an independent professional portfolio, not an official UPLA or ANID publication.",privacy:"Sensitive material from research participants and survivors requires authorization and ethical review before publication.",photosAvailable:"Photos added",photoCaption:"View photograph",sourceText:"See the original publication for full credits and context.",credits:"Team and institutions",exhibit:"Public exhibition",international:"International dissemination"},
pt:{back:"Portfólio",research:"Projeto de pesquisa",role:"Participação individual",approach:"Contexto e abordagem",methods:"Da pesquisa à exposição",threads:"Quatro fios para percorrer a exposição",chronology:"Da pesquisa à circulação pública",team:"Créditos e responsabilidades",media:"Documentação, imprensa e audiovisual",visual:"Arquivo visual do encontro",ethic:"Nota sobre ética e autoria",goSite:"Conhecer o projeto",read:"Abrir fonte original",full:"Explorar exposição",sources:"Fontes verificadas e material complementar",thesis:"Voltar ao portfólio",photo:"Fotografias a acrescentar",noPhoto:"As fotografias serão acrescentadas com créditos e permissões de uso.",other:"Material compartilhado, pendente de análise",sourceCats:{all:"Todos",research:"Pesquisa",exhibition:"Exposição",press:"Imprensa",audiovisual:"Audiovisual",international:"Internacional",social:"Redes",other:"Outros"},verified:"Fonte verificada",pending:"Link compartilhado · conteúdo não verificado",index:"Eixos da exposição",prev:"Anterior",next:"Próximo",source:"Publicação original",attribution:"Responsabilidades documentadas",photoSource:"Arquivo de imagens",photoCredit:"Créditos pendentes",researchContext:"FONDECYT Regular N.º 1220508",ourWork:"Colaboração externa",discover:"Descobrir os quatro fios",sourceWarning:"Links não verificados são mantidos como recursos fornecidos, sem inferir conteúdo ou autoria.",workScope:"Minha participação",projectScope:"Projeto coletivo",metaNotice:"Este portfólio independente não substitui o site oficial do projeto e não é publicação institucional da UPLA ou ANID.",privacy:"Materiais sensíveis de participantes e sobreviventes exigem autorização e revisão ética antes de publicar.",photosAvailable:"Fotos incorporadas",photoCaption:"Abrir fotografia",sourceText:"Confira a publicação original para créditos e contexto.",credits:"Equipe e instituições",exhibit:"Exposição pública",international:"Divulgação internacional"}};
Object.assign(locale.es,{"fundLabel":"INVESTIGACIÓN FONDECYT REGULAR N.º 1220508","heroGroup":"Fotografías de Hilvanar en el auditorio UPLA","heroPrev":"Imagen anterior","heroNext":"Imagen siguiente","heroPlay":"Reproducir imágenes","heroPause":"Pausar imágenes","myMed":"Mi participación en la mediación","pathPhoto":"Del auditorio a la exposición","pathIntro":"El encuentro continuó fuera del auditorio: un recorrido colectivo por la exposición y actividades de diálogo y memoria.","visualGroup":"Recorrido fotográfico"});
Object.assign(locale.en,{"fundLabel":"FONDECYT REGULAR RESEARCH PROJECT NO. 1220508","heroGroup":"Hilvanar auditorium photography at UPLA","heroPrev":"Previous image","heroNext":"Next image","heroPlay":"Play slides","heroPause":"Pause slides","myMed":"My public mediation","pathPhoto":"From the auditorium to the exhibition","pathIntro":"The event continued beyond the auditorium through an exhibition walk and public conversations.","visualGroup":"Photo journey"});
Object.assign(locale.pt,{"fundLabel":"PROJETO DE PESQUISA FONDECYT REGULAR N.º 1220508","heroGroup":"Fotos de Hilvanar no auditório UPLA","heroPrev":"Imagem anterior","heroNext":"Próxima imagem","heroPlay":"Reproduzir imagens","heroPause":"Pausar imagens","myMed":"Minha mediação pública","pathPhoto":"Do auditório à exposição","pathIntro":"O evento continuou além do auditório com um percurso pela exposição e conversas com o público.","visualGroup":"Percurso fotográfico"});
Object.assign(locale.es,{"allPhotos":"Todas","countPhotos":"fotografías del encuentro","morePhotos":"Ver más fotografías","openPhoto":"Ampliar fotografía","closePhoto":"Cerrar fotografía","prevPhoto":"Anterior","nextPhoto":"Siguiente"});
Object.assign(locale.en,{"allPhotos":"All","countPhotos":"event photographs","morePhotos":"Show more photographs","openPhoto":"Enlarge photo","closePhoto":"Close photo","prevPhoto":"Previous","nextPhoto":"Next"});
Object.assign(locale.pt,{"allPhotos":"Todas","countPhotos":"fotografias do encontro","morePhotos":"Mostrar mais fotos","openPhoto":"Ampliar foto","closePhoto":"Fechar foto","prevPhoto":"Anterior","nextPhoto":"Próxima"});
const i=k=>locale[lang][k]??locale.es[k]??k;
const tr=v=>typeof v==="string"?v:v?.[lang]??v?.es??"";
const node=(tag,cl,txt)=>{let n=document.createElement(tag);if(cl)n.className=cl;if(txt!==undefined&&txt!==null)n.textContent=String(txt);return n};
const append=(p,...items)=>{items.forEach(x=>{if(x)p.appendChild(x)});return p};
const h=(s,n=2)=>node("h"+n,"",s);
const para=(s,cl="")=>node("p",cl,s);
const a=(s,href,cl="")=>{let el=node("a",cl,s);el.href=href;if(/^https?:\/\//.test(href)){el.target="_blank";el.rel="noopener noreferrer"}return el};
const b=(s,click,cl="",on=false)=>{let el=node("button",cl,s);el.type="button";el.setAttribute("aria-pressed",String(on));el.addEventListener("click",click);return el};
const section=(id,kicker,title,lead)=>{let x=node("section","case-section");x.id=id;let body=node("div","case-shell");append(body,node("span","kicker",kicker),h(title));if(lead)append(body,para(lead,"section-intro"));append(x,body);root.appendChild(x);return body};
const publicPhotos=()=>Array.isArray(gallery?.images)?gallery.images.filter(x=>x.visibility==="public_event"&&!x.sensitive&&typeof x.src==="string"):[];
const photoUrl=x=>"assets/"+encodeURIComponent(typeof x==="string"?x:x.src);
function render(){
if(cleanupHero){cleanupHero();cleanupHero=null}
document.documentElement.lang=lang;document.title="Hilvanar · FONDECYT 1220508 · Ángel Muñoz";root.replaceChildren();
const nav=node("header","topbar"),bar=node("div","case-shell bar-inner"),right=node("nav","bar-links");
right.setAttribute("aria-label","Portfolio navigation");
append(right,a(i("back"),"../?lang="+lang),a(i("goSite"),"https://violenciasyresistencias.cl/"));
const langs=node("div","langs");
["es","en","pt"].forEach(l=>append(langs,b(l.toUpperCase(),()=>{lang=l;history.replaceState(null,"",location.pathname+"?lang="+lang+location.hash);render()}, "",lang===l)));
append(right,langs);append(bar,a("ÁNGEL / MUÑOZ","../?lang="+lang,"brand"),right);append(nav,bar);root.appendChild(nav);
const hero=node("section","hero"),heroShell=node("div","case-shell hero-inner"),copy=node("div","hero-copy");
append(copy,node("span","kicker",i("fundLabel")+" · UPLA · 2026"),h(tr(data.headline),1),para(tr(data.intro),"hero-lead"),para(tr(data.subtitle),"hero-role"));
const actions=node("div","hero-actions");append(actions,a(i("discover"),"#hilos","action primary"),a(i("goSite"),"https://violenciasyresistencias.cl/","action"));append(copy,actions);
const showcase=node("div","hero-photo-showcase");showcase.setAttribute("role","group");showcase.setAttribute("aria-label",i("heroGroup"));
const stage=node("div","hero-photo-stage"),labelbox=node("div","hero-photo-bottom"),buttons=node("div","hero-photo-controls");
const heroPhotos=Array.isArray(gallery?.hero)?gallery.hero:[],photoInfo=gallery?.images||[];
const slideEls=heroPhotos.map((file,j)=>{const x=node("div","hero-photo-slide"+(j===0?" is-current":""));x.setAttribute("aria-hidden",String(j!==0));const img=node("img");img.src=photoUrl(file.src);img.alt=tr(photoInfo.find(p=>p.src===file.src)?.alt)||i("heroGroup");img.loading=j?"lazy":"eager";img.decoding="async";if(!j)img.setAttribute("fetchpriority","high");append(x,img);append(stage,x);return x;});
const labelText=node("div","hero-photo-caption"),count=node("span","hero-photo-counter");
append(labelbox,labelText,count);
let heroIndex=0,heroPlaying=false,heroVisible=false,manualPause=false,timer=null,obs=null,dead=false;
const reduced=typeof window.matchMedia==="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const prev=b("←",()=>jump(heroIndex-1),"hero-photo-button"),play=b("▶",()=>{if(heroPlaying){manualPause=true;stop()}else{manualPause=false;start()}}, "hero-photo-button"),next=b("→",()=>jump(heroIndex+1),"hero-photo-button");
prev.setAttribute("aria-label",i("heroPrev"));next.setAttribute("aria-label",i("heroNext"));
const dots=node("div","hero-photo-dots"),dotEls=heroPhotos.map((x,j)=>{const button=b(String(j+1).padStart(2,"0"),()=>jump(j),"hero-photo-dot",j===0);append(dots,button);return button});
append(buttons,prev,play,next,dots);append(showcase,stage,labelbox,buttons);append(heroShell,copy,showcase);append(hero,heroShell);root.append(hero);
function paint(){
 slideEls.forEach((x,j)=>{x.classList.toggle("is-current",j===heroIndex);x.setAttribute("aria-hidden",String(j!==heroIndex))});
 dotEls.forEach((x,j)=>x.setAttribute("aria-pressed",String(j===heroIndex)));
 labelText.textContent=heroPhotos[heroIndex]?tr(heroPhotos[heroIndex].caption):i("heroGroup");
 count.textContent=String(heroIndex+1).padStart(2,"0")+" / "+String(heroPhotos.length).padStart(2,"0");
 play.textContent=heroPlaying?"Ⅱ":"▶";play.setAttribute("aria-label",i(heroPlaying?"heroPause":"heroPlay"));
}
function stop(){if(timer!==null){clearTimeout(timer);timer=null}heroPlaying=false;paint()}
function tick(){if(timer!==null)clearTimeout(timer);if(heroPlaying&&!dead&&!document.hidden&&heroVisible&&heroPhotos.length>1)timer=setTimeout(()=>{heroIndex=(heroIndex+1)%heroPhotos.length;paint();tick()},5400)}
function start(){if(dead||document.hidden||heroPhotos.length<2)return;heroVisible=true;heroPlaying=true;paint();tick()}
function jump(n){heroIndex=(n+heroPhotos.length)%heroPhotos.length;paint();if(heroPlaying)tick()}
const visible=()=>{if(document.hidden)stop();else if(heroVisible&&!manualPause&&!reduced)start()};
document.addEventListener("visibilitychange",visible);
if("IntersectionObserver" in window){obs=new IntersectionObserver(entries=>{heroVisible=entries.some(e=>e.isIntersecting);if(heroVisible&&!reduced&&!manualPause)start();else stop()},{threshold:.2});obs.observe(showcase)}
else{heroVisible=true;if(!reduced)start()}
if(reduced)manualPause=true;paint();
cleanupHero=()=>{dead=true;if(timer!==null)clearTimeout(timer);document.removeEventListener("visibilitychange",visible);obs?.disconnect()};
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
const me=publicPhotos().filter(x=>x.featured);
if(me.length){
 const feature=node("section","mediator-feature");feature.id="mi-mediacion";
 const shell=node("div","case-shell"),intro=node("div","mediator-text");
 append(intro,node("span","kicker",i("myMed")+" · FONDECYT 1220508"),h(tr(data.role.photographicTitle),2),para(tr(data.role.photographicText),"mediator-lead"),para(tr(data.role.photoNote),"mediator-note"));
 const photos=node("div","mediator-photos");
 me.slice(0,3).forEach((item,j)=>{const figure=node("figure","mediator-photo"+(j===0?" main":"")),img=node("img");img.src=photoUrl(item);img.alt=tr(item.alt);img.loading="lazy";img.decoding="async";append(figure,img,node("figcaption","",tr(item.caption)));append(photos,figure)});
 append(shell,intro,photos);append(feature,shell);root.append(feature);
}

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
const storyImgs=[publicPhotos().find(x=>x.category==="recorrido"),publicPhotos().find(x=>x.src==="exhibicion-entrada.webp"),publicPhotos().find(x=>x.category==="actividades")].filter(Boolean);
if(storyImgs.length){
 const walking=node("section","walk-photo-essay"),inner=node("div","case-shell");
 append(inner,node("span","kicker",i("visualGroup")),h(i("pathPhoto"),2),para(i("pathIntro"),"section-intro"));
 const flow=node("div","walk-photo-grid");
 storyImgs.forEach((item,j)=>{const fig=node("figure","walk-photo"+(j===1?" tall":"")),img=node("img");img.src=photoUrl(item);img.alt=tr(item.alt);img.loading="lazy";append(fig,img,node("figcaption","",tr(item.caption)));append(flow,fig)});
 append(inner,flow);append(walking,inner);root.append(walking);
}

const international=section("chile-espana","05 / "+tr(data.international.eyebrow),tr(data.international.title),tr(data.international.description));
const cross=node("div","international-panel"),route=node("div","international-route");
const chile=node("article","country-point"),spanish=node("article","country-point");
append(chile,node("span","country-tag","CHILE"),h("Valparaíso",3),para(lang==="es"?"Proyecto ANID / FONDECYT 1220508 · Universidad de Playa Ancha":lang==="en"?"ANID / FONDECYT 1220508 · Universidad de Playa Ancha":"Projeto ANID / FONDECYT 1220508 · Universidad de Playa Ancha"));
append(spanish,node("span","country-tag","ESPAÑA"),h("Barcelona",3),para(tr(data.international.host)+" · "+data.international.date));
append(route,chile,node("div","country-connector","→"),spanish);
const detail=node("div","international-detail");
append(detail,para(tr(data.international.methodological)),para(tr(data.international.distinction),"international-disclaimer"));
const dest=node("div","international-links");
append(dest,a(lang==="es"?"Leer crónica UAB ↗":lang==="en"?"Read UAB account ↗":"Ler notícia UAB ↗",data.international.link,"source-link"),a(lang==="es"?"Perfil de Macarena Trujillo · CALAS ↗":lang==="en"?"Macarena Trujillo · CALAS profile ↗":"Perfil de Macarena Trujillo · CALAS ↗",data.international.calasLink,"source-link"));
append(detail,dest);append(cross,route,detail);append(international,cross);
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
const photos=section("fotografias","07 / "+i("photoSource"),i("visual"),tr(data.gallery.intro||data.gallery.placeholder));
const allowed=publicPhotos(),galleryGroups=[{id:"all",name:{es:"Todas",en:"All",pt:"Todas"}},...(gallery?.groups||[])];
const filterRow=node("div","gallery-filters");filterRow.setAttribute("role","group");filterRow.setAttribute("aria-label",i("visual"));
const photoCount=node("div","gallery-count"),photoGrid=node("div","photo-grid");
const loadMore=b(i("morePhotos")+" ↓",()=>{photoLimit+=12;drawGallery()},"gallery-more");
const dialog=node("dialog","gallery-dialog"),modalBody=node("div","gallery-dialog-inner"),bigPhoto=node("img"),bigCaption=node("p","gallery-dialog-caption"),modalNav=node("div","gallery-dialog-bar");
const closePhoto=b("×",()=>dialog.close(),"gallery-dialog-close");closePhoto.setAttribute("aria-label",i("closePhoto"));
const backPhoto=b("←",()=>rotate(-1),"gallery-dialog-nav");backPhoto.setAttribute("aria-label",i("prevPhoto"));
const nextPhoto=b("→",()=>rotate(1),"gallery-dialog-nav");nextPhoto.setAttribute("aria-label",i("nextPhoto"));
append(modalNav,backPhoto,nextPhoto,closePhoto);append(modalBody,modalNav,bigPhoto,bigCaption);append(dialog,modalBody);
const filterButtons=galleryGroups.map(group=>{const button=b(tr(group.name),()=>{photoCategory=group.id;photoLimit=12;drawGallery()},"gallery-filter",photoCategory===group.id);append(filterRow,button);return button});
let currentList=[],lightIndex=0;
function rotate(direction){
 if(!currentList.length)return;
 lightIndex=(lightIndex+direction+currentList.length)%currentList.length;
 const photo=currentList[lightIndex];bigPhoto.src=photoUrl(photo);bigPhoto.alt=tr(photo.alt);bigCaption.textContent=tr(photo.caption)+" · "+photo.credit;
}
function openLight(photo,list){
 currentList=list;lightIndex=Math.max(0,list.indexOf(photo));rotate(0);
 if(typeof dialog.showModal==="function")dialog.showModal();
}
function drawGallery(){
 filterButtons.forEach((button,j)=>button.setAttribute("aria-pressed",String(galleryGroups[j].id===photoCategory)));
 const items=allowed.filter(x=>photoCategory==="all"||x.category===photoCategory);
 photoGrid.replaceChildren();photoCount.textContent=items.length+" "+i("countPhotos");
 items.slice(0,photoLimit).forEach((photo,j)=>{
  const figure=node("figure","photo-card"+(j%11===0?" wide":"")),trigger=b("",()=>openLight(photo,items),"gallery-photo-open");
  trigger.setAttribute("aria-label",i("openPhoto")+": "+tr(photo.alt));
  const image=node("img");image.src=photoUrl(photo);image.alt=tr(photo.alt);image.loading="lazy";image.decoding="async";
  append(trigger,image);
  const caption=node("figcaption","");append(caption,node("strong","",tr(photo.caption)),node("small","",photo.credit));
  append(figure,trigger,caption);append(photoGrid,figure);
 });
 loadMore.hidden=items.length<=photoLimit;
}
append(photos,filterRow,photoCount,photoGrid,loadMore,dialog,para(tr(data.gallery.warning),"photo-ethics"));
drawGallery();
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