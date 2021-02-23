import React, {Component} from 'react'
import './News.css'

class News extends Component {
    render() {
        return <article className="News" ref="News">
            <header>
                <div className="Post-user">
                    <div className="Post-user-avatar">
                        <img src='../images/ridge.jpg' alt="ridge" />
                    </div>
                    <div className="Post-user-nickname">
                        <span>Zola</span>
                    </div>
                </div>
            </header>
            <div className="Post-image">
                <div className="Post-image-bg">
                    <img alt="Cake" src='../images/cake.jpg' />
                </div>
            </div>
            <div className="Post-caption">
                <strong>Zola</strong> Feeding the world!
            </div>
        </article>
    }
}

export default News