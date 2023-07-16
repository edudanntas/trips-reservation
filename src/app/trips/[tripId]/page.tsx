import * as React from 'react';
import { prisma } from '@/lib/prisma';
import TripHeader from './components/TripHeader';
import TripReservation from './components/TripReservation';
import TripDescription from './components/TripDescription';
import TripHighlight from './components/TripHighlight';
import TripLocation from './components/TripLocation';


const getTripsDetails = async (tripId: string) => {
    const trip = await prisma.trip.findUnique({
        where: {
            id: tripId
        }
    })

    return trip;
}

const TripDetails = async ({ params }: { params: { tripId: string } }) => {
    const trip = await getTripsDetails(params.tripId);

    if (!trip) return null

    return (
        <div className='container mx-auto'>
            <TripHeader trip={trip} />
            <TripReservation trip={trip} />
            <TripDescription description={trip.description} />
            <TripHighlight highlights={trip.highlights} />
            <TripLocation location={trip.location} locationDescription={trip.locationDescription} />
        </div>
    );
}

export default TripDetails;