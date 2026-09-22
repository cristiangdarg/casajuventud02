document.addEventListener('DOMContentLoaded',()=>{
const btn=document.querySelector('.menu-toggle'),nav=document.querySelector('.main-nav'),body=document.body;
if(btn)btn.onclick=()=>{nav?.classList.toggle('open');btn.classList.toggle('is-open');btn.innerHTML=btn.classList.contains('is-open')?'×':'☰'};
document.querySelectorAll('.nav-trigger').forEach(t=>t.onclick=e=>{e.preventDefault();const p=t.closest('.nav-dropdown');document.querySelectorAll('.nav-dropdown.is-open').forEach(x=>{if(x!==p)x.classList.remove('is-open')});p.classList.toggle('is-open')});
document.addEventListener('click',e=>{if(!e.target.closest('.nav-dropdown'))document.querySelectorAll('.nav-dropdown.is-open').forEach(x=>x.classList.remove('is-open'))});
const loader=document.querySelector('.page-loader');window.addEventListener('load',()=>setTimeout(()=>{loader?.classList.add('loaded');body.classList.add('page-ready')},650));
document.querySelectorAll('a[href]').forEach(a=>{const h=a.getAttribute('href');if(!h||h.startsWith('#')||h.startsWith('http')||h.startsWith('mailto:')||a.target==='_blank'||h.endsWith('.pdf'))return;a.addEventListener('click',e=>{e.preventDefault();body.classList.add('page-leaving');setTimeout(()=>location.href=h,260)})});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.section,.school,.school-preview article,.cards-grid a,.offers article,.people article,.timeline-item,.docs>div,.downloads a,.social a,.contact form,.donation-box,.detail-photo').forEach(e=>{e.classList.add('scroll-reveal');io.observe(e)});
document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();alert('Formulario listo para conectar con el correo o backend institucional.')}));
const copy=document.querySelector('.copy');if(copy)copy.onclick=()=>{navigator.clipboard?.writeText('INSTITUCION.EDU');copy.textContent='Alias copiado ✓';setTimeout(()=>copy.textContent='Copiar alias',1800)};
});