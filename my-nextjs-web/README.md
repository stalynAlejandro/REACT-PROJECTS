# Nextjs App

Details to consider:

1. Code has to be bundled using a bundler like webpack and transformed using a compiler like Babel.

2. You need to do production optimizations such as code spliting. 

3. You might want to statically pre-render some pages for performance and SEO. You might also want to use server-side rendering.

4. You might have to write some server-side code to connect your React app to your data store. 

## NextJS / The React Framework 

Features in **Nextjs**:

- An intuitive page-based routing system

- Pre-rendering, both static generation (SSG) and server-side-rendering (SSR) are supported on a per-page basis.

- Automatic code splitting for faster page loads.

- Client-side routing with optimized prefetching.

- Built-in CSS and SASS support, and support for any CSS-in-JS library.

- API routes to build API endpoints with Serverless Functions.

- Fully extendable.

## Create a NextJs App 

```
npx create-next-app nextjs-blog --use-npm
```

## Link Component

When linking between pages on websites you generally use the **<a>** HTML tag. 

In NextJs you use the **<Link>** Component from 'next/link' to wrap the **<a>** tag. 

**<Link>** allows you to do client-side navigation to a different page in the application. 

## Client-Side Navigation

The <Link> component enables **client-side navigation** between two pages in the same Next.js app. 

Client-side naviation means that the page trasition happens using JavaScript, which is faster than the default navigation done by the browser. 

The browser does not load the full page and client-side navigation is working. 

## Code splitting and prefetching

Next.js does code splitting automatically, so each page only loads what's necessary for that page. That means when the homepage is rendered, the code for other pages is not served intially. 

This ensures that the homepage loads quickly even if you add hundreds of pages. 

Only loading the code for the page you requested also means that pages become isolated. If a certain page throws an error, the rest of the application would still work. 

Furthermore, in a production build of Next.js, whenever <Link> component appear in the browser's viewport, Next.js automatically **prefetches** the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant. 

## Summary

You create routes as files under **pages** and use the buil-in **Link** component. No routing libraries are required. 

> If you need to link an external page outside the Next.js app, just use an `<a>` tag without `<Link>`


## Assets

Nextjs can serve static files, like images, under the **top-level** `public directory`. Files inside `public` can be referenced from the root of the application similiar to `pages`. 

## Pre-rendering

By default, Nextjs pre-renders every page. This means that Nextjs generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO. 

Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called **hydration**).

### Two Forms of Pre-rendering

- `Static Generation` is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request. 

- `Server-side Rendering` is the pre-rendering method that generates the HTML on each request. 

In development mode (npm run dev) every page is **pre-rendered** on each request - even for pages that use Static Genration.


## Per-age Basis

Nextjs lets you choose which pre-rendering form to use for each page. You can create a "hybrid" Nextjs app by using `Static Generation` for most pages and using `Server Side Rendering` for others. 


## When to use Static Generation vs ServerSide Generation

Static Generation is recommended to use whenever possible because your page can be buil once and serverd by CDN, which makes it much faster than having a server render the page on very request. 

You can use Static Generation for many types, like:

- Marketing pages

- Blog posts

- E-commerce product listing

- Help and documentation

You should ask yourself: "Can I pre-render this page ahead of a user request?" If the answer is yes, then you should choose Static Generarion.

On the other hand, Static Generation is not a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request. 

In that case, you can use ServerSide Rendering. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate frequently updated data. 


## Static Generation with and without Data

Static Generation can be done with and without data. For pages taht can be generated without fetching external data at build time. 

```
next buil
```
Build the app for production.
