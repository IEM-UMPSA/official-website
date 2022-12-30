import React, {useState} from 'react';

const PrivacyContent = () => {
  const [start, getStarted] = useState(true);
  const [join, joinGithub] = useState(false);
  const [objective, setObjective] = useState(false);
  const [contribute, startContribute] = useState(false);
  const [term, checkTerm] = useState(false);

  const getStartedHandler = () => {
      getStarted(true);
      joinGithub(false);
      setObjective(false);
      startContribute(false);
      checkTerm(false);

  };
  const joinGithubHandler = () => {
      getStarted(false);
      joinGithub(true);
      setObjective(false);
      startContribute(false);
      checkTerm(false);

  };
  const setObjectiveHandler = () => {
    getStarted(false);
    joinGithub(false);
    setObjective(true);
    startContribute(false);
    checkTerm(false);

  };
  const setContributeHandler = () => {
    getStarted(false);
    joinGithub(false);
    setObjective(false);
    startContribute(true);
    checkTerm(false);

  };
  const checkTermHandler = () => {
    getStarted(false);
    joinGithub(false);
    setObjective(false);
    startContribute(false);
    checkTerm(true);
  };

  return (
    <>
      <div className="privacy-content-area pt-135 pb-20">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="privacy-nav mb-55">
                <div className="privacy-nav-wrapper">
                  <ul className="nav nav-tabs flex-column" id="privacy-nav" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button onClick={getStartedHandler} className={start ? 'nav-link active': 'nav-link'}  id="started-tab" data-bs-toggle="tab" data-bs-target="#started" type="button" role="tab" aria-controls="started" aria-selected="true">Get Started</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button onClick={setObjectiveHandler} className={objective ? 'nav-link active': 'nav-link'} id="Objective-tab" data-bs-toggle="tab" data-bs-target="#Objective" type="button" role="tab" aria-controls="Objective" aria-selected="false">Objectives</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button onClick={joinGithubHandler}   className={join ? 'nav-link active': 'nav-link'} id="join-tab" data-bs-toggle="tab" data-bs-target="#join" type="button" role="tab" aria-controls="join" aria-selected="false">Join GitHub</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button onClick={setContributeHandler}   className={contribute ? 'nav-link active': 'nav-link'} id="contribute-tab" data-bs-toggle="tab" data-bs-target="#contribute" type="button" role="tab" aria-controls="contribute" aria-selected="false">How to Contribute</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button onClick={checkTermHandler}   className={term ? 'nav-link active': 'nav-link'} id="privacy-tab" data-bs-toggle="tab" data-bs-target="#privacy" type="button" role="tab" aria-controls="privacy" aria-selected="false">Privacy Policy</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="privacy-content-wrapper">
                <div className="tab-content" id="privacy-nav-content">

                {start && (
                  <div className="tab-pane fade show active" id="started" role="tabpanel" aria-labelledby="started-tab">
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-20"><b>Get</b> Started</h4>
                      <p>IEM-UMPSS is a open source project. It was first created by Hovah Yii and the IEM Web Dev Team. </p>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia</p>
                    </div>
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-20"><b>Know</b> More</h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim.</p>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia</p>
                    </div>
                  </div>
                   )}

                {join && (
                  <div className="tab-pane fade show active" id="join" role="tabpanel" aria-labelledby="join-tab">
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-20"><b>Terms and </b> Conditions</h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-20"><b>Agreement </b> Required?</h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                      <ul>
                        <li>If users abuse your website or mobile app in any way, you can terminate their account. Your Termination clause can inform users that their accounts would be terminated if they abuse your service.</li>
                        <li>If users can post content on your website or mobile app (create content and share it on your platform), you can remove any content they created if it infringes copyright. Your Terms and Conditions will inform users that they can only create and/or share content they own rights to. Similarly, if users can register for an account and choose a username, you can inform users that they are not allowed to choose usernames that may infringe trademarks, i.e. usernames like Google, Facebook, and so on.</li>
                        <li>If you sell products or services, you could cancel specific orders if a product price is incorrect. Your Terms and Conditions can include a clause to inform users that certain orders, at your sole discretion, can be canceled if the products ordered have incorrect prices due to various errors.</li>
                      </ul>
                    </div>
                  </div>
                    )}

                {objective && (
                  <div className="tab-pane fade show active" id="Objective" role="tabpanel" aria-labelledby="Objective-tab">
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-20"><b>How to</b> Login </h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-20"><b>Forgot </b> password ? </h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                  </div>
                    )}

                  {contribute && (
                  <div className="tab-pane fade show active" id="contribute" role="tabpanel" aria-labelledby="contribute-tab">
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-20"><b>Arange </b> Meeting</h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-20"><b>How to get</b> appointment</h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                  </div>
                  )}
                  
                  {term && (
                  <div className="tab-pane  fade show active" id="privacy" role="tabpanel" aria-labelledby="privacy-tab">
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-20"><b>Privacy </b> Policy</h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-20"><b>Company </b> Terms </h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                  </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyContent;