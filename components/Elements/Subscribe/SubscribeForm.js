import MailchimpSubscribe from "react-mailchimp-subscribe"
 
const url = "https://bangladevs.us16.list-manage.com/subscribe/post?u=a31c01f1ea7e047420474b3c5&amp;id=2729646c8f";
 
// simplest form (only email)
const SubscribeForm = () => <MailchimpSubscribe url={url}/>

export default SubscribeForm;