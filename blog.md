---
layout: default
title: Blog
permalink: /blog/
---

# Blog

아래 섹션은 각 포스트의 Front Matter(`categories`, `tags`)를 기준으로 자동 분류됩니다.

## 작성 규칙

- 파일 위치: `_posts/YYYY-MM-DD-title.md`
- 필수 Front Matter:

```yaml
---
title: "포스트 제목"
date: 2026-04-23
categories: ["AI", "강화학습"]
tags: ["COMA", "MARL", "UAV"]
---
```

{% for top in site.data.blog_taxonomy %}
<section class="taxonomy-block" id="{{ top.slug }}">
  <h2>{{ top.name }}</h2>
  {% for sub in top.children %}
  <div class="taxonomy-sub" id="{{ top.slug }}-{{ sub.slug }}">
    <h3>{{ sub.name }}</h3>
    <ul class="post-list">
      {% assign matched_posts = site.posts | where_exp: "post", "post.categories contains top.name and post.categories contains sub.name" %}
      {% if matched_posts.size > 0 %}
        {% for post in matched_posts %}
        <li>
          <p class="post-meta">{{ post.date | date: "%Y-%m-%d" }} · {{ post.categories | join: " / " }}</p>
          <a href="{{ post.url | relative_url }}"><strong>{{ post.title }}</strong></a>
          <p>{{ post.excerpt | strip_html | truncate: 120 }}</p>
          <div class="tag-list">
            {% for tag in post.tags %}
            <a class="tag" href="{{ '/tags/#tag-' | append: tag | slugify | relative_url }}">{{ tag }}</a>
            {% endfor %}
          </div>
        </li>
        {% endfor %}
      {% else %}
      <li><p class="post-meta">아직 등록된 글이 없습니다.</p></li>
      {% endif %}
    </ul>
  </div>
  {% endfor %}
</section>
{% endfor %}
