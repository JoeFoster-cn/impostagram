import React, {Component} from 'react'
import './News.css'

class News extends React.Component {
    render() {
        return <article className="News" ref="News">
            <header>
                <div className="Post-user">
                    <div className="Post-user-avatar">
                        <img src='../images/ridge.jpg' alt="ridge" />
                    </div>
                    <div className="Post-user-nickname">
                        Zola
                    </div>
                    <div className="Ellipsis">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            </header>
            <div className="Post-image">
                <div className="Post-image-bg">
                    <img alt="Cake" src='../images/cake.jpg' />
                </div>
            </div>
            <div className="Like-btns">
                <p>
                <i class="far fa-heart"></i>
                <i class="far fa-comment"></i>
                <i class="fas fa-share"></i>
                </p>
                <p>
                <i class="fas fa-heart"></i> 420 Likes
                </p>
            </div>
            <div className="Post-caption">
                <strong>Zola</strong> - Made a cake!
            </div>
        </article>
    }
}

export default News