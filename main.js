let zbir = 0
let odgovor = prompt("Koji je glavni grad Italije?")
if (odgovor == "Rim") {
    alert("Odgovor je tačan")
    zbir = zbir + 1
}
else
    alert("Više sreće drugi put")

odgovor = prompt("Koja reke teče ispod Savskog mosta?")
if (odgovor == "Sava") {
    zbir = zbir + 1
    alert("Bravo, samo tako nastavi!")
}
else
    alert("Nauči geografiju.")

odgovor = prompt("Ko je reformator srpkog pravopisa")
if (odgovor == "Vuk Karadžić") {
    zbir = zbir + 1
    alert("Bravo, znaš pravopis!")
}
else
    alert("Sramoto jedna.")

alert("Broj tačnih odgovora je: " + zbir)