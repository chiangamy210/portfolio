// import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Button from '../components/Button';

export default function ContactForm() {
  return (

    <form className='space-y-3'>
      <div className='flex flex-col rounded-lg bg-white px-12 pb-4 pt-8 text-black'>
        <div className='grid gap-6 md:grid-cols-2 mb-5'>
          <div className='flex flex-col '>
            <label  htmlFor="name" className=' pb-3'>Name</label>
            <input id='name' type='text' className=' rounded-lg w-full ' required></input>
          </div>
          <div className='flex flex-col '>
            <label   htmlFor="email" className=' pb-3'>Email</label>
            <input id='email' type='email' className=' rounded-lg w-full' required></input>
          </div>
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor="message" className=' pb-3 '>Message</label>
          <textarea id='message' rows='4' type='text' className='rounded-lg w-full h-[200px]'  placeholder="Leave me a message here..." required></textarea>
        </div>
        <button type='submit' className="mb-5 w-[150px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </div>
     
    </form>
    
  );
}
