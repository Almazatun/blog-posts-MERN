import React, {Component} from 'react'
import style from './WritePost.module.scss'

export class WritePost extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div className={style.write_post_container}>
                <div className={style.post_box}>
                    <div className={style.new_post_title}>
                        <input type="text"
                                placeholder={'👉 New post title'}
                        />
                    </div>
                    <div className={style.new_post_body}>
                    <textarea name="" id="">

                    </textarea>
                    </div>
                </div>
                <div className={style.btns}>
                    <button>
                        Publish
                    </button>
                </div>
            </div>
        )
    }
}