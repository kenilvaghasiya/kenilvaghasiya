import "../../Style/contact.css"

const Contact =(props)=>{

    const downloadTxtFile = () => {
        fetch('/images/kenil_resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'kenil_resume.pdf';
                alink.click();
            })
        })
    }
    return(<>

    <div className="Contactus" ref={props.contactRef}>
    <div className="Contactus_main">

        <img src="/images/kenilVaghasiya.jpg" className="Contactus_mainimg" />

      <div className="Contactus_mainimg-left">
        <div className="Contactus_mainimgName">Kenil Vaghasiya</div>
        <div className="Contactus_mainimgpo">Full Stack Developer</div>
        <div className="Contactus_mainimgEmail">kenilvaghasiya10@gmail.com</div>
        <div className="Contactus_mainimgBtn" onClick={downloadTxtFile}>Resume</div>

      </div>


    </div>
    </div>



    </>)
}

export default Contact