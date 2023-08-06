"use strict";

const modal = document.querySelector(".modal");
const modals = document.getElementsByClassName("modal");
const overlay = document.querySelector(".overlay");
let btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal1 = document.querySelector(".show-modal1");
const btnOpenModal2 = document.querySelector(".show-modal2");
const btnOpenModal3 = document.querySelector(".show-modal3");

const openModal1 = function () {
  modals[0].innerHTML = `<button class="close-modal">&times;</button>
  <div class="modal-body">
  <h1>&#960; or &tau;: Why do we care?</h1>
  <p style="text-align: left;">
  We have all heard of the mathematical constant &pi;(pi), thanks to its significance in geometry and trigonometry. But did you know that there is another fundamental circle constant, &tau;(tau) which hopes to replace &pi;? Let us look at why people believe &pi; needs to be changed and how &tau; could help the world of mathematics.<br>
  <img src="images/tauvspidiagram.png" alt="tau vs pi" width="60%" style="float:left;margin:5px;">
  <br>
	Before we talk about &pi; vs &tau;, we need to understand what they are. &pi; is the ratio between the circumference and the diameter while &tau; is the ratio between the circumference and radius of a circle. Therefore, this makes &tau; = 2&pi;.<br>
	One of the main reasons behind the movement for &tau; is its relation to radians and trigonometry. With &pi;, angles in radians span only half a circle (from 0 to &pi;). This often leads to some unintuitive expressions involving &pi; when we deal with angles beyond the semicircle. In contrast, &tau; simplifies the representation of angles in radians. An angle spanning the entire circle is &tau; while an angle covering one-third of the circle corresponds to &tau;/3. This intuitive correspondence makes trigonometry and the unit circle easier to understand.<br>
	Critics of &pi; argue that numerous formulas across various disciplines involve 2&pi; due to their connection to circles or periodicity. By replacing 2&pi; with &tau;, these formulas become more elegant and memorable. Examples include the formula for circumference, Gaussian normal distribution, Riemann Zeta and Polar/Complex Integration. By removing the 2 from the &pi;, we can make these formulas more elegant and memorable.<br>
	Many natural phenomena, such as weather patterns or pendulums, follow up and down cycles from one extreme to the same extreme but on the other end. However, these cycles are often shown across 2&pi;. This can lead to confusion and complexities in models. Embracing &tau; allows us to simply state that one cycle is &tau;, making it easier for learners and researchers to work with periodic phenomena.<br>
	This topic may seem inconsequential to most of us but the foundation of mathematics plays an important role in life whether you realize it or not. Math describes the fabric of our existence and is the cog turning the great human machine. Everything humanity has done has been an offshoot of math at some point including creativity and art. So, through relation, math is the language of humanity’s development impacting everything for engineering to computer science. Through Tau, we have the opportunity to make math more accessible to everyone.<br>
	&tau; has several advantages but &pi; has simply been used for so long and switching will be troublesome. Therefore, we need to recognize the importance of both these constants. So the next time you are in a conversation about math or go through complex problems, embracing both &pi; and &tau; would help you appreciate the beauty of the mathematical phenomena around us.
  </p>
  </div>`;
  let btnCloseModal = document.querySelector(".close-modal");
  btnCloseModal.addEventListener("click", closeModal);
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const openModal2 = function () {
  modals[0].innerHTML = `<button class="close-modal">&times;</button>
  <h1>Not there yet</h1>
  <p>
  Come back next week!
  </p>`;
  let btnCloseModal = document.querySelector(".close-modal");
  btnCloseModal.addEventListener("click", closeModal);
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const openModal3 = function () {
  modals[0].innerHTML = `<button class="close-modal">&times;</button>
  <h1>Not there yet</h1>
  <p>
  Come back two weeks later!
  </p>`;
  let btnCloseModal = document.querySelector(".close-modal");
  btnCloseModal.addEventListener("click", closeModal);
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal1.addEventListener("click", openModal1);
btnOpenModal2.addEventListener("click", openModal2);
btnOpenModal3.addEventListener("click", openModal3);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
