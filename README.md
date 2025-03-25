# 🚀 3D Portfolio  

**3D Portfolio** is an interactive portfolio website featuring 3D elements built with **Next.js, Three.js, and React Three Fiber**. It showcases projects, skills, and personal branding in a visually appealing way.  

---

## 🌐 Live Demo  

Check out the live version:  
[🔗 3D Portfolio Demo](https://labbaiirfan.vercel.app/)  

---

## 📌 Table of Contents  

1. [✨ Features](#features)  
2. [🛠️ Technologies Used](#technologies-used)  
3. [📦 Packages Used](#packages-used)  
4. [🚀 Getting Started](#getting-started)  
5. [📁 Folder Structure](#folder-structure)  
6. [🔧 Deployment](#deployment)  
7. [🙌 Contributing](#contributing)  
8. [📄 License](#license)  
9. [👤 Author](#author)  
10. [📌 Reference Repository](#reference-repository)  

---

## ✨ Features  

- 🚀 **3D Interactive Elements** – Built using Three.js & React Three Fiber for immersive visuals  
- 🎨 **Smooth Animations & Transitions** – Framer Motion ensures a fluid user experience  
- 📌 **Dynamic Project Showcase** – Displays work with engaging animations & hover effects  
- 📩 **Interactive Contact Form** – Secure and user-friendly way to connect  
- 📱 **Fully Responsive Design** – Optimized for all screen sizes and devices  
- ⚡ **Fast Performance** – Optimized assets and lazy loading for better speed  
- 🖥️ **Modern UI/UX** – Clean, minimalistic, and developer-friendly interface  

---

## 🛠️ Technologies Used  

- [Next.js](https://nextjs.org)  
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber)  
- [Three.js](https://threejs.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [Framer Motion](https://www.framer.com/motion/)  

---

## 📦 Packages Used  

- `react-three-fiber`  
- `react-parallax-tilt`  
- `react-type-animation`  
- `react-vertical-timeline-component`  

---

## 🚀 Getting Started  

### **Clone the repository:**  

```bash
git clone https://github.com/LabbaiIrfan/Portfolio.git
```

### **Navigate to the project directory:**  

```bash
cd Portfolio
```

### **Install dependencies:**  

```bash
npm install
```

### **Run the development server:**  

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.  

---

## 📁 Folder Structure  

```
Public/
│── desktop_pc/
│   ├── textures/         # Folder for texture files (currently empty)
│   ├── license.txt       # License information for the model
│   ├── scene.bin         # Binary data for the 3D model
│   ├── scene.gltf        # GLTF format model file
│
│── planet/
│   ├── textures/         # Folder for texture files (currently empty)
│   ├── license.txt       # License information for the model
│   ├── scene.bin         # Binary data for the 3D model
│   ├── scene.gltf        # GLTF format model file
│
│── logo.svg              # Project logo in SVG format
src/
│── assets/              # Static assets like images, icons, etc.
│── components/          # Reusable UI components
│   ├── canvas/          # 3D-related components using Three.js
│   │   ├── Ball.jsx        # Ball 3D component
│   │   ├── Computers.jsx   # 3D model of computers
│   │   ├── Earth.jsx       # 3D representation of Earth
│   │   ├── Stars.jsx       # Animated star background
│   ├── About.jsx         # About section component
│   ├── Contact.jsx       # Contact form component
│   ├── Experience.jsx    # Work experience section
│   ├── Feedbacks.jsx     # User feedback/testimonials section
│   ├── Hero.jsx          # Hero section (landing page intro)
│   ├── Loader.jsx        # Loading animation component
│   ├── Navbar.jsx        # Navigation bar component
│   ├── Tech.jsx          # Technologies section
│   ├── Works.jsx         # Portfolio/projects section
│── constants/           # Constant values and configuration files
│── hoc/                 # Higher Order Components (HOC) for code reuse
│── utils/               # Utility functions/helpers
│── App.jsx              # Main application component
│── index.css            # Global CSS styles
│── main.jsx             # Entry point file rendering App.jsx
│── styles.js            # Styled components and theme settings
```

---

## 🔧 Deployment  

### **To deploy on Vercel:**  

1. Push your code to GitHub  
2. Go to [Vercel](https://vercel.com/) and import your repository  
3. Click **Deploy**  

For Netlify, follow similar steps on [Netlify](https://www.netlify.com/).  

---

## 🙌 Contributing  

Contributions are welcome! Fork the repository and submit a pull request.  

---

## 📄 License  

This project is licensed under the **MIT License**.  

---

## 👤 Author  

- **GitHub**: [@Labbaiirfan](https://github.com/LabbaiIrfan)  
- **LinkedIn**: [Labbai Irfan](https://www.linkedin.com/in/labbai-irfan-5085a0288/)  

---

## 📌 Reference Repository  

This project was cloned and modified from:  
[Original Repository](https://github.com/adrianhajdin/project_3D_developer_portfolio)
