---
layout: page
title: Mon dictionaire de francais
autor: gwynplaine
---

Ici, j'écrirai les mots et les expressions que j'apprends.

<div>
<input id="search-bar" type="text" placeholder="Search...">
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
                    <em>{{ e }}</em>
                    {% endfor %}
                    {% endif %}
                </td>
            </tr>
            {% endfor %}
        </tbody>
        <tfoot>
        <tr>
            <td>No matches...</td>
        </tr>
        </tfoot>
    </table>
</div>