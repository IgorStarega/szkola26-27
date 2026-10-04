function dodajWzor() {
    const polePliku = document.getElementById("plik");
    const poleWzoru = document.getElementById("wzor");
    const kolor = document.getElementById("kolor").value;
    const cena = document.getElementById("cena").value;

    if (polePliku.files.length === 0) {
        alert("Wybierz plik PNG.");
        return;
    }

    const wybranyPlik = polePliku.files[0];
    const nazwaPliku = wybranyPlik.name;

    poleWzoru.value = nazwaPliku;

    alert(
        "Wzór: " + nazwaPliku +
        ", kolor " + kolor +
        " w cenie " + cena + " zł"
    );

    const obraz = document.createElement("img");
    obraz.src = URL.createObjectURL(wybranyPlik);
    obraz.alt = nazwaPliku;
    obraz.className = "miniatury";

    document.getElementById("galeria").appendChild(obraz);
}

document.getElementById("plik").addEventListener("change", function () {
    if (this.files.length > 0) {
        document.getElementById("wzor").value = this.files[0].name;
    }
});

document.getElementById("dodaj").addEventListener("click", dodajWzor);
