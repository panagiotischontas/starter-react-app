const Wiki = () => {
    return (
        <div className="pa4">
            <h2>HCI Assistant Wiki</h2>
            <p>This is a wiki for HCI Assistant application</p>
            <div>
                <p>
                    <span className="red">[Important]</span>Final deliverables:
                </p>
                <ul>
                    <li><a href="Scholarly HTML/Technical Report/index.html">Technical Report</a></li>
                    <li><a href="/user-guide">User Guide</a></li>
                    <li><a href="https://drive.google.com/file/d/1451wiuzLkK7EgdIM3fNek_RKAZ33YNu0/view?usp=share_link">Video demonstration for dashboard</a></li>
                    <li><a href="https://drive.google.com/file/d/1_Cv81O4xNS1bhKBO_7UaxeTmAVULMKuq/view?usp=share_link">Video demonstration for form</a></li>
                    <li><a href="/">Application (use a tablet to access the form or use a PC to access the dashboard)</a></li>
                    <li><a href="example.json">Example json</a></li>
                </ul>
            </div>
            <section>
                <p>Graphical resources</p>
                <ul>
                    <li><a href="images/tech/image4.png">Flow chart</a></li>
                    <li><a href="images/tech/image3.png">Backend chart</a></li>
                    <li><a href="images/tech/image2.png">Form schema org</a></li>
                    <li><a href="images/tech/image1.png">Dashboard schema org</a></li>
                </ul>
            </section>
            <section>
                <h4>Action items and contributions</h4>
                <ol>
                    <li>[Chontas Panagiotis] Think of the architecture of the whole application and functions</li>
                    <li>[Chontas Panagiotis] Research which are the most used gestures and representative applications that have them</li>
                    <li>[Chontas Panagiotis] Create the list with all the required questions for creating a clear view of the results of the research</li>
                    <li>[Chontas Panagiotis] Create the designs for the emulations</li>
                    <li>[Chontas Panagiotis] Implement the UI part of the application</li>
                    <li>[Chontas Panagiotis] Create API</li>
                    <li>[Chontas Panagiotis] Write some schema.org vocabulary for the project</li>
                    <li>[Chontas Panagiotis] Video demonstration of the application</li>
                    <li>[Chontas Panagiotis] Write Scholarly HTML Article</li>
                    <li>[Chontas Panagiotis] Write User Guide</li>
                </ol>
            </section>
            <section>
                <h4>Important links</h4>
                <li><a href="https://github.com/panagiotischontas/starter-express-api">Application code for API</a></li>
                <li><a href="https://github.com/panagiotischontas/starter-react-app">Application code for UI</a></li>
            </section>
        </div>
    );
};

export default Wiki;