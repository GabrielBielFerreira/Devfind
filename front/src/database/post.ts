export interface IPost {
    id: number,
    userName: string,
    userImage: string,
    title: string,
    data: string,
    text: string,
    postImage?: string
}

export const postList: IPost[] = [
    {
        id: 1,
        userName: "Matheus Rocha",
        userImage: "https://i.pinimg.com/236x/1c/51/ca/1c51ca3804b2bc0a5bfefe9a3bcce9c6.jpg",
        title: "Site para um banco",
        data: "03/10/2025 - 17:24",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        postImage: "https://thumbs.dreamstime.com/b/%C3%ADcone-do-banco-dinheiro-estilo-liso-127663870.jpg"
    },
    {
        id: 2,
        userName: "Ana Julia",
        userImage: "https://pt.quizur.com/_image?href=https://img.quizur.com/f/img5f4c0269947ed1.04923064.jpg?lastEdited=1598816877&w=1024&h=1024&f=webp",
        title: "Projeto completo para um Pet Shop",
        data: "02/10/2025 - 13:30",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        postImage: "https://i.pinimg.com/736x/ec/c6/4b/ecc64b742cfb907f60b1d5d2b3aec91a.jpg"
    },
    {
        id: 3,
        userName: "Dr. Ramito",
        userImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoqt28RfheAaSpVsmsRZNxiMg_2_7iV42YEg&s",
        title: "Preciso de um site para Advogado",
        data: "27/09/2025 - 10:46",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        postImage: "https://marciatravessoni.com.br/wp-content/uploads/2021/12/Melhores-escrito%CC%81rios-de-advocacia-do-Ceara%CC%81-scaled.jpeg"
    },
    {
        id: 4,
        userName: "Gabriel",
        userImage: "https://i.pinimg.com/236x/1c/51/ca/1c51ca3804b2bc0a5bfefe9a3bcce9c6.jpg",
        title: "Aplicativo financeiro",
        data: "29/09/2025 - 15:20",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCfBmIP826pCsS5PLGnUUaDJ_oymb7FWrWwg&s"
    },
    {
        id: 5,
        userName: "Matheus Rocha",
        userImage: "https://i.pinimg.com/236x/1c/51/ca/1c51ca3804b2bc0a5bfefe9a3bcce9c6.jpg",
        title: "Rede social de jogadores",
        data: "06/08/2025 - 20:18",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-035SMTsJsPCO6-yvsrZlC3Ifdr7XD988w&s"
    },
]