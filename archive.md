---
layout: archive
title: archivo
---

{%- if site.posts.size > 0 -%}
  <ul>
    {%- for post in site.posts -%}
        <li>
          <span>{{- post.date | date: site.date_format -}}</span>
          <a href="{{ post.url | relative_url }}">{{ post.title | downcase }}</a>
        </li>
    {%- endfor -%}
  </ul>
{%- endif -%}