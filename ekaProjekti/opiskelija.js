let opiskelija = {
    etunimi: "Maija",
    sukunimi: "Mallikas",
    aloitusvuosi: 2010,
    palutaKokonimi: function() {
            return opiskelija.etunimi + " " + this.sukunimi;
    }

}
console.log(opiskelija.palutaKokonimi());
