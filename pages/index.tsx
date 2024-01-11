import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import NavigationBar from '@components/NavigationBar'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Home: React.FC = () => {
  const aboutMeTexts = [
    'Hi there! I\'m Feng, a fourth-year computer engineering student at the University of Waterloo. I am currently seeking full-time opportunities for Fall 2024.',
    'I have two years of experience as a full-stack software engineer, with a passion for creating impactful solutions.',
    'My enthusiasm lies in workflow automation which has the power to simplify lives and free up time for more creative pursuits. I am particularly excited about the possibilities that AI brings, and I am currently learning and exploring its potential.',
    'I am customer-obsessed, and I greatly value any suggestions or feedback. I always look for ways to improve, and I am not afraid to take risks to try new things.',
    'I have worked at Top Hat and Thomson Reuters in the past, and I look forward to the next chapter of my life.',
    'In my spare time, I enjoy playing video games, supporting the Toronto Raptors, and collecting Hot Wheels. I\'m in the middle of building my project Koli Koli to catalog my collection, which you can read about down below!',
  ]

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
      title: 'Koli Koli (Personal Project)',
      image: 'https://i.imgur.com/RRmx50n.png',
      description: [
        'Koli Koli is a versatile collection tracking app, initially designed for managing my Hot Wheels collection.',
        'It provides an intuitive interface for cataloging owned items, managing a wishlist, and searching through the collection using tagged data.',
        'Its standout feature is the ability to add to the collection simply by uploading a photo and using a custom TensorFlow model to identify the unique item.',
        'Leveraging a TensorFlow model, the app identifies the item based on crowdsourced data and automatically adds it to your collection.'
      ],
      technologies: ['Frontend: Next.js, React, Typescript', 'Backend: Python, FastAPI, Tensorflow, KerasOCR, OpenCV', 'Infrastructure/Hosting: Docker, DigitalOcean, Netlify', 'Testing: Jest, React Testing Library, Cypress, Postman'],
      workedOn: 'December 2023 - Current',
      links: [
        { href: 'https://github.com/feng-guo/feng-guo-nextjs-website', text: 'Frontend' },
        { href: 'https://github.com/feng-guo/hotwheels-tensorflow', text: 'Backend' },
        { href: 'https://feng-guo.netlify.app/hot-wheels', text: 'Project Link' }
      ]
    },
    {
      title: 'Check Me Out (School Project)',
      image: 'https://i.imgur.com/TsenwgN.png',
      description: [
        'Check Me Out is a fully automated checkout system designed to streamline the shopping experience.',
        'Users simply place items on a conveyor belt, and the system takes care of the rest.',
        'A Raspberry Pi equipped with a camera uses an Edge Impulse model to identify each product, while a built-in scale in the conveyor belt accurately weighs items sold by weight.',
        'This project represents a significant step towards efficient, tech-driven retail solutions.'
      ],
      technologies: ['Frontend: React, JavaScript', 'Backend: Python, Flask, C++, Edge Impulse', 'Hardware: Raspberry Pi, Arduino'],
      workedOn: 'June 2023 - Current',
      links: [
        { href: 'https://github.com/feng-guo/fydp-2024', text: 'GitHub (private link)' },
      ]
    },
    {
      title: 'WorkDash (School Project)',
      image: 'https://i.imgur.com/QkJmI1Z.png',
      description: [
        'WorkDash revolutionizes the way minimum wage jobs are found and filled.',
        'It operates as a digital marketplace, connecting job seekers with employers through real-time communication.',
        'A standout feature is its innovative use of OpenCV to match IDs with submitted information, ensuring the authenticity of users.',
        'The platform also incorporates a rating and reporting system, promoting a fair and transparent work environment.',
        'Furthermore, it includes a map feature to display available jobs in the user\'s vicinity, making job hunting more efficient and localized.',
      ],
      technologies: ['Frontend: Kotlin, Jetpack UI', 'Backend: C++, OpenCV, Firebase'],
      workedOn: 'June 2023 - August 2023',
      links: [
        { href: 'https://github.com/feng-guo/WorkDash', text: 'GitHub' },
        { href: 'https://www.youtube.com/watch?v=9BQHa8ouryg', text: 'Video Demo' }
      ]
    },
    {
      title: 'Rate My Real Estate (Personal Project)',
      image: 'https://github.com/Felix-Suen/realtor/blob/master/src/img/tower.png?raw=true',
      description: [
        'Web application made with React that uses data from Realtor.ca listings to determine the value of a house using multi-variable regression.',
        'The application also uses the nearest schools, hospitals, and grocery stores to predict the price of a given house.',
      ],
      technologies: ['Frontend: React', 'Backend: Node.js, Realtor API, Heroku', 'Other Technologies: MapBox API'],
      workedOn: 'May 2020 - December 2020',
      links: [
        { href: 'https://github.com/Felix-Suen/realtor', text: 'GitHub' }
      ]
    },
    {
      title: 'Thinq (Hackathon Project)',
      image: 'https://i.imgur.com/KoEEm4H.png',
      description: [
        'Thinq is a revolutionary solution designed to bypass the high costs of mobile data.',
        'It leverages the power of SMS and a natural-language AI to deliver information directly to your phone without requiring an internet connection.',
        'Users can send an SMS message, which Thinq interprets and responds to with relevant information.',
        'From getting directions and weather updates to summarizing topics, defining words, tracking the stock market, and delivering news, Thinq does it all through SMS.',
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
      title: 'Blocklist (Hackathon Project)',
      image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/000/496/864/datas/original.png',
      description: [
        'Blocklist is a Chrome extension designed to enhance user safety and comfort while browsing the web. When a webpage contains a word on the user\'s blacklist, a popup warning is displayed, alerting the user about the contents of the site.',
        'The extension was built using Chrome Storage Sync for client-side block list storage, ensuring compatibility across platforms. Despite the team\'s initial unfamiliarity with web development and JavaScript, we successfully created a simplistic website and a functional Chrome extension.',
        'Notable features include the ability to customize the block list and a user-friendly interface.'
      ],
      technologies: ['Frontend: HTML5, CSS3, JavaScript', 'Backend: Chrome Storage Sync'],
      workedOn: 'October 2017 For MasseyHacks 3',
      links: [
        { href: 'https://github.com/samyarvahid/masseyhacks', text: 'GitHub' },
        { href: 'https://devpost.com/software/blocklist', text: 'Devpost' }
      ]
    },
  ]

  const jobs = [
    {
      title: 'Full-Stack Software Engineer Co-op',
      company: 'Top Hat Monocle',
      imageLink: 'https://tophat.com/wp-content/uploads/2017/05/tophat.png',
      period: 'Sep 2023 – Dec 2023',
      skills: 'Python, Django, Docker, React, Redux, JavaScript, FastAPI, GitHub Actions, Jenkins, Spinnaker, MySQL, PostgreSQL, ChatGPT API',
      responsibilities: [
        'Launched an experiment to create questions with generative AI to reduce assessment production times by 15% across 200 unique users.',
        'Integrated ChatGPT API into the platform to allow students to ask questions to a chatbot to reduce TA workload by 10%.',
        'Spearheaded the conversion of frontend tests to use React Testing Library to reduce test times by 20% without sacrificing coverage.',
      ]
    },
    {
      title: 'Cloud Software Engineer Co-op',
      company: 'Thomson Reuters',
      imageLink: 'https://fiu-original.b-cdn.net/fontsinuse.com/use-images/51/51197/51197.png?filename=tr_vrt_r_rgb_pos.png',
      period: 'Jan 2023 – Apr 2023',
      skills: 'C#, .NET, JavaScript, Microsoft Azure, Microsoft, SQL, OData, NUnit, Postman, Datadog',
      responsibilities: [
        'Developed client-facing APIs in C# as part of the Legal Tracker Services team to reduce client data processing time by 40%.',
        'Overhauled QA process automating Postman tests to the CI/CD build pipelines and Datadog Synthetic Tests to deployed environments to reduce production bugs by 15% and decrease manual testing times by 20%.'
      ]
    },
    {
      title: 'Full-Stack Software Engineer',
      company: 'Canada Startup Company (Startup)',
      imageLink: 'https://media.licdn.com/dms/image/D560BAQGv7dY3Uw33gw/company-logo_200_200/0/1666645334846/canstartco_logo?e=2147483647&v=beta&t=FKeil9F949a3yJcqLPs2hbKvSYdzwmCXUpSLhIOgO9M',
      period: 'Jan 2022 – Apr 2022',
      skills: 'Java, Kotlin, Android Studio, React Native, Node.js, React, Amazon AWS, Kubernetes',
      responsibilities: [
        'Coordinated the My Dress-AR team to design an application through business plans, pitch decks, and product mockups as the project lead for a $1 million valuation company.',
        'Integrated Google ARCore into the mobile platform to allow users to virtually try on clothing through Augmented Reality to increase customer engagement metrics by 30%.',
        'Scheduled application clusters with Kubernetes on AWS to increase application reliability by 60%.'
      ]
    },
    {
      title: 'Full-Stack Software Engineer',
      company: 'Exponet Canada (Startup)',
      imageLink: 'https://media.licdn.com/dms/image/C560BAQEVmOIdkOb9Ng/company-logo_200_200/0/1631388025382?e=2147483647&v=beta&t=VAXZv2pc9jiC_yeGy8BIyGmrI2bVczuODL9gYVuOtMc',
      period: 'May 2021 – Aug 2021',
      skills: 'Grails, Groovy, React/Redux, TypeScript, MongoDB, Amazon MWS API',
      responsibilities: [
        'Refactored the application system to automatically retrieve Amazon and eBay orders to eliminate manual workflows, reducing the error from human entry by 95%.',
        'Developed a framework to create automation rules for shipments to reduce order management time by 85%.',
        'Introduced QR scanning tools and algorithmically generated packaging suggestions to increase warehouse employee efficiency by 40%.'
      ]
    },
    {
      title: 'Software Developer',
      company: 'GlobalTrade Corporation (acquired by Komgo)',
      imageLink: 'https://media.licdn.com/dms/image/C4D0BAQH9Beer6nqrpg/company-logo_200_200/0/1630556717737/komgo_logo?e=2147483647&v=beta&t=t5rxVHrIUcMqjoN-IFBxoK6K0espFVp_xNgjP4QwDrM',
      period: 'Jan 2020 – May 2020',
      skills: 'Java, JavaScript, HTML/CSS, Oracle WebLogic, SQL, jQuery, AngularJS, Spring Framework',
      responsibilities: [
        'Delivered the new Trade Finance Exchange Platform to facilitate project financing between banks and corporations.',
        'Designed a centralized currency repository system to maintain consistent exchange rate values between companies to eliminate possible discrepancies by 99%.'
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
      <div style={{ overflow: 'hidden', maxHeight: '100vh', maxWidth: '100vw' }}>
        <img src="https://i.imgur.com/0o2gtCN.jpg" alt="Kyoto" id="splash" style={{ maxHeight: '100vh', maxWidth: '100vw', paddingBottom: '50px' }} />
      </div>
      <div style={{ overflow: 'hidden', maxWidth: '100vw' }} className="container">

        <main>
          <div className="container" style={{ paddingBottom: '30px' }}>
            <Header title="Welcome to my website!" />
          </div>

          <section id="about">
            <div className="container">
              <h2>About Me</h2>
              <Container>
                <Row>
                  <Col className="about-me-col">
                    {aboutMeTexts.map((text, index) => (
                      <p key={index}>{text}</p>
                    ))}
                  </Col>
                </Row>
              </Container>
            </div>
          </section>

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
                      <div className="img-wrapper">
                        <Card.Img variant="top" src={project.image} alt={`Project ${index + 1} screenshot`} />
                      </div>
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
                      <Row>
                        <Col xs={4} md={2}>
                          <img src={job.imageLink} alt={job.title} className="img-fluid" />
                        </Col>
                        <Col xs={8} md={10}>
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
                        </Col>
                      </Row>
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
            <div className="container" style={{ paddingTop: '50px' }}>
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