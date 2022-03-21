form = document.forms[0];
textarea = document.getElementById("output");

function endreInfo() {
  textarea.innerHTML =
    "Jeg heter " +
    form.navn.value +
    " og er " +
    form.alder.value +
    " år gammel.";
}
