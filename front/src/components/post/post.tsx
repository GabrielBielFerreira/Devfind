import PostStyled from "./postStyled"
import { TiThMenu } from "react-icons/ti";


const Post = () => {

    return (
        <PostStyled>
            <div className="postHeader">
                <span className="user">
                    <figure>
                        <img src="https://wallpapers.com/images/hd/best-profile-pictures-wqm0z83avja0y31c.jpg" alt="Foto do perfil" />
                    </figure>
                    <p className="userName">João Carlos</p>
                </span>
                <span className="postDetail">
                    <p className="date">25/01/2025 - 13:40</p>
                    <TiThMenu/>
                </span>
            </div>

            <div className="postContent">
                <p className="postTitle">Loja de Exemplo</p>
                <p className="postText">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                    the industry's standard dummy text ever since the 1500s
                </p>
                <figure>
                    <img 
                    src="https://www.pontotel.com.br/local/wp-content/uploads/2023/02/recrutamento-desenvolvedor-por-que-e-tao-importante-investir-em-um-bom-recrutamento-de-desenvolvedor-para-sua-empresa.webp" 
                    alt="Foto de exemplo" />
                </figure>
            </div>
        </PostStyled>
    )
}

export default Post