import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://www.linkedin.com/in/feng-guo-546a84143/">
        <img className={styles.icon} src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-256.png" alt="LinkedIn" />
      </a>
      <a href="https://github.com/feng-guo">
        <img className={styles.icon} src="https://cdn1.iconfinder.com/data/icons/picons-social/57/github_rounded-512.png" alt="GitHub" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100009677594415">
        <img className={styles.icon} src="https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-256.png" alt="Facebook" />
      </a>
      <a href="https://twitter.com/Feggle_Blast">
        <img className={styles.icon} src="https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-256.png" alt="Twitter" />
      </a>
      <a href="https://www.instagram.com/__feng.g/">
        <img className={styles.icon} src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-256.png" alt="Instagram" />
      </a>
      <a href="https://devpost.com/feng-guo">
        <img className={styles.icon} src="https://cdn.icon-icons.com/icons2/2699/PNG/512/devpost_logo_icon_169279.png" alt="Devpost" />
      </a>
      <a href="https://www.youtube.com/channel/UCv00xkwDT9W5GRjLHIz9-GQ">
        <img className={styles.icon} src="https://cdn3.iconfinder.com/data/icons/picons-social/57/18-youtube-256.png" alt="YouTube" />
      </a>
      <a href="https://myanimelist.net/profile/Feggle_Blast">
        <img className={styles.icon} src="https://cdn.myanimelist.net/images/favicon.ico" alt="MyAnimeList" />
      </a>
      <a href="mailto:f35guo@uwaterloo.ca">
        <img className={styles.icon} src="https://cdn0.iconfinder.com/data/icons/picons-social/57/67-gmail-2-512.png" alt="Email" />
      </a>
      
    </footer>
  )
}