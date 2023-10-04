import "../../Style/card.css"

const CardSection =(prop)=>{
    return(<>
         <div className="cardSection"  style={{ marginTop:prop.margin }}>
         <div className="titleBAr">
            <div className="titlename">{prop.name}</div>
            <div className="dateSection">{prop.date}</div>
         </div>
         <div className="companyName">
         {prop.company}
         </div>

         <div className="textSection">
            <p>{prop.text}</p>
         </div>
        </div>
    </>)
}

export default CardSection