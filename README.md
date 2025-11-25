<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Anish Pandey | Portfolio</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }

    body {
      background: #0f0f0f;
      color: #fff;
      line-height: 1.6;
    }

    header {
      width: 100%;
      padding: 20px 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      top: 0;
      background: rgba(0,0,0,0.6);
      backdrop-filter: blur(10px);
      z-index: 1000;
    }

    header h1 {
      font-size: 26px;
      letter-spacing: 1px;
      color: #00e0ff;
    }

    nav a {
      margin-left: 20px;
      color: #fff;
      text-decoration: none;
      font-size: 16px;
      transition: 0.3s;
    }

    nav a:hover {
      color: #00e0ff;
    }

    section {
      padding: 120px 60px;
      min-height: 100vh;
    }

    .hero {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;
    }

    .hero-text h2 {
      font-size: 46px;
      margin-bottom: 20px;
    }

    .hero-text p {
      font-size: 18px;
      max-width: 500px;
      opacity: 0.8;
    }

    .btn {
      display: inline-block;
      margin-top: 20px;
      padding: 12px 24px;
      background: #00e0ff;
      color: #000;
      font-weight: bold;
      border-radius: 6px;
      text-decoration: none;
      transition: 0.3s;
    }

    .btn:hover {
      background: #00b4cc;
    }

    .skills {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 20px;
      margin-top: 40px;
    }

    .skill-box {
      padding: 20px;
      border: 1px solid #222;
      background: #141414;
      border-radius: 8px;
      text-align: center;
      transition: 0.3s;
    }

    .skill-box:hover {
      transform: translateY(-5px);
      border-color: #00e0ff;
    }

    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      margin-top: 40px;
    }

    .project-card {
      background: #141414;
      padding: 20px;
      border-radius: 10px;
      border: 1px solid #222;
      transition: 0.3s;
    }

    .project-card:hover {
      transform: translateY(-5px);
      border-color: #00e0ff;
    }

    footer {
      text-align: center;
      padding: 30px;
      background: #111;
      margin-top: 60px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Anish</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section id="home" class="hero">
    <div class="hero-text">
      <h2>Hello, I'm <span style="color:#00e0ff">Anish Pandey</span></h2>
      <p>A passionate web developer who loves building beautiful and clean websites using HTML, CSS, and JavaScript.</p>
      <a class="btn" href="#projects">View My Work</a>
    </div>
  </section>

  <section id="skills">
    <h2>My Skills</h2>
    <div class="skills">
      <div class="skill-box">HTML</div>
      <div class="skill-box">CSS</div>
      <div class="skill-box">JavaScript</div>
      <div class="skill-box">Responsive Design</div>
    </div>
  </section>

  <section id="projects">
    <h2>Projects</h2>
    <div class="projects">
      <div class="project-card">
        <h3>Portfolio Website</h3>
        <p>A personal website showcasing my work and skills.</p>
      </div>
      <div class="project-card">
        <h3>Landing Page</h3>
        <p>A modern and clean landing page made with HTML & CSS.</p>
      </div>
    </div>
  </section>

  <section id="contact">
    <h2>Contact Me</h2>
    <p>Email: anishpandey7659@gmail.com</p>
  </section>

  <footer>
    <p>© 2025 Anish Pandey. All Rights Reserved.</p>
  </footer>
</body>
</html>
