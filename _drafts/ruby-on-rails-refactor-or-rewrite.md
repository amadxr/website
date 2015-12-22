---
layout: post
title: 'Ruby on Rails: Refactor or Rewrite?'
date: 2015-11-17T20:22:00.000Z
categories: '"ruby on rails"'
---

## How we avoided an expensive rewrite by refactoring existing code.

When the client approached us to build new features on their existing Ruby on Rails appointment management application, several developers had already worked on it over a couple of years. The code was in a bad state. They needed our expertise to get the app into a state fit for public launch.

Although they'd received advice from other development companies to rewrite the application, we recommended an incremental refactoring approach instead. This way we could develop new features to take the business forward without stopping for months to rewrite existing features.

> While delivering new features, we removed a lot of redundant code. The result is a smaller, leaner codebase that's easier to read and understand.

We accomplished this by creating an automated test suite so new code would be fully tested and existing code could be incrementally tested as we changed it. Over time the application became more stable and receptive to change.

The application suffered from performance issues with even a small number of concurrent users. We optimised the code to be more efficient at processing database queries, which resulted in faster page load times and fewer memory issues.

We introduced Code Climate to objectively measure code quality. The initial score (0.56) was one of the lowest code quality scores we’d seen. When we left the project, the score was 2.46, an almost 400% improvement in code quality.

> Why spend time refactoring parts of the application that don’t need to change? The right time to refactor is when you modify part of the system.

It makes sense to refactor when you have maximum knowledge about what needs to change. This is why we recommend refactoring alongside delivering new features.&nbsp;

Why spend time refactoring parts of the application that don’t need to change? There’s little ROI. But delivering new features while incrementally improving the quality of the codebase adds long-term business value.