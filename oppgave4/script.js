form = document.forms[0];
textarea = document.getElementById("output");

function endreInfo() {
  textarea.value =
    "Hei jeg heter " +
    form.navn.value +
    " og er " +
    form.alder.value +
    "år gammel. Jeg liker å drikke " +
    form.drikke.value;
}
