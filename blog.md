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
