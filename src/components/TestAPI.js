import React, { Component } from 'react'
import './news.css'

export default class TestAPI extends Component {
  constructor() {
    super()
    this.state = {
      newsItems: []
    }
  }
  componentDidMount = () => {
    const url =
      'https://newsapi.org/v2/top-headlines?' +
      'country=de&' +
      'apiKey=My API Key'
    const req = new Request(url)
    fetch(req)
      .then(function(response) {
        return response.json()
      })
      .then(data => {
        this.setState({
          newsItems: data.articles.map(news => ({
            ...news
          }))
        })
      })
  }
  render() {
    return (
      <section>
        {this.state.newsItems.map(article => (
          <div className="news_container" key={article.publishedAt}>
            <div>
              <h3>{article.title}</h3>
              <span>
                {article.publishedAt} - {article.author}
              </span>
            </div>
            <img src={article.urlToImage} width="300px" height="180px" />
            <div>{article.description}</div>
            <a href={article.url}>
              <div className="button_more">more...</div>
            </a>
          </div>
        ))}
      </section>
    )
  }
}
