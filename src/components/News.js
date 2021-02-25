import React, {Component} from 'react'
import './News.css'

class News extends React.Component {
        constructor(props) {
            super(props);
        }
    render() {
        const nickname = this.props.nickname;
        const avatar = this.props.avatar;
        const image = this.props.image;
        const caption = this.props.caption;
        const likes = this.props.likes;

        return <article className="News" ref="News">
            <header>
                <div className="Post-user">
                    <div className="Post-user-avatar">
                        <img src={avatar} alt={nickname} />
                    </div>
                    <div className="Post-user-nickname">
                        {nickname}
                    </div>
                    <div className="Ellipsis">
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            </header>
            <div className="Post-image">
                <div className="Post-image-bg">
                    <img alt={caption} src={image} />
                </div>
            </div>
            <div className="Like-btns">
                <p className="Icons">
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
                <i className="fas fa-share"></i>
                </p>
                <p className="Likes">
                <i class="fas fa-heart"></i> {likes} Likes
                </p>
            </div>
            <div className="Post-caption">
                <strong>{nickname}</strong> {caption}
            </div>
        </article>
    }
}

export default News