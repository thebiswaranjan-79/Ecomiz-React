import React from 'react'

export default function Product({post}) {
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src= {post.image}  />
      </div>
      <div>
        <p>{post.price}</p>
      </div>

      <button>
        {
          selected ? <p>Remove Item</p> : <p>Add to Cart</p>
        }
      </button>
    </div>
  )
}
