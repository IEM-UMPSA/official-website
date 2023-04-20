import Link from 'next/link';
import React, { useState } from 'react';
import SEO from '../../../components/SEO';

const PhotoBooth = () => {
  const [currentVenue, setCurrentVenue] = useState('Dewan Serbaguna');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const venues = [
    {
      name: 'Dewan Serbaguna',
      photos: [
        '/assets/img/dewan-sebarguna/1.jpg',
        '/assets/img/dewan-sebarguna/2.jpg',
        '/assets/img/dewan-sebarguna/3.jpg',
        '/assets/img/dewan-sebarguna/4.jpg',

      ],
    },
    {
      name: 'Pusat Akademik Pelajar 1st Floor',
      photos: [
        '/assets/img/pap-first-floor/1.jpg',
        '/assets/img/pap-first-floor/2.jpg',
        '/assets/img/pap-first-floor/3.jpg',
        '/assets/img/pap-first-floor/4.jpg',
      ],
    },
    {
      name: 'Pusat Akademik Pelajar Ground Floor',
      photos: [
        '/assets/img/pap-ground-floor/1.jpg',
        '/assets/img/pap-ground-floor/2.jpg',
        '/assets/img/pap-ground-floor/3.jpg',
        '/assets/img/pap-ground-floor/4.jpg',
        '/assets/img/pap-ground-floor/5.jpg',
        '/assets/img/pap-ground-floor/6.jpg',
      ],
    },
    {
      name: 'Pekan Library 4th floor',
      photos: [
        '/assets/img/library/1.jpg',
        '/assets/img/library/2.jpg',
        '/assets/img/library/3.jpg',
        '/assets/img/library/4.jpg',
        '/assets/img/library/5.jpg',
      ],
    },
       {
      name: 'Pekan Library Auditorium',
      photos: [
      
        '/assets/img/library/AudiNew2.jpg',
        '/assets/img/library/UMPLib_Auditorium1.jpg',
        '/assets/img/library/UMPLib_Auditorium2.jpg',
        '/assets/img/library/UMPLib_Auditorium3.jpg',
      ],
    },
  ];

   const handleVenueChange = (venueName) => {
    setCurrentVenue(venueName);
    setSelectedPhoto(null); // Reset selected photo when venue changes
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

 return (
    <>
    
         <SEO 
                pageTitle="Venue Photo" 
                pageDescription="Check out the stunning venue photos from Huawei's Intelligent World 2030 event! Take a virtual tour of the event space and get inspired for your next big event."
                pageKeywords="Huawei, Intelligent World 2030, event venue, venue photos, virtual tour, event space, inspiration"
                pageImage="/assets/img/dewan-sebarguna/1.jpg"
                pageURL="https://iemumpss.vercel.app/intelligent-world-2030/venue"
                pageImageAlt="IEM-UMPSS Intelligent-world-2030 Event Venue Page"
            />
    <div className="p-4 flex justify-center">
      <div className="w-full max-w-screen-lg overflow-hidden">
        <h1 className="text-3xl mb-4 text-center">Venue Photo for Huawei Intelligent World 2030 event</h1>

        <Link href="/" > <h1 className='underline'> ← Back to Homepage</h1> </Link>
        <br />
        <div className="flex items-center flex-wrap mb-4">
          {venues.map((venue) => (
            <button
              key={venue.name}
              className={`px-4 py-2 mr-4 mb-4 rounded-md ${
                currentVenue === venue.name ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => handleVenueChange(venue.name)}
            >
              {venue.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {venues.find((venue) => venue.name === currentVenue).photos.map((photo, index) => (
            <img
              key={index}
              className={`venue mx-auto ${selectedPhoto === photo ? 'selected' : ''}`}
              style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
              src={photo}
              alt={`Photo ${index + 1}`}
              onClick={() => handlePhotoClick(photo)}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default PhotoBooth;