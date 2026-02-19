import{C as x,s as v,A as w}from"./vendor-hotwired-D7QC5Uwi.js";import{b as s,D as d}from"./vendor-lblBPk_Z.js";import{c as y,i as L}from"./vendor-lucide-B-eSwtPj.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();function a(){y({icons:L})}const T=t=>t?[t.city,t.region,t.countryCode].filter(Boolean).join(", "):"",p=(t,e)=>!t&&!e?"":`(${t||"?"} - ${e||"Present"})`,S=t=>t instanceof Error?t.message:"Unknown error",k=t=>{const e=document.title;return document.title=`Zoltan Kovac Resume - ${t||"Download"}`,()=>{document.title=e}},D=t=>{if(!t)return"";const{name:e,label:o,image:n,email:r,phone:i,url:l,summary:u,location:$,profiles:h}=t,b=T($);return s`
    <section class="mb-12 border-b border-slate-200 pb-8 text-center">
      ${n?s`<img
            src="${n}"
            alt="${e||""}"
            class="mx-auto mb-6 h-32 w-32 rounded-full border-4 border-slate-300 object-cover shadow-lg"
          />`:""}
      ${e?s`<h1
            class="mb-2 text-4xl font-bold tracking-tight text-slate-900"
          >
            ${e}
          </h1>`:""}
      ${o?s`<p class="mb-4 text-xl font-medium text-slate-600">${o}</p>`:""}
      ${u?s`<p
            class="my-6 text-left text-base leading-relaxed text-gray-700"
          >
            ${u}
          </p>`:""}

      <div
        class="col-span-2 my-6 grid grid-cols-2 justify-center gap-4 text-left"
      >
        ${r?s`<p class="m-0">
              <strong class="font-semibold text-slate-700">Email:</strong>
              <a
                href="mailto:${r}"
                class="text-indigo-600 transition-colors hover:text-indigo-700 hover:underline"
              >
                ${r}
              </a>
            </p>`:""}
        ${i?s`<p class="m-0">
              <strong class="font-semibold">Phone:</strong> ${i}
            </p>`:""}
        ${l?s`<p class="m-0">
              <strong class="font-semibold text-slate-700">Website:</strong>
              <a
                href="${l}"
                target="_blank"
                rel="noopener noreferrer"
                class="text-indigo-600 transition-colors hover:text-indigo-700 hover:underline"
              >
                ${l}
              </a>
            </p>`:""}
        ${b?s`<p class="m-0">
              <strong class="font-semibold">Location:</strong> ${b}
            </p>`:""}
      </div>

      ${h?.length?P(h):""}
    </section>
  `},P=t=>s`
  <div class="mt-6">
    <ul class="flex list-none flex-wrap gap-4">
      ${t?.map(e=>s`
          <li>
            <a
              href="${e.url}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block rounded-lg bg-slate-100 px-4 py-2 text-slate-700 no-underline transition-all hover:bg-slate-200 hover:shadow-sm"
            >
              <i data-lucide="${e.network.toLowerCase()}"></i>
            </a>
          </li>
        `)}
    </ul>
  </div>
`,E=t=>t?.length?s`
    <section class="mb-10 border-b border-slate-200 pb-8">
      <h2 class="mb-6 text-2xl font-semibold tracking-tight text-slate-800">
        Work Experience
      </h2>
      ${t.map(I)}
    </section>
  `:"",I=t=>s`
  <div
    class="mb-6 rounded-lg border border-slate-100 bg-slate-50 p-5 transition-shadow last:mb-0 hover:shadow-sm"
  >
    <h3 class="mb-2 text-lg font-semibold text-slate-900">
      ${t.position||"Position"}
    </h3>
    <p class="mb-2 text-slate-600">
      ${t.name||"Company"}
      ${t.startDate||t.endDate?s`<span class="text-sm italic">
            ${p(t.startDate,t.endDate)}
          </span>`:""}
    </p>
    ${t.summary?s`<p class="my-3 leading-relaxed">${t.summary}</p>`:""}
    ${t.highlights?.length?f(t.highlights):""}
  </div>
`,f=t=>s`
  <ul class="my-3 list-disc pl-6">
    ${t.map(e=>s`<li class="mb-2 leading-relaxed">${e}</li>`)}
  </ul>
`,O=t=>t?.length?s`
    <section class="mb-10 border-b border-slate-200 pb-8">
      <h2 class="mb-6 text-2xl font-semibold tracking-tight text-slate-800">
        Education
      </h2>
      ${t.map(C)}
    </section>
  `:"",C=t=>s`
  <div
    class="mb-6 rounded-lg border border-slate-100 bg-slate-50 p-5 transition-shadow last:mb-0 hover:shadow-sm"
  >
    <h3 class="mb-2 text-lg font-semibold text-slate-900">
      ${t.studyType||"Degree"} in ${t.area||"Field"}
    </h3>
    <p class="mb-2 text-slate-600">
      ${t.institution||"Institution"}
      ${t.startDate||t.endDate?s`<span class="text-sm italic">
            ${p(t.startDate,t.endDate)}
          </span>`:""}
    </p>
    ${t.score?s`<p>Score: ${t.score}</p>`:""}
    ${t.courses?.length?G(t.courses):""}
  </div>
`,G=t=>s`
  <ul class="list-disc pl-6">
    ${t.map(e=>s`<li>${e}</li>`)}
  </ul>
`,M=t=>t?.length?s`
    <section class="mb-10 border-b border-slate-200 pb-8">
      <h2 class="mb-6 text-2xl font-semibold tracking-tight text-slate-800">
        Skills
      </h2>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        ${t.map(N)}
      </div>
    </section>
  `:"",N=t=>s`
  <div
    class="rounded-lg border-l-4 border-indigo-500 bg-slate-50 p-4 transition-all hover:border-indigo-600 hover:shadow-sm"
  >
    <h3 class="mb-2 text-base font-semibold text-slate-900">
      ${t.name||"Skill"}
    </h3>
    ${t.level?s`<p class="mb-2 text-sm font-medium text-slate-600">
          ${t.level}
        </p>`:""}
    ${t.keywords?.length?A(t.keywords):""}
  </div>
`,A=t=>s`
  <ul class="mt-2 flex list-none flex-wrap gap-2 p-0">
    ${t.map(e=>s`
        <li
          class="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600"
        >
          ${e}
        </li>
      `)}
  </ul>
`,F=t=>t?.length?s`
    <section class="mb-10 border-b border-slate-200 pb-8">
      <h2 class="mb-6 text-2xl font-semibold tracking-tight text-slate-800">
        Languages
      </h2>
      <ul class="list-disc pl-6">
        ${t.map(e=>s`
            <li class="mb-2">
              ${e.language||"Language"} -
              ${e.fluency||"Proficiency level"}
            </li>
          `)}
      </ul>
    </section>
  `:"",V=t=>t?.length?s`
    <section class="mb-10 border-b border-slate-200 pb-8">
      <h2 class="mb-6 text-2xl font-semibold tracking-tight text-slate-800">
        Interests
      </h2>
      <ul class="list-disc pl-6">
        ${t.map(e=>s`
            <li class="mb-2">
              ${e.name||"Interest"}
              ${e.keywords?.length?s` (${e.keywords.join(", ")})`:""}
            </li>
          `)}
      </ul>
    </section>
  `:"",W=t=>t?.length?s`
    <section
      class="mb-10 border-b border-slate-200 pb-8 last:mb-0 last:border-b-0 last:pb-0"
    >
      <h2 class="mb-6 text-2xl font-semibold tracking-tight text-slate-800">
        Projects
      </h2>
      ${t.map(K)}
    </section>
  `:"",K=t=>s`
  <div
    class="mb-6 rounded-lg border border-slate-100 bg-slate-50 p-5 transition-shadow last:mb-0 hover:shadow-sm"
  >
    <h3 class="mb-2 text-lg font-semibold text-slate-900">
      ${t.name||"Project"}
    </h3>
    ${t.description?s`<p class="my-3 leading-relaxed">${t.description}</p>`:""}
    ${t.highlights?.length?f(t.highlights):""}
    ${t.url?s`<p>
          <a
            href="${t.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium text-indigo-600 transition-colors hover:text-indigo-700 hover:underline"
          >
            View Project
          </a>
        </p>`:""}
  </div>
`,q=(t,e)=>s`
  <div class="rounded-lg border border-slate-200 bg-slate-50 p-6">
    <h2 class="mb-4 text-xl font-semibold text-slate-900">${t}</h2>
    <pre
      class="overflow-x-auto rounded bg-slate-100 p-4 font-mono text-sm leading-relaxed text-slate-800"
    >
${e}</pre
    >
  </div>
`,B=()=>s`<p class="text-slate-600">No files found in gist.</p>`,c=class c extends x{connect(){this.loadGist()}refresh(e){e?.preventDefault(),this.loadGist()}downloadPDF(e){e?.preventDefault();const o=k(this.usernameValue);window.print(),setTimeout(o,100)}async loadGist(){try{this.showLoading();const e=new AbortController,o=setTimeout(()=>e.abort(),1e4),n=await fetch(`https://api.github.com/gists/${this.gistIdValue}`,{signal:e.signal});if(clearTimeout(o),!n.ok)throw new Error(`Failed to load resume (${n.status})`);const r=await n.json();this.renderGist(r),this.showContent()}catch(e){console.error("Error loading gist:",e),this.showError(S(e))}}renderGist(e){const o=Object.values(e.files);if(o.length===0){d(B(),this.contentTarget);return}const n=o[0];try{const r=JSON.parse(n.content);this.renderResume(r)}catch{d(q(n.filename,n.content),this.contentTarget),setTimeout(()=>a(),0)}}renderResume(e){d(s`
        ${D(e.basics)} ${E(e.work)}
        ${O(e.education)}
        ${M(e.skills)}
        ${F(e.languages)}
        ${V(e.interests)}
        ${W(e.projects)}
      `,this.contentTarget),setTimeout(()=>a(),0)}showLoading(){this.loadingTarget.classList.remove("hidden"),this.errorTarget.classList.add("hidden"),this.contentTarget.classList.add("hidden")}showError(e){if(this.loadingTarget.classList.add("hidden"),this.errorTarget.classList.remove("hidden"),this.contentTarget.classList.add("hidden"),e){const o=this.errorTarget.querySelector("p");o&&(o.textContent=e)}}showContent(){this.loadingTarget.classList.add("hidden"),this.errorTarget.classList.add("hidden"),this.contentTarget.classList.remove("hidden")}};c.targets=["loading","error","content"],c.values={gistId:String,username:String};let m=c;v();const g=w.start();g.debug=!1;window.Stimulus=g;g.register("resume",m);document.addEventListener("DOMContentLoaded",()=>{a()});document.addEventListener("turbo:load",()=>{a()});
