import "./App.css";
import React, { useEffect, useState } from "react";

export default function Portfolio() {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const title = "Hello, I'm Srinivasa Aditya Preetham Nidadavolu";

  useEffect(() => {
    setShowTitle(true);
    setShowSubtitle(true);
  
    const typingInterval = 100; // Speed of typing (ms)
    const loopDelay = 60000; // 1 minute
  
    let currentIndex = 0;
    let intervalId;
  
    const startTyping = () => {
      currentIndex = 0;
      intervalId = setInterval(() => {
        setTextIndex(currentIndex);
        currentIndex++;
  
        if (currentIndex > title.length) {
          clearInterval(intervalId);
          setTimeout(() => {
            setTextIndex(0); // clear text
            setTimeout(startTyping, 500); // restart typing after short delay
          }, loopDelay - title.length * typingInterval); // wait until 1 min total
        }
      }, typingInterval);
    };
  
    startTyping();
  
    return () => clearInterval(intervalId); // cleanup
  }, []);
  

  return (
    <div style={{ backgroundColor: "black", color: "white", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      
      {/* Navigation Bar */}
      <nav style={{
        position: "fixed",
        top: 0,
        right: 0,
        height: "50px ", 
        backgroundColor: "rgba(0, 0, 0, 0.76)",
        width: "100%",
        padding: "0rem 2rem",
        display: "flex",
        justifyContent: "flex-end",
        zIndex: 1000
      }}>
        <ul style={{ listStyle: "none", display: "flex", gap: "2rem" }}>
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About Me</a></li>
          <li><a href="#education" className="nav-link">Education</a></li>
          <li><a href="#projects" className="nav-link" >Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", textAlign: "center", padding: "0 1rem" }}>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            opacity: showTitle ? 1 : 0,
            transform: showTitle ? "translateY(0)" : "translateY(-20px)",
            transition: "opacity 1s ease, transform 1s ease",
            whiteSpace: "nowrap",
            overflow: "hidden",
            borderRight: "0.15em solid white", // Adding a cursor effect
            animation: "typing 3s steps(40) 1s forwards, blink 0.75s step-end infinite",
          }}
        >
          {title.slice(0, textIndex)}
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "gray",
            marginBottom: "2rem",
            opacity: showSubtitle ? 1 : 0,
            transform: showSubtitle ? "translateY(0)" : "translateY(-20px)",
            transition: "opacity 1s ease, transform 1s ease",
          }}
        >
        Welcome to my Webpage
        </p>
        <div style={{ display: "flex", gap: "1rem" }}>
  <a href="#projects" className="btn btn-inverse">
    View My Work
  </a>
<a href={process.env.PUBLIC_URL + "/resume.pdf"} download className="btn btn-outline">
  Download Resume
</a>

</div>

      </section>

      {/* About Section */}
      <section id="about" style={{ padding: "5rem 1rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem" }}>About Me</h2>
        <img
          src="/image.jpg"
          alt="Profile"
          style={{
            width: "200px",
            borderRadius: "10%",
            marginBottom: "1rem",
          }}
        />
        <p style={{ maxWidth: "600px", margin: "0 auto", color: "gray" }}>
        Motivated master’s student in Computer Science with a diverse skill set in software development and IT infrastructure. Proficient in
 web development (HTML, CSS, JavaScript, React.js, Angular.js, Django) and programming languages (Python, C++). Passionate
 about leveraging technology to solve real-world problems and committed to continuous learning.. I enjoy turning complex problems into simple, beautiful, and intuitive designs. I’m currently exploring full-stack development and artificial intelligence.
        </p>
      </section>

      {/* Education Section */}
      <section id="education" style={{ padding: "5rem 1rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem" }}>Education</h2>
        <div style={{ maxWidth: "700px", margin: "0 auto", color: "gray" }}>
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Master of Science in Computer Science</h3>
            <p>University of South Dakota, 2024 – Present</p>
            <p>Relevant coursework: Machine Learning, Web Development, Data Structures</p>
          </div>
          <div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Bachelor of Technology in Computer Science</h3>
            <p>Lovely Professional University, 2019 – 2023</p>
            <p>Relevant coursework: Data Structures, software Testing, Web Development</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: "5rem 1rem" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", textAlign: "center", marginBottom: "3rem" }}>Projects</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
          {[{
            title: "Book Inventory System",
            description: "book inventory management system using C++, leveraging Object-Oriented Programming principles.It enables easy addition, updating, and retrieval of book information.",
            link: "https://github.com/Aditya-preeth/CipherSchools_Assignment/blob/main/chiper%20project"
          }, {
            title: "Gradebook",
            description: "Created an App using React.js, Node.js, JavaScript, HTML, CSS simplifies academic record management by providing user-friendly sorting, filtering, and statistical insights. ",
            link: "https://gitlab.com/Aditya-preeth/COE1"
          }, {
            title: "Portfolio Website",
            description: "The website you're viewing right now – built with React and CSS!",
            link: "https://github.com/Aditya-preeth/my-webpage"
          }].map((project, index) => (
            <div
  key={index}
  className="project-card"  // Add this class here
  style={{
    backgroundColor: "#1a1a1a",
    padding: "1.5rem",
    borderRadius: "1rem",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  }}
>
  <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>{project.title}</h3>
  <p style={{ color: "gray", marginBottom: "1rem" }}>{project.description}</p>
  <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="btn1"
  style={{
    color: "Black", // black text color
    textDecoration: "none", // Remove underline
    padding: "0.75rem 1.5rem", // Add padding to make it look more like a button
    borderRadius: "5px", // Rounded corners
    backgroundColor: "white", // Blue background color
    display: "inline-block", // Ensures the button acts like a block element
    fontWeight: "bold", // Bold text
    textAlign: "center", // Center the text
    transition: "background-color 0.3s ease, transform 0.3s ease", // Smooth transition for hover effect
  }}
>
  View Details
</a>

</div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: "5rem 1rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem" }}>Contact</h2>
        <p style={{ color: "gray" }}>
          Feel free to reach out at <a href="preethamaditya04@gmail.com" style={{ color: "#61dafb" }}>preethamaditya04@gmail.com</a>
        </p>
        <p style={{ color: "gray", marginTop: "1rem" }}>
          Or connect with me on <a href="https://github.com/Aditya-preeth" target="_blank" rel="noopener noreferrer" style={{ color: "#61dafb" }}>GitHub</a>
        </p>
        <p style={{ color: "gray", marginTop: "1rem" }}>
          To visit my LinkedIn page <a href="https://www.linkedin.com/in/srinivasa-aditya-preetham-nidadavolu-aa8686192/" target="_blank" rel="noopener noreferrer" style={{ color: "#61dafb" }}>LinkedIn</a>
        </p>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "2rem 0", color: "gray" }}>
        &copy; {new Date().getFullYear()} Srinivasa Aditya Preetham Nidadavolu. All rights reserved.
      </footer>
    </div>
  );
}

const navLinkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1rem",
  transition: "color 0.3s ease, transform 0.3s ease",
};
navLinkStyle[":hover"] = {
  color: 'red',
  transform: "scale(1.1)", // Slightly enlarges the text on hover
};
