import React from 'react'

const OtherServides = () => {

    const services = [
        {id:1,
          title: "Rent a Car",
          description: "Hire a car and explore Kenya at your own pace and comfort.",
          image: "/images/car.jpg",
        },
        {id:2,
          title: "Cruise Booking",
          description: "Book beautiful cruises and enjoy the stunning Kenyan coast.",
          image: "/images/ship.jpg",
        },
        {id:3,
          title: "To Do List",
          description: "Organize your travel plans and activities easily.",
          image: "/images/list.jpeg",
        },
        {id:4,
          title: "Food Features",
          description: "Discover tasty local dishes and the best dining spots.",
          image: "/images/food.jpg",
        },
      ];
      



  return (
    <div className='py-16'>
        <div className='text-center mb-10'>
           <h2 className='text-3xl font-bold'>
            Other issues we can help you with
           </h2>
           <p className='text-gray-600'>Discover extra services designed to make your travel experience easier and more enjoyable</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4 '>
            {services.map((service)=>
            <div key={service.id} className='text-center group cursor-pointer'>
                <img src={service.image} alt={service.title} className='w-full h-48 object-cover mb-4 transform transition duration-300 group-hover:-rotate-1'/>
                <h3 className='font-bold text-lg mb-2 transition duration-300 group-hover:text-yellow-400'>{service.title}</h3>
                <p className='text-gray-600'>{service.description}</p>
            </div>
            )}

        </div>
    </div>
  )
}

export default OtherServides