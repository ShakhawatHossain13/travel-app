import React from "react" ;   
 
type DestinationCard ={   
   image: string;
   caption: string;
   description: string;  
  };
 
const DestinationCard:React.FC<DestinationCard>=({image, caption, description })=>{    
    return(
        <React.Fragment>                
                <div className="destinations__row__places__point">
                        <img className="destinations__row__places__point__image" alt="Rome"/>
                        <div className="destinations__row__places__point__content">
                            <p className="destinations__row__places__point__content__name">
                                Rome, Italy <span className="destinations__row__places__point__content__name__amount">$5,42K</span>
                            </p>
                            <p className="destinations__row__places__point__content__trip">
                                <img className="destinations__row__places__point__content__trip__image" alt=""/>
                                <span className="destinations__row__places__point__content__trip__days">10 days trip</span>
                            </p>
                        </div>                         
                </div>
        </React.Fragment>
    )
}
export default DestinationCard;

 



 