import React from "react"

function Home() {
  return (
    <article>
      <h2>Left-aligned header</h2>
      <p>Left-aligned paragraph</p>
      <aside>
        <p>Article callout</p>
      </aside>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
      <figure>
        <img
          alt="Stock photki"
          src="https://via.placeholder.com/1080x500?text=Amazing+stock+photo"
        />
        <figcaption>
          <i>Image caption</i>
        </figcaption>
      </figure>
    </article>
  )
}

export default Home
