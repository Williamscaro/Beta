import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faGithub,faYoutube,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'


const FacebookIcon = () => {return <FontAwesomeIcon icon={faFacebook} />}
const GithubIcon = () => {return <FontAwesomeIcon icon={faGithub} />}
const LinkedinIcon = () => {return <FontAwesomeIcon icon={faLinkedinIn} />}
const YoutubeIcon = () => {return <FontAwesomeIcon icon={faYoutube} />}

export  {FacebookIcon, GithubIcon, YoutubeIcon, LinkedinIcon};