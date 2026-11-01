(()=>{
"use strict";
const kind=document.body.dataset.case==="sustancia"?"sustancia":"tesis";
const valid=["es","en","pt"];
let language=valid.includes(new URLSearchParams(location.search).get("lang"))?new URLSearchParams(location.search).get("lang"):"es";
let selectedTheme=0,selectedLevel=0;
let UI,DATA,REVIEW;
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

function renderGlobalContext(){
 if(!REVIEW)return;
 const [sectionNode,box]=section("international-context","02A / CONTEXTO GLOBAL",label(REVIEW.contextTitle));
 add(box,p(label(REVIEW.contextIntro)));
 const grid=E("div","external-grid");
 for(const row of REVIEW.context){
  const item=E("article","external-card");
  const top=E("div","external-top");
  add(top,E("span","external-org",row.name),E("small","",row.year));
  add(item,top,E("strong","external-stat",row.stat),H(label(row.title),3),p(label(row.description)));
  add(item,link(language==="es"?"Leer informe ↗":language==="en"?"Read report ↗":"Ler relatório ↗",row.url,"link-inline",true));
  add(grid,item);
 }
 add(box,grid,p(label(REVIEW.editorialNote),"method-note"));
 root.append(sectionNode);
}
function renderAcademicReview(){
 if(!REVIEW)return;
 const [sectionNode,box]=section("academic-review","08A / EVALUACIÓN ACADÉMICA",label(REVIEW.title));
 add(box,p(label(REVIEW.intro)));
 const scores=E("div","academic-grade-ribbon");
 for(const row of REVIEW.reviewers){
  const cell=E("div","grade-cell");
  add(cell,E("strong","",row.score),E("span","",row.name),E("small","",label(row.role)));
  add(scores,cell);
 }
 const avg=E("div","grade-cell average-grade");
 add(avg,E("strong","","6,8"),E("span","",language==="es"?"Promedio simple":language==="en"?"Simple average":"Média simples"),E("small","",language==="es"?"No es certificado de nota oficial":language==="en"?"Not an official final-grade certificate":"Não é certificado de nota oficial"));
 add(scores,avg);add(box,scores);
 const grid=E("div","reviewer-grid");
 for(const reviewer of REVIEW.reviewers){
  const card=E("article","reviewer-card");
  const top=E("div","reviewer-person");
  const photoLink=link("",reviewer.profile,"reviewer-picture",true);
  photoLink.setAttribute("aria-label",(language==="es"?"Perfil académico de ":language==="pt"?"Perfil acadêmico de ":"Academic profile of ")+reviewer.name);
  const initials=reviewer.name.split(" ").slice(0,2).map(x=>x[0]).join("");
  const fallback=E("span","reviewer-initials",initials);
  add(photoLink,fallback);
  if(reviewer.photo?.src){
   const im=E("img","reviewer-photo");
   im.src=reviewer.photo.src; im.alt=reviewer.name+(language==="es"?" durante una actividad universitaria":language==="pt"?" durante uma atividade universitária":" at a university event");
   im.loading="lazy";im.decoding="async";im.referrerPolicy="no-referrer";
   im.addEventListener("error",()=>im.remove());
   photoLink.appendChild(im);
  }
  const details=E("div","reviewer-identity");
  add(details,E("small","reviewer-role",label(reviewer.role)),H(reviewer.name,3),E("span","reviewer-affiliation","UNIVERSIDAD ALBERTO HURTADO"));
  add(top,photoLink,details);add(card,top,p(label(reviewer.bio),"reviewer-bio"));
  const quote=E("blockquote","reviewer-quote",label(reviewer.quote));
  add(card,quote);
  const evidence=E("div","review-evidence");
  const plus=E("div","review-positive");
  add(plus,E("span","review-axis",language==="es"?"QUÉ DESTACÓ":language==="en"?"STRENGTHS":"PONTOS FORTES"),p(label(reviewer.strength)));
  const caution=E("div","review-caution");
  add(caution,E("span","review-axis",language==="es"?"QUÉ RECOMENDÓ PROFUNDIZAR":language==="en"?"AREAS TO STRENGTHEN":"PONTOS PARA APROFUNDAR"),p(label(reviewer.caveat)));
  add(evidence,plus,caution);add(card,evidence);
  const links=E("div","reviewer-links");
  for(const item of reviewer.links)add(links,link(label(item.label)+" ↗",item.url,"reviewer-link",true));
  add(card,links);
  if(reviewer.photo?.src){
   add(card,link((language==="es"?"Fuente de fotografía · ":language==="en"?"Photograph source · ":"Fonte da fotografia · ")+(reviewer.photo.credit||reviewer.name)+" ↗",reviewer.photo.source,"photo-credit",true));
   add(card,p(label(reviewer.photo.note),"tiny"));
  }else{
   add(card,p(language==="es"?"Retrato directo todavía no verificado. Consulta su perfil institucional.":language==="en"?"A directly verifiable portrait is not yet available. See the institutional profile.":"Retrato direto ainda não verificado. Consulte o perfil institucional.","tiny"));
  }
  add(grid,card);
 }
 add(box,grid,p(label(REVIEW.scoreNote),"method-note"),p(label(REVIEW.titleNote),"tiny"),p(label(REVIEW.source),"tiny"));
 root.append(sectionNode);
}


/* Five-frame numeric artwork — original photographs, not statistical results. */
let destroyThesisMotion=null;
const thesisMotionWords={
 es:{eyebrow:"ENSAYO VISUAL · OBRA EN SECUENCIA",title:"Los números también se mueven.",lead:"Cinco fotografías consecutivas de una misma obra componen una pequeña secuencia en movimiento. Una pausa visual para pensar cómo las cifras cambian de posición y cómo su significado depende de la lectura que hacemos de ellas.",explain:"Este recurso es una metáfora visual del trabajo de interpretación; no es una animación de los datos recolectados en el seminario.",play:"Reproducir",pause:"Pausar",previous:"Fotograma anterior",next:"Fotograma siguiente",slow:"Contemplativo",fast:"Dinámico",speed:"Ritmo de reproducción",frame:"Fotograma",caption:"Archivo visual del seminario · Serie DSC_0022–DSC_0026 · Autoría de la obra y fotografías por acreditar",hint:"Selecciona un número, ajusta el ritmo o detén el movimiento para observar las diferencias entre fotogramas.",manual:"El movimiento automático está desactivado según las preferencias del dispositivo; puedes activarlo manualmente.",motion:"Secuencia visual de cinco fotogramas",show:"Mostrar fotograma"},
 en:{eyebrow:"VISUAL ESSAY · A WORK IN SEQUENCE",title:"Numbers can move, too.",lead:"Five consecutive photographs of the same artwork create a short moving sequence. A visual pause to consider how figures shift position and how meaning depends on interpretation.",explain:"This is a visual metaphor for interpretation, not an animation of the data collected for the thesis.",play:"Play",pause:"Pause",previous:"Previous frame",next:"Next frame",slow:"Contemplative",fast:"Dynamic",speed:"Playback pace",frame:"Frame",caption:"Degree seminar visual archive · DSC_0022–DSC_0026 · Artwork and photo credits to be confirmed",hint:"Choose a number, change the pace or pause to compare the frames.",manual:"Automatic motion is disabled by your device preferences; you may play it manually.",motion:"Five-frame visual sequence",show:"Show frame"},
 pt:{eyebrow:"ENSAIO VISUAL · OBRA EM SEQUÊNCIA",title:"Os números também se movem.",lead:"Cinco fotografias consecutivas da mesma obra compõem uma pequena sequência em movimento. Uma pausa visual para pensar como os números mudam de posição e como o significado depende da interpretação.",explain:"Este recurso é uma metáfora visual da interpretação; não é uma animação dos dados coletados na pesquisa.",play:"Reproduzir",pause:"Pausar",previous:"Fotograma anterior",next:"Próximo fotograma",slow:"Contemplativo",fast:"Dinâmico",speed:"Ritmo de reprodução",frame:"Fotograma",caption:"Arquivo visual da pesquisa · Série DSC_0022–DSC_0026 · Créditos da obra e das fotos a confirmar",hint:"Escolha um número, ajuste o ritmo ou pause para comparar os fotogramas.",manual:"O movimento automático está desativado pelas preferências do dispositivo; você pode ativá-lo manualmente.",motion:"Sequência visual de cinco fotogramas",show:"Mostrar fotograma"}
};
function renderThesisMotion(){
 const words=thesisMotionWords[language]||thesisMotionWords.es;
 const sources=[22,23,24,25,26].map(n=>"assets/secuencia/DSC_"+String(n).padStart(4,"0")+".JPG");
 const sectionNode=E("section","section thesis-visual-section");sectionNode.id="visual-sequence";
 const shell=E("div","container");add(shell,E("span","eyeline",words.eyebrow),H(words.title),p(words.lead,"thesis-visual-lead"));
 const stage=E("div","thesis-motion-stage");stage.setAttribute("aria-label",words.motion);
 const art=E("img","motion-art");art.alt=words.motion+" · "+words.frame+" 1/5";art.loading="lazy";art.decoding="async";art.src=sources[0];
 const stageOverlay=E("div","motion-stage-overlay");
 const top=E("div","motion-stage-top");add(top,E("span","motion-live-tag","● "+words.motion),E("span","motion-frame-counter","01 / 05"));add(stageOverlay,top);
 const bottom=E("div","motion-stage-bottom");add(bottom,E("span","",words.frame+" 01"),E("span","motion-stage-progress",""));add(stageOverlay,bottom);
 add(stage,art,stageOverlay);
 const controls=E("div","motion-controls");
 const transport=E("div","motion-transport");
 const previous=button("←",false,()=>{}, "motion-arrow");previous.setAttribute("aria-label",words.previous);
 const play=button("▶ "+words.play,false,()=>{},"motion-play");play.setAttribute("aria-label",words.play);
 const next=button("→",false,()=>{},"motion-arrow");next.setAttribute("aria-label",words.next);
 add(transport,previous,play,next);
 const speeds=E("div","motion-speeds");speeds.setAttribute("role","group");speeds.setAttribute("aria-label",words.speed);
 const slow=button(words.slow,true,()=>{},"motion-speed");const fast=button(words.fast,false,()=>{},"motion-speed");
 add(speeds,slow,fast);add(controls,transport,speeds);
 const timeline=E("div","motion-timeline"),sequence=E("div","motion-frame-steps");
 const marks=sources.map((_,idx)=>{
  const b=button(String(idx+1).padStart(2,"0"),idx===0,()=>{},"motion-frame-step");
  b.setAttribute("aria-label",words.show+" "+(idx+1));add(sequence,b);return b;
 });
 add(timeline,sequence);
 const status=E("div","motion-status");
 const count=E("span","motion-status-text",words.frame+" 01 / 05");
 const explanation=E("span","motion-instruction",words.hint);
 add(status,count,explanation);add(timeline,status);
 add(shell,stage,controls,timeline,p(words.explain,"motion-editorial-note"),p(words.caption,"motion-source-credit"));
 add(sectionNode,shell);root.append(sectionNode);
 let current=0,playing=false,userPaused=false,visible=false,dead=false,timer=null,observer=null,interval=2200,stepPending=false;
 const ready=new Map();
 function ensure(i){
  if(ready.has(i))return ready.get(i);
  const task=new Promise(resolve=>{
   const pre=new Image();pre.decoding="async";
   pre.onload=()=>resolve(true);pre.onerror=()=>resolve(false);pre.src=sources[i];
   if(pre.complete&&pre.naturalWidth>0)resolve(true);
  });
  ready.set(i,task);return task;
 }
 function update(){
  const idx=String(current+1).padStart(2,"0");
  top.querySelector(".motion-frame-counter").textContent=idx+" / 05";
  bottom.querySelector("span").textContent=words.frame+" "+idx;
  count.textContent=words.frame+" "+idx+" / 05";
  art.alt=words.motion+" · "+words.frame+" "+idx;
  bottom.querySelector(".motion-stage-progress").textContent="● ".repeat(current+1)+"○ ".repeat(sources.length-current-1);
  marks.forEach((b,i)=>b.setAttribute("aria-pressed",String(current===i)));
  play.textContent=(playing?"Ⅱ "+words.pause:"▶ "+words.play);
  play.setAttribute("aria-label",playing?words.pause:words.play);
  play.setAttribute("aria-pressed",String(playing));
  slow.setAttribute("aria-pressed",String(interval===2200));
  fast.setAttribute("aria-pressed",String(interval===1300));
 }
 async function change(index){
  const nextIdx=(index+sources.length)%sources.length;
  const success=await ensure(nextIdx);
  if(dead||!success)return;
  current=nextIdx;art.src=sources[current];update();
 }
 function cancelClock(){if(timer!==null){clearTimeout(timer);timer=null}}
 function stop(){playing=false;cancelClock();update()}
 function schedule(){
  cancelClock();
  if(!playing||dead||!visible||document.hidden)return;
  timer=setTimeout(async()=>{
   if(stepPending)return;stepPending=true;
   await change(current+1);
   stepPending=false;
   if(!dead)schedule();
  },interval);
 }
 function start(manual=false){
  if(manual){userPaused=false;visible=true;}
  if(dead||(!manual&&!visible)||document.hidden)return;
  playing=true;update();ensure((current+1)%sources.length);schedule();
 }
 function manualFrame(index){
  userPaused=true;stop();void change(index);
 }
 previous.addEventListener("click",()=>manualFrame(current-1));
 next.addEventListener("click",()=>manualFrame(current+1));
 play.addEventListener("click",()=>{
  if(playing){userPaused=true;stop()}
  else start(true);
 });
 marks.forEach((b,i)=>b.addEventListener("click",()=>manualFrame(i)));
 slow.addEventListener("click",()=>{interval=2200;update();if(playing)schedule()});
 fast.addEventListener("click",()=>{interval=1300;update();if(playing)schedule()});
 const reduce=window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches||false;
 const dataSaver=navigator.connection?.saveData||false;
 if(reduce||dataSaver)explanation.textContent=words.manual;
 const onVisibility=()=>{if(document.hidden)stop();else if(visible&&!userPaused&&!reduce&&!dataSaver)start()};
 document.addEventListener("visibilitychange",onVisibility);
 if("IntersectionObserver" in window){
  observer=new IntersectionObserver(entries=>{
   for(const entry of entries){
    visible=entry.isIntersecting;
    if(visible&&!reduce&&!dataSaver&&!userPaused){ensure((current+1)%sources.length);start()}
    else stop();
   }
  },{threshold:0.32});
  observer.observe(stage);
 }else{
  visible=true; // Manual controls work without IntersectionObserver; no implicit animation.
 }
 update();
 destroyThesisMotion=()=>{dead=true;cancelClock();observer?.disconnect();document.removeEventListener("visibilitychange",onVisibility)};
}

function fromThesis(){
 document.title=label(DATA.title)+" · Ángel Muñoz";
 hero(label(DATA.overline),label(DATA.title),label(DATA.lead),label(DATA.subtitle),[[ui("viewS"),localeHref("sustancia"),true,false],[ui("viewSource"),"#limits",false,false]],ui("researcher")+" · "+ui("grade"));
 stats([["276",language==="en"?"valid questionnaires":language==="pt"?"questionários válidos":"cuestionarios válidos"],["50",language==="en"?"questions":language==="pt"?"perguntas":"preguntas"],["3",language==="en"?"technological profiles":language==="pt"?"perfis tecnológicos":"perfiles tecnológicos"],[ui("screens"),language==="en"?"average screen time":language==="pt"?"tempo médio de tela":"tiempo medio de pantalla"]]);
 let [sec,box]=section("intro",ui("introduction"),ui("introduction"));
 add(box,p(label(DATA.intro)));
 const quote=E("blockquote","bigquote",label(DATA.problem));add(box,quote,p(sourceText(DATA.sourcePages.intro)+" "+sourceText(DATA.sourcePages.question),"tiny"));root.append(sec);
 renderThesisMotion();
 [sec,box]=section("question","01 / "+ui("question"),ui("question"));
 add(box,p(label(DATA.problem)));
 const frame=E("div","framework");
 DATA.framework.forEach(x=>{const item=E("article","frame");add(item,E("span","",x.author),H(x.book,3),p(label(x)),E("small","",sourceText(x.p)));add(frame,item)});
 add(box,H(ui("framework"),3),frame);root.append(sec);
 renderGlobalContext();
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
 renderAcademicReview();
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
 hero("SUSTANCIA · 2026 · R SHINY / QUARTO",label(DATA.title),label(DATA.tagline),label(DATA.lead),[
  [ui("sTry"),DATA.urls.site,true,true],
  [ui("sPilot"),DATA.urls.pilot,false,true],
  [ui("viewT"),localeHref("tesis"),false,false]
 ],label(DATA.project));
 stats([
  ["6",language==="es"?"dimensiones del vector":language==="pt"?"dimensões do vetor":"mastery dimensions"],
  ["8",language==="es"?"operaciones estadísticas":language==="pt"?"operações estatísticas":"statistical operations"],
  ["N1–N4",language==="es"?"profundidad interpretativa":language==="pt"?"profundidade interpretativa":"interpretive depth"],
  ["4",language==="es"?"laboratorios simulados":language==="pt"?"laboratórios simulados":"illustrative simulations"]
 ]);
 function block(id,n,title,body){const [sec,box]=section(id,n,title);if(body)add(box,p(body));root.append(sec);return box}
 const srcNote=(file)=>language==="es"?"Fuente del modelo: "+file:language==="en"?"Project source: "+file:"Fonte do modelo: "+file;
 const box1=block("sustancia-origin","01 / ORIGEN",language==="en"?"From digital habitus to statistical reasoning":language==="pt"?"Do habitus digital ao raciocínio estatístico":"Del habitus tecnológico al razonamiento estadístico");
 const two=E("div","two");add(two,p(label(DATA.basis)),panel(ui("sDesign"),label(DATA.idea),"accent-panel"));add(box1,two);
 const line=E("div","lineage");
 ui("sLineage").forEach((x,i)=>{const cell=E("div");add(cell,E("b","",String(i+1).padStart(2,"0")),p(x));add(line,cell)});
 add(box1,line,p(label(DATA.relationship)),link(ui("viewT"),localeHref("tesis"),"link-inline"));

 const a=DATA.architecture;
 const arch=block("incorporative-architecture","02 / PRINCIPIO DE DISEÑO",label(a.title),label(a.intro));
 const switcher=E("div","sus-mode-switch");
 const delegate=button(language==="es"?"Arquitectura delegativa":language==="en"?"Delegative architecture":"Arquitetura delegativa",false,()=>drawMode("delegative"),"sus-tab");
 const incorporate=button(language==="es"?"Arquitectura incorporativa":language==="en"?"Incorporative architecture":"Arquitetura incorporativa",true,()=>drawMode("incorporative"),"sus-tab");
 add(switcher,delegate,incorporate);
 const diagram=E("div","sus-flow"),expl=E("p","sus-flow-description");
 const keyText=E("p","method-note",label(a.implication));
 function drawMode(k){
  const del=k==="delegative";
  delegate.setAttribute("aria-pressed",String(del));incorporate.setAttribute("aria-pressed",String(!del));
  diagram.replaceChildren();
  const left=E("div","sus-flow-node");
  add(left,E("small","",language==="es"?"ESTUDIANTE":language==="en"?"LEARNER":"ESTUDANTE"),E("strong","",del?(language==="es"?"Recibe y valida":language==="en"?"Receives and validates":"Recebe e valida"):(language==="es"?"Produce y argumenta":language==="en"?"Writes and reasons":"Produz e argumenta")));
  const arrow=E("div","sus-flow-arrow",del?"←":"→");
  const right=E("div","sus-flow-node");
  add(right,E("small","","IA"),E("strong","",del?(language==="es"?"Produce la respuesta":language==="en"?"Produces the answer":"Produz a resposta"):(language==="es"?"Pregunta y retroalimenta":language==="en"?"Challenges and gives feedback":"Questiona e devolve feedback")));
  add(diagram,left,arrow,right);
  diagram.dataset.mode=k;
  expl.textContent=label(del?a.delegate:a.incorporate);
 }
 add(arch,switcher,diagram,expl,keyText,link(ui("sFull"),DATA.urls.foundation,"link-inline",true));
 drawMode("incorporative");

 const v=DATA.vector;
 const foundation=block("reasoning-model","03 / HABILIDADES",language==="es"?"El razonamiento estadístico es una capacidad compuesta":language==="en"?"Statistical reasoning is a composite capability":"O raciocínio estatístico é uma capacidade composta",label(v.intro));
 const axes=E("div","sus-axes");
 const choices=E("div","sus-axes-buttons");
 const detail=E("article","sus-axis-detail");
 let activeAxis=0;
 function renderAxis(i){
  activeAxis=i;choices.querySelectorAll("button").forEach((b,j)=>b.setAttribute("aria-pressed",String(i===j)));
  const x=v.axes[i];detail.replaceChildren(E("span","eyeline",String(i+1).padStart(2,"0")+" / 06"),H(label(x.title),3),p(label(x.desc)));
  const test=E("div","sus-axis-example");
  add(test,E("strong","",language==="es"?"EJEMPLO":language==="en"?"EXAMPLE":"EXEMPLO"),p(label(x.example)));
  const evidence=E("div","sus-axis-example");
  add(evidence,E("strong","",language==="es"?"EVIDENCIA QUE REQUIERE":language==="en"?"EVIDENCE TO SEEK":"EVIDÊNCIA NECESSÁRIA"),p(label(x.evidence)));
  add(detail,test,evidence);
 }
 v.axes.forEach((x,i)=>add(choices,button(String(i+1).padStart(2,"0")+" · "+label(x.title),i===0,()=>renderAxis(i),"sus-axis-button")));
 add(axes,choices,detail);add(foundation,axes);renderAxis(activeAxis);
 add(foundation,p(srcNote("pedagogia.qmd · «Explora cada dimensión del perfil»"),"tiny"));

 const op=block("operations-laboratory","04 / OPERACIONES",language==="es"?"Ocho operaciones, no una sola habilidad":language==="en"?"Eight operations, not one skill":"Oito operações, não uma única habilidade",language==="es"?"Las operaciones pueden combinarse en un mismo ejercicio. No constituyen una escalera rígida ni se excluyen entre sí.":language==="en"?"Multiple operations may be exercised together; they are not a rigid ladder or mutually exclusive categories.":"Várias operações podem combinar-se no mesmo exercício; não formam uma escada rígida nem categorias exclusivas.");
 const opGrid=E("div","sus-operation-grid");
 v.operations.forEach((x,i)=>{
  const card=E("article","sus-operation-card");
  add(card,E("span","sus-operation-index",String(i+1).padStart(2,"0")),H(label(x),3),p(label(v.operationExplain[i])));add(opGrid,card)
 });
 add(op,opGrid,p(srcNote("pedagogia.qmd · «Laboratorio de operaciones estadísticas»"),"tiny"));

 const master=block("mastery-vector","05 / EXPLORADOR DE MAESTRÍA",label(v.title),language==="es"?"Compara dos perfiles hipotéticos y elige un momento de su trayectoria. La figura reproduce los mismos valores simulados del explorador existente en el proyecto original.":language==="en"?"Compare two hypothetical profiles and two moments in their pathways. The illustration uses the same simulated values as the existing project website.":"Compare dois perfis hipotéticos e dois momentos das trajetórias. O gráfico utiliza os mesmos valores simulados da demonstração do projeto.");
 const masterbox=E("div","sus-mastery");
 const selectors=E("div","sus-master-selectors");
 const profileGroup=E("div","sus-choice");const momentGroup=E("div","sus-choice");
 let activeProfile="a",activeMoment="t0";
 const pA=button(language==="es"?"Perfil A · cálculo":language==="en"?"Profile A · computation":"Perfil A · cálculo",true,()=>{activeProfile="a";drawMaster()},"sus-tab");
 const pB=button(language==="es"?"Perfil B · interpretación":language==="en"?"Profile B · interpretation":"Perfil B · interpretação",false,()=>{activeProfile="b";drawMaster()},"sus-tab");
 const t0=button(language==="es"?"Entrada t0":language==="en"?"Entry t0":"Entrada t0",true,()=>{activeMoment="t0";drawMaster()},"sus-tab");
 const t2=button(language==="es"?"Tras práctica t2 (simulado)":language==="en"?"After practice t2 (simulated)":"Após prática t2 (simulado)",false,()=>{activeMoment="t2";drawMaster()},"sus-tab");
 add(profileGroup,pA,pB);add(momentGroup,t0,t2);add(selectors,profileGroup,momentGroup);
 const masterlayout=E("div","sus-mastery-layout"),radarPane=E("div","sus-radar-pane"),detailPane=E("div","sus-master-detail");
 const radar=document.createElementNS("http://www.w3.org/2000/svg","svg");
 radar.setAttribute("viewBox","0 0 510 425");radar.setAttribute("class","sus-radar");radar.setAttribute("role","img");
 radar.setAttribute("aria-label",language==="es"?"Perfil simulado de siete operaciones":language==="en"?"Simulated seven-operation profile":"Perfil simulado de sete operações");
 add(radarPane,radar);
 const desc=E("p","sus-master-copy"),name=H("",3),bars=E("div","sus-minibars");
 add(detailPane,name,desc,bars);add(masterlayout,radarPane,detailPane);add(masterbox,selectors,masterlayout);
 function drawMaster(){
  [pA,pB].forEach((b,i)=>b.setAttribute("aria-pressed",String((i===0?"a":"b")===activeProfile)));
  [t0,t2].forEach((b,i)=>b.setAttribute("aria-pressed",String((i===0?"t0":"t2")===activeMoment)));
  const prof=v.profiles[activeProfile];const vals=prof[activeMoment],labels=v.profiles.labels;
  name.textContent=label(prof.name);desc.textContent=label(prof.desc);
  bars.replaceChildren(...vals.map((value,i)=>{
   const row=E("div","sus-minibar");
   const title=E("span","",label(labels[i]));
   const tr=E("div","sus-bar-track");const fill=E("span","sus-bar-fill");fill.style.width=value+"%";add(tr,fill);
   add(row,title,tr,E("b","",value+"/100"));return row;
  }));
  radar.replaceChildren();
  const ns="http://www.w3.org/2000/svg",cx=255,cy=206,rr=133,n=vals.length;
  const point=(i,factor)=>{const a=-Math.PI/2+i*2*Math.PI/n;return [cx+Math.cos(a)*rr*factor/100,cy+Math.sin(a)*rr*factor/100]};
  const node=(type,attrs,tx)=>{const item=document.createElementNS(ns,type);Object.entries(attrs).forEach(([k,val])=>item.setAttribute(k,String(val)));if(tx!==undefined)item.textContent=tx;return item};
  [25,50,75,100].forEach(level=>{
   radar.appendChild(node("polygon",{points:vals.map((_,i)=>point(i,level).join(",")).join(" "),fill:"none",stroke:"#7084a8","stroke-width":1,"stroke-opacity":.55}));
  });
  vals.forEach((value,i)=>{
   const outer=point(i,100);radar.appendChild(node("line",{x1:cx,y1:cy,x2:outer[0],y2:outer[1],stroke:"#60769c","stroke-width":1}));
  });
  radar.appendChild(node("polygon",{points:vals.map((val,i)=>point(i,val).join(",")).join(" "),fill:"#aebdff", "fill-opacity":.25,stroke:"#aebdff","stroke-width":3,"stroke-linejoin":"round"}));
  vals.forEach((val,i)=>{
   const xy=point(i,val),lab=point(i,123),a=-Math.PI/2+i*2*Math.PI/n;
   radar.appendChild(node("circle",{cx:xy[0],cy:xy[1],r:5,fill:"#d4ddff",stroke:"#17233c","stroke-width":1.7}));
   radar.appendChild(node("text",{x:lab[0],y:lab[1]+4,"text-anchor":Math.cos(a)>.3?"start":Math.cos(a)<-.3?"end":"middle",fill:"#e3eaff","font-size":12,"font-family":"system-ui"},label(labels[i])));
  });
 }
 add(master,masterbox,p(label(v.warning),"method-note"),link(language==="es"?"Abrir demostración original del vector ↗":language==="en"?"Open the original mastery demonstration ↗":"Abrir a demonstração original ↗",DATA.urls.model,"link-inline",true));drawMaster();

 const levels=block("levels","06 / INTERPRETACIÓN",language==="es"?"N1–N4: profundidad interpretativa, no el vector completo":language==="en"?"N1–N4: interpretive depth, not the entire vector":"N1–N4: profundidade interpretativa, não o vetor completo");
 const levelTabs=E("div","level-tabs"),levelPanel=E("div","level-panel");
 DATA.level.forEach((x,i)=>add(levelTabs,button(x.n,i===selectedLevel,()=>{selectedLevel=i;drawLevel(levelTabs,levelPanel)})));
 add(levels,levelTabs,levelPanel,p(language==="es"?"Los niveles son una operacionalización propuesta inspirada en educación estadística; requieren validación.":language==="en"?"The levels are a proposed operationalization inspired by statistics education; they require validation.":"Os níveis são uma operacionalização proposta inspirada na educação estatística e exigem validação.","method-note"));
 drawLevel(levelTabs,levelPanel);
 const comp=E("div","compare");
 DATA.compare.forEach((x,i)=>{const c=E("article","panel");add(c,E("span","mini-label",i===0?"N1":"N3"),p(label(x)));add(comp,c)});
 add(levels,H(ui("sCompare"),3),p(ui("sCompareNote")),comp);

 const journey=block("learner-journey","07 / EXPERIENCIA",language==="es"?"De la entrada a una trayectoria que evoluciona":language==="en"?"From entry to an evolving learning pathway":"Da entrada a uma trajetória de aprendizagem",language==="es"?"Siete momentos de una arquitectura propuesta, no siete funciones plenamente desplegadas en el piloto.":language==="en"?"Seven stages in the proposed architecture, not seven fully deployed prototype features.":"Sete momentos da arquitetura proposta, não sete funções inteiramente implementadas no piloto.");
 const steps=E("div","sus-journey");
 DATA.journey.forEach(x=>{const item=E("div","sus-journey-step");add(item,E("span","sus-step-num",String(x.n).padStart(2,"0")),H(label(x.title),3),p(label(x.text)));add(steps,item)});
 add(journey,steps,link(language==="es"?"Recorrido completo del estudiante ↗":language==="en"?"Full learner journey ↗":"Percurso completo do estudante ↗",DATA.urls.how,"link-inline",true));

 const scenario=block("feedback-lab","08 / LABORATORIO",language==="es"?"Cuatro contextos, cinco momentos de aprendizaje":language==="en"?"Four disciplines, five learning stages":"Quatro contextos, cinco etapas de aprendizagem",language==="es"?"Explora cómo una pregunta cambia una interpretación sin entregar de inmediato la respuesta. Todos los ejemplos son demostraciones ficticias del diseño.":language==="en"?"Explore how a guiding question changes an interpretation without supplying a finished answer. These are fictional design demonstrations.":"Explore como perguntas orientadoras podem mudar uma interpretação sem entregar a resposta pronta. São demonstrações fictícias.");
 const shell=E("div","sus-sim-shell"),contextTabs=E("div","tabs"),stageTabs=E("div","sus-stage-tabs"),sample=E("article","sus-sim-panel");
 let scenarioIndex=0,stageIndex=0;
 DATA.scenarios.forEach((x,i)=>add(contextTabs,button(label(x.title),i===0,()=>{scenarioIndex=i;stageIndex=0;drawScenario()},"sus-tab")));
 DATA.stageNames.forEach((x,i)=>add(stageTabs,button((i+1)+" · "+label(x),i===0,()=>{stageIndex=i;drawScenario()},"sus-tab")));
 const stageHeading=E("span","eyeline"),contextHeading=H("",3),body=E("p","sus-sim-text"),next=button(language==="es"?"Siguiente momento →":language==="en"?"Next stage →":"Próxima etapa →",false,()=>{stageIndex=(stageIndex+1)%DATA.stageNames.length;drawScenario()},"action primary");
 function drawScenario(){
  contextTabs.querySelectorAll("button").forEach((b,i)=>b.setAttribute("aria-pressed",String(i===scenarioIndex)));
  stageTabs.querySelectorAll("button").forEach((b,i)=>b.setAttribute("aria-pressed",String(i===stageIndex)));
  stageHeading.textContent=label(DATA.stageNames[stageIndex])+" · "+String(stageIndex+1)+" / 05";
  contextHeading.textContent=label(DATA.scenarios[scenarioIndex].title);
  body.textContent=label(DATA.scenarios[scenarioIndex].stages[stageIndex]);
 }
 add(sample,stageHeading,contextHeading,body,next);add(shell,contextTabs,stageTabs,sample);
 add(scenario,shell,p(ui("sMeasure"),"method-note"));drawScenario();

 const dialogue=block("epistemic-dialogue","09 / CONVERSACIONES EPISTEMOLÓGICAS",language==="es"?"La IA no responde: devuelve preguntas que hacen pensar":language==="en"?"Instead of supplying answers, AI asks questions that deepen reasoning":"A IA não entrega a resposta: faz perguntas para aprofundar a reflexão",language==="es"?"La conversación epistemológica es una caja de herramientas flexible, no un cuestionario rígido.":language==="en"?"Epistemic conversation is a flexible set of tools, not a rigid questionnaire.":"A conversa epistemológica é um conjunto flexível de ferramentas, não um questionário rígido.");
 const qgrid=E("div","sus-epistemic");
 DATA.epistemic.forEach((x,i)=>{const card=E("div","sus-epistemic-card");add(card,E("span","sus-operation-index",String(i+1).padStart(2,"0")),H(label(x.title),3),p(label(x.question)));add(qgrid,card)});
 add(dialogue,qgrid,p(srcNote("pedagogia.qmd · «Las conversaciones epistemológicas»"),"tiny"));

 const cur=DATA.curriculum;
 const curricular=block("curricular-engine","10 / VINCULACIÓN UNIVERSITARIA",label(cur.title),label(cur.intro));
 const tags=E("div","sus-curriculum-tags");cur.modules.forEach((x,i)=>add(tags,E("span","",String(i+1).padStart(2,"0")+" · "+label(x))));
 add(curricular,tags);
 const people=E("div","sus-actors");
 cur.actors.forEach(x=>{const card=E("article","panel");add(card,H(label(x.who),3),p(label(x.role)));add(people,card)});
 add(curricular,H(language==="es"?"Responsabilidades para evitar la automatización ciega":language==="en"?"Responsibilities that prevent blind automation":"Responsabilidades para evitar automação sem supervisão",3),people);
 add(curricular,link(language==="es"?"Propuesta para universidades ↗":language==="en"?"University proposal ↗":"Proposta para universidades ↗",DATA.urls.university,"link-inline",true));

 const theory=block("sustancia-foundations","11 / FUNDAMENTOS",language==="es"?"Una arquitectura con fundamentos explícitos":language==="en"?"An architecture with explicit theoretical foundations":"Uma arquitetura com fundamentos explícitos");
 const theories=E("div","sus-theory-grid");
 DATA.theory.forEach(x=>{const card=E("article","panel");add(card,E("span","eyeline",x.author),H(label(x.concept),3),p(label(x.impact)));add(theories,card)});
 add(theory,theories);

 const state=block("sustancia-status","12 / ESTADO DEL PROYECTO",ui("sState"),language==="es"?"Diferenciamos las simulaciones que ya puedes explorar de las capacidades operativas aún por construir.":language==="en"?"The existing interactive demonstrations are separate from capabilities still to be implemented.":"As demonstrações interativas existentes são diferentes das funções operacionais ainda em desenvolvimento.");
 const stategrid=E("div","status-grid");
 DATA.status.forEach(x=>{const card=E("article","status "+(x.kind==="next"?"next":""));add(card,E("span","state",ui(x.kind==="next"?"sStatusNext":"sStatusNow")),H(label(x.title),3),p(label(x.text)));add(stategrid,card)});
 add(state,stategrid);

 const research=block("sustancia-research","13 / EQUIPO Y INVESTIGACIÓN",language==="es"?"Sustancia es también un proyecto de investigación educativa":language==="en"?"Sustancia is also an educational research project":"Sustancia também é pesquisa educacional",language==="es"?"La arquitectura permitiría estudiar errores, procesos de revisión y transferencia a lo largo del tiempo. Su equipo combina formación sociológica y desarrollo informático; las instituciones de procedencia no equivalen a patrocinio.":language==="en"?"The architecture could study mistakes, revisions and knowledge transfer longitudinally. The team includes sociology and computing backgrounds; affiliations do not imply sponsorship.":"A arquitetura permitiria estudar erros, revisões e transferência ao longo do tempo. O projeto combina sociologia e informática; vínculo institucional não significa patrocínio.");
 const teamGrid=E("div","sus-team-grid");
 DATA.projectTeam.forEach(x=>{const card=E("article","panel");add(card,H(x.name,3),p(label(x.note)));add(teamGrid,card)});
 add(research,teamGrid,link(language==="es"?"Conocer al equipo ↗":language==="en"?"Meet the team ↗":"Conhecer a equipe ↗",DATA.urls.team,"link-inline",true));

 const boundary=block("boundaries","14 / TRANSPARENCIA",ui("sBoundaries"),label(DATA.boundary));
 add(boundary,p(label(DATA.sourceNote),"tiny"),link(language==="es"?"Ver modelo de origen ↗":language==="en"?"Inspect project source ↗":"Ver fontes do projeto ↗",DATA.urls.code,"link-inline",true));
 const linksBlock=block("sustancia-links","15 / EXPLORA EL PROYECTO",language==="es"?"Todas las áreas de la web original":language==="en"?"All areas of the original website":"Todas as áreas do site original");
 const siteGrid=E("div","sus-source-grid");
 DATA.siteSections.forEach(x=>{
  const card=link(label(x.title)+" ↗","https://nglmnz.github.io/sustancia/"+x.path,"sus-source-link",true);add(siteGrid,card)
 });add(linksBlock,siteGrid);
 const actions=E("div","hero-actions");
 add(actions,link(ui("sTry"),DATA.urls.site,"action primary",true),link(ui("sRepo"),DATA.urls.code,"action",true),link(ui("viewT"),localeHref("tesis"),"action"));add(linksBlock,actions);
}
function drawLevel(tabs,panel){
 Array.from(tabs.querySelectorAll("button")).forEach((b,i)=>b.setAttribute("aria-pressed",String(i===selectedLevel)));
 const level=DATA.level[selectedLevel];
 panel.replaceChildren(E("span","eyeline",level.n),H(label(level.name),3),p(label(level.prompt)));
 const q=E("blockquote","",label(level.example));add(panel,q);
}
function render(){
 if(!UI||!DATA)return;
 if(destroyThesisMotion){destroyThesisMotion();destroyThesisMotion=null}
 document.documentElement.lang=language;initFrame();
 if(kind==="tesis")fromThesis();else fromSustancia();
 footer();
}
Promise.all([fetch("../assets/cases-ui.json"),fetch("../assets/"+(kind==="tesis"?"tesis-datos.json":"sustancia-datos.json")),...(kind==="tesis"?[fetch("../assets/tesis-evaluacion.json")]:[])])
.then(async responses=>{if(responses.some(r=>!r.ok))throw new Error("Data unavailable");[UI,DATA,REVIEW]=await Promise.all(responses.map(r=>r.json()));render()})
.catch(error=>{root.replaceChildren(E("main","container",language==="en"?"Content unavailable. Please refresh the page.":language==="pt"?"Conteúdo indisponível. Atualize a página.":"Contenido no disponible. Actualiza la página."));console.error(error)});
})();