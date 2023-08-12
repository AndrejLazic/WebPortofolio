var naslov = document.querySelector('h1').innerText;
var url = window.location.href;
var pisac = document.querySelector('.post-author b').innerText;
var sekcija = document.querySelector('.cat-name').innerText;
var text = document.querySelector('#article-title').innerText;
var vremeElement = document.querySelector('.post-time');
var datum = vremeElement.querySelector('span:first-child').textContent.trim();
var vreme = vremeElement.querySelector('span:last-child').textContent.trim();

naslov = naslov.replace('„','&quot;');
naslov = naslov.replace('“','&quot;');
naslov = naslov.replace('"','&quot;');

var meseci = {
  'jan': '01', 'feb': '02', 'mar': '03', 'apr': '04', 'maj': '05', 'jun': '06',
  'jul': '07', 'avg': '08', 'sep': '09', 'okt': '10', 'nov': '11', 'dec': '12'
};

var [dan, mes, godina] = datum.split(' ');
mes = meseci[mes.toLowerCase()];
dan = dan.replace('.', '');
var isoDatumVreme = `${godina}-${mes}-${dan}T${vreme}:00+00:00`;
/*
console.log("id: 2783")
console.log("postid: " + url);
console.log("maincontent: #article-title");
console.log("title: " + naslov);
console.log("pubdate: " + isoDatumVreme);
console.log("author: " + pisac);
console.log("section: " + sekcija);
console.log("access_level: free");
console.log("article_type: news");
console.log("reader_type: anonymous");
*/
window._ain = {
    id: "2783",
    postid: url,
    maincontent: "#article-title",
    title: naslov,
    pubdate: isoDatumVreme,
    authors: pisac,
    sections: sekcija,
    access_level: "free",
    article_type: "news",
    reader_type: "anonymous",
    social: {
      fb_count: 0,
      ln_count: 0,
      pn_count: 0
    }
  };
  /* CONFIGURATION END */
  (function (d, s) {
    var sf = d.createElement(s);
    sf.type = 'text/javascript';
    sf.async = true;
    sf.src = (('https:' == d.location.protocol)
      ? 'https://d7d3cf2e81d293050033-3dfc0615b0fd7b49143049256703bfce.ssl.cf1.rackcdn.com'
      : 'http://t.contentinsights.com') + '/stf.js';
    var t = d.getElementsByTagName(s)[0];
    t.parentNode.insertBefore(sf, t);
  })(document, 'script');