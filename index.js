
export default function time(){
    window.onload = setInterval(function(){
        let i = document.getElementById("time");
        let d = new Date();
        let y = d.getFullYear();
        let m = d.getMonth();
        let mon;
        switch (m){
            case 0: mon = 'Январь'; break;
            case 1: mon = 'Февраль'; break;
            case 2: mon = 'Март'; break;
            case 3: mon = 'Апрель'; break;
            case 4: mon = 'Май'; break;
            case 5: mon = 'Июнь'; break;
            case 6: mon = 'Июль'; break;
            case 7: mon = 'Август'; break;
            case 8: mon = 'Сентябрь'; break;
            case 9: mon = "Октябрь"; break;
            case 10: mon = "Ноябрь"; break;
            case 11: mon = "Декабрь"; break;
        }
        let day = d.getDate();
        let h = d.getHours();
        let min = d.getMinutes();
        let s = d.getSeconds();
        let nul = "";
        s = String(s);
        if (s.length === 1){
            nul = "0";
        }
        let nul1 = "";
        min = String(min);
        if (min.length === 1){
            nul1 = "0";
        }
        let nul2 = "";
        h = String(h);
        if (h.length === 1){
            nul2 = "0";
        }
        let nul3 = "";
        day = String(day);
        if (day.length === 1){
            nul3 = "0";
        }
        i.innerHTML = nul3+day+". "+mon+". "+y+" "+nul2+h+":"+nul1+min+":"+nul+s;}, 1000);
}

