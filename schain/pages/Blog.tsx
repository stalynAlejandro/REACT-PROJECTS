import React from 'react'

function Blog({ posts }) {
    return (
        <ul>
            //Render posts...
            {posts.map(p => (
                <li>{p.title}</li>
            ))}
        </ul>
    )
}

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

export { Blog }