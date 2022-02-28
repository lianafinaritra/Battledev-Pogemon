
function pogemon(number,sacha,me){
    let sachaTab = sacha.split(" ");
    let meTab = me.split(" ");
    let tableau = [];

    //element
    let lostGlace = ["feu"]   
    let lostPlante = ["sol","feu"]
    let lostPoison = ["plante"]
    let lostFeu = ["eau"]
    let lostEau = ["plante","sol"]
    let lostVol = ["plante"]

    let falsetab = [];
    let truetab = [];

    //check if there is a possibility of winning
    for (let i = 0; i < number; i++) {
        falsetab = []
        for (let j = 0;j < number;j++) {
            if(sachaTab[i] == "feu" && lostFeu.includes(meTab[j]))
                falsetab.push(meTab[j]);
            if(sachaTab[i] == "plante" && lostPlante.includes(meTab[j]))
                falsetab.push(meTab[j]);
            if(sachaTab[i] == "poison" && lostPoison.includes(meTab[j]))
                falsetab.push(meTab[j]);
            if(sachaTab[i] == "glace" && lostGlace.includes(meTab[j]))
                falsetab.push(meTab[j]);
            if(sachaTab[i] == "eau" && lostEau.includes(meTab[j]))
                falsetab.push(meTab[j]);
            if(sachaTab[i] == "vol" && lostVol.includes(meTab[j]))
                falsetab.push(meTab[j]);
            if(j == number-1)
                truetab.push(falsetab)
        }
    }

    //range the order of winning cards
    for (let i = 0; i < number; i++) {
        if (truetab[i].length == 0)
            return -1;
        if (truetab[i].length == 1){
            if (tableau.includes(truetab[i][0]))
                return -1;
            else
                tableau.push(truetab[i][0]);
        }
        if (truetab[i].length == 2){
            if (tableau.includes(truetab[i][0]))
                tableau.push(truetab[i][1]);
            else if ((tableau.includes(truetab[i][0])) && tableau.includes(truetab[i][1]))
                return -1;
            else
                tableau.push(truetab[i][0]);
        }
    }
    return tableau
}
console.log(pogemon(number,sacha,me))