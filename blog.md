---
layout: default
title: Blog
permalink: /blog/
---

# Blog

카테고리별 독립 페이지와 하위 카테고리 페이지로 분리해 운영합니다.

<section class="section-title">
  <h2>카테고리</h2>
  <div class="card-grid">
    {% for top in site.data.blog_taxonomy %}
    <article class="card">
      <h3>{{ top.name }}</h3>
      <p>
        {% for sub in top.children %}
        {{ sub.name }}{% unless forloop.last %}, {% endunless %}
        {% endfor %}
      </p>
      <a href="{{ '/blog/' | append: top.slug | append: '/' | relative_url }}">카테고리 보기</a>
    </article>
    {% endfor %}
  </div>
</section>

<section class="section-title">
  <h2>전체 최신 글</h2>
  <ul class="post-list" data-paginate data-per-page="10">
    {% for post in site.posts %}
    <li class="js-page-item">
      <p class="post-meta">{{ post.date | date: "%Y-%m-%d" }} · {{ post.categories | join: " / " }}</p>
      <a href="{{ post.url | relative_url }}"><strong>{{ post.title }}</strong></a>
      <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
      <div class="tag-list">
        {% for tag in post.tags %}
        <a class="tag" href="{{ '/tags/#tag-' | append: tag | slugify | relative_url }}">{{ tag }}</a>
        {% endfor %}
      </div>
    </li>
    {% endfor %}
  </ul>
</section>
---
layout: default
title: Blog
permalink: /blog/
---



{% for top in site.data.blog_taxonomy %}
<section class="taxonomy-block" id="{{ top.slug }}">
  <h2>{{ top.name }}</h2>
  {% for sub in top.children %}
  <div class="taxonomy-sub" id="{{ top.slug }}-{{ sub.slug }}">
    <h3>{{ sub.name }}</h3>
    <ul class="post-list">
      {% assign match_count = 0 %}
      {% for post in site.posts %}
        {% if post.categories contains top.name and post.categories contains sub.name %}
          {% assign match_count = match_count | plus: 1 %}
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
        {% endif %}
      {% endfor %}
      {% if match_count == 0 %}
      <li><p class="post-meta">아직 등록된 글이 없습니다.</p></li>
      {% endif %}
    </ul>
  </div>
  {% endfor %}
</section>
{% endfor %}
