# Click HERE to visit

The on going project => [https://schain-project.vercel.app/](https://schain-project.vercel.app/).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# DOCUMENTATION

# DATA FETCHING

Three unique Nextjs functions you can use to fetch data for pre-rendering:

    -   getStaticProps. Static Generation. Fetch data at build time.
    -   getStaticPaths. Static Generation. Specify dynamic routes to prerender pages based on data.
    -   getServerSideProps. Server Side Rendering. Fetch data on each request.

# getStaticProps. Static Generation.

```
export async function getStaticProps(context){
    return{
        props:{}    // Will be pased to the page component as props
    }
}
```

The **context** parameter is an object containing the following keys:

    - `params` contains the route parameters for pages using dynamic routes. For example, if the page is `[id].js`, then `params` will look like `{id: ...}`. To learn more, take a look at the Dynamic Routing documentation.
    You should use this together with `getStaticPaths`, which we'll explain later.

    - `preview` is `true` if the page is in the preview mode and `undefined` otherwise.

    - `previewData` contains the preview data set by `setPreviewData`.

    - `locale` contains the active locale (if enabled).

    - `locales` contains all supported locales (if enabled).

    - `defaultLocale` contains the configured defautl locale (if enabled)

**getStaticProps** should return an object with:

    - `props` - A required object wiht the props that will be received by
    the page component. It should be a **serialized object**.

    - `revalidate` A required object with the props that will be received
    by the page component. It should be a **serialized object**.

    - `notFound` An optional boolean value to allow the page to return a
    404 status and page. Below is an example of how it works.

```
export async function getStaticProps(context){
    const rest = await fetch(`https://..data`)
    const data = await res.json()

    if(!data){
        return{
            notFound: true,
        }
    }

    return{
        props:{}    //will be passed to the page component as props
    }
}
```

**notFound** is not needed for `fallback false` mode as only paths returned from `getStaticPaths` will be pre-rendered.

    - redirect. An optional redirect value to allow redirecting to internal and external resources. It should match the shape of `{ destination: string, permanent: boolean}`.
    In some rare cases, you might need to assign a custom status code
    for older HTTP Clients to properly redirect. In these property, but
    not both. Below is an example of how it works:

```
export async function getStaticProps(context){
    const res = await fetch('http://...')
    const data = await res.json()

    if(!data){
        return{
            redirect:{
                destination: '/',
                permanent: false
            }
        }
    }

    return{
        props:{}    // Will be passed to the page component as props
    }
}
```

Note: Redirecting at build-time is currently not allowed and if the
redirects are known at build-time they should be added in
`next.config.js`

You can import modules in top-level scope for use in 'getStaticProps'.
Imports used in `getStaticProps` will not be bundled for client-side.

This means you can write **server side code directly in** `getStaticProps`. This includes reading from the filesystem or a database.

You should not use `fetch()` to call an API route `getStaticProps`.
Instead, directly import the logic used inside your API route. You may
need to slightly refactor your code for this approach.

Fetching from an external API is fine!

# SIMPLE EXAMPLE

This example uses **getStaticProps** to fetch a list of blog posts from a CMS (content management system).

```
// posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Blog
```

# When should I use `getStaticProps`

You should use `getStaticProps`: - The data required to render the page is available at build time ahead of a user's request. - The data comes from a headless CMS. - The data can be publicly cached (not user-specific) - The page must be pre-rendered (for SEO) and be very fast. `getStaticProps` generates HTML and JSON files, both of which can be
cached by a CDN for performance.

# TypeScript: use `GetStaticProps`

For TypeScript, you can use the `GetStaticProps` type from 'next':

```
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async (context) => {
    //...
}
```

If you want to get inferred for your props, you can use `InferGetStaticPropsType<typeof getStaticProps>` like this:

```
import { InferGetStaticPropsType } from 'next'

type Post = {
  author: string
  content: string
}

export const getStaticProps = async () => {
  const res = await fetch('https://.../posts')
  const posts: Post[] = await res.json()

  return {
    props: {
      posts,
    },
  }
}

function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  // will resolve posts to type Post[]
}

export default Blog

```

# Reading Files: Use 'process.cwd()'

Files can be read directly from the filesystem in 'getStaticProps'

In order to do so you have to get full path to a file.

Since Next.js compiles your code into a separate directory you can't
use `__dirname` as the path it will return will be different from the
pages directory.

Instead you can use `process.cwd()` which gives you the directory where
Next.js is being executed.

```
import { promises as fs } from 'fs'
import path from 'path'

//posts will be populated at build time by getStaticProps()
function Blog({ posts }){
    return(
        ...
        posts.map(p => (
            <h3>{p.filename}</h3>
        ))
        ...
    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the 'Technicall details' section.
export async function getStaticProps(){
    const postsDirectory = path.join(process.pwd(), 'posts')
    const filenames = await fs.readdir(postsDirectory)

    const posts = filenames.map(async (filanme) => {
        const filePath = path.join(postDirectory, filename)
        const fileContents = await fs.readFile(filePath, 'utf8')

        // Generally you would parse/transform the contents
        // For example you can transform markdown to HTML here

        return{
            filename,
            content: fileContents,
        }
    })

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return{
        props:{
            posts: await Promise.all(posts)
        }
    }
}
```

# Only runs at build time

Because 'getStaticProps' runs at build time, it does not receive data that's only available during request time, such as query parameters or HTTP headers as it generates static HTMl.

# Routes

# Dynamic route segments

To match a dynamic segment you can use the bracket syntax. This allows you match named parameters.

- `pages/blog/[slug].js` => `/blog/:slug` => (`/blog/hello-world`)
- `pages/[username]/settings.js => `/:username/settings`
- `pages/posts/[..all].js` => `posts/*`

# Linking between pages.

The Next.js router allows you to do client-side route transitions between
pages, similar to a single-page application.

A React component called `Link` is provided to do this client-side route transition.

```
import Link from 'next-link'

function Home(){
    return(
        <ul>
        <li>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </li>
        <li>
            <Link href='/about'>
                <a>About us</a>
            </Link>
        </li>
        <li>
            <Link href='/blog/hello-world'>
                <a>Blog Post</a>
            </Link>
        </li>
        </ul>
    )
}
export default { Home }

// In the example above we have multiple links each one maps a path
//('href') to a known page:
    - '/'                   => 'pages/index.js'
    - '/about'              => 'pages/about.js'
    - '/blog/hello-world'   => 'pages/blog/[slug].js'
```

#EXAMPLE CODE

```
import React from 'react'

function Blog({ posts }) {
    return (
        <div>
            <ul>
                //Render posts...
            {posts.map(p => (
                <li>{p.title}</li>
            ))}
            </ul>
        </div>
    )
}
export default Blog
// Scenario 1.
// Your page content depends on external data: getStaticProps
// This function gets called at build time and lets you pass fetched
// data to the pages 'props' on pre-render.
// This function gets called at build time.
export async function getStaticProps({ params }) {
    // Call an external API endpoint to get posts
    const res = await fetch('https://../posts')
    const posts = await res.json()

    //Scenario 2.
    const resp = await fetch(`https://.../posts/${params.id}`)

    //By returning {props: {posts}} the Blog component
    //will receive 'posts' as a prop at build time
    return {
        props: {
            posts,
        }
    }
}

// Scenario 2. Your page path depends on external data
// Nextjs allows you to create pages with dynamic routes.
// 'pages/posts/[id].tsx'
// So your page paths that are pre-rendered depend on
// external data.
// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://.../posts')
    const posts = await res.json()

    //Get the paths we want to pre-render based on posts
    const paths = posts.map(p => `/posts/${p.id}`)

    // We'll pre-render only these paths at build time.
    // {fallback: false} means other routes should 404.
    return { paths, fallback: false }
}

```
