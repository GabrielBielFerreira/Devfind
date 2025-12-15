import PostStyled from "./postStyled"
import { TiThMenu } from "react-icons/ti";
import type { IPost } from "../../database/post";


const Post = ({id, userName, userImage, title, data, text, postImage}: IPost) => {

    return (
        <PostStyled key={id}>
            <div className="postHeader">
                <span className="user">
                    <figure>
                        <img src={userImage} alt="Foto do perfil" />
                    </figure>
                    <p className="userName">{userName}</p>
                </span>
                <span className="postDetail">
                    <p className="date">{data}</p>
                    <TiThMenu/>
                </span>
            </div>

            <div className="postContent">
                <p className="postTitle">{title}</p>
                <p className="postText">{text}</p>
                <figure>
                    <img 
                    src= {postImage}alt="Foto de exemplo" />
                </figure>
            </div>
        </PostStyled>
    )
}

export default Post