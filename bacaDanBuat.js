console.clear();
const fs = require('fs').promises;
const path = require('path');

async function bacaFile() {
    const filePath = path.join(__dirname, 'data.txt');
    const filePath2 = path.join(__dirname, 'data.json');
    let allData = [];
  
    try {
        const data = await fs.readFile(filePath, 'utf8');

        const data2 = data.split(/\s+/);

        let clue = "sesuatu untuk debug";
        let something = {
            clue:clue,
            jumlahHuruf:5,
            benda:[]
        };
        data2.forEach((ini,i) => {
            if(ini.includes(">>")){
                clue = ini.replace(">>", "");
            } else {
                if(cekApakahAngka(ini)){
                    allData.push(something);

                    something = {
                        clue:clue,
                        jumlahHuruf: parseInt(ini),
                        benda:[]
                    };
                } else {
                    if(ini == "huruf"){

                    } else {
                        const apa = ini.split("");
                        something.benda.push(apa);
                    }
                }
            }
        })
    
    } catch (err) {
        console.error('Gagal membaca file:', err);
    } finally {
        allData.shift();
        await fs.writeFile(filePath2, JSON.stringify(allData), 'utf8');
        console.log(allData);
    }
}
function cekApakahAngka(str) {
  // 1. Pastikan itu string (jika input tidak pasti)
  if (typeof str !== 'string') {
    return false; 
  }

  // 2. Cek apakah string kosong atau hanya spasi
  if (str.trim() === '') {
    return false;
  }

  // 3. Coba konversi dan cek apakah hasilnya BUKAN NaN
  return !Number.isNaN(Number(str));
}
bacaFile();