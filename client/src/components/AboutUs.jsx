import "../styles/AboutUs.css"; // Importing CSS styles for the component
function AboutUs() {
  return (
    <div className="container">
      <div className="top">
        <div className="aboutus">
          <h1>About Us - Team Byte Press</h1>
          <p>
            We are a group of enthusiastic Full Stack Developers from
            Chitkara University, 3rd Year CSE – G-23 Batch, who collaborated
            to build Byte Press — a clean, modern, and efficient news
            aggregator application based entirely on the MERN Stack (MongoDB,
            Express.js, React.js, and Node.js).{" "}
          </p>
          {" "}
          <p>
            This project represents our combined effort across all layers of
            development — frontend, backend, database, and deployment. From
            building intuitive user interfaces with React, developing secure
            RESTful APIs using Node and Express, to managing data with
            MongoDB and deploying the app using modern DevOps practices — we
            shared equal responsibility in bringing Byte Press to life. Every
            line of code reflects collaboration, problem-solving, and a
            strong foundation in full stack engineering.{" "}
          </p>
        </div>
      </div>
      <div className="bottom">
          <h1>Team Members</h1>
        <div className="team">
          <div className="team-member">
            <h3>Romit</h3>
            <p>Roll No: 2210992182</p>
            <p>
              A passionate full stack developer who contributed across frontend
              and backend — from building UI components to designing RESTful
              routes and working on deployment pipelines.
            </p>
          </div>
          <div className="team-member">
            <h3>Rohit Mahajan</h3>
            <p>Roll No: 2210992179</p>
            <p>
              A versatile coder who worked across the stack — handling frontend
              logic, API consumption, and server-side integrations with equal
              proficiency.
            </p>
          </div>
          <div className="team-member">
            <h3>Pulkit Verma</h3>
            <p>Roll No: 2210992105</p>
            <p>
              Pulkit actively contributed to both the UI/UX and the backend APIs,
              working closely on MongoDB schema design, Express middleware, and
              responsive layouts.
            </p>
          </div>
          <div className="team-member">
            <h3>Rajveer Shaktawat</h3>
            <p>Roll No: 2210992133</p>
            <p>
              Rajveer participated across the full stack, helping implement
              routes, state management, data handling, and project deployment,
              while ensuring code consistency and modularity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
