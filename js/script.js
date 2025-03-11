const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];
// Seleziono l'elemento HTML con la classe "staff" e lo assegna alla variabile "elementStaff"
const elementStaff = document.querySelector('.staff');

// Chiamo la funzione generateHTML, passando due argomenti
generateHTML(elementStaff, teamMembers)

function generateHTML(member, elements) {
  console.log(member)

  let items = '';
  for (let i = 0; i < elements.length; i++) {
    const currentElements = elements[i];
   

    items = items + creaHTML(currentElements)
  }

  elementStaff.innerHTML = items;
}


function creaHTML(object) {
  console.log(object)
  return `    
                <div class="col-4">
                    <div class="mb-3" style="max-width: 540px;">
                        <div class="row g-0 bg-color">
                            <div class="col-4">
                                <img src="${object.img}" class="img-fluid rounded-start" alt="${object.name}">
                            </div>
                            <div class="col-8 ps-2 pt-1">
                                <div class="card-body">
                                    <h5 class="card-title text-light">${object.name}</h5>
                                    <p class="card-text text-light">${object.role}</p>
                                    <a href="#">${object.email}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
}