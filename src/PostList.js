import React from 'react'

function PostList({title,body}) {
  return (
    <div>
        <div className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>

                <p className="card-text">{body}</p>
              </div>
            </div>
  
    </div>
  )
    
}

export default PostList