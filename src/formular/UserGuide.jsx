import '../styles/Doc.css';

const UserGuide = () => {
    return (
        <div className="pa4">
            <h1>HCI Assistant User Guide</h1>
            <section className="pt2">
                <h2>Who should read this?</h2>
                <p>This is a guide explaining how you can effectively use the applicationHCI Assistant. You can access the application at: <a href="https://assistant-hci.cyclic.app">link here</a></p>
                <p>There are two  ways you can use this application, as a normal user (the form app) and as a researcher (the dashboard app), the most relevant details will be explained here, in this guide.</p>
                <p>There are no prerequisites for using HCI Assistant, except having a tablet and desktop.</p>
            </section>
            <section className="pt4">
                <h2>Who is the application for?</h2>
                <p>HCI Assistant's purpose is to get enough information from the form that will inform the researcher about the way users perceive, understand, react and feel about different gestures that are used on a daily basis on smart devices.</p>
                <p>Because this kind of information is hard to get and see more in detail what happens in some situations with the users this form has the possibility to give this access without a lot of trouble.</p>
                <p>If you wish to contribute to the effort of the researchers to understand how a user interacts the best with smart devices then the form application is for you! On the other hand if you want to understand better how gestures are understood by users then the dashboard application with the results is for you!</p>
            </section>
            <section className="pt4">
                <h2>Use-cases</h2>
                <p>In this section it will explain the two ways how to use the HCI Assistant application.</p>
                <h4>Completing the form</h4>
                <p>In this scenario you need to open the application on a tablet device web browser. The app will know that this is the use case for the form and will give access to a page that has a “Form” button that will open the form.</p>
                <img src="images/doc/image5.png" alt="error" className="w-25" ></img>
                <p>After this screen appears, it is needed to press the form button that will open the form experience, where will be needed to complete all the questions as sincere as possible.</p>
                <img src="images/doc/image3.png" alt="error" className="w-25"></img>
                <p>In this instance this is a normal screen for a form that requests to decide with what option the user will continue.</p>
                <img src="images/doc/image2.png" alt="error" className="w-25"></img>
                <p>The above screen is an emulation of the interaction that can be done through a tablet size screen. This way the user can interact with this part of the form like being in the actual tablet and scrolling or swiping through.</p>
                <img src="images/doc/image7.png" alt="error" className="w-25"></img>
                <p>After all the questions are answered and all the emulations completed the form will come to an end by explaining to the users what they helped with and from there they can finish by pressing the Finish button.</p>
                <h4>Evaluating the results of the form</h4>
                <p>In this scenario you need to open the application on a desktop device web browser. The app will know that this is the use case for the dashboard and will give access to a page that has a “Dashboard” button that will open the Dashboard of the app.</p>
                <img src="images/doc/image4.png" alt="error" className="w-75"></img>
                <p>After this screen appears, it is needed to press the dashboard button that will open the dashboard experience, where it will be needed to choose the filters that are the most useful for the research and the results will be displayed as graphs or fulltext.</p>
                <img src="images/doc/image6.png" alt="error" className="w-75"></img>
                <p>The first step is to select each filter from the left of the screen and apply individually. After the right data was selected the “Find” button will be pressed. For each filter repeat this interaction. With each filter applied a more filtered result will appear on the right part of the screen.</p>
                <img src="images/doc/image1.png" alt="error" className="w-75"></img>
            </section>
            <section className='pt4'>
                <h2>Video Demonstration</h2>
                <h4>For the form on a tablet web browser</h4>
                <iframe src="https://drive.google.com/file/d/1_Cv81O4xNS1bhKBO_7UaxeTmAVULMKuq/preview" width="1366" height="768" allow="autoplay" title='Form video' allowFullScreen></iframe>
                <h4>For the dashboard on a desktop web browser</h4>
                <iframe src="https://drive.google.com/file/d/1451wiuzLkK7EgdIM3fNek_RKAZ33YNu0/preview" width="1366" height="768" allow="autoplay" title='Dashboard video' allowFullScreen></iframe>
            </section>
        </div>
    );
};

export default UserGuide;