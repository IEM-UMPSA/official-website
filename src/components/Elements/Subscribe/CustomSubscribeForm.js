import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://bangladevs.us16.list-manage.com/subscribe/post?u=a31c01f1ea7e047420474b3c5&amp;id=2729646c8f";

//custom form
const CustomForm = ({ status, message, onValidated }) => {
    let email, name;
    const submit = () =>
      email &&
      name &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        NAME: name.value
      });

    return (
      <div
        style={{
          background: "#efefef",
          borderRadius: 2,
          padding: 10,
          display: "inline-block"
        }}
      >
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <input
          style={{ fontSize: "2em", padding: 5 }}
          ref={node => (name = node)}
          type="text"
          placeholder="Your name"
        />
        <br />
        <input
          style={{ fontSize: "2em", padding: 5 }}
          ref={node => (email = node)}
          type="email"
          placeholder="Your email"
        />
        <br />
        <button className="btn" style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
          Subscribe <i className="fas fa-long-arrow-alt-right"></i>
        </button>
      </div>
    );
  };

// use the render prop and your custom form
const CustomSubscribeForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <CustomForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
      </div>
    )}
  />
)

export default CustomSubscribeForm;