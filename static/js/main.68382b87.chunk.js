(this.webpackJsonpstarwars=this.webpackJsonpstarwars||[]).push([[0],{25:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),r=n(17),a=n.n(r),c=n(4),o=n.n(c),l=n(6),u=n(3),d=(n(25),n(19)),m=n(18),j=n.n(m),f={getFilms:function(){return v.apply(this,arguments)},addFilmToStorage:function(e,t){var n=b(e)?b(e):[];return n.some((function(e){return e.episode_id===t.episode_id}))?{message:"".concat(t.title," is already a favorite film"),status:"error"}:(n=[t].concat(Object(d.a)(n)),localStorage.setItem(e,JSON.stringify(n)),{message:"".concat(t.title," has added to your favorite films!"),status:"success"})},removeFilmFromStorage:function(e,t){var n=b(e);return n=n.filter((function(e){return e.episode_id!==t.episode_id})),localStorage.setItem(e,JSON.stringify(n)),n},loadFilmFromStorage:b};function v(){return(v=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://swapi.dev/api/films/");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){var t=localStorage.getItem(e);return t?JSON.parse(t):null}var O=n(0);function h(e){var t=e.film,n=e.selectFilm;return Object(O.jsx)("div",{className:"film-item-box",onClick:function(){return n(t)},children:Object(O.jsx)("p",{children:t.title})})}function p(e){var t=e.film,n=e.addToFavorites;return Object(O.jsxs)("div",{className:"film-preview-box",children:[Object(O.jsx)("h1",{children:t.title}),Object(O.jsx)("p",{children:t.opening_crawl}),Object(O.jsx)("button",{onClick:function(){return n(t)},children:"Add to favorites"})]})}var x="favoriteFilms";function g(e){var t=e.film,n=e.removeFavoriteFilm;return Object(O.jsxs)("div",{className:"favorite-film-box",children:[Object(O.jsx)("h3",{children:t.title}),Object(O.jsx)("button",{className:"remove-film-btn",onClick:function(){return n(t)},children:"Delete"})]})}function F(e){var t=e.setIsFavoritesModalOpen,n=Object(i.useState)(null),s=Object(u.a)(n,2),r=s[0],a=s[1];Object(i.useEffect)((function(){c()}),[]);var c=function(){var e=f.loadFilmFromStorage(x);a(e)},o=function(e){var t=f.removeFilmFromStorage(x,e);a(t)};return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"favorites-modal-box",children:[Object(O.jsx)("h1",{children:"My Favorite Films"}),Object(O.jsx)("div",{className:"modal-films-list",children:0===(null===r||void 0===r?void 0:r.length)?Object(O.jsx)("p",{children:"You have no favorite films."}):null===r||void 0===r?void 0:r.map((function(e){return Object(O.jsx)(g,{film:e,removeFavoriteFilm:o},e.episode_id)}))}),Object(O.jsx)("i",{onClick:function(){return t(!1)},className:"fas close-modal-btn fa-times"})]})})}var S=n.p+"static/media/logo.86ad8c03.png";function N(e){var t=e.userMessage;return Object(O.jsx)("div",{className:"error"===(null===t||void 0===t?void 0:t.status)?"error-message-modal-box":"success-message-modal-box",children:Object(O.jsx)("p",{children:null===t||void 0===t?void 0:t.message})})}var w=function(){var e=Object(i.useState)(),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(i.useState)(!1),a=Object(u.a)(r,2),c=a[0],d=a[1],m=Object(i.useState)(),j=Object(u.a)(m,2),v=j[0],b=j[1],g=Object(i.useState)(!1),w=Object(u.a)(g,2),k=w[0],y=w[1],C=Object(i.useState)(null),T=Object(u.a)(C,2),I=T[0],M=T[1];Object(i.useEffect)((function(){_()}),[]);var _=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getFilms();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(e){return b(e)};return Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)("img",{className:"logo-img",src:S,alt:""}),Object(O.jsx)("button",{className:"show-favorites-films-btn",onClick:function(){return d(!c)},children:"My Favorite Films"}),c&&Object(O.jsx)(F,{setIsFavoritesModalOpen:d}),k&&Object(O.jsx)(N,{userMessage:I}),Object(O.jsxs)("div",{className:"main-container",children:[Object(O.jsx)("div",{className:"film-table-list-box",children:null===n||void 0===n?void 0:n.map((function(e){return Object(O.jsx)(h,{film:e,selectFilm:J},e.episode_id)}))}),v?Object(O.jsx)(p,{film:v,addToFavorites:function(e){var t=f.addFilmToStorage(x,e);M(t),y(!0),setTimeout((function(){y(!1)}),4e3)}}):Object(O.jsx)("h2",{className:"missing-films-message",children:"Click On One Of The Films..."})]})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),r(e),a(e)}))};a.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root")),k()}},[[45,1,2]]]);
//# sourceMappingURL=main.68382b87.chunk.js.map