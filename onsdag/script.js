formEL = document.forms[0];
textareaEL = document.getElementById("textarea");
tvDekoderPris = 399;
wifiExtenderPris = 499;
pris = 0;

function lagTekst() {
  navnIn = formEL.navn.value;
  kundeNavnIn = formEL.kundeNavn.value;
  internettIn = formEL.produktInternett.value.split("|");
  internettIn.push(formEL.internettRabatt.value);
  tvDekoderIn = [
    "Ekstra TV-dekoder",
    formEL.tvDekodere.value,
    formEL.dekoderRabatt.value,
  ];
  wifiExtenderIn = [
    "Wifi-extender",
    formEL.wifiExtendere.value,
    formEL.extenderRabatt.value,
  ];

  tvDekoderIn[1] *= tvDekoderPris;
  wifiExtenderIn[1] *= wifiExtenderPris;

  tvDekoderRabatt = tvDekoderIn[1] - tvDekoderIn[1] * (tvDekoderIn[2] / 100);
  wifiExtenderRabatt =
    wifiExtenderIn[1] - wifiExtenderIn[1] * (wifiExtenderIn[2] / 100);
  internettRabatt = internettIn[1] - internettIn[1] * (internettIn[2] / 100);

  produkter = [];

  if (internettIn[0] != ""){
      produkter.push(internettIn);
  }
  if (tvDekoderIn[1] != 0) {
    produkter.push(tvDekoderIn);
  }
  if (wifiExtenderIn[1] != 0) {
    produkter.push(wifiExtenderIn);
  }

  engangsPris =
    tvDekoderIn[1] - tvDekoderRabatt + (wifiExtenderIn[1] - wifiExtenderRabatt);
  maanedPris = wifiExtenderIn[1] - wifiExtenderRabatt;

  produktNavn = produktNavnArray(produkter);

  epost =
    `Hei ` +
    kundeNavnIn +
    ` og takk for en hyggelig telefonsamtale.
    
    Sender deg som avtalt tilbud på ` +
    produktSetning(produktNavn) +
    `.

    Prisen vil da bli
    ` +
    produktListe(produkter) 
    //+
    // `Rabatt ` +
    // tvDekoderRabatt +
    // `% - ` +
    // engangsPris +
    // ` kr
    // Totalt: ` +
    // engangsPris +
    // ` kr` 
    // +
    // `.

    // Måneds prisen vil da bli
    // ` +
    // internettIn[0] +
    // `
    // ` +
    // `Rabatt ` +
    // internettIn[2] +
    // `% - ` +
    // internettRabatt +
    // ` kr
    // Totalt: ` +
    // maanedPris +
    // ` kr
    
    // Det er bare å svare på denne eposten hvis du har noen spørsmål. 
    
    // Med vennelig hilsen ` +
    // navnIn;
  textareaEL.value = epost;
}

function produktSetning(produkterX) {
  if (produkterX.length == 1) {
    return produkterX[0];
  } else if (produkterX.length > 1) {
    return (
      produkterX.slice(0, -1).join(", ") +
      " og " +
      produkterX[produkterX.length - 1]
    );
  }
}

function produktListe(produkter) {
  liste = "";
  for (i = 0; produkter.length > i; i++) {
    liste +=
      produkter[i][0] +
      " - " +
      produkter[i][1] +
      " kr" +
      `
    `;
  }
  return liste;
}

function produktNavnArray(produkter) {
  array = [];
  for (i = 0; produkter.length > i; i++) {
    array.push(produkter[i][0]);
  }
  return array;
}

function regnUtPris(produkter) {
  pris = 0;
  for (i = 0; produkter.length > i; i++) {
    pris += produkter[i][1];
  }
  return parseInt(pris);
}