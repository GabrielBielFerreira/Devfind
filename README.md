# DevFind
**DevFind** is a platform designed to connect developers with projects and opportunities. It facilitates the discovery of talent and collaboration.
## 🔗 Project Links
- **Management:** [Jira Board](https://gabrielbielferreira0411.atlassian.net/jira/software/projects/SCRUM/boards/1)
- **Design:** [Figma Design](https://www.figma.com/design/Fg9Uia1vCGtZoYJJXKeC0S/DevFind)
- **Documentation:**
  - [Use Cases (Lucid)](https://lucid.app/lucidchart/e514471c-f128-404d-9ba3-eeb0e6252de9/edit?viewport_loc=-2263%2C-256%2C2796%2C1594%2C0_0&invitationId=inv_3b7c4dc4-cb0c-4727-9c71-5557dab4fa1a)
  - [Class Diagram (Lucid)](https://lucid.app/lucidchart/fe42a32a-3a91-4e83-abd0-6dd930799597/edit?viewport_loc=-224%2C-635%2C2217%2C1264%2C0_0&invitationId=inv_65347eba-ec49-476e-831c-3567bb74e84a)
## 🚀 Technology Stack
### Frontend
- **Runtime:** [Node.js](https://nodejs.org/)
- **Library:** [React](https://react.dev/) (v19)
- **Framework:** [Vite](https://vitejs.dev/)
- **Language:** TypeScript
- **Styling:** Styled Components
- **Routing:** React Router
### Backend
- **Language:** [Python](https://www.python.org/) (3.13+)
- **Framework:** [Flask](https://flask.palletsprojects.com/)
- **Package Manager:** [UV](https://docs.astral.sh/uv/)
## 🛠️ Installation & Execution
### Prerequisites
- Node.js (Latest LTS recommended)
- Python 3.13+
- UV (`pip install uv`)
### Frontend
1. Navigate to the `front` directory:
   ```bash
   cd front
Install dependencies:
npm install
Start the development server:
npm run dev
Backend
Navigate to the back directory:
cd back
Start the development server:
uv run -m flask --app src/main run
Note: This command handles virtual environment creation and dependency installation automatically via uv.
📂 Project Structure
front/: React frontend application.
back/: Flask backend API.
src/main.py: Main application entry point defining API routes.
