import React from "react" ;   
 
type ServiceCard ={   
   image: string;
   caption: string;
   description: string;  
  };
 
const ServiceCard:React.FC<ServiceCard>=({image, caption, description })=>{    
    return(
        <React.Fragment>                
                 <div className="services__row__points__point">
                        <img className="services__row__points__point__image" src={image} alt={caption}/>
                        <h6 className="services__row__points__point__heading">{caption}</h6>
                        <p className="services__row__points__point__content" >{description}</p>
                        <span className="services__row__points__point__effect"></span>
                    </div>
        </React.Fragment>
    )
}
export default ServiceCard;

 



 