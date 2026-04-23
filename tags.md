---
layout: default
title: Tags
permalink: /tags/
---

# Tags

{% assign sorted_tags = site.tags | sort %}
{% for tag in sorted_tags %}
{% assign tag_name = tag[0] %}
{% assign posts = tag[1] %}
<section class="taxonomy-block" id="tag-{{ tag_name | slugify }}">
  <h2># {{ tag_name }}</h2>
  <ul class="post-list">
    {% for post in posts %}
    <li>
      <p class="post-meta">{{ post.date | date: "%Y-%m-%d" }} · {{ post.categories | join: " / " }}</p>
      <a href="{{ post.url | relative_url }}"><strong>{{ post.title }}</strong></a>
    </li>
    {% endfor %}
  </ul>
</section>
{% endfor %}
