// Page Components START----------
import BlogsSection from '@components/Home/BlogsSection'
import SkillSection from '@components/Home/SkillSection'
// Page Components END------------

import Image from 'next/image'
import Metadata from '@components/MetaData'
import Contact from '@components/Contact'
import {
  FadeContainer,
  headingFromLeft,
  opacityVariant,
  popUp,
} from '@content/FramerMotionVariants'
import AnimatedHeading from '@components/FramerMotion/AnimatedHeading'
import { homeProfileImage } from '@utils/utils'
import { getPinnedSkills } from '@lib/dataFetch'
import getRSS from '@lib/generateRSS'
import generateSitemap from '@lib/sitemap'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import Ripples from 'react-ripples'
import MDXContent from '@lib/MDXContent'
import pageMeta from '@content/meta'

export default function Home({ blogs, skills }) {
  return (
    <>
      <Metadata
        description={pageMeta.home.description}
        previewImage={pageMeta.home.image}
        keywords={pageMeta.home.keywords}
      />
      <div className='relative mx-auto max-w-4xl dark:bg-darkPrimary dark:text-gray-100 2xl:max-w-5xl 3xl:max-w-7xl'>
        <motion.section
          initial='hidden'
          whileInView='visible'
          variants={FadeContainer}
          viewport={{ once: true }}
          className='grid min-h-screen place-content-center py-20'
        >
          <div className='relative mx-auto flex w-full flex-col items-center gap-10'>
            <motion.div
              variants={popUp}
              className='relative flex h-44 w-44 items-center justify-center rounded-full p-3 before:absolute before:inset-0 before:animate-photo-spin before:rounded-full before:border-t-4 before:border-b-4 before:border-black before:dark:border-white xs:h-52 xs:w-52'
            >
              {/* <Image
                src={homeProfileImage}
                className='rounded-full shadow saturate-0 filter'
                width={400}
                height={400}
                alt='cover Profile Image'
                quality={75}
                priority={true}
              /> */}
            </motion.div>

            <div className='flex w-full select-none flex-col gap-3 p-5 text-center '>
              <div className='flex flex-col gap-1'>
                <motion.p
                  variants={opacityVariant}
                  className='text-md uppercase italic tracking-widest text-red-600'
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
                className='text-center text-sm font-medium text-slate-500 dark:text-gray-300 md:text-base'
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
                  <div className='cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110 dark:bg-slate-500 dark:shadow-none'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/samurai71'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110 dark:bg-slate-500 dark:shadow-none'>
                    <FaGithub />
                  </div>
                </a>
              </motion.div>
            </div>
            {/* <div className='m-auto flex max-w-[330px] items-center justify-between'></div> */}

            <motion.div className='overflow-hidden rounded-md' variants={popUp}>
              <Ripples className='w-full' color='rgba(0, 0, 0, 0.5)'>
                <button
                  className='flex select-none items-center gap-2 rounded-md border border-gray-500 px-5 py-2 outline-none hover:bg-gray-100 dark:border-gray-400 dark:hover:bg-neutral-800'
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
  )
}

export function HomeHeading({ title }) {
  return (
    <AnimatedHeading
      className='my-2 w-full text-left font-inter text-3xl font-bold'
      variants={headingFromLeft}
    >
      {title}
    </AnimatedHeading>
  )
}

export async function getStaticProps() {
  const blogs = new MDXContent('posts').getAllPosts().slice(0, 3)
  const skills = getPinnedSkills()
  await getRSS()
  await generateSitemap()

  return {
    props: { blogs, skills },
  }
}
