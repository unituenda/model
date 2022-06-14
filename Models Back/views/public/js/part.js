/*empresa*/
const postsContainerInter = document.getElementById('postInter');
const loadingInt = document.querySelector('.loaderInt');
const filterInter = document.getElementById('filterInter');

let limitInt = 5;
let pageInt = 1;

// Fetch posts from API
async function getPostsInter() {
  const ress = await fetch(
    `http://localhost:3000/empresa?_limit=${limitInt}&_page=${pageInt}`
  );

  const datas = await ress.json();

  return datas;
}

// Show posts in DOM
// async function showPostsInter() {
//   const postsInter = await getPostsInter();
//   console.log(postsInter);

//   postsInter.forEach(post => {
//     const postElInter = document.createElement('li');
//     postElInter.classList.add('produtos-item');
//     postElInter.innerHTML = `
//       <ul>
//         <li class ="nome-Inter"><span>Nome</span> ${post.Nome}</li>
//         <li class ="email-Inter"><span>Email</span> ${post.Email}</li>
//         <li class ="tele-Inter"><span>Telefone</span> ${post.Telefone}</li>
//         <li class ="area-Inter"><span>Área de actuação </span> ${post.Área} </li>
//         <li class ="loc-Inter"><span>Localização</span> ${post.Localização}</li>
//       </ul>
// `;
//     postsContainerInter.appendChild(postElInter);
//   });
// }

// Show loader & fetch more posts
// function showLoadingInt() {
//   loadingInt.classList.add('show');

//   setTimeout(() => {
//     loadingInt.classList.remove('show');

//     setTimeout(() => {
//       page++;
//       showPostsInter();
//     }, 300);
//   }, 1000);
// }

// Filter posts by input
// function filterPostsInter(e) {
//   const term = e.target.value.toUpperCase();
//   const posts = document.querySelectorAll('.produtos-item');

//   posts.forEach(post => {
//     const titleInter = post.querySelector('.nome-Inter').innerText.toUpperCase();
//     const loc = post.querySelector('.loc-Inter').innerText.toUpperCase();
//     const emailInter = post.querySelector('.email-Inter').innerText.toUpperCase();
//     const teleInter = post.querySelector('.tele-Inter').innerText.toUpperCase();
//     const area = post.querySelector('.area-Inter').innerText.toUpperCase();

//     if (titleInter.indexOf(term) > -1 || loc.indexOf(term) > -1 || emailInter.indexOf(term) > -1
//     || teleInter.indexOf(term) > -1 || area.indexOf(term) > -1) {
//       post.style.display = 'flex';
//     } else {
//       post.style.display = 'none';
//     }
//   });
// }

// Show initial posts
// showPostsInter();

// window.addEventListener('scroll', () => {
//   const {
//     scrollTop,
//     scrollHeight,
//     clientHeight
//   } = document.documentElement;

//   if (scrollTop + clientHeight >= scrollHeight - 5) {
//     showLoadingInt();
//   }
// });

// filterInter.addEventListener('input', filterPostsInter);