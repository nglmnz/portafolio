(()=>{
"use strict";
const kind=document.body.dataset.case==="sustancia"?"sustancia":"tesis";
const valid=["es","en","pt"];
let language=valid.includes(new URLSearchParams(location.search).get("lang"))?new URLSearchParams(location.search).get("lang"):"es";
let selectedTheme=0,selectedLevel=0;
let UI,DATA;
const root=document.getElementById("case-app");
const E=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined&&text!==null)n.textContent=String(text);return n};
const label=o=>typeof o==="string"?o:(o?.[language]??o?.es??"");
const ui=k=>UI[language]?.[k]??UI.es[k]??k;
const add=(parent,...children)=>{children.forEach(c=>{if(c!==undefined&&c!==null)parent.appendChild(c)});return parent};
const link=(text,url,cls,external=false)=>{const a=E("a",cls,text);a.href=url;if(external){a.target="_blank";a.rel="noopener noreferrer"}return a};
const p=(txt,cls="")=>E("p",cls,txt);
const H=(txt,level=2)=>E("h"+level,"",txt);
const sourceText=(range)=>ui("source")+" "+range+".";
const localeHref=(name)=>"../"+name+"/?lang="+language;
function section(id,kicker,title){const s=E("section","section");s.id=id;const shell=E("div","container");if(kicker)add(shell,E("span","eyeline",kicker));if(title)add(shell,H(title));add(s,shell);return [s,shell]}
function panel(title,body,klass){const a=E("article","panel "+(klass||""));if(title)add(a,H(title,3));if(body)add(a,p(body));return a}
function button(text,active,handler,klass){const b=E("button",klass||"",text);b.type="button";b.setAttribute("aria-pressed",String(active));b.addEventListener("click",handler);return b}
function initFrame(){
 root.replaceChildren();
 const head=E("header","sitebar"),bar=E("div","container bar-inner");
 const brand=link("ÁNGEL / MUÑOZ","../?lang="+language,"brand");
 const nav=E("nav","nav-inline");nav.setAttribute("aria-label","Project navigation");
 add(nav,link(ui("back"),"../?lang="+language),link(ui("thesis"),localeHref("tesis")),link("Sustancia",localeHref("sustancia")));
 const langs=E("div","langs");langs.setAttribute("role","group");langs.setAttribute("aria-label","Idioma · Language");
 ["es","en","pt"].forEach(code=>add(langs,button(code.toUpperCase(),language===code,()=>{language=code;history.replaceState(null,"",location.pathname+"?lang="+code+location.hash);render()})));
 add(nav,langs);add(bar,brand,nav);add(head,bar);root.append(head);
}
function hero(overline,title,lead,subtitle,actions,note){
 const s=E("section","hero"),box=E("div","container");
 add(box,E("span","kicker",overline),H(title,1),p(lead,"lead"));
 if(subtitle)add(box,p(subtitle,"sub"));
 const actionGroup=E("div","hero-actions");
 for(const [text,url,primary,external] of actions)add(actionGroup,link(text,url,"action"+(primary?" primary":""),external));
 add(box,actionGroup);
 if(note)add(box,p(note,"hero-note"));
 add(s,box);root.append(s);
}
function footer(){const f=E("footer","footer"),c=E("div","container");add(c,E("span","",ui("footer")),link(ui("back"),"../?lang="+language));add(f,c);root.append(f)}
function stats(items){const x=E("div","container"),row=E("div","stats");items.forEach(a=>{const card=E("div","stat");add(card,E("strong","",a[0]),E("span","",a[1]));add(row,card)});add(x,row);root.append(x)}
function fromThesis(){
 document.title=label(DATA.title)+" · Ángel Muñoz";
 hero(label(DATA.overline),label(DATA.title),label(DATA.lead),label(DATA.subtitle),[[ui("viewS"),localeHref("sustancia"),true,false],[ui("viewSource"),"#limits",false,false]],ui("researcher")+" · "+ui("grade"));
 stats([["276",language==="en"?"valid questionnaires":language==="pt"?"questionários válidos":"cuestionarios válidos"],["50",language==="en"?"questions":language==="pt"?"perguntas":"preguntas"],["3",language==="en"?"technological profiles":language==="pt"?"perfis tecnológicos":"perfiles tecnológicos"],[ui("screens"),language==="en"?"average screen time":language==="pt"?"tempo médio de tela":"tiempo medio de pantalla"]]);
 let [sec,box]=section("intro",ui("introduction"),ui("introduction"));
 add(box,p(label(DATA.intro)));
 const quote=E("blockquote","bigquote",label(DATA.problem));add(box,quote,p(sourceText(DATA.sourcePages.intro)+" "+sourceText(DATA.sourcePages.question),"tiny"));root.append(sec);
 [sec,box]=section("question","01 / "+ui("question"),ui("question"));
 add(box,p(label(DATA.problem)));
 const frame=E("div","framework");
 DATA.framework.forEach(x=>{const item=E("article","frame");add(item,E("span","",x.author),H(x.book,3),p(label(x)),E("small","",sourceText(x.p)));add(frame,item)});
 add(box,H(ui("framework"),3),frame);root.append(sec);
 [sec,box]=section("method","02 / "+ui("method"),ui("method"));
 const methodRow=E("div","methodstats");
 DATA.method.forEach(item=>{const card=E("div","methodstat");add(card,E("strong","",item.metric),E("span","",label(item)));add(methodRow,card)});
 add(box,methodRow,p(label(DATA.methodBody)),p(label(DATA.methodFoot),"method-note"),p(sourceText(DATA.sourcePages.method),"tiny"));root.append(sec);
 [sec,box]=section("profiles","03 / "+ui("profiles"),ui("profiles"));
 const cards=E("div","profile-list");
 DATA.profiles.forEach(x=>{
 const card=E("article","profile");
 add(card,E("div","pct",String(x.percent).replace(".",",")+"%"),H(label(x.name),3),p(label(x.text)));
 const track=E("div","track");track.setAttribute("aria-label",x.percent+" percent of sample");
 const fill=E("div","fill");fill.style.width=x.percent+"%";add(track,fill);add(card,track);
 if(x.hours&&x.malestar)add(card,E("small","",language==="en"?"Screen time: "+x.hours+" h · Distress index: "+x.malestar:language==="pt"?"Tela: "+x.hours+" h · Índice de mal-estar: "+x.malestar:"Pantalla: "+x.hours+" h · Índice de deterioro: "+x.malestar));
 add(cards,card);
 });add(box,cards,p(sourceText("30–33"),"tiny"));root.append(sec);
 [sec,box]=section("findings","04 / "+ui("results"),ui("results"));
 add(box,p(ui("themeNote")));
 const tabs=E("div","tabs"),chart=E("div","chart");
 DATA.results.forEach((theme,i)=>add(tabs,button(ui("themes")[i],i===selectedTheme,()=>{selectedTheme=i;drawChart(tabs,chart)})));
 add(box,tabs,chart,p(ui("noteN"),"method-note"),p(sourceText(DATA.sourcePages.results),"tiny"));root.append(sec);
 drawChart(tabs,chart);
 [sec,box]=section("model","05 / "+ui("model"),ui("model"));
 const modelCard=E("div","panel");
 add(modelCard,E("span","kicker","R² = 0,198 · "+DATA.modelStats.kruskal));
 const table=E("table");
 const tr=E("tr");
 ["Variable","β","p",""].forEach(x=>add(tr,E("th","",x)));
 const thead=E("thead");add(thead,tr);add(table,thead);
 const body=E("tbody");
 DATA.modelRows.forEach(x=>{const tr=E("tr");add(tr,E("td","",label(x.factor)),E("td","",x.b),E("td","",x.p),E("td",x.sig?"yes":"dim",x.sig?"●":"—"));add(body,tr)});
 add(table,body);add(modelCard,table);add(box,modelCard,p(ui("modelNote"),"method-note"),p(sourceText("30–33"),"tiny"));root.append(sec);
 [sec,box]=section("discussion","06 / "+ui("discussion"),ui("discussion"));
 const insights=E("div","insights");
 DATA.discussion.forEach((x,i)=>{const item=E("article","insight");add(item,E("strong","",String(i+1).padStart(2,"0")),p(label(x)));add(insights,item)});
 add(box,insights,p(sourceText(DATA.sourcePages.discussion),"tiny"));root.append(sec);
 [sec,box]=section("conclusions","07 / "+ui("conclusions"),ui("conclusions"));
 const list=E("ol","conclusion-list");
 DATA.conclusions.forEach((x,i)=>{const li=E("li");add(li,E("b","",String(i+1).padStart(2,"0")),E("span","",label(x)));add(list,li)});
 add(box,list,p(sourceText(DATA.sourcePages.conclusions),"tiny"));root.append(sec);
 [sec,box]=section("limits","08 / "+ui("limitations"),ui("limitations"));
 add(box,p(label(DATA.limitations),"method-note"),p(ui("download"),"tiny"));root.append(sec);
 [sec,box]=section("reading","09 / "+ui("bibliography"),ui("bibliography"));
 add(box,p(ui("booksInfo")));
 const bookGrid=E("div","book-grid");
 DATA.books.forEach(x=>{
 const book=E("article","book");
 const cover=E("div","book-cover"),fallback=E("span","book-fallback",x.title);fallback.hidden=true;
 const img=E("img");img.alt=language==="en"?"Cover of "+x.title:language==="pt"?"Capa de "+x.title:"Portada de "+x.title;
 img.loading="lazy";img.referrerPolicy="no-referrer";img.src="https://covers.openlibrary.org/b/isbn/"+encodeURIComponent(x.isbn)+"-M.jpg?default=false";
 img.addEventListener("load",()=>{if(img.naturalWidth<25){img.remove();fallback.hidden=false}else fallback.hidden=true});
 img.addEventListener("error",()=>{img.remove();fallback.hidden=false});
 add(cover,img,fallback);
 add(book,cover,E("small","",x.author+" · "+x.year),H(x.title,3),p(label(x.purpose)),link(ui("readbook"),x.url,"",true));
 add(bookGrid,book);
 });add(box,bookGrid);root.append(sec);
 [sec,box]=section("next","10 / "+ui("relation"),ui("relationT"));
 const bridge=E("div","bridge");add(bridge,H(ui("relationT")),p(label(DATA.connection)),link(ui("viewS"),localeHref("sustancia"),"action primary"));
 add(box,bridge);root.append(sec);
}
function drawChart(tabs,chart){
 Array.from(tabs.querySelectorAll("button")).forEach((b,i)=>b.setAttribute("aria-pressed",String(i===selectedTheme)));
 chart.replaceChildren();
 const theme=DATA.results[selectedTheme];
 theme.rows.forEach(x=>{
  const row=E("div","chart-row");
  const labelElement=E("div","chart-label",label(x.label));const bar=E("div","barback");
  bar.setAttribute("role","img");bar.setAttribute("aria-label",label(x.label)+": "+x.value+" percent");
  const inside=E("div","barin");inside.style.width=x.value+"%";add(bar,inside);
  add(row,labelElement,bar,E("div","chart-num",String(x.value).replace(".",",")+"%"));add(chart,row);
 });
 add(chart,p(ui("high"),"chart-foot"));
}
function fromSustancia(){
 document.title="Sustancia · Ángel Muñoz";
 hero("SUSTANCIA · 2026 · R SHINY / QUARTO",label(DATA.title),label(DATA.tagline),label(DATA.lead),
 [[ui("sTry"),DATA.urls.site,true,true],[ui("sPilot"),DATA.urls.pilot,false,true],[ui("viewT"),localeHref("tesis"),false,false]],label(DATA.project));
 const statsRow=E("div","container");
 const a=E("div","stats");
 [["N1–N4",language==="en"?"interpretation depths":language==="pt"?"níveis interpretativos":"niveles interpretativos"],["R / Shiny",language==="en"?"interactive prototype":language==="pt"?"protótipo interativo":"prototipo interactivo"],["Quarto",language==="en"?"published educational website":language==="pt"?"site pedagógico publicado":"web pedagógica publicada"],["I+D",language==="en"?"adaptive engine in development":language==="pt"?"motor adaptativo em desenvolvimento":"motor adaptativo en desarrollo"]].forEach(x=>{const n=E("div","stat");add(n,E("strong","",x[0]),E("span","",x[1]));add(a,n)});add(statsRow,a);root.append(statsRow);
 let [sec,box]=section("basis","01 / "+ui("sBase"),ui("sBase"));
 const cells=E("div","two");add(cells,p(label(DATA.basis)),panel(ui("sDesign"),label(DATA.idea),"accent-panel"));add(box,cells);root.append(sec);
 [sec,box]=section("lineage","02 / "+ui("relation"),ui("relationT"));
 const lin=E("div","lineage");
 const texts=ui("sLineage");texts.forEach((x,i)=>{const item=E("div");add(item,E("b","",String(i+1).padStart(2,"0")),p(x));add(lin,item)});
 add(box,lin,p(label(DATA.relationship)),link(ui("viewT"),localeHref("tesis"),"link-inline"));root.append(sec);
 [sec,box]=section("levels","03 / "+ui("sLevels"),ui("sLevels"));
 add(box,p(ui("sStudent")));
 const tabs=E("div","level-tabs"),levelPanel=E("div","level-panel");add(box,tabs,levelPanel);
 DATA.level.forEach((x,i)=>add(tabs,button(x.n,i===selectedLevel,()=>{selectedLevel=i;drawLevel(tabs,levelPanel)})));
 drawLevel(tabs,levelPanel);
 add(box,p(ui("sMeasure"),"method-note"));root.append(sec);
 [sec,box]=section("compare","04 / "+ui("sCompare"),ui("sCompare"));
 add(box,p(ui("sCompareNote")));
 const pair=E("div","compare");
 DATA.compare.forEach((x,i)=>{const c=E("article","panel");add(c,E("span","mini-label",i===0?"N1 / TÉCNICO":"N3–N4 / CONTEXTO"),p(label(x)));add(pair,c)});
 add(box,pair);root.append(sec);
 [sec,box]=section("workflow","05 / "+ui("sWorkflow"),ui("sWorkflow"));
 add(box,p(ui("sProcess")));
 const flow=E("div","flow-steps");
 DATA.workflow.forEach((x,i)=>{const card=E("div","flow-step");add(card,E("b","",String(i+1).padStart(2,"0")),p(label(x)));add(flow,card)});
 add(box,flow,link(ui("sFull"),DATA.urls.site,"link-inline",true));root.append(sec);
 [sec,box]=section("status","06 / "+ui("sState"),ui("sState"));
 const grid=E("div","status-grid");
 DATA.status.forEach(x=>{const card=E("article","status "+(x.kind==="next"?"next":""));add(card,E("span","state",ui(x.kind==="next"?"sStatusNext":"sStatusNow")),H(label(x.title),3),p(label(x.text)));add(grid,card)});
 add(box,grid);root.append(sec);
 [sec,box]=section("boundaries","07 / "+ui("sBoundaries"),ui("sBoundaries"));
 add(box,p(label(DATA.boundary),"method-note"),p(ui("sLegal"),"tiny"));root.append(sec);
 [sec,box]=section("links","08 / LINKS","Explorar / Explore");
 const actions=E("div","hero-actions");
 add(actions,link(ui("sTry"),DATA.urls.site,"action primary",true),link(ui("sPilot"),DATA.urls.pilot,"action",true),link(ui("sRepo"),DATA.urls.code,"action",true),link(ui("viewT"),localeHref("tesis"),"action"));
 add(box,actions);root.append(sec);
}
function drawLevel(tabs,panel){
 Array.from(tabs.querySelectorAll("button")).forEach((b,i)=>b.setAttribute("aria-pressed",String(i===selectedLevel)));
 const level=DATA.level[selectedLevel];
 panel.replaceChildren(E("span","eyeline",level.n),H(label(level.name),3),p(label(level.prompt)));
 const q=E("blockquote","",label(level.example));add(panel,q);
}
function render(){
 if(!UI||!DATA)return;
 document.documentElement.lang=language;initFrame();
 if(kind==="tesis")fromThesis();else fromSustancia();
 footer();
}
Promise.all([fetch("../assets/cases-ui.json"),fetch("../assets/"+(kind==="tesis"?"tesis-datos.json":"sustancia-datos.json"))])
.then(async responses=>{if(responses.some(r=>!r.ok))throw new Error("Data unavailable");[UI,DATA]=await Promise.all(responses.map(r=>r.json()));render()})
.catch(error=>{root.replaceChildren(E("main","container",language==="en"?"Content unavailable. Please refresh the page.":language==="pt"?"Conteúdo indisponível. Atualize a página.":"Contenido no disponible. Actualiza la página."));console.error(error)});
})();