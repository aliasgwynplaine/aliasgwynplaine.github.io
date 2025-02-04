---
layout: page
---
## etiquetas

<div>

  <p>
  {%- for tag in site.tags -%}
  {%- capture tag_name -%}{{ tag | first }}{%- endcapture -%}
  <a href="{{ site.baseurl }}/tags#{{tag_name}}">
    <strong>#{{tag_name}} </strong>
  </a>
  {%- endfor -%}
  </p>


  <ul>
    {% for tag in site.tags %}
    
        {%- capture tag_name -%}{{ tag | first }}{%- endcapture -%}
        <div id="{{tag_name}}" class="catdiv">
        <h3>#{{ tag_name }}</h3>
        {% for post in site.posts %}
        {% if post.tags contains tag_name %}
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