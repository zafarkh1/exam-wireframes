// let form = document.querySelector(".d-flex");
// let formName = document.querySelector(".form_name");
// let formRelation = document.querySelector(".email");
// let allSpan = document.querySelectorAll(".form_span");
// let btn = document.querySelector(".btn");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   if (!formName.value) {
//     allSpan[0].innerHTML = "Name space cannot be empty";
//     formName.classList.add("form_error");
//   } else {
//     formName.classList.remove("form_error");
//     formName.classList.add("form_success");
//     allSpan[0].innerHTML = "";
//   }

//   if (!formRelation.value) {
//     allSpan[1].innerHTML = "Relation space cannot be empty";
//     formRelation.classList.add("form_error");
//   } else {
//     formRelation.classList.remove("form_error");
//     formRelation.classList.add("form_success");
//     allSpan[1].innerHTML = "";
//   }

//   if (!formTel.value) {
//     allSpan[2].innerHTML = "Tel space cannot be empty";
//     formTel.classList.add("form_error");
//   } else {
//     formTel.classList.remove("form_error");
//     formTel.classList.add("form_success");
//     allSpan[2].innerHTML = "";
//   }

//   let box = document.querySelector(".box");
//   let contact = document.createElement("div");

//   let nameSpan = document.createElement("span");
//   nameSpan.innerText = formName.value;
//   contact.appendChild(nameSpan);

//   let relationSpan = document.createElement("span");
//   relationSpan.innerText = formRelation.value;
//   relationSpan.classList.add("relationSpan_margin");
//   contact.appendChild(relationSpan);

//   let telSpan = document.createElement("span");
//   telSpan.innerText = formTel.value;
//   contact.appendChild(telSpan);

//   box.appendChild(contact);
// });
