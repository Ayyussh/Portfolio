# Personal Portfolio

This is my personal portfolio showcasing my skills, projects, and experience as a front-end developer. It is built using **HTML**, **CSS**, **SCSS**, and **JavaScript** on the front-end, and **Node.js** on the back-end to handle form submissions and other server-side functionalities.

## Features

- **Responsive Design:** Built with Bootstrap and custom SCSS to ensure a seamless experience across all devices.
- **Node.js Backend:** Handles server-side operations like form submissions using a REST API.
- **Dynamic Content:** Includes a blog, contact form, and dynamically generated project information.
- **Interactive UI:** Uses jQuery and Bootstrap for smooth interactions and transitions.
- **SCSS for Styling:** Organized and modular SCSS for easier management of styles.
- **Custom Animations:** Subtle animations implemented with CSS and jQuery plugins.

## Technologies Used

### Frontend
- **HTML5**: Structure and semantic content of the portfolio.
- **CSS3**: Styles for layout, design, and responsiveness.
- **SCSS**: Preprocessor for managing CSS more effectively.
- **JavaScript**: Interactivity and client-side scripting.
- **Bootstrap**: Responsive layout and UI components.
- **jQuery**: For DOM manipulation and animation effects.

### Backend
- **Node.js**: Handles backend operations such as form processing.
- **Express.js**: Used for routing and API endpoints.
  
### Deployment
- Deployed on **Vercel** for hosting both the front-end and back-end, ensuring fast and reliable performance.

## Folder Structure

```bash
├── api/
│   └── send.js               # Node.js file for handling API requests
├── node_modules/             # Project dependencies
├── public/
│   ├── css/
│   │   ├── skins/            # Various CSS themes and skins
│   │   ├── bootstrap.min.css # Bootstrap styles
│   │   ├── custom.css        # Custom styles
│   ├── js/
│   │   ├── bootstrap.js      # Bootstrap JS for responsive behavior
│   │   ├── jquery.min.js     # jQuery for interactivity
│   │   ├── custom.js         # Custom JS logic
│   ├── img/                  # Image assets
│   ├── fonts/                # Font files used in the portfolio
├── about.html                # About page
├── blog.html                 # Blog section
├── contact.html              # Contact page
├── index.html                # Main landing page
├── portfolio.html            # Portfolio page
├── server.js                 # Node.js server setup
├── .gitignore                # Files ignored by Git
├── package.json              # Project dependencies and scripts
├── package-lock.json         # Exact versions of installed dependencies
└── vercel.json               # Vercel deployment configuration

## Installation and Setup

### Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git

Navigate to the project directory:

```bash
Copy code
cd portfolio
Install the backend dependencies:

```bash
Copy code
npm install
Start the Node.js server:

```bash
Copy code
npm start
Open index.html in your browser, or visit the deployed version on Vercel.

API Endpoints
POST /api/send: Handles form submissions and emails via the send.js file.
Deployment
To deploy the project on Vercel:

Ensure you have the vercel.json file set up with the correct configuration.

Run the following commands:

```bash
Copy code
vercel
Contributions
Feel free to open issues or submit pull requests for any improvements or suggestions!

License
This project is licensed under the MIT License.
