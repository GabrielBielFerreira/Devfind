from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


@app.route("/api/profile/<int:id>")
def get_profile(id: int):
    # Dados temporários
    name = "Ana Maria"
    description = "Desenvolvedora Front-End Júnior"
    location = "São Paulo - SP"
    about = "Sou desenvolvedora com experiência em criação de aplicações modernas e escaláveis, sempre focado em oferecer soluções eficientes e bem estruturadas. Tenho facilidade em trabalhar em equipe, adaptar-me a novos desafios e aprender novas tecnologias rapidamente. Nos últimos anos, atuei em projetos que envolveram interfaces responsivas, integrações com APIs e boas práticas de performance e acessibilidade."
    skills = ["CSS", "HTML", "JavaScript", "React"]
    experience = [{"name": "Empresa A", "role": "Desenvolvedora Front-End"}]
    return {
        "name": name,
        "description": description,
        "location": location,
        "about": about,
        "skills": skills,
        "experience": experience,
    }
