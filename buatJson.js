const clue = "kendaaraan"
const data = [
    "motor", "mobil", "bajai", "becak", "dokar", "sepur", "truck", "doser"
]

function buatJson(){
    const dataModif = data.map((ini, i)=> {
        return ini.split("")
    });
    console.log(dataModif);
    const dataJson = {
        clue:clue,
        benda: dataModif,
        jumlahHuruf: 5
    };
    console.log(dataJson);
}
buatJson();