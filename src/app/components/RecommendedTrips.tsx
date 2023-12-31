import TripItem from '@/components/TripItem';
import { Trip } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import * as React from 'react';

async function getTrips() {
    const trips = await prisma.trip.findMany();
    return trips;
}

const RecommendedTrips = async () => {
    const data = await getTrips();

    const recommendedTrips = data.filter((trip: Trip) => trip.recommended === true);
    return (
        <div className='container mx-auto p-5'>
            <div className="flex items-center">
                <div className='w-full h-[1px] bg-primarylight'></div>
                <h2 className='px-5 font-medium text-grayPrimary whitespace-nowrap'>Destinos Recomendados</h2>
                <div className='w-full h-[1px] bg-primarylight'></div>
            </div>

            <div className="flex flex-col items-center mt-5 gap-5 lg:flex lg:flex-row lg:flex-wrap lg:gap-10 lg:justify-center lg:mt-12">
                {recommendedTrips.map((trip: Trip) => (
                    <TripItem key={trip.id} trip={trip} />
                ))}
            </div>

        </div>
    );
}

export default RecommendedTrips;