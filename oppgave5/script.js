// html elementer
formEL = document.forms[0];
textareaEL = document.getElementById("textarea");

function endreInfo() {
  // endrer text
  textareaEL.value =
    getNavnTekst() + getAlderTekst() + getDrikkeTekst() + getMatTekst();
}

// bestemmer navn tekst
function getNavnTekst() {
  if (formEL.navn.value != "") {
    return "Jeg heter " + formEL.navn.value + ". ";
  } else {
    return "Jeg har ikke navn. ";
  }
}

// bestemmer alder tekst
function getAlderTekst() {
  if (formEL.alder.value != "") {
    return "Jeg er " + formEL.alder.value + " år gammel. ";
  } else {
    return "Jeg ble aldri født. ";
  }
}

// bestemmer drikke tekst
function getDrikkeTekst() {
  if (formEL.drikke.value != "") {
    return "Jeg liker å drikke " + formEL.drikke.value + ". ";
  } else {
    return "Jeg liker ikke å drikke. ";
  }
}

// bestemmer mat tekst
function getMatTekst() {
  // lager array med likt mat
  liktMat = [];
  for (i = 0; i < formEL.mat.length; i++) {
    if (formEL.mat[i].checked == true) {
      liktMat.push(formEL.mat[i].value);
    }
  }
  if (liktMat.length > 0) {
    return "Jeg liker å spise " + formatArray(liktMat) + ". ";
  } else {
    return "Jeg liker ikke å spise. ";
  }
}

// formatterer array
function formatArray(array) {
  if (array.length == 1) {
    return array[0];
  } else if (array.length <= 0) {
    return "";
  } else {
    return array.slice(0, -1).join(", ") + " og " + array.slice(-1);
  }
}
