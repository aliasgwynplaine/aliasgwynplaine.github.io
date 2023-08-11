goa = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

function filterTable(inputid, tableid) {
    var table   = document.getElementById(tableid)
    var input   = document.getElementById(inputid)
    var word    = input.value
    var rows    = table.rows
    var nomatch = true
    rows[rows.length - 1].style.display = "None"

    for (var i = 0; i < rows.length - 1; i++) {
        if (goa(rows[i].id).indexOf(goa(word)) > -1) {
            rows[i].style.display = ""
            nomatch = false
        }
        else rows[i].style.display = "None"
    }

    if (nomatch) rows[rows.length - 1].style.display = ""

}

function quicksort(arr, cmpfux) {
    if (arr.length <= 1) return arr

    var p = arr[0]
    var l = []
    var r = []

    for (var i = 1; i < arr.length - 1; i++)
        cmpfux(arr[i], p) ? l.push(arr[i]) : r.push(arr[i])

    return quicksort(l, cmpfux).concat(p, quicksort(r, cmpfux))
}

function sortTableRowsByIdAlpha(tableid) {
    var table  = document.getElementById(tableid)
    var rows   = table.rows
    var sorted = quicksort(rows, (a, b) => goa(a.id) < goa(b.id)) 
    sorted.forEach(tr => table.appendChild(tr));
}