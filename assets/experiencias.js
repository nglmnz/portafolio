(()=>{"use strict";
const app=document.getElementById("case-app"),kind=document.body.dataset.case;
let language=new URLSearchParams(location.search).get("lang")||"es";if(!["es","en","pt"].includes(language))language="es";
let data=null,album=null,selected=0,filter="all";
const UI={
es:{back:"Portafolio",orig:"Fuente original",about:"Contexto",role:"Mi contribución",people:"Participantes UAH documentados por el corresponsal",themes:"Debates que marcaron el congreso",archive:"Materiales de referencia",photos:"Archivo fotográfico",sources:"Fuentes públicas",limitations:"Alcances y fuentes",more:"Consultar fuente ↗",themesK:"AGENDA SOCIOLÓGICA",what:"Labor de cobertura",photoEmpty:"Las fotografías y entrevistas se incorporarán cuando se suban los archivos originales, con créditos verificados.",fileHelp:"Carpeta preparada para fotografías",galleryAll:"Todas",cases:"Explorar otros proyectos",film:"Películas y conversaciones",timeline:"Una historia cinematográfica que llega a la universidad",collabs:"Actriz, organizaciones y productora",discussion:"Preguntas que abrió la actividad",moment:"Jornada",filmDetail:"Película proyectada",dialogue:"Encuentro con la comunidad",release:"Hitos de cine y reconocimiento",number:"Asistentes (según organizador)",year2022:"Jornada 2022",year2025:"Jornada 2025",link:"Ver ficha ↗",play:"Material audiovisual",view:"Ver fotografía"},
en:{back:"Portfolio",orig:"Original source",about:"Context",role:"My contribution",people:"UAH participants reported by correspondent",themes:"Ideas shaping the congress",archive:"Reference materials",photos:"Photographic archive",sources:"Public sources",limitations:"Evidence and limitations",more:"Open source ↗",themesK:"SOCIOLOGICAL AGENDA",what:"Correspondence and communication",photoEmpty:"Photographs and interviews will be included once originals and credits are provided.",fileHelp:"Ready for photo uploads",galleryAll:"All",cases:"Other projects",film:"Film and conversation",timeline:"A film journey into the university",collabs:"Actress, organizations and producer",discussion:"Questions opened by the event",moment:"Event",filmDetail:"Screened film",dialogue:"Community conversation",release:"Film and recognition milestones",number:"Attendees (organizer-reported)",year2022:"2022 event",year2025:"2025 event",link:"Film details ↗",play:"Audiovisual resources",view:"View photo"},
pt:{back:"Portfólio",orig:"Fonte original",about:"Contexto",role:"Minha contribuição",people:"Participantes UAH informados pelo correspondente",themes:"Debates centrais do congresso",archive:"Material de referência",photos:"Arquivo fotográfico",sources:"Fontes públicas",limitations:"Fontes e limites",more:"Abrir fonte ↗",themesK:"AGENDA SOCIOLÓGICA",what:"Cobertura científica",photoEmpty:"Fotos e entrevistas serão incluídas após o envio dos originais e créditos.",fileHelp:"Pasta pronta para fotos",galleryAll:"Todas",cases:"Outros projetos",film:"Cinema e conversa",timeline:"Uma trajetória cinematográfica até a universidade",collabs:"Atriz, entidades e produtora",discussion:"Perguntas abertas pelo encontro",moment:"Encontro",filmDetail:"Filme exibido",dialogue:"Conversa com a comunidade",release:"Cinema e reconhecimentos",number:"Participantes (segundo organizador)",year2022:"Encontro 2022",year2025:"Encontro 2025",link:"Ficha do filme ↗",play:"Material audiovisual",view:"Ver foto"}};
const ui=k=>UI[language][k]||k, tr=x=>typeof x==="string"?x:x?.[language]??x?.es??"";
const n=(tag,cl,txt)=>{const a=document.createElement(tag);if(cl)a.className=cl;if(txt!==undefined)a.textContent=String(txt);return a};
const add=(p,...children)=>{children.forEach(c=>{if(c)p.appendChild(c)});return p};
const h=(txt,l=2)=>n("h"+l,"",txt),p=(txt,cl="")=>n("p",cl,txt);
const link=(txt,url,cl="")=>{const a=n("a",cl,txt);a.href=url;if(/^https?:\/\//.test(url)){a.target="_blank";a.rel="noopener noreferrer"}return a};
const button=(txt,act,cl="",yes=false)=>{const a=n("button",cl,txt);a.type="button";a.setAttribute("aria-pressed",String(yes));a.addEventListener("click",act);return a};
const part=(id,kicker,title,desc)=>{const s=n("section","xp-section");s.id=id;const inner=n("div","xp-shell");if(kicker)add(inner,n("span","xp-kicker",kicker));if(title)add(inner,h(title));if(desc)add(inner,p(desc,"xp-lead"));add(s,inner);app.appendChild(s);return inner};
const w=(url)=>url.startsWith("http")?url:"#";
function nav(){const top=n("header","xp-navbar"),inner=n("div","xp-shell xp-nav-in"),right=n("nav","xp-navlinks"),langs=n("div","xp-langs");
right.setAttribute("aria-label","Portfolio navigation");
add(right,link(ui("back"),"../?lang="+language));
for(const code of ["es","en","pt"])add(langs,button(code.toUpperCase(),()=>{language=code;history.replaceState(null,"",location.pathname+"?lang="+code+location.hash);render()}, "xp-language",language===code));
add(right,langs);add(inner,link("ÁNGEL / MUÑOZ","../?lang="+language,"xp-brand"),right);add(top,inner);app.appendChild(top)}
function hero(){const outer=n("section","xp-hero"),inner=n("div","xp-shell xp-hero-in"),copy=n("div","xp-hero-text"),art=n("div","xp-hero-visual");
if(kind==="alas")art.setAttribute("aria-hidden","true");
add(copy,n("span","xp-kicker",tr(data.hero.kicker)),h(tr(data.hero.title),1),p(tr(kind==="alas"?data.hero.subtitle:data.hero.subtitle),"xp-hero-lede"));
if(kind==="alas"){
add(copy,p(data.meta.tagline,"xp-theme-sentence"),p(data.meta.dates+" · "+data.meta.city,"xp-hero-meta"));
add(art,n("div","xp-wave wave-a"),n("div","xp-wave wave-b"),n("div","xp-wave wave-c"),n("div","xp-wave wave-d"),n("strong","xp-art-center","ALAS / 75"));
}else{
add(copy,p("UAH · 2022 → 2025","xp-hero-meta"));
art.className+=" xp-poster-visual";
const poster=n("figure","xp-hero-poster");
const flyer=n("img","xp-hero-flyer");flyer.src="assets/"+encodeURIComponent(data.hero.flyer.src);flyer.alt=tr(data.hero.flyer.alt);flyer.loading="eager";flyer.decoding="async";flyer.setAttribute("fetchpriority","high");
add(poster,flyer,n("figcaption","xp-hero-poster-caption",tr(data.hero.flyer.caption)));add(art,poster);
}
const acts=n("div","xp-hero-actions");
add(acts,link(ui("role"),"#rol","xp-cta primary"),link(ui("sources"),"#fuentes","xp-cta"));
add(copy,acts);add(inner,copy,art);add(outer,inner);app.appendChild(outer)}
function navFact(items){const outer=n("div","xp-shell xp-facts");for(const [v,txt] of items){const item=n("div","xp-fact");add(item,n("strong","",v),n("span","",txt));add(outer,item)}app.appendChild(outer)}
function renderAlas(){
navFact([["6",language==="es"?"jornadas (26–31 jul)":language==="en"?"days (Jul 26–31)":"dias (26–31 jul)"],["27",language==="es"?"grupos de trabajo":language==="en"?"working groups":"grupos de trabalho"],["75",language==="es"?"años de ALAS":language==="en"?"years of ALAS":"anos da ALAS"],["5",language==="es"?"personas UAH mencionadas":language==="en"?"reported UAH participants":"participantes UAH informados"]]);
const about=part("contexto","01 / "+ui("about"),tr(data.about.title),tr(data.about.body));add(about,link(ui("more"),data.about.source,"xp-source"));
const role=part("rol","02 / "+ui("role"),tr(data.role.title),tr(data.role.statement));
const tasks=n("div","xp-task-grid");
data.role.tasks.forEach((x,j)=>{const c=n("article","xp-task");add(c,n("span","xp-task-num","0"+(j+1)),h(tr(x.name),3),p(tr(x.desc)));add(tasks,c)});
add(role,tasks,p(tr(data.role.evidence),"xp-footnote"));
const people=part("participantes","03 / UAH",ui("people"),language==="es"?"Personas cuya participación cubrí, según mi registro del encuentro. Los perfiles enlazados acreditan su trayectoria y rol institucional, pero no sustituyen un programa individual de ponencias.":language==="en"?"Participants reported from my coverage. Profiles verify roles, not session-by-session presentations.":"Participantes informados a partir da cobertura. Os perfis comprovam trajetórias, não títulos de apresentações.");
const grid=n("div","xp-person-grid");
data.team.forEach(x=>{const c=n("article","xp-person"),top=n("div","xp-person-top");add(top,n("span","xp-dot","●"),h(x.name,3));add(c,top,p(tr(x.who),"xp-person-role"),p(tr(x.area),"xp-person-area"));if(x.link)add(c,link(ui("more"),x.link,"xp-source"));add(grid,c)});add(people,grid);
const themes=part("debates","04 / "+ui("themesK"),ui("themes"),language==="es"?"Una selección editorial de los ejes públicos del congreso, no una lista de las ponencias de la delegación UAH.":language==="en"?"Editorial overview of congress themes, not a list of individual UAH presentations.":"Síntese editorial dos temas do congresso, não das falas da UAH.");
const tab=n("div","xp-theme-tabs"),body=n("article","xp-theme-panel");
data.themes.forEach((x,j)=>add(tab,button("0"+(j+1)+" · "+tr(x.title),()=>{selected=j;drawTheme()},"xp-tab",j===selected)));
function drawTheme(){tab.querySelectorAll("button").forEach((x,j)=>x.setAttribute("aria-pressed",String(selected===j)));const x=data.themes[selected];body.replaceChildren(n("span","xp-panel-count",String(selected+1).padStart(2,"0")+" / 05"),h(tr(x.title),3),p(tr(x.desc)))}
add(themes,tab,body);drawTheme();
const timeline=part("cronologia","05 / 26–31.07.2026",language==="es"?"Seis días de debates y cobertura":language==="en"?"Six days of congress coverage":"Seis dias de debates e cobertura");
for(const x of data.timeline){const c=n("article","xp-timeline");add(c,n("span","xp-date",x.date),h(tr(x.label),3),p(tr(x.text)));add(timeline,c)}
const pub=part("prensa","06 / "+ui("archive"),ui("archive"),language==="es"?"El congreso también fue narrado desde otras universidades, organizaciones y redes. La cobertura de Sociología UC corresponde a su propia delegación.":language==="en"?"Additional perspectives from organizations and universities. UC's story covers a separate delegation.":"Outras leituras de organizações e universidades. A notícia da UC é sobre sua própria delegação.");
sourceCards(pub,data.otherCoverage);
}
function renderCinema(){
// No decorative numeric strip: the narrative starts directly after the poster.
const intro=part("contexto","01 / "+ui("about"),language==="es"?"Una universidad como lugar de encuentro":language==="en"?"The university as a meeting place":"A universidade como lugar de encontro",tr(data.intro));
const role=part("rol","02 / "+ui("role"),tr(data.role.headline),tr(data.role.body));
const organizing=n("div","xp-organizers");
data.role.organizations.forEach(x=>{const card=n("article","xp-organizer-card");add(card,n("span","xp-organizer-year",x.id),h(tr(x.organizer),3),p(tr(x.role)),p(tr(x.focus),"xp-organizer-focus"));add(organizing,card)});
add(role,organizing);
const events=part("cine","03 / "+ui("film"),ui("film"),language==="es"?"Dos jornadas, dos películas diferentes y un diálogo que continuó a través del tiempo.":language==="en"?"Two events, two different films, and a continuing conversation.":"Dois encontros, dois filmes diferentes e uma conversa que continuou.");
const toggles=n("div","xp-year-tabs"),panel=n("article","xp-film-panel");
data.events.forEach((x,j)=>add(toggles,button(x.year+" · "+x.title,()=>{selected=j;drawFilm()},"xp-year",j===selected)));
function drawFilm(){toggles.querySelectorAll("button").forEach((x,j)=>x.setAttribute("aria-pressed",String(j===selected)));const x=data.events[selected];panel.replaceChildren();
const tag=n("span","xp-film-year",x.year+" · "+tr(x.label));const film=n("div","xp-film-title");
add(film,tag,h(x.title,3),p(tr(x.type)+" · "+x.filmYear,"xp-film-meta"),p(tr(x.filmSummary)));
const context=n("div","xp-film-context");
add(context,n("span","xp-organizer-tag",tr(x.organizer)),h(ui("dialogue"),3));
if(x.date)add(context,n("p","xp-verified-venue",(language==="es"?"2 de julio de 2025 · 15:00 · Sala L13, Cienfuegos 46":language==="en"?"2 July 2025 · 3:00 pm · Room L13, Cienfuegos 46":"2 de julho de 2025 · 15h · Sala L13, Cienfuegos 46")));
add(context,p(tr(x.context)),p(tr(x.cinemaMoment),"xp-film-moment"),link(ui("link"),x.source,"xp-source"));
if(x.audience)add(context,n("span","xp-attendance",x.audience+" · "+ui("number")));
if(x.id==="2025"){
const supporters=n("figure","xp-supporter-panel"),logo=n("img");logo.src="assets/"+encodeURIComponent(data.hero.flyer.related);logo.alt=language==="es"?"Logos en flyer: Sindicato Amanda Jofré, Cineclub UAH y Fundación Poderes":language==="en"?"Event poster logos: Sindicato Amanda Jofré, Cineclub UAH and Fundación Poderes":"Logotipos do cartaz: Sindicato Amanda Jofré, Cineclub UAH e Fundación Poderes";
logo.loading="lazy";
add(supporters,logo,n("figcaption","",language==="es"?"Logos incluidos en el material original de la jornada (2025)":language==="en"?"Logos featured in the original event materials (2025)":"Logotipos do material original do encontro (2025)"));
add(context,supporters);
}
add(panel,film,context)}
add(events,toggles,panel);drawFilm();
const path=part("trayectoria","04 / "+ui("timeline"),ui("timeline"),language==="es"?"Cronología cinematográfica e hitos de las actividades universitarias. El cortometraje estrenado en 2022 fue proyectado en la UAH en 2025.":language==="en"?"Film and university milestones. The 2022 short was screened at UAH in 2025.":"Marcos do cinema e dos encontros. O curta de 2022 foi exibido na UAH em 2025.");
const axis=n("div","xp-film-timeline");data.cinemaPath.forEach((x,j)=>{const c=n("article","xp-film-milestone"+(x.event?" actual":""));add(c,n("span","xp-milestone-year",x.year),h(tr(x.label),3),p(tr(x.desc)));add(axis,c)});add(path,axis);
const questions=part("conversaciones","05 / CULTURA Y DERECHOS",ui("discussion"));
const qs=n("div","xp-question-grid");data.discussion.forEach((x,j)=>{const c=n("article","xp-question");add(c,n("span","xp-task-num",String(j+1).padStart(2,"0")),h(tr(x.title),3),p(tr(x.text)));add(qs,c)});add(questions,qs);
const partners=part("colaboraciones","06 / "+ui("collabs"),ui("collabs"),language==="es"?"Participaciones referidas por el organizador; los enlaces acreditan las trayectorias de personas y entidades, no una nómina institucional publicada del evento.":language==="en"?"Participants reported by the organizer; linked profiles do not independently prove attendance at UAH.":"Participações informadas pelo organizador; os perfis não comprovam presença no evento.");
const grid=n("div","xp-partners");data.partners.forEach(x=>{const c=n("article","xp-partner");add(c,h(x.name,3),p(tr(x.description)),link(ui("more"),x.link,"xp-source"));add(grid,c)});add(partners,grid);
const sources=part("prensa","07 / "+ui("archive"),ui("sources"),language==="es"?"Fuentes de las obras, los festivales, los premios y las organizaciones. La fecha exacta de cada actividad en UAH queda por documentar.":language==="en"?"Sources for films, festivals and participating organizations. Exact UAH screening dates remain unverified.":"Fontes sobre filmes, festivais e organizações. As datas exatas na UAH não foram documentadas.");
sourceCards(sources,data.sources);
}
function sourceCards(parent,items){const grid=n("div","xp-source-grid");items.forEach(x=>{const c=n("article","xp-reference");add(c,n("span","xp-reference-status",x.status==="verified"?(language==="es"?"Fuente cotejada":"Source checked"):(language==="es"?"Contexto · verificar":"Context · check")),h(tr(x.title||x.label),3),p(tr(x.description)),link(ui("more"),x.url,"xp-source"));add(grid,c)});add(parent,grid)}
function gallery(){
const main=part("galeria","08 / "+ui("photos"),ui("photos"),tr(data.gallery.note||data.gallery.placeholder));
const photos=Array.isArray(album?.images)?album.images.filter(x=>x.sensitive!==true&&typeof x.permission==="string"&&/(autoriz|consent|permission granted|licensed|licencia)/i.test(x.permission)):[];
if(!photos.length){const empty=n("div","xp-gallery-empty");add(empty,n("div","xp-gallery-mark","◎"),h(ui("photoEmpty"),3),p(ui("fileHelp")+": "+kind+"/assets/", "xp-path"));add(main,empty);return}
const grid=n("div","xp-photo-grid");
let photoYear=null;
photos.forEach(x=>{
 if(kind==="cine-disidencias"&&x.year!==photoYear){
  photoYear=x.year;
  add(grid,n("h3","xp-photo-group",x.year==="2022"?(language==="es"?"2022 · Mesa de Disidencias":language==="en"?"2022 · Mesa de Disidencias":"2022 · Mesa de Disidencias"):(language==="es"?"2025 · Centro de Estudiantes de Sociología":language==="en"?"2025 · Sociology Student Centre":"2025 · Centro de Estudantes de Sociologia")));
 }
 const card=n("figure","xp-photo"),img=n("img");img.src="assets/"+encodeURIComponent(x.src);img.alt=tr(x.alt);img.loading="lazy";img.decoding="async";
 const cap=n("figcaption");add(cap,p(tr(x.caption)),n("small","",x.credit||""));add(card,img,cap);add(grid,card);
});
add(main,grid);
}
function end(){
const c=part("fuentes","09 / "+ui("limitations"),ui("limitations"),tr(data.boundary||data.limitation));
add(c,p(language==="es"?"Se diferencian el testimonio del organizador y las fuentes públicas consultadas. Los materiales futuros se incorporarán con permisos y créditos.":language==="en"?"The organizer's account and independently checked public sources are kept distinct. Future media will require credits and permissions.":"O relato do organizador e as fontes públicas são diferenciados. Os materiais futuros terão créditos e autorizações.","xp-footnote"));
const foot=n("footer","xp-footer"),bar=n("div","xp-shell");add(bar,link("← "+ui("back"),"../?lang="+language),link("CEDEUS","../cedeus/?lang="+language),link("CESI","../cesi/?lang="+language));add(foot,bar);app.appendChild(foot)
}
function render(){document.documentElement.lang=language;document.title=kind==="alas"?"ALAS 2026 · Corresponsalía institucional · Ángel Muñoz":"Cine y diversidades UAH · Ángel Muñoz";app.replaceChildren();nav();hero();if(kind==="alas")renderAlas();else renderCinema();gallery();end()}
Promise.all([fetch("../assets/"+(kind==="alas"?"alas-datos.json":"cine-disidencias-datos.json")),fetch("assets/galeria.json")]).then(async ([base,media])=>{if(!base.ok)throw Error("Main data missing");data=await base.json();album=media.ok?await media.json():{images:[]};render()}).catch(err=>{console.error(err);app.textContent="No se pudo cargar la página de proyecto / Project content unavailable."});
})();