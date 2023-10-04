import "../../Style/Titlebar.css";

const Titlebar = () => {

    const downloadTxtFile = () => {
        fetch('images/Kenil_v_resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'KenilResume.pdf';
                alink.click();
            })
        })
    }


  return (
    <div className="homePage">
    <div className="Titlebar">
        <div className="TitlebarItem">Kenil Vaghasiya</div>
        <div className="resumeBtn"  onClick={downloadTxtFile} >Resume</div> 
    </div>
    <div className="mainSection">
        
    </div>
    <div className="bgDesign">
        <img src="images/es1.svg" alt="bgimage"></img>
        </div>
    </div>

    

  );
};

export default Titlebar