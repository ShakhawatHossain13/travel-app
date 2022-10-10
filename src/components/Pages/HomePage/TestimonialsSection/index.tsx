import React from "react";
import "./style.css";
import person from "./person.png"; 

const TestimonialsSection: React.FC = () => {

    const [prev , setPrev] = React.useState<boolean>(false);
    const [prevColor , setPrevColor] = React.useState<string>("#3E2E4D");
    const [next , setNext] = React.useState<boolean>(false);
    const [slidesDisplay , setSlidesDisplay] = React.useState<string[]>([]);

    let slideIndex = 1;
    function currentSlide(n: number) {
        showSlides(slideIndex = n);
    }

    const showSlides = (n: number) => {
        let i;
        slideIndex = n;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            (slides[i] as HTMLHeadingElement).style.display = "none";
            // slidesDisplay[i] = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
       (slides[slideIndex - 1] as HTMLHeadingElement).style.display = "block";
        // slidesDisplay[slideIndex - 1] = "block";  
        dots[slideIndex - 1].className += " active";
    }
 
    const plusSlides = (n: number) => {
        showCarousel(slide += n);
    }

    let slide = 1;
    const showCarousel = (n: number) => {
        let i;
        let slides = document.getElementsByClassName("testimonialsection__row__half__carousel__item");
        if (n > slides.length) { slide = 1 }
        if (n !== 1) { 
            setPrev(false)  
            setPrevColor("#3E2E4D");         
        }else{
            setPrev(true);
            setPrevColor("#BCB7C2");
        }
        if (n = (slides.length - 1)) {
            (slides[0] as HTMLDivElement).style.display = "block";
        }
        if (n < 1) { slide = slides.length }
        for (i = 0; i < slides.length; i++) {
            (slides[i] as HTMLDivElement).style.display = "none";
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].className = slides[i].className.replace(" Jactive", "");
            slides[i].className = slides[i].className.replace(" Jinactive", "");
        }

        (slides[slide - 1] as HTMLDivElement).style.display = "block";
        slides[slide - 1].className += " Jactive";
        (slides[slide] as HTMLDivElement).style.display = "block";
        slides[slide].className += " Jinactive";
    }


    React.useEffect(() => {
        showSlides(1);
        showCarousel(slide);
    }, []);

    return (
        <React.Fragment>
            <section className="testimonialsection">
                <div className="testimonialsection__row">
                    <div className="testimonialsection__row__half">
                        <h5 className="testimonialsection__row__half__tagline">TESTIMONIALS</h5>
                        <h2 style={{ display : slidesDisplay[0] }} className="testimonialsection__row__half__heading mySlides fade">1 What people say
                            about Us.</h2>
                        <h2 style={{ display : slidesDisplay[1] }} className="testimonialsection__row__half__heading mySlides fade">2 What people say
                            about Us.</h2>
                        <h2 style={{ display : slidesDisplay[2] }} className="testimonialsection__row__half__heading mySlides fade">3 What people say
                            about Us.</h2>
                        <div className="testimonialsection__row__half__buttons">
                            <button  className="dot" onClick={() => currentSlide(1)}></button>
                            <button  className="dot" onClick={() => currentSlide(2)}></button>
                            <button className="dot" onClick={() => currentSlide(3)}></button>
                        </div>
                    </div>
                    <div className="testimonialsection__row__half">
                        <div className="testimonialsection__row__half__carousel">
                            <div className="testimonialsection__row__half__carousel__item">
                                <img className="testimonialsection__row__half__carousel__item__picture" src={person} alt="" />
                                <p className="testimonialsection__row__half__carousel__item__details">
                                    “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                                </p>
                                <h5 className="testimonialsection__row__half__carousel__item__name">Mike Taylor 1</h5>
                                <p className="testimonialsection__row__half__carousel__item__location">Lahore, Pakistan</p>
                            </div>
                            <div className="testimonialsection__row__half__carousel__item">
                                <img className="testimonialsection__row__half__carousel__item__picture" src={person} alt="" />
                                <p className="testimonialsection__row__half__carousel__item__details">
                                    “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                                </p>
                                <h5 className="testimonialsection__row__half__carousel__item__name">Mike Taylor 2</h5>
                                <p className="testimonialsection__row__half__carousel__item__location">Lahore, Pakistan</p>
                            </div>
                            <div className="testimonialsection__row__half__carousel__item">
                                <img className="testimonialsection__row__half__carousel__item__picture" src={person} alt="" />
                                <p className="testimonialsection__row__half__carousel__item__details">
                                    “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                                </p>
                                <h5 className="testimonialsection__row__half__carousel__item__name">Mike Taylor 3</h5>
                                <p className="testimonialsection__row__half__carousel__item__location">Lahore, Pakistan</p>
                            </div>
                            <div className="testimonialsection__row__half__carousel__item">
                                <img className="testimonialsection__row__half__carousel__item__picture" src={person} alt="" />
                                <p className="testimonialsection__row__half__carousel__item__details">
                                    “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                                </p>
                                <h5 className="testimonialsection__row__half__carousel__item__name">Mike Taylor 4</h5>
                                <p className="testimonialsection__row__half__carousel__item__location">Lahore, Pakistan</p>
                            </div>
                            <div className="testimonialsection__row__half__carousel__item">
                                <img className="testimonialsection__row__half__carousel__item__picture" src={person} alt="" />
                                <p className="testimonialsection__row__half__carousel__item__details">
                                    “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                                </p>
                                <h5 className="testimonialsection__row__half__carousel__item__name">Mike Taylor 5</h5>
                                <p className="testimonialsection__row__half__carousel__item__location">Lahore, Pakistan</p>
                            </div>
                            <div className="testimonialsection__row__half__carousel__item">
                                <img className="testimonialsection__row__half__carousel__item__picture" src={person} alt="" />
                                <p className="testimonialsection__row__half__carousel__item__details">
                                    “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                                </p>
                                <h5 className="testimonialsection__row__half__carousel__item__name">Mike Taylor 6</h5>
                                <p className="testimonialsection__row__half__carousel__item__location">Lahore, Pakistan</p>
                            </div>
                            <div className="testimonialsection__row__half__carousel__item">
                                <img className="testimonialsection__row__half__carousel__item__picture" src={person} alt="" />
                                <p className="testimonialsection__row__half__carousel__item__details">
                                    “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                                </p>
                                <h5 className="testimonialsection__row__half__carousel__item__name">Mike Taylor 7</h5>
                                <p className="testimonialsection__row__half__carousel__item__location">Lahore, Pakistan</p>
                            </div>
                        </div>
                        <div className="testimonialsection__row__half__pagination">
                            <button disabled={prev} className="testimonialsection__row__half__pagination__prev" onClick={() => plusSlides(-1)}>
                                <svg className="testimonialsection__row__half__pagination__prev__img" xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                    <path style = {{stroke : prevColor}} d="M1 8.5L8 1.5L15 8.5" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </button>
                            <button disabled ={next} className="testimonialsection__row__half__pagination__next" onClick={() => plusSlides(1)}>
                                <svg className="testimonialsection__row__half__pagination__next__img" xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                    <path d="M1 1L8 8L15 1" stroke="#3E2E4D" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default TestimonialsSection;

