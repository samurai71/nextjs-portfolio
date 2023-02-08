// Page Components START----------
import BlogsSection from '@components/Home/BlogsSection';
import SkillSection from '@components/Home/SkillSection';
// Page Components END------------

import Image from 'next/image';
import Metadata from '@components/MetaData';
import Contact from '@components/Contact';
import {
  FadeContainer,
  headingFromLeft,
  opacityVariant,
  popUp,
} from '@content/FramerMotionVariants';
import AnimatedHeading from '@components/FramerMotion/AnimatedHeading';
import { homeProfileImage } from '@utils/utils';
import { getPinnedSkills } from '@lib/dataFetch';
import getRSS from '@lib/generateRSS';
import generateSitemap from '@lib/sitemap';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import Ripples from 'react-ripples';
import MDXContent from '@lib/MDXContent';
import pageMeta from '@content/meta';

export default function Home({ blogs, skills }) {
  return (
    <>
      <Metadata
        description={pageMeta.home.description}
        previewImage={pageMeta.home.image}
        keywords={pageMeta.home.keywords}
      />
      <div className='relative max-w-4xl mx-auto dark:bg-darkPrimary dark:text-gray-100 2xl:max-w-5xl 3xl:max-w-7xl'>
        <motion.section
          initial='hidden'
          whileInView='visible'
          variants={FadeContainer}
          viewport={{ once: true }}
          className='grid min-h-screen py-20 place-content-center'
        >
          <div className='relative flex flex-col items-center w-full gap-10 mx-auto'>
            <motion.div
              variants={popUp}
              className='relative flex items-center justify-center p-3 rounded-full w-44 h-44 xs:w-52 xs:h-52 before:absolute before:inset-0 before:border-t-4 before:border-b-4 before:border-black before:dark:border-white before:rounded-full before:animate-photo-spin'
            >
               {/* <Image
                src={homeProfileImage}
                className='rounded-full shadow filter saturate-0'
                width={400}
                height={400}
                alt='cover Profile Image'
                quality={75}
                priority={true}
              />  */}
            </motion.div>

            <div className='flex flex-col w-full gap-3 p-5 text-center select-none '>
              <div className='flex flex-col gap-1'>
                <motion.p
                  variants={opacityVariant}
                  className='italic tracking-widest text-red-600 uppercase text-md'
                >
                  Let's build something together
                </motion.p>
                <motion.h1
                  variants={opacityVariant}
                  className='text-5xl font-bold tracking-widest lg:text-6xl'
                >
                  Hi I'm <span className='text-blue-700'>Mark</span>
                </motion.h1>
                <motion.h1
                  variants={opacityVariant}
                  className='text-5xl font-bold lg:text-6xl'
                >
                  A Full Stack Web Developer and IoT Developer
                </motion.h1>
                {/* <motion.p
                  variants={opacityVariant}
                  className='text-xs font-medium text-gray-500 md:text-sm lg:text-lg'
                >
                  React Developer, Competitive Programmer
                </motion.p> */}
              </div>

              <motion.p
                variants={opacityVariant}
                className='text-sm font-medium text-center text-slate-500 dark:text-gray-300 md:text-base'
              >
                I’m focused on building responsive web applications while
                continually learning new technologies.
              </motion.p>
              <motion.div
                initial='hidden'
                whileInView='visible'
                variants={FadeContainer}
                viewport={{ once: true }}
                className='flex items-center justify-evenly'
              >
                <a
                  href='https://www.linkedin.com/in/marklanderyou/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 dark:shadow-none dark:bg-slate-500 hover:scale-110'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/samurai71'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 dark:shadow-none dark:bg-slate-500 hover:scale-110'>
                    <FaGithub />
                  </div>
                </a>
              </motion.div>
            </div>
            {/* <div className='m-auto flex max-w-[330px] items-center justify-between'></div> */}

            <motion.div className='overflow-hidden rounded-md' variants={popUp}>
              <Ripples className='w-full' color='rgba(0, 0, 0, 0.5)'>
                <button
                  className='flex items-center gap-2 px-5 py-2 border border-gray-500 rounded-md outline-none select-none dark:border-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800'
                  onClick={() => window.open('/resume')}
                >
                  <FiDownload />
                  <p>Resume</p>
                </button>
              </Ripples>
            </motion.div>
          </div>
        </motion.section>

        <div>
          <SkillSection skills={skills} />
          {/* <BlogsSection blogs={blogs} /> */}
          <Contact />
        </div>
      </div>
    </>
  );
}

export function HomeHeading({ title }) {
  return (
    <AnimatedHeading
      className='w-full my-2 text-3xl font-bold text-left font-inter'
      variants={headingFromLeft}
    >
      {title}
    </AnimatedHeading>
  );
}

export async function getStaticProps() {
  const blogs = new MDXContent('posts').getAllPosts().slice(0, 3);
  const skills = getPinnedSkills();
  await getRSS();
  await generateSitemap();

  return {
    props: { blogs, skills },
  };
}
