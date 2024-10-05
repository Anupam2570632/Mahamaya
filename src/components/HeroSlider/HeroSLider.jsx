import React, { useState, useEffect } from 'react';

const HeroSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        {
            image: "https://images.pexels.com/photos/19170577/pexels-photo-19170577/free-photo-of-golden-statues-in-buddha-temple.jpeg"
        },
        {
            image: "https://images.pexels.com/photos/14013242/pexels-photo-14013242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            image: "https://images.pexels.com/photos/19061291/pexels-photo-19061291/free-photo-of-sculpture-in-traditional-buddha-temple.jpeg"
        },
        {
            image: "https://images.pexels.com/photos/14264269/pexels-photo-14264269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ];

    const goToNextSlide = () => {
        setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
    };

    useEffect(() => {
        const autoSlide = setInterval(() => {
            goToNextSlide();
        }, 5000); // Auto slide every 5 seconds
        return () => clearInterval(autoSlide);
    }, [currentIndex]);

    return (
        <div className="md:relative w-full md:h-[90vh]">
            {/* Carousel wrapper */}
            <div className="md:relative hidden md:flex overflow-hidden rounded-lg h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute block w-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    >
                        <img src={slide.image} className="w-full h-full object-cover object-center" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>

            {/* Responsive Layout */}
            <div className="md:absolute md:inset-0 flex flex-col md:flex-row items-center justify-center md:text-white p-4 md:bg-black md:bg-opacity-50">
                {/* Image Block for Small Devices */}
                <div className="block md:hidden">
                    <img src={slides[currentIndex].image} className="w-full h-[50vh] object-cover object-center" alt={`Slide ${currentIndex + 1}`} />
                </div>

                {/* Description Block */}
                <div className='md:max-w-[50%] mx-auto text-start p-4 md:p-10 w-full space-y-6 min-h-fit'>
                    <h2 className="text-start hare-krishna text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-500 to-green-500 rounded-md transition-all duration-300 ease-in-out hover:shadow-neon">
                        HARE KRISHNA
                    </h2>

                    <p className='text-gray-400 md:text-white font-bold opacity-85'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui possimus adipisci totam beatae odit alias sunt provident, reiciendis doloribus vel officia sit iusto quas accusantium non reprehenderit voluptas illo nostrum excepturi tempora explicabo assumenda repudiandae ratione. Enim, consequatur?
                    </p>

                    <button className="relative inline-block px-8 py-3 text-xl font-bold bg-yellow-400 text-white overflow-hidden group">
                        <span className="absolute inset-0 w-0 bg-[#da5455] transition-all duration-[300ms] ease-out group-hover:w-full group-hover:origin-right group-hover:transition-all group-hover:duration-[300ms]"></span>
                        <span className="relative z-10">Join Now!</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;
