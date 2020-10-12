let results = []
let boutonPourcent = document.getElementById('pourcent')
let totaljets = document.getElementById('totaljets')

// création d’une table à deux dimensions repertoriant les cellules du tableau
let tableval = new Array
for (j=0;j<4;j++) {
    tableval[j] = new Array
    for (i=1;i<13;i++) {
        tableval[j][i-1] = document.querySelector('#row'+i+' th.win'+j)
    }
}

function jet_2d10(n) {
    
    let restext = document.getElementById('results')
    restext.innerHTML = ''

    for (i = 0; i < n; i++) {
        let res1 = Math.floor(Math.random()*10)
        let res2 = Math.floor(Math.random()*10)
    
        if (n < 1000) {
            restext.innerHTML += '('+res1+', '+res2+') '
        } 

        increment(totaljets)

        for (k=0;k<12;k++) {
            if ((res1+res2) <= k) {
                increment(tableval[3][k])
            } else if (res1 <= k && res2 <= k) {
                increment(tableval[2][k])
            } else if (res1 <= k || res2 <= k) {
                increment(tableval[1][k])
            } else {
                increment(tableval[0][k])
            }
        }
    }
}

function increment(elt) {
    let valCompteur = parseInt(elt.innerHTML)
    valCompteur += 1
    elt.innerHTML = valCompteur
}

function pourcent() {
    for (a of tableval) {
        results[tableval.indexOf(a)] = new Array
        for (e of a) {
            let val = parseInt(e.innerHTML)
            results[tableval.indexOf(a)][a.indexOf(e)] = val
            val = Math.floor(100 * val / totaljets.innerHTML)
            let nval = val.toString() + ' %'
            e.innerHTML = nval
        }
    }
    console.log(results)
    boutonPourcent.innerHTML = 123
    boutonPourcent.setAttribute('onclick', 'nombres()')
}

function nombres() {
    console.log('lesnombres')
}