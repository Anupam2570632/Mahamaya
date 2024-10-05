import React, { useState, useEffect } from 'react';

const events = [
    {
        name: "Mahalaya",
        date: new Date("2024-10-09T06:30:00"),
        significance: "The beginning of the Devi Paksha, marking the arrival of Goddess Durga."
    },
    {
        name: "Maha Shashthi",
        date: new Date("2024-10-10T06:00:00"),
        significance: "Pran Pratishtha (invocation of the deity)."
    },
    {
        name: "Maha Saptami",
        date: new Date("2024-10-11T06:00:00"),
        significance: "Ghatasthapana and the beginning of the main celebrations."
    },
    {
        name: "Maha Ashtami",
        date: new Date("2024-10-12T06:00:00"),
        significance: "The most auspicious day, including the Sandhi Puja."
    },
    {
        name: "Maha Navami",
        date: new Date("2024-10-13T06:00:00"),
        significance: "Last day of worship before Dashami."
    },
    {
        name: "Vijaya Dashami",
        date: new Date("2024-10-14T06:00:00"),
        significance: "The conclusion of the festivities."
    }
];

const CountdownAndEvents = () => {
    const [countdown, setCountdown] = useState({});
    const [ongoingEvent, setOngoingEvent] = useState({});
    const [upcomingEvents, setUpcomingEvents] = useState([]);

    useEffect(() => {
        
        const currentDate = new Date();
    
        const upcoming = events.filter(event => event.date > currentDate);
        setUpcomingEvents(upcoming);
        const targetDate = new Date(upcoming[0]?.date);
       
        const interval = setInterval(() => {
            const now = new Date();
            const distance = targetDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setCountdown({ days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(interval);
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);


        const ongoing = events.find(event => {
            const eventDate = new Date(event.date);
            return (
                eventDate.getFullYear() === currentDate.getFullYear() &&
                eventDate.getMonth() === currentDate.getMonth() &&
                eventDate.getDate() === currentDate.getDate()
            );
        });


        setOngoingEvent(ongoing);

        return () => clearInterval(interval);
    }, [events]);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-4 text-center text-purple-600">Countdown to {upcomingEvents[0]?.name}</h1>
            <div className="text-2xl font-semibold mb-6 text-center text-gray-700">
                {countdown.days !== undefined && (
                    <div>
                        <span className="font-extrabold text-indigo-600">{countdown.days} Days</span>
                        <span className="font-extrabold text-indigo-600">{countdown.hours} Hours</span>
                        <span className="font-extrabold text-indigo-600">{countdown.minutes} Minutes</span>
                        <span className="font-extrabold text-indigo-600">{countdown.seconds} Seconds</span>
                    </div>
                )}
            </div>

            <h2 className="text-2xl font-bold mt-6 text-gray-800">Ongoing Event</h2>
            {ongoingEvent ? (
                <div className="mb-4 p-4 bg-blue-100 rounded-md border-l-4 border-blue-500">
                    <h3 className="font-semibold text-blue-800">{ongoingEvent.name}</h3>
                    <p className="text-gray-600">{ongoingEvent?.significance}</p>
                    <p className="text-gray-500">{ongoingEvent?.date?.toLocaleString()}</p>
                </div>
            ) : (
                <p>No ongoing events</p>
            )}

            <h2 className="text-2xl font-bold mt-6 text-gray-800">Upcoming Events</h2>
            {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event, index) => (
                    <div key={index} className="mb-4 p-4 bg-green-100 rounded-md border-l-4 border-green-500">
                        <h3 className="font-semibold text-green-800">{event.name}</h3>
                        <p className="text-gray-600">{event.significance}</p>
                        <p className="text-gray-500">{event.date.toLocaleString()}</p>
                    </div>
                ))
            ) : (
                <p>No upcoming events</p>
            )}
        </div>
    );
};

export default CountdownAndEvents;
