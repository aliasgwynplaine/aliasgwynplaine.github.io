---
layout: page
title: Mon dictionaire de francais
autor: gwynplaine
---

Ici, j'écrirai les mots et les expressions que j'apprends.


<script src="/assets/js/sorting.js"></script>
<div>
    <input id="search-bar" type="text" placeholder="Search..." onkeyup="filterTable(this.id, 'dict-table')">
</div>

<div id="dict-table-wrapper">
    <table id="dict-table">
        <tbody>
            {% for word_dat in site.data.dict.francais %}
            {% assign word_id = word_dat[0] %}
            {% assign word    = word_dat[1] %}
            <tr id="{{ word_id }}">
                <td style="vertical-align: top">{{ word_id }} ({{ word.type }})</td>
                <td>
                    {{ word.definition }}
                    {% if word.example.size > 0%}
                    <br>
                    {% for e in word.example %}
                    <em>{{ e }}</em><br>
                    {% endfor %}
                    {% endif %}
                </td>
            </tr>
            {% endfor %}
        </tbody>
        <tfoot>
        <tr id='no-match' style="display: None">
            <td>No matches...</td>
        </tr>
        </tfoot>
    </table>
</div>


<script>sortTableRowsByIdAlpha('dict-table')</script>