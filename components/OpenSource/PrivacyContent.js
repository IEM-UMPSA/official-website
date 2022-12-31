import React, {useState} from 'react';
import Link from 'next/link';

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
                      <h4 className="privacy-title mb-10"><b>Get</b> Started</h4>
                      <p className="mb-4">The term open source refers to any program whose source code is made available for use or modification as users or other developers see fit. Unlike proprietary software, open source software is computer software that is developed as a public, open collaboration and made freely available to the public.</p>
                      <p>IEM-UMPSS official website is created by <Link className="underline hover:underline" href="/development-team">IEM Web Dev team</Link>. The project creator Hovah thinks that it is necessary to have the source code open sourced so that the website can be modified and maintained by UMP community. This also prevent the tragedy of dying website when the development team members are graduated or have no time to maintain the website.</p>
                    </div>
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-10"><b>Why</b> Open Source</h4>
                      <p className="mb-4">Open source encourages innovation through collaboration. Without it, many of the technologies we take for granted today would never have developed, or would be locked away behind patent law. The open source movement is the reason that technology has developed at such a breakneck pace for the past few decades.</p>
                      <p>Large Internet companies, like Facebook and Google, have even opened up some of their proprietary innovations to the open source community. Disseminating the technology improves the experience for all users by creating efficiencies and making the entire Internet more streamlined.</p>
                    </div>
                  </div>
                   )}

                {objective && (
                  <div className="tab-pane fade show active" id="Objective" role="tabpanel" aria-labelledby="Objective-tab">
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-10"><b>Objectives</b>  </h4>
                      <p className="mb-4">The objectives of having IEM-UMPSS official website open sourced are shown as below:</p>
                      <ol>
                        <li className="mb-2">1. Nurture a new generation of UMP developers through open source project</li>
                        <li className="mb-2">2. Provide a environment where UMP students can come together and solve coding problem</li>
                        <li className="mb-2">3. Improve “C3” thinking: Critical, creative and collaborative among UMP students</li>
                        <li className="mb-2">4. Cultivate professional practice among the open source contributors </li>
                        <li className="mb-2">5. Improve hard skill and experience of the contributors</li>
                      </ol>
                    </div>
                  
                  </div>
                    )}  

                {join && (
                  <div className="tab-pane fade show active" id="join" role="tabpanel" aria-labelledby="join-tab">
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-10"><b>Github </b>- What is it?</h4>
                      <p>GitHub, Inc. is an Internet hosting service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project.</p>
                    </div>
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-10"><b>Create </b> your first Github account</h4>
                      <p className="mb-2">To create your GitHub account, kindly follow <Link className="underline hover:underline" href="https://github.com/join" target="_blank">this link.</Link></p>
                      <p className="mb-2">Once you done create your GitHub account, go to  <Link className="underline hover:underline" href="https://github.com/IEM-UMPSS/iemumpss" target="_blank">https://github.com/IEM-UMPSS/iemumpss</Link> and clone the project.</p>
                      <p className="mb-2">You may use version control like <Link className="underline hover:underline" href="https://git-scm.com/" target="_blank">Git</Link>, <Link className="underline hover:underline" href="https://www.sourcetreeapp.com/" target="_blank">SourceTree</Link>, <Link className="underline hover:underline" href="https://desktop.github.com/" target="_blank">GitHub Desktop</Link> etc. to clone the project.</p>
                      <p className="mb-2">To get started with GitHub, you may read <Link className="underline hover:underline" href="https://docs.github.com/en/get-started/quickstart/hello-world" target="_blank">this documentation</Link>.</p>
                    </div>
                  </div>
                    )}

     

                  {contribute && (
                  <div className="tab-pane fade show active" id="contribute" role="tabpanel" aria-labelledby="contribute-tab">
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-10"><b>How </b> to Contribute</h4>
                      <p className="mb-4">Anyone who would like to contribute to the project may followed the following steps:</p>
                      <ol>
                        <li className="mb-2 list-decimal ml-6 pl-2">Clone the project</li>
                        <li className="mb-2 list-decimal ml-6 pl-2">Create your git branch</li>
                        <li className="mb-2 list-decimal ml-6 pl-2">Make amendment to the part you want</li>
                        <li className="mb-2 list-decimal ml-6 pl-2">Push to the branch</li>
                        <li className="mb-2 list-decimal ml-6 pl-2">Create a pull request</li>
                        <li className="mb-2 list-decimal ml-6 pl-2">Resolve the conflict if any</li>
                        <li className="mb-2 list-decimal ml-6 pl-2">Request a pull request merge</li>
                        <li className="mb-2 list-decimal ml-6 pl-2">Wait for the reviewer to review your code</li>
                        <li className="mb-2 list-decimal ml-6 pl-2">The project owner approves your merge</li>
                        <li className="mb-2 list-decimal ml-6 pl-2">Congratulations, you just contribute to your first open source project</li>
                      </ol>
                      <p className="mb-2">For more information, kindly read <Link href="https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request" className="underline hover:underline" target="_blank">this documentation</Link>.</p>
                    </div>
                  
                  </div>
                  )}
                  
                  {term && (
                  <div className="tab-pane  fade show active" id="privacy" role="tabpanel" aria-labelledby="privacy-tab">
                    <div className="privacy-item mb-55">
                      <h4 className="privacy-title mb-2"><b>Privacy Policy</b> </h4>
                        <p className="privacy-item mb-4">Last updated: December 30, 2022</p>
                        <p className="privacy-item mb-4">This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
                        <p className="privacy-item mb-4">We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <Link href="https://www.privacypolicies.com/privacy-policy-generator/" className="underline hover:underline" target="_blank">Privacy Policy Generator</Link>.</p>


<h1 className="privacy-title mb-2 "><b>Interpretation and Definitions </b></h1>
<h2 className="privacy-title mb-2 text-xl font-semibold	">Interpretation</h2>
<p className="privacy-item mb-4">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
<h2 className="privacy-title mb-2  text-xl font-semibold	">Definitions</h2>
<p>For the purposes of this Privacy Policy:</p>
<ul>
<li className="privacy-title mb-2 list-disc	">
<p><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</p>
</li>
<li className="privacy-title mb-2 list-disc	">
<p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to The Institution of Engineers Malaysia - UMP Student Section, Universiti Malaysia, 26600 Pekan, Pahang.</p>
</li>
<li className="privacy-title mb-2 list-disc	">
<p><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>
</li>
<li className="privacy-title mb-2 list-disc	"> 
<p><strong>Country</strong> refers to:  Malaysia</p>
</li>
<li className="privacy-title mb-2 list-disc	">
<p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
</li>
<li className="privacy-title mb-2 list-disc	">
<p><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p>
</li>
<li className="privacy-title mb-2 list-disc	">
<p><strong>Service</strong> refers to the Website.</p>
</li>
<li className="privacy-title mb-2 list-disc	">
<p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>
</li>
<li className="privacy-title mb-2 list-disc	">
<p><strong>Third-party Social Media Service</strong> refers to any website or any social network website through which a User can log in or create an account to use the Service.</p>
</li>
<li className="privacy-title mb-2 list-disc	">
<p><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
</li>
<li className="privacy-title mb-2 list-disc	">
<p><strong>Website</strong> refers to IEM-UMPSS, accessible from <a href="https://iemumpss.vercel.app/" rel="external nofollow noopener" className="underline" target="_blank">https://iemumpss.vercel.app/</a></p>
</li>
<li className="privacy-title mb-10 list-disc	">
<p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
</li>
</ul>
<h1 className="privacy-title mb-6 font-bold	">Collecting and Using Your Personal Data</h1>
<h2 className="privacy-title mb-2 text-xl	font-semibold">Types of Data Collected</h2>
<h3 className="privacy-title mb-2 text-lg		font-medium	">Personal Data</h3>
<p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
<ul>
<li className="privacy-title mb-2 list-disc	">
<p>Email address</p>
</li>
<li className="privacy-title mb-2 list-disc	">
<p>First name and last name</p>
</li>
<li className="privacy-title mb-2 list-disc	">
<p>Phone number</p>
</li>
<li className="privacy-title mb-2 list-disc	">
<p>Address, State, Province, ZIP/Postal code, City</p>
</li>
<li className="privacy-title mb-4 list-disc	">
<p>Usage Data</p>
</li>
</ul>
<h3 className="privacy-title mb-2 text-lg	font-medium	">Usage Data</h3>
<p className="privacy-item mb-2">Usage Data is collected automatically when using the Service.</p>
<p className="privacy-item mb-2">Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
<p className="privacy-item mb-2">When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
<p className="privacy-item mb-4">We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
<h3 className="privacy-title mb-2 text-lg	">Information from Third-Party Social Media Services</h3>
<p className="privacy-item mb-2">The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:</p>
<ul>
<li className="privacy-title mb-2 list-disc	">Google</li>
<li className="privacy-title mb-2 list-disc	">Facebook</li>
<li className="privacy-title mb-2 list-disc	">Twitter</li>
<li className="privacy-title mb-4 list-disc	">LinkedIn</li>
</ul>
<p className="privacy-item mb-2">If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address, Your activities or Your contact list associated with that account.</p>
<p className="privacy-item mb-4">You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.</p>
<h3 className="privacy-title mb-2 text-lg font-medium	">Tracking Technologies and Cookies</h3>
<p className="privacy-item mb-2">We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>
<ul>
<li className="privacy-title mb-2 list-disc	"><strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</li>
<li className="privacy-title mb-4 list-disc	"><strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</li>
</ul>
<p className="privacy-item mb-4">Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies on the <a href="https://www.privacypolicies.com/blog/privacy-policy-template/#Use_Of_Cookies_Log_Files_And_Tracking" className="underline" target="_blank">Privacy Policies website</a> article.</p>
<p className="privacy-item mb-2">We use both Session and Persistent Cookies for the purposes set out below:</p>
<ul>
<li className="privacy-title mb-2 list-disc	">
<p><strong>Necessary / Essential Cookies</strong></p>
<p>Type: Session Cookies</p>
<p>Administered by: Us</p>
<p>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
</li>
<li className="privacy-title mb-2 list-disc	">
<p><strong>Cookies Policy / Notice Acceptance Cookies</strong></p>
<p>Type: Persistent Cookies</p>
<p>Administered by: Us</p>
<p>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
</li>
<li className="privacy-title mb-2 list-disc">
<p><strong>Functionality Cookies</strong></p>
<p>Type: Persistent Cookies</p>
<p>Administered by: Us</p>
<p>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
</li>
</ul>
<p className="privacy-item mb-6">For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.</p>
<h2 className="privacy-title mb-2 text-xl	font-semibold">Use of Your Personal Data</h2>
<p>The Company may use Personal Data for the following purposes:</p>
<ul>
<li className="privacy-title mb-2 list-disc">
<p><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</p>
</li>
<li className="privacy-title mb-2 list-disc">
<p><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>
</li>
<li className="privacy-title mb-2 list-disc">
<p><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</p>
</li>
<li className="privacy-title mb-2 list-disc">
<p><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>
</li>
<li className="privacy-title mb-2 list-disc">
<p><strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</p>
</li>
<li className="privacy-title mb-2 list-disc">
<p><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</p>
</li>
<li className="privacy-title mb-2 list-disc">
<p><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</p>
</li>
<li className="privacy-title mb-4 list-disc">
<p><strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</p>
</li>
</ul>
<p>We may share Your personal information in the following situations:</p>
<ul>
<li className="privacy-title mb-2 list-disc"><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service,  to contact You.</li>
<li className="privacy-title mb-2 list-disc"><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
<li className="privacy-title mb-2 list-disc"><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
<li className="privacy-title mb-2 list-disc"><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
<li className="privacy-title mb-2 list-disc"><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.</li>
<li className="privacy-title mb-4 list-disc"><strong>With Your consent</strong>: We may disclose Your personal information for any other purpose with Your consent.</li>
</ul>
<h2 className="privacy-title mb-2 text-xl	font-semibold">Retention of Your Personal Data</h2>
<p className="privacy-item mb-2">The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
<p className="privacy-item mb-4">The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
<h2 className="privacy-title mb-2 text-xl	font-semibold">Transfer of Your Personal Data</h2>
<p className="privacy-item mb-2">Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
<p className="privacy-item mb-2">Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
<p className="privacy-item mb-4">The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
<h2 className="privacy-title mb-2 text-xl	font-semibold">Delete Your Personal Data</h2>
<p className="privacy-item mb-2">You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
<p className="privacy-item mb-2">Our Service may give You the ability to delete certain information about You from within the Service.</p>
<p className="privacy-item mb-2">You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.</p>
<p className="privacy-item mb-4">Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>
<h2 className="privacy-title mb-4 text-xl	font-semibold">Disclosure of Your Personal Data</h2>
<h3 className="privacy-title mb-2 text-xl	font-medium">Business Transactions</h3>
<p className="privacy-item mb-4">If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
<h3 className="privacy-title mb-2 text-xl	font-medium">Law enforcement</h3>
<p className="privacy-item mb-4">Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
<h3 className="privacy-title mb-2 text-xl	font-medium">Other legal requirements</h3>
<p className="privacy-item mb-4">The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
<ul>
<li className="privacy-title mb-2 list-disc">Comply with a legal obligation</li>
<li className="privacy-title mb-2 list-disc">Protect and defend the rights or property of the Company</li>
<li className="privacy-title mb-2 list-disc">Prevent or investigate possible wrongdoing in connection with the Service</li>
<li className="privacy-title mb-2 list-disc">Protect the personal safety of Users of the Service or the public</li>
<li className="privacy-title mb-4 list-disc">Protect against legal liability</li>
</ul>
<h2 className="privacy-title mb-2 text-xl	font-semibold">Security of Your Personal Data</h2>
<p className="privacy-item mb-4">The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
<h1 className="privacy-title mb-2 text-xl	font-bold">Children's Privacy</h1>
<p className="privacy-item mb-2">Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
<p className="privacy-item mb-4">If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>
<h1 className="privacy-title mb-2 text-xl	font-bold">Links to Other Websites</h1>
<p className="privacy-item mb-2">Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
<p className="privacy-item mb-4">We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
<h1 className="privacy-title mb-2 text-xl	font-bold">Changes to this Privacy Policy</h1>
<p className="privacy-item mb-2">We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
<p className="privacy-item mb-2">We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>
<p className="privacy-item mb-4">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
<h1 className="privacy-title mb-2 text-xl	font-bold">Contact Us</h1>
<p className="privacy-item mb-2">If you have any questions about this Privacy Policy, You can contact us:</p>
<ul>
<li className="privacy-title mb-4 list-disc">By email: <Link className="underline" href="mailto:iem@ump.edu.my" target="_top">iem@ump.edu.my</Link></li>
</ul>
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