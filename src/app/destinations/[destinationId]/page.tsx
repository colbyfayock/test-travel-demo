import Link from 'next/link';
import { redirect } from 'next/navigation'
import { getCldImageUrl } from 'next-cloudinary';

import Container from '@/components/Container';
import CldImage from '@/components/CldImage';

import destinations from '@/data/destinations.json';

export default function Destination({ params }: { params: { destinationId: string; }}) {
  const destination = destinations.find(({ id }) => id === params.destinationId);

  if ( !destination ) {
    redirect('/404');
  }

  return (
    <>
      <Container className="relative flex max-w-7xl items-center justify-center aspect-[3/1] bg-black">
        <span className="block absolute top-0 left-0 right-0 bottom-0 z-0 opacity-70 m-auto w-full h-full bg-no-repeat bg-center bg-cover" style={{
          backgroundImage: `url(${
            getCldImageUrl({
              src: destination.image.publicId,
              width: 2400,
              height: 1000,
              crop: 'fill',
            })
          })`
        }} />
        <h1 className="relative z-10 text-white text-7xl uppercase font-black">{ destination.title }</h1>
      </Container>
      <Container className="mt-12">
        <div className="prose-lg mx-auto">
          <h2>About { destination.title }</h2>
          <p>{ destination.description }</p>
        </div>
      </Container>
    </>
  )
}