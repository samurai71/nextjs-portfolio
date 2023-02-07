import Link from 'next/link';
import Image from 'next/image';
import socialMedia from '../content/socialMedia';
import { FadeContainer, popUp } from '../content/FramerMotionVariants';
import { navigationRoutes } from '../utils/utils';
import { motion } from 'framer-motion';
import useSWR from 'swr';
import fetcher from '../lib/fetcher';
import { HiOutlineQrcode } from 'react-icons/hi';


export default function Footer({ setShowQR, showQR }) {
  return (
    <footer className='w-screen mb-20 text-gray-600 dark:text-gray-400/50 font-inter print:hidden'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={FadeContainer}
        viewport={{ once: true }}
        className='flex flex-col max-w-4xl gap-5 p-5 mx-auto text-sm border-t-2 border-gray-200 2xl:max-w-5xl 3xl:max-w-7xl dark:border-gray-400/10 sm:text-base'
      >
        <section className='grid grid-cols-3 gap-10'>
          <div className='flex flex-col gap-4 capitalize'>
            {navigationRoutes.slice(0, 4).map((text, index) => {
              return (
                <FooterLink key={index} id={index} route={text} text={text} />
              );
            })}
          </div>
          <div className='flex flex-col gap-4 capitalize'>
            {navigationRoutes
              .slice(4, navigationRoutes.length)
              .map((route, index) => {
                let text = route;
                if (route === 'rss') text = 'RSS';
                return <FooterLink key={index} route={route} text={text} />;
              })}
          </div>
          <div className='flex flex-col gap-4 capitalize'>
            {socialMedia.slice(0, 4).map((platform, index) => {
              return (
                <Link key={index} href={platform.url} passHref>
                  <motion.a
                    className='hover:text-black dark:hover:text-white w-fit'
                    variants={popUp}
                    target='_blank'
                    rel='noopener noreferrer'
                    href={platform.url}
                  >
                    {platform.title}
                  </motion.a>
                </Link>
              );
            })}
          </div>
        </section>
        <div className='flex justify-center w-full'>
          <p>
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </motion.div>

      <div className='flex justify-center w-full'>
        <div
          onClick={() => setShowQR(!showQR)}
          className='p-4 text-white transition-all bg-gray-700 rounded-full cursor-pointer active:scale-90 hover:scale-105'
        >
          <HiOutlineQrcode className='w-6 h-6 ' />
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ route, text }) {
  return (
    <Link href={`/${route}`} passHref>
      <motion.a
        className='hover:text-black dark:hover:text-white w-fit'
        variants={popUp}
        href={`/${route}`}
      >
        {text}
      </motion.a>
    </Link>
  );
}
