function filterTable(inputid, tableid) {
    var table = document.getElementById(tableid)
    var input = document.getElementById(inputid)
    var word  = input.value
    var rows  = table.rows

    for (var i = 0; i < rows.length; i++) {
        if (rows[i].id.indexOf(word) > -1)
            rows[i].style.display = ""
        else rows[i].style.display = "None"
    }
}

function quicksort(arr, cmpfux) {
    if (arr.length <= 1) return arr

    var p = arr[0]
    var l = []
    var r = []

    for (var i = 1; i < arr.length; i++)
        cmpfux(arr[i], p) ? l.push(arr[i]) : r.push(arr[i])

    return quicksort(l, cmpfux).concat(p, quicksort(r, cmpfux))
}

function sortTableRowsByIdAlpha(tableid) {
    var table  = document.getElementById(tableid)
    var rows   = table.rows
    var sorted = quicksort(rows, (a, b) => a.id < b.id) // todo: handle accents
    sorted.forEach(tr => table.appendChild(tr));
}