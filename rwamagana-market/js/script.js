const products=[
  {n:"Bananas",d:"Sweet, ripe bananas",c:"fruit",i:"images/banana.jpg"},
  {n:"Avocados",d:"Creamy green avocados",c:"fruit",i:"images/avocado.jpg"},
  {n:"Mangoes",d:"Juicy, tree-ripened mangoes",c:"fruit",i:"images/mango.jpg"},
  {n:"Green beans",d:"Fresh, tender green beans",c:"veg",i:"images/green-beans.jpg"},
  {n:"Irish potatoes",d:"Firm potatoes for every meal",c:"veg",i:"images/potatoes.jpg"},
  {n:"Fresh maize",d:"Sweet corn on the cob",c:"veg",i:"images/maize.jpg"},
  {n:"Rice",d:"Clean white rice, sold by the sack",c:"grain",i:"images/rice.jpg",fit:1},
  {n:"Maize flour",d:"Packed maize flour in several sizes",c:"grain",i:"images/maize-flour.jpg",fit:1},
  {n:"Brown bread",d:"Soft loaf topped with oats",c:"bake",i:"images/bread.jpg"},
  {n:"Sandwich cookies",d:"Crunchy cookies with a creamy filling",c:"bake",i:"images/cookies.jpg"},
  {n:"Eggs",d:"Farm eggs, sold by the tray",c:"bake",i:"images/eggs.jpg"}
];
const grid=document.getElementById('grid');
products.forEach(p=>{
  const msg=encodeURIComponent("Hello Rwamagana Market, I want to buy: "+p.n+". Please tell me the price and availability.");
  const el=document.createElement('article');
  el.className='card';el.dataset.c=p.c;
  el.innerHTML='<div class="photo"><img'+(p.fit?' class="fit"':'')+' src="'+p.i+'" alt="'+p.n+'" loading="lazy"></div>'+
    '<div class="info"><h3>'+p.n+'</h3><p class="tag">'+p.d+'</p>'+
    '<a class="btn" target="_blank" rel="noopener" href="https://wa.me/250780661620?text='+msg+'">Buy</a></div>';
  grid.appendChild(el);
});
document.querySelectorAll('.filters button').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.filters button').forEach(x=>x.setAttribute('aria-pressed',x===b));
  const f=b.dataset.f;
  grid.querySelectorAll('.card').forEach(c=>c.hidden=!(f==='all'||c.dataset.c===f));
}));
