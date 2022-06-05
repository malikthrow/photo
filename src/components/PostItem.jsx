import React from 'react';

const PostItem = () => {
    return (
        <div className="post">
            <div className=".post__content">
                <strong>1.JS</strong>
                <div>
                    Js - language program
                </div>
            </div>
            <button>Удалить пост</button>
        </div>
    );
};

export default PostItem;