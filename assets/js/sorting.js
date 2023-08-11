goa = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

function filterTable(inputid, tableid) {
    var table   = document.getElementById(tableid)
    var input   = document.getElementById(inputid)
    var word    = input.value
    var rows    = Array.from(table.rows)
    var nomatch = true
    rows.pop()
    document.getElementById('no-match').style.display = "None"

    for (var i = 0; i < rows.length; i++) {
        if (goa(rows[i].id).indexOf(goa(word)) > -1) {
            rows[i].style.display = ""
            nomatch = false
        }
        else rows[i].style.display = "None"
    }

    if (nomatch) document.getElementById('no-match').style.display = ""

}

function quicksort(arr, cmpfux) {
    if (arr.length <= 1) return arr

    var p = arr[0]
    var l = []
    var r = []

    for (var i = 1; i < arr.length; i++){
        cmpfux(arr[i], p) ? l.push(arr[i]) : r.push(arr[i])
    }
    return quicksort(l, cmpfux).concat(p, quicksort(r, cmpfux))
}

function sortTableRowsByIdAlpha(tableid) {
    var table  = document.getElementById(tableid)
    var rows   = Array.from(table.rows)
    rows.pop()
    var sorted = quicksort(rows, (a, b) => goa(a.id) < goa(b.id)) 
    
    sorted.forEach(tr => table.appendChild(tr));
}