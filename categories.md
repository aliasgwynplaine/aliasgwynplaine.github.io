---
layout: page
---

<div>
  <ul>
    {% for category in site.categories %}
    
        {%- capture cat_name -%}{{ category | first }}{%- endcapture -%}
        <div id="{{cat_name}}" class="catdiv">
        <h3>#{{ cat_name }}</h3>
        {% for post in site.posts %}
        {% if post.categories contains cat_name %}
        <li>
            <span>{{- post.date | date: site.date_format -}}</span>
            <a href="{{ post.url | relative_url }}">{{ post.title | downcase }}</a>
          </li>
        {% endif %}
        {% endfor %}
        </div>
    {% endfor %}
  </ul>
</div>