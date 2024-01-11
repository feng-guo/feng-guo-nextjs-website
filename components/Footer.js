import { Container, Row, Col } from 'react-bootstrap'
import styles from './Footer.module.css'

export default function Footer() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/feng-guo-546a84143/",
      imgSrc: "https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-256.png",
      alt: "LinkedIn"
    },
    {
      href: "https://github.com/feng-guo",
      imgSrc: "https://cdn1.iconfinder.com/data/icons/picons-social/57/github_rounded-512.png",
      alt: "GitHub"
    },
    {
      href: "https://www.facebook.com/profile.php?id=100009677594415",
      imgSrc: "https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-256.png",
      alt: "Facebook"
    },
    {
      href: "https://twitter.com/Feggle_Blast",
      imgSrc: "https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-256.png",
      alt: "Twitter"
    },
    {
      href: "https://www.instagram.com/__feng.g/",
      imgSrc: "https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-256.png",
      alt: "Instagram"
    },
    {
      href: "https://devpost.com/feng-guo",
      imgSrc: "https://cdn.icon-icons.com/icons2/2699/PNG/512/devpost_logo_icon_169279.png",
      alt: "Devpost"
    },
    {
      href: "https://www.youtube.com/channel/UCv00xkwDT9W5GRjLHIz9-GQ",
      imgSrc: "https://cdn3.iconfinder.com/data/icons/picons-social/57/18-youtube-256.png",
      alt: "YouTube"
    },
    {
      href: "https://myanimelist.net/profile/Feggle_Blast",
      imgSrc: "https://cdn.myanimelist.net/images/favicon.ico",
      alt: "MyAnimeList"
    },
    {
      href: "mailto:f35guo@uwaterloo.ca",
      imgSrc: "https://cdn0.iconfinder.com/data/icons/picons-social/57/67-gmail-2-512.png",
      alt: "Email"
    },
  ]
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="justify-content-md-center justify-content-center">
          {socialLinks.map((link, index) => (
            <Col key={index} xs={6} md={1}>
              <a href={link.href}>
                <img className={styles.icon} src={link.imgSrc} alt={link.alt} />
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </footer>
  )
}