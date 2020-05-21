import React from 'react';

import DefaultImg from '../../assets/default-empty-img.png';
import './PostCard.scss';

export function PostCard(props) {
    console.log(props);
    // todo: достать пропсу comments из props ниже в 9й строке
    const {post, hasImage, author, comments} = props;

    console.log('hasImage', hasImage);
    const {title, body} = post;

    const kittyUrl = `https://cataas.com/cat/says/hello%20world!?${Math.random() * 1000}`;

    const renderImage = () => {
        return hasImage ? (
            <img src={kittyUrl}/>
        ) : (
            <img src={DefaultImg}/>
        );
    };

    return (
        <div className="may-post-card card">

            {/*<div className="may-post-card-img">*/}
            {/*  {*/}
            {/*    hasImage ? (*/}
            {/*      <img src={kittyUrl} />*/}
            {/*      ) : (*/}
            {/*        <img src={DefaultImg} />*/}
            {/*    )*/}
            {/*  }*/}
            {/*</div>*/}

            {/*<div className="may-post-card-img" >*/}
            {/*  {*/}
            {/*    renderImage()*/}
            {/*  }*/}
            {/*</div>*/}

            {hasImage && (
                <div className="may-post-card-img" id="my-block" onClick={() => {
                    alert('ghvcdhfvbdfsjvbdf')
                }}>
                    <img src={kittyUrl}/>
                </div>
            )
            }
            {!hasImage && (
                <div className="may-post-card-img">
                    <img src={DefaultImg}/>
                </div>
            )}

            <div className="card-body">
                <h4 className="card-title title">{title}</h4>
                <div className="card-text body">
                    {body}
                    <div className='blockquote-footer'>{author}</div>

                </div>
            </div>

            {/*  todo: здесь нужно показать массив коментариев к посту (comments), который прилетит в props
          можно создать отдельную компоненту Comment по аналогии с тем, как мы делали PostCard, UserCard
          как она будет выглядеть зависит от вашей фантазии
          Для каждого комментария должны быть выведены такие поля:
          name - имя автора комментария
          email - почта автора комментария
          body - текст комментария
    */}
            <div className="may-post-card card">
                {comments.map((comment, id) => {
                    return (
                        <div className='comment'>

                            <div className='comment-UserInfo'>
                                <h6>{`Name: ${comment.name}`}</h6>
                                <h6>{`Email: ${comment.email}`}</h6>
                            </div>
                            <p className='comment-body'>{`${comment.body}`}</p>

                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default PostCard;
