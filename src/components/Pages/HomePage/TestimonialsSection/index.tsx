import React from "react";
import "./style.css";
import person from "./person.png";

const TestimonialsSection: React.FC = () => {

    const [hide , setHide] = React.useState("none");;

    let slideIndex = 1;
const showSlides = (n:number ) =>{
    let i;
    slideIndex = n;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    (slides[i] as HTMLHeadingElement).style.display  = "none";  
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    (slides[slideIndex-1] as HTMLHeadingElement).style.display = "block";  
    dots[slideIndex-1].className += " active";
}



const [animation, setAnimation] = React.useState<string>("none");

const plusSlides = (n:number) =>{
        showCarousel(slide += n);
}

let slide = 1;
//showCarousel(slide);

const showCarousel = (n:number) => {
    let i;
    let slides = document.getElementsByClassName("testimonialsection__row__half__carousel__item"); 
    if (n > slides.length) {slide = 1}    
    if (n = (slides.length-1)) {
      (slides[0] as HTMLDivElement).style.display = "block"; 
    }
    if (n < 1) {slide = slides.length}
    for (i = 0; i < slides.length; i++) {
      (slides[i] as HTMLDivElement).style.display = "none";  
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].className = slides[i].className.replace(" Jactive", "");
      slides[i].className = slides[i].className.replace(" Jinactive", "");
    }
     
   ( slides[slide-1]  as HTMLDivElement).style.display = "block";  
    slides[slide-1].className += " Jactive";
    (slides[slide]  as HTMLDivElement).style.display = "block";  
    slides[slide].className += " Jinactive";
    
  
  }


       
  //  showSlides(1);
    return(
       <React.Fragment>
            <section className="testimonialsection">
                <div className="testimonialsection__row">                    
                <div className="testimonialsection__row__half">
                        <h5 className="testimonialsection__row__half__tagline">TESTIMONIALS</h5>
                        <h2 className="testimonialsection__row__half__heading mySlides fade">1 What people say
                            about Us.</h2>      
                        <h2 className="testimonialsection__row__half__heading mySlides fade">2 What people say
                            about Us.</h2> 
                        <h2 className="testimonialsection__row__half__heading mySlides fade">3 What people say
                            about Us.</h2>     
                        <div className="testimonialsection__row__half__buttons">
                            <button className="dot" onClick ={() =>showSlides(1)}></button> 
                            <button className="dot" onClick ={() =>showSlides(2)}></button> 
                            <button className="dot" onClick ={() =>showSlides(3)}></button> 
                        </div>                                          
                    </div>
                    <div className="testimonialsection__row__half">                       
                        <div className="testimonialsection__row__half__carousel">
                         <div className="testimonialsection__row__half__carousel__item">
                                <img className="testimonialsection__row__half__carousel__item__picture" src={person}  alt=""/>
                                <p className="testimonialsection__row__half__carousel__item__details">
                                     “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                                </p>
                                <h5 className="testimonialsection__row__half__carousel__item__name">Mike Taylor 1</h5>
                                <p className="testimonialsection__row__half__carousel__item__location">Lahore, Pakistan</p>
                            </div>    
                            <div className="testimonialsection__row__half__carousel__item">
                                <img className="testimonialsection__row__half__carousel__item__picture" src={person}  alt=""/>
                                <p className="testimonialsection__row__half__carousel__item__details">
                                     “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                                </p>
                                <h5 className="testimonialsection__row__half__carousel__item__name">Mike Taylor 2</h5>
                                <p className="testimonialsection__row__half__carousel__item__location">Lahore, Pakistan</p>
                            </div>  
                            <div className="testimonialsection__row__half__carousel__item">
                                <img className="testimonialsection__row__half__carousel__item__picture" src={person}  alt=""/>
                                <p className="testimonialsection__row__half__carousel__item__details">
                                     “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                                </p>
                                <h5 className="testimonialsection__row__half__carousel__item__name">Mike Taylor 3</h5>
                                <p className="testimonialsection__row__half__carousel__item__location">Lahore, Pakistan</p>
                            </div>      
                            <div className="testimonialsection__row__half__carousel__item">
                                <img className="testimonialsection__row__half__carousel__item__picture" src={person}  alt=""/>
                                <p className="testimonialsection__row__half__carousel__item__details">
                                     “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                                </p>
                                <h5 className="testimonialsection__row__half__carousel__item__name">Mike Taylor 4</h5>
                                <p className="testimonialsection__row__half__carousel__item__location">Lahore, Pakistan</p>
                            </div>                                             
                            <div className="testimonialsection__row__half__carousel__item">
                                <img className="testimonialsection__row__half__carousel__item__picture" src={person}  alt=""/>
                                <p className="testimonialsection__row__half__carousel__item__details">
                                     “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                                </p>
                                <h5 className="testimonialsection__row__half__carousel__item__name">Mike Taylor 5</h5>
                                <p className="testimonialsection__row__half__carousel__item__location">Lahore, Pakistan</p>
                            </div> 
                            <div className="testimonialsection__row__half__carousel__item">
                                <img className="testimonialsection__row__half__carousel__item__picture" src={person}  alt=""/>
                                <p className="testimonialsection__row__half__carousel__item__details">
                                     “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                                </p>
                                <h5 className="testimonialsection__row__half__carousel__item__name">Mike Taylor 6</h5>
                                <p className="testimonialsection__row__half__carousel__item__location">Lahore, Pakistan</p>
                            </div> 
                            <div className="testimonialsection__row__half__carousel__item">
                                <img className="testimonialsection__row__half__carousel__item__picture" src={person}  alt=""/>
                                <p className="testimonialsection__row__half__carousel__item__details">
                                     “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                                </p>
                                <h5 className="testimonialsection__row__half__carousel__item__name">Mike Taylor 7</h5>
                                <p className="testimonialsection__row__half__carousel__item__location">Lahore, Pakistan</p>
                            </div> 
                        </div>   
                        <div className="testimonialsection__row__half__pagination">
                            <button className="testimonialsection__row__half__pagination__prev" onClick={() =>plusSlides(-1)}>Prev</button> 
                            <button className="testimonialsection__row__half__pagination__next" onClick={() =>plusSlides(1)}>Next</button>       
                        </div>                                     
                    </div>
                </div>
            </section>
       </React.Fragment>
    )
};

export default TestimonialsSection; 

