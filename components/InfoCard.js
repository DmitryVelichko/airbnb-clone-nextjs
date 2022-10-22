import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

const InfoCard = ({img, location, title, description, star, price, total}) => {
  return (
    <div className='flex'>
        <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
            <Image src={img} layout='fill' objectFit='cover'/>
        </div>

        <div className='flex flex-col flex-grow pl-5'>
            <div className='flex justify-between'>
                <p>{location}</p>
                <HeartIcon className='h-7 cursor-pointer'/>
            </div>
            <h4 className='text-xl'>{title}</h4>
            <div className='border-b w-10 pt-2'/>
            
        </div>
    </div>
  )
}

export default InfoCard