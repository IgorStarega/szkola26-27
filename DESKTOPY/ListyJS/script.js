function sprawdz_miasto() {
  var miasto = document.getElementById("miasto").value;
  document.getElementById('wynik_miasto').textContent = "Wybrano miasto: " + miasto;
}

function sprawdz_kierunek() {
  var kierunek = document.getElementById("kierunek").value;

  if (kierunek === "Wybierz kierunek") {
    document.getElementById('wynik_kierunek').textContent = "Wybierz kierunek"
  }
  else {
    document.getElementById('wynik_kierunek').textContent = "Wybrano kierunek: " + kierunek;
  }
}

function ustaw_kolor() {
  var kolor = document.getElementById("kolor").value;

  document.getElementById('wynik_kolor').style.color = kolor;
}

function ustaw_rozmiar() {
  var rozmiar = document.getElementById("rozmiar").value;

  document.getElementById('wynik_rozmiar').style.fontSize = rozmiar;
}

function ustaw_produkty() {
  var produkt = document.getElementById("produkty").value;

  document.getElementById('wynik_produkty').textContent = "Cena produktu: " + produkt + " zł.";
}

function oblicz_cene() {
  var cena = Number(document.getElementById("produkt_cena").value);
  var ilosc = Number(document.getElementById('ilosc').value);

  document.getElementById('wynik_ceny').textContent = "Do zapłaty: " + cena * ilosc + " zł";
}

function oblicz_rabat() {
  var cena = Number(document.getElementById('cenaproduktu').value);
  var procent = Number(document.getElementById("rabat").value);
  var kwota_rabatu = cena * procent / 100;

  document.getElementById('wynik_rabatu').textContent = "Kwota rabatu: " + kwota_rabatu + " zł";
}

function sprawdz_ocene() {
  var ocena = Number(document.getElementById("ocena").value);
  var komunikat;

  if (ocena === 1) {
    komunikat = "Ocena niedostateczna";
  } else if (ocena === 2) {
    komunikat = "Ocena dopuszczająca";
  } else if (ocena === 3) {
    komunikat = "Ocena dostateczna";
  } else if (ocena === 4) {
    komunikat = "Ocena dobra";
  } else if (ocena === 5) {
    komunikat = "Ocena bardzo dobra";
  } else if (ocena === 6) {
    komunikat = "Ocena celująca";
  } else {
    komunikat = "Wybierz ocenę";
  }

  document.getElementById('wynik_oceny').textContent = komunikat;
}

function ustaw_tlo() {
  var kolor_tla = document.getElementById("tlo").value;

  document.body.style.backgroundColor = kolor_tla;
}

function oblicz_dzialanie() {
  var liczba1 = Number(document.getElementById('liczba1').value);
  var liczba2 = Number(document.getElementById('liczba2').value);
  var dzialanie = document.getElementById('dzialanie').value;
  var wynik;

  if (dzialanie === "dodawanie") {
    wynik = liczba1 + liczba2;
  }
  else if (dzialanie === "odejmowanie") {
    wynik = liczba1 - liczba2;
  }
  else if (dzialanie === "mnozenie") {
    wynik = liczba1 * liczba2;
  }
  else if (dzialanie === "dzielenie") {
    if (liczba2 === 0) {
      wynik = "Nie można dzielić przez zero";
    }
    else {
      wynik = liczba1 / liczba2;
    }
  }

  document.getElementById('wynik_kalkulatora').textContent = "Wynik: " + wynik;
}
