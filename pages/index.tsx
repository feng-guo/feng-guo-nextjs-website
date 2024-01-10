import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import NavigationBar from '@components/NavigationBar'
import { Router } from 'react-router-dom'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'

const Home: React.FC = () => {
  const skills = [
    { title: 'Programming Languages', items: 'Python, JavaScript, Java, C, C++, C#, Typescript, Kotlin, Groovy' },
    { title: 'Frameworks and Libraries', items: 'React, Node.js, Redux, Django, Flask, FastAPI, TensorFlow, OpenCV, Spring Framework' },
    { title: 'Tools', items: 'Git, Docker, Jenkins, Jira, Spinnaker, Github, Gitlab, Maven, Postman' },
    { title: 'Database Systems', items: 'MySQL, MongoDB, Firebase, OracleSQL' },
    { title: 'Web Technologies', items: 'HTML, CSS' },
    { title: 'Monitoring and Logging', items: 'Datadog, Sentry, OpenTelemetry' },
    { title: 'Project Management', items: 'Agile, Scrum' },
    { title: 'Machine Learning/AI', items: 'TensorFlow, PyTorch' },
  ]

  const projects = [
    {
      title: 'Koli Koli',
      image: 'https://i.imgur.com/RRmx50n.png',
      description: [
        'Koli Koli is a versatile collection tracking app, initially designed for managing Hot Wheels collections.',
        'It provides an intuitive interface for cataloging owned items, managing a wishlist, and searching through the collection using tags.',
        'Its standout feature is the ability to add items to the collection simply by uploading a photo.',
        'Leveraging a TensorFlow model, the app identifies the item based on crowdsourced data and automatically adds it to your collection.'
      ],
      technologies: ['Frontend: Next.js, React, Typescript', 'Backend: Python, FastAPI, Tensorflow, Keras-OCR, OpenCV', 'Infrastructure/Hosting: Docker, DigitalOcean, Netlify', 'Testing: Jest, React Testing Library, Cypress, Postman'],
      workedOn: 'December 2023 - Current',
      links: [
        { href: 'https://github.com/feng-guo/feng-guo-nextjs-website', text: 'Frontend' },
        { href: 'https://github.com/feng-guo/hotwheels-tensorflow', text: 'Backend' },
        { href: 'https://feng-guo.netlify.app/hot-wheels', text: 'Project Link' }
      ]
    },
    {
      title: 'Check Me Out',
      image: 'https://i.imgur.com/TsenwgN.png',
      description: [
        'Check Me Out is a fully automated checkout system designed to streamline the shopping experience.',
        'Users simply place items on a conveyor belt, and the system takes care of the rest.',
        'A Raspberry Pi equipped with a camera uses an Edge Impulse model to identify each product, while a built-in scale in the conveyor belt accurately weighs items such as produce.',
        'The conveyor belt\'s operations are controlled by an Arduino.',
        'This project represents a significant step towards efficient, tech-driven retail solutions.'
      ],
      technologies: ['Frontend: React, JavaScript', 'Backend: Python, Flask, C++', 'Hardware: Raspberry Pi, Arduino'],
      workedOn: 'June 2023 - Current',
      links: [
        { href: 'https://github.com/feng-guo/fydp-2024', text: 'GitHub (private link)' },
        { href: 'https://project2.com', text: 'Project Link' }
      ]
    },
    {
      title: 'WorkDash',
      image: 'https://i.imgur.com/QkJmI1Z.png',
      description: [
        'WorkDash revolutionizes the way minimum wage jobs are found and filled.',
        'It operates as a digital marketplace, connecting job seekers with employers in real-time.',
        'A standout feature is its innovative use of OpenCV to match IDs with submitted information, ensuring the authenticity of users.',
        'The platform also incorporates a rating and reporting system, promoting a fair and transparent work environment.',
        'Furthermore, it includes a map feature to display available jobs in the user\'s vicinity, making job hunting more efficient and localized.',
        'WorkDash is a significant stride towards modernizing the job market for minimum wage roles.'
      ],
      technologies: ['Frontend: Kotlin, Jetpack UI', 'Backend: C++, OpenCV, Firebase'],
      workedOn: 'June 2023 - August 2023',
      links: [
        { href: 'https://github.com/feng-guo/WorkDash', text: 'GitHub' },
        { href: 'https://www.youtube.com/watch?v=9BQHa8ouryg', text: 'Video Demo' }
      ]
    },
    {
      title: 'Housing Price Index Visualizer',
      image: 'https://github.com/Felix-Suen/realtor/blob/master/src/img/tower.png?raw=true',
      description: [
        'Programmed a web application with React that uses data from Realtor.ca listings to determine the value of a house using multi-variable regression.'
      ],
      technologies: ['Frontend: React', 'Backend: Realtor API, Heroku', 'Other Technologies: MapBox API'],
      workedOn: 'May 2020 - December 2020',
      links: [
        { href: 'https://github.com/Felix-Suen/realtor', text: 'GitHub' }
      ]
    },
    {
      title: 'Thinq',
      image: 'https://i.imgur.com/KoEEm4H.png',
      description: [
        'Thinq is a revolutionary solution designed to bypass the high costs of mobile data.',
        'It leverages the power of SMS and a natural-language AI to deliver information directly to your phone.',
        'Users can send an SMS query, which Thinq interprets and responds to with relevant information.',
        'From getting directions and weather updates to summarizing topics, defining words, tracking the stock market, and delivering news, Thinq does it all without requiring internet access.',
        'It\'s the ultimate SMS-based search engine, making information access affordable and efficient.'
      ],
      technologies: ['Technology: Node.js, Javascript, Twilio, Wolfram Alpha, Google Maps Api, Open Weather Map'],
      workedOn: 'October 2018 for THacks 2',
      links: [
        { href: 'https://github.com/YashArora0606/Thinq', text: 'Thinq' },
        { href: 'https://devpost.com/software/thinq', text: 'Devpost' }
      ]
    },
    {
      title: 'Blocklist',
      image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/000/496/864/datas/original.png',
      description: [
        'Blocklist is a Chrome extension designed to enhance user safety and comfort while browsing the web. When a webpage contains a word on the user\'s blacklist, a popup warning is displayed, alerting the user about the contents of the site.',
        'The extension was built using Chrome Storage Sync for client-side block list storage, ensuring compatibility across platforms. Despite the team\'s initial unfamiliarity with web development and JavaScript, we successfully created a simplistic website and a functional Chrome extension.',
        'Notable features include the ability to customize the block list and a user-friendly interface. In the future, we plan to implement warnings for the visually impaired, making the internet safer for everyone.'
      ],
      technologies: ['Frontend: HTML5, CSS3, JavaScript', 'Backend: Chrome Storage Sync'],
      workedOn: 'October 2017 For MasseyHacks 2',
      links: [
        { href: 'https://github.com/[Enter the GitHub link here]', text: 'GitHub' },
        { href: 'https://devpost.com/software/blocklist', text: 'Devpost' }
      ]
    },
  ]

  const jobs = [
    {
      title: 'Full-Stack Software Engineer Co-op',
      company: 'Top Hat Monocle',
      period: 'Sep 2023 – Dec 2023',
      skills: 'Python, Django, Docker, React, Redux, JavaScript, MySQL, PostgreSQL, ChatGPT API',
      responsibilities: [
        'Incorporated ChatGPT for professors to create questions and reduce assessment production times by 20%.',
        'Spearheaded experiment of introducing AI “study buddy” for students to synthesize learning materials and curate personalized study questions to increase average grades by 5%.'
      ]
    },
    {
      title: 'Cloud Software Engineer Co-op',
      company: 'Thomson Reuters',
      period: 'Jan 2023 – Apr 2023',
      skills: 'C#, .NET, Kubernetes, Docker, JavaScript, Microsoft Azure Suite, Microsoft, SQL, OData, NUnit, Postman, Datadog',
      responsibilities: [
        'Developed client-facing APIs in C# as part of the Legal Tracker Services team to facilitate business operations to reduce data processing time by 40%.',
        'Overhauled QA process by introducing Postman tests into CI/CD build pipelines and Datadog Synthetic Tests to deployed environments to reduce production bugs by 15% and decrease manual testing times by 20%.'
      ]
    },
    {
      title: 'Full-Stack Software Engineer',
      company: 'Canada Startup Company (Startup)',
      period: 'Jan 2022 – Apr 2022',
      skills: 'Java, Kotlin, Android Studio, React Native, Node.js, React, Amazon AWS, Kubernetes',
      responsibilities: [
        'Coordinated the My Dress-AR team to design the application for the client through business plans, pitch decks, and product mockups as the project lead for a $1 million valuation company.',
        'Integrated Google ARCore into the mobile platform to allow users to virtually try on clothing through Augmented Reality to increase customer engagement metrics by 0%.',
        'Deployed portions of the application on Kubernetes to increase application reliability by 33%.'
      ]
    },
    {
      title: 'Full-Stack Software Engineer',
      company: 'Exponet Canada (Startup)',
      period: 'May 2021 – Aug 2021',
      skills: 'Grails, Groovy, React/Redux, TypeScript, MongoDB, Amazon MWS API',
      responsibilities: [
        'Identified deficiencies with the in-house business and warehouse management system, which needed to be streamlined to increase productivity and reduce errors.',
        'Overhauled the order management system to automatically retrieve orders from Amazon and eBay to eliminate the need for manual entry and updating, reducing the error from manual entry by 100%.',
        'Developed a framework to create automation rules for shipments to reduce shipment processing time by 85%.',
        'Introduced QR scanning tools and packaging suggestions to increase warehouse employee efficiency by 40%.'
      ]
    },
    {
      title: 'Software Developer',
      company: 'GlobalTrade Corporation',
      period: 'Jan 2020 – May 2020',
      skills: 'Java, JavaScript, HTML/CSS, Oracle WebLogic, SQL, jQuery, AngularJS, Spring Framework',
      responsibilities: [
        'Developed the new Trade Finance Exchange SaaS Platform to be delivered to six existing clients.',
        'Designed and implemented a centralized currency repository system to maintain consistency of exchange rate values between companies to eliminate possible discrepancies by 100%.'
      ]
    }
  ]

  const education = {
    university: 'University of Waterloo',
    degree: 'Bachelor of Computer Engineering',
    period: 'Sept 2019 – Expected April 2024',
    coursework: [
      'ECE 250 Algorithms and Data Structures',
      'ECE 252 Systems Programming and Concurrency',
      'ECE 351 Compilers',
      'ECE 356 Database Systems',
      'ECE 358 Computer Networks',
      'ECE 452 Software Design and Architectures',
      'ECE 457A Co-operative and Adaptive Algorithms',
      'ECE 458 Computer Security',
      'ECE 406 Algorithm Design and Analysis'
    ],
    honors: [
      'Dean\'s List - 2A Term',
      'Dean\'s List - 4A Term'
    ]
  }

  return (

    <div>
      <div className="sticky-navbar">
        <NavigationBar />
      </div>
      <Head>
        <title>Feng Guo</title>
        <link rel="icon" href="/you.png" />
      </Head>
      <img src="https://i.imgur.com/0o2gtCN.jpg" alt="Kyoto" id="splash" style={{ maxHeight: '100vh', maxWidth: '100vw', paddingBottom: '25px' }} />
      <div className="container">

        <main>

          {/* <img src="https://i.imgur.com/dbJKZzY.png" alt="Kyoto" style={{maxHeight: '100vh', maxWidth: '100vw'}} /> */}
          {/* <img src="https://i.imgur.com/vMK56NV.jpg" alt="Monkey" style={{maxHeight: '100vh', maxWidth: '100vw'}} /> */}
          <div className="container" style={{ paddingBottom: '25px' }}>
            <Header title="Welcome to my website!" />
          </div>

          <section id="about">
            <div className="container">
              <h2>About Me</h2>
              <Container>
                <Row>
                  <Col className="about-me-col">
                    <p>Hi there! I'm Feng, a computer engineering student graduating from the University of Waterloo.</p>
                    <p>Hi there! I'm Feng, and I am fueled by a deep passion for creating positive change.</p>
                    <p>In the tech realm, my enthusiasm lies in automation — the power to simplify lives, freeing up time for more creative pursuits. I am particularly excited about the possibilities that AI brings, constantly learning and exploring its potential.</p>
                    <p>On the social front, teaching and learning are at the core of my commitment to positive change. I actively engage in mentorship through tutoring and delivering talks to inspire younger individuals, fostering a culture of continuous learning.</p>
                    <p>My dedication extends to education, where I contributed to TopHat's mission of revolutionizing the classroom experience. By enhancing interaction and engagement, we strive to elevate the value of post-secondary education. Join me in the journey of creating meaningful impact and positive change!</p>
                    <p> <br />With two years of diverse full-stack engineering experience in law tech, fintech, and edtech, I thrive on continuous learning and innovation.</p>
                    <p>I'm passionate about creating impactful solutions, evident in my work at TopHat, where I leveraged GPT-4 to automate meaningful multiple-choice questions for professors, increasing usage by 200%. Beyond my professional endeavors, I love applying my problem-solving skills to personal projects, like using OCR to catalog my Hot Wheels collection.</p>
                    <p>In collaborative settings, I naturally take on a leadership role, ensuring effective teamwork and open communication. Looking forward, my aspirations include leadership positions and contributing to projects with real-world impact. Let's connect and explore how I can bring value to your team!</p>
                  </Col>
                </Row>
              </Container>
            </div>
          </section>

          {/* <section id="about-me">
            <h2>About Me</h2>
            <p>Hi there! I'm Feng, a computer engineering student graduating from the University of Waterloo.</p>
            <p>Hi there! I'm Feng, and I am fueled by a deep passion for creating positive change.</p>
            <p>In the tech realm, my enthusiasm lies in automation — the power to simplify lives, freeing up time for more creative pursuits. I am particularly excited about the possibilities that AI brings, constantly learning and exploring its potential.</p>
            <p>On the social front, teaching and learning are at the core of my commitment to positive change. I actively engage in mentorship through tutoring and delivering talks to inspire younger individuals, fostering a culture of continuous learning.</p>

            <p>My dedication extends to education, where I contributed to TopHat's mission of revolutionizing the classroom experience. By enhancing interaction and engagement, we strive to elevate the value of post-secondary education. Join me in the journey of creating meaningful impact and positive change!</p>
            <p> <br />With two years of diverse full-stack engineering experience in law tech, fintech, and edtech, I thrive on continuous learning and innovation.</p>

            <p>I'm passionate about creating impactful solutions, evident in my work at TopHat, where I leveraged GPT-4 to automate meaningful multiple-choice questions for professors, increasing usage by 200%. Beyond my professional endeavors, I love applying my problem-solving skills to personal projects, like using OCR to catalog my Hot Wheels collection.</p>

            <p>In collaborative settings, I naturally take on a leadership role, ensuring effective teamwork and open communication. Looking forward, my aspirations include leadership positions and contributing to projects with real-world impact. Let's connect and explore how I can bring value to your team!</p>
          </section> */}

          <section id="skills">
            <div className="container">
              <h2>Skills</h2>
              <Container className="skills-container">
                <Row>
                  {skills.map((skill, index) => (
                    <Col md={6} key={index} className='skill-col'>
                      <Card className="skill-card">
                        <Card.Body>
                          <Card.Title className="skill-card-title">{skill.title}</Card.Title>
                          <Card.Text className="skill-items">{skill.items}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </section>

          <section id="projects">
            <div className="container">
              <h2>Projects</h2>
              <Row>
                {projects.map((project, index) => (
                  <Col md={4} className="project-col" key={index}>
                    <Card className="project-card">
                      <Card.Img variant="top" src={project.image} alt={`Project ${index + 1} screenshot`} />
                      <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        {project.description.map((paragraph, index) => (
                          <Card.Text key={index}>{paragraph}</Card.Text>
                        ))}
                        {project.technologies.map((tech, index) => (
                          <Card.Text key={index}>{tech}</Card.Text>
                        ))}
                        <Card.Text>{project.workedOn}</Card.Text>
                        {project.links.map((link, index) => (
                          <Card.Link href={link.href} key={index}>{link.text}</Card.Link>
                        ))}
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </section>

          <section id="experience">
            <div className="container">
              <h2>Experience</h2>
              {jobs.map((job, index) => (
                <Row className="job-row" key={index}>
                  <Card className="job-card">
                    <Card.Body>
                      <Card.Title>{job.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
                      <div>
                        <strong>Period:</strong> {job.period}<br />
                        <strong>Skills:</strong> {job.skills}<br />
                        <strong>Responsibilities:</strong>
                        <ul>
                          {job.responsibilities.map((responsibility, i) => (
                            <li key={i}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                    </Card.Body>
                  </Card>
                </Row>
              ))}
            </div>
          </section>

          <section id="education">
            <div className="container">
              <h2>Education</h2>
              <Card className="education-card">
                <Card.Body>
                  <Card.Title>{education.university}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{education.degree}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">{education.period}</Card.Subtitle>
                  <div>
                    <strong>Relevant Coursework:</strong>
                    <ul>
                      {education.coursework.map((course, index) => (
                        <li key={index}>{course}</li>
                      ))}
                    </ul>
                    <strong>Honors and Awards:</strong>
                    <ul>
                      {education.honors.map((honor, index) => (
                        <li key={index}>{honor}</li>
                      ))}
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </section>

          <section id="contact">
            <div className="container">
              <h2>Contact</h2>
              <p>I'm always open to discussing job opportunities, collaborations, or just general inquiries. Feel free to reach out to me through any of the social media platforms linked in the footer, or send me an email directly at:</p>
              <p><a href="mailto:f35guo@uwaterloo.ca">f35guo@uwaterloo.ca</a></p>
            </div>
          </section>

          <div className="container">
            <h2>Resume</h2>
            <p><a href="/FALL2023_RESUME_FENG_GUO_FS.pdf" download>Click here to download my resume</a></p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Home