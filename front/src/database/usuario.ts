export interface Usuruario {
    id: number,
    nome: string,
    img: string,
    especializacao: string, 
    skil: string[],
    city: string
    description: string
}

export interface MiniCardUser {
    id: number,
    nome: string,
    img: string,
    especializacao: string, 
}

export const usuarios: Usuruario[] = [
    {
        id: 1,
        nome: "Matheus Rocha",
        especializacao: "Front-End",
        img: "https://i.pinimg.com/236x/1c/51/ca/1c51ca3804b2bc0a5bfefe9a3bcce9c6.jpg",
        city: "São Paulo -SP",
        skil: ["HTML", "CSS", "React.JS", "Python"],
        description: "Especialista em Front-End, com experiência no desenvolvimento de interfaces modernas, responsivas e acessíveis. Atua na criação de aplicações web utilizando boas práticas de usabilidade, performance e componentização, garantindo uma experiência consistente e intuitiva para o usuário final."
    },
    {
        id: 2,
        nome: "João Carlos",
        especializacao: "Front-End",
        img: "https://preview.redd.it/yall-want-some-profile-pictures-v0-j0c7jlppx9ze1.jpg?width=640&crop=smart&auto=webp&s=e104f6dc2b447809bd1df581018d6ba7fa825689",
        city: "São Paulo - SP",
        skil: ["HTML", "CSS", "React.JS", "SQL", "JAVA"],
        description: "Especialista em Front-End, focado no desenvolvimento de interfaces modernas, responsivas e centradas na experiência do usuário."
    },
    {
        id: 3,
        nome: "Ana Julia",
        especializacao: "Front-End",
        img: "https://pt.quizur.com/_image?href=https://img.quizur.com/f/img5f4c0269947ed1.04923064.jpg?lastEdited=1598816877&w=1024&h=1024&f=webp",
        city: "Osasco - SP",
        skil: ["HTML", "CSS", "React.JS", "JAVA", "Python"],
        description: "Profissional com especialização em Front-End, atuando no desenvolvimento de aplicações web com foco em componentização, acessibilidade, performance e boas práticas de UI/UX."
    },
    {
        id: 4,
        nome: "Maria Clara",
        especializacao: "Desenvolvedora Back-End",
        img: "https://i.pinimg.com/236x/32/3b/0a/323b0afbb608104054289aa7d696b344.jpg",
        city: "Curitiba - PR",
        skil: ["React.JS", "JAVA", "Python", "SQL", "C+"],
        description: "Usuário especialista em Back-End, com experiência no desenvolvimento de sistemas robustos e escaláveis. Atua na criação e manutenção de APIs, regras de negócio e integrações, garantindo segurança, performance e confiabilidade das aplicações."
    },
    {
        id: 5,
        nome: "Fernando Silva",
        especializacao: "Back-End (Júnior)",
        img: "https://wallpapers.com/images/hd/best-profile-pictures-md8aefaolvkkrc1l.jpg",
        city: "Curitiba - PR",
        skil: ["JAVA", "Python", "C+"],
        description: "Especialista em Back-End, focado no desenvolvimento de APIs e na implementação de regras de negócio eficientes e seguras."
    },
    {
        id: 6,
        nome: "Gabriel",
        especializacao: "Front-End",
        img: "https://wallpapers.com/images/hd/best-profile-pictures-wqm0z83avja0y31c.jpg",
        city: "Taboão da Serra - SP",
        skil: ["HTML", "CSS", "React.JS", "SQL", "JAVA"],
       description: "Especialista em Front-End, com experiência no desenvolvimento de interfaces modernas, responsivas e acessíveis. Atua na criação de aplicações web utilizando boas práticas de usabilidade, performance e componentização, garantindo uma experiência consistente e intuitiva para o usuário final."
    },
    {
        id: 7,
        nome: "João Nascimento",
        especializacao: "Desenvolvedor Front-End (Júnior)",
        img: "https://osegredo.com.br/wp-content/uploads/2023/09/27-3.jpg.webp",
        city: "Curitiba - PR",
        skil: ["HTML", "CSS", "React.JS", "SQL", "JAVA"],
       description: "Desenvolvedor Front-End especializado em criar interfaces bonitas, funcionais e fáceis de usar, sempre focando na melhor experiência para o usuário."
    },
    {
        id: 8,
        nome: "Julia Rocha",
        especializacao: "Desenvolvedora Front-End (Júnior)",
        img: "https://media.tenor.com/UfCSOPN8z4EAAAAe/gif-de-mi-foto-de-perfil-aesthetic.png",
        city: "Rio de Janeiro - RJ",
        skil: ["HTML", "CSS", "React.JS"],
       description: "Profissional com especialização em Front-End, atuando no desenvolvimento de aplicações web com foco em componentização, acessibilidade, performance e boas práticas de UI/UX."
    },
    {
        id: 9,
        nome: "Ana Paula",
        especializacao: "Desenvolvedora Front-End",
        img: "https://blog.anagiovanna.com.br/wp-content/uploads/2022/01/foto-para-perfil-do-whatsapp-7.jpg",
        city: "São Paulo - SP",
        skil: ["HTML", "CSS", "React.JS"],
       description: "Especialista em Front-End, com experiência no desenvolvimento de interfaces modernas, responsivas e acessíveis. Atua na criação de aplicações web utilizando boas práticas de usabilidade, performance e componentização, garantindo uma experiência consistente e intuitiva para o usuário final."
    },
    {
        id: 10,
        nome: "José Luiz",
        especializacao: "Back-End (Júnior)",
        img: "https://i.scdn.co/image/ab67616d00001e02391ee100e70d0e87be3e526e",
        city: "Curitiba - PR",
        skil: ["JAVA", "Python", "C+"],
        description: "Usuário especialista em Back-End, responsável pelo desenvolvimento de APIs, implementação de regras de negócio, integração com bancos de dados e garantia da segurança e escalabilidade das aplicações."
    },
    
]