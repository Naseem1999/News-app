import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title,description,imageurl,newsUrl,author,date,source}=this.props;
    return (
      <div className='my-3'>
        <div className="card" >
          <span className='position-absolute top-0  translate-middle badge rounded-pill bg-danger ' style={{left:'50%',zIndex:'1'}}>
            {source}

          </span>
          <img src={!imageurl?"https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2023-03/6344871f-1620-4981-8090-8c9dd13a424e.jpg":imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text"><small class="text-body-secondary">By {!author?"Unknown" :author} on {new Date(date).toGMTString()}</small></p>
            <a  rel="noreferrer"  href={newsUrl} target="_blank" className="btn btn-sm btn-dark">ReadMore</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
