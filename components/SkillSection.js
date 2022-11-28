import { FadeContainer, popUp } from '@content/FramerMotionVariants';
import { HomeHeading } from '../../pages'; // ----> not created yet
import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiGit,
  SiMysql,
  SiFirebase,
} from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { useDarkMode } from '@context/darkModeContext';
import * as WindowsAnimation from '@lib/windowsAnimation'; //-----> not created yet

export default function SkillSection({ skills }) {
  const { isDarkMode } = useDarkMode();

  return (
    <section className='mx-5'>
      <HomeHeading title='My Top Skills' />

      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={FadeContainer}
        viewport={{ once: true }}
        className='my-10 grid grid-cols-3 gap-4'
      >
        {skills.map((skill, index) => {
          const Icon = chooseIcon(skill.name.toLowerCase());
          return (
            <motion.div
              variants={popUp}
              key={index}
              title={skill.name}
              onMouseMove={(e) =>
                WindowsAnimation.showHoverAnimation(e, isDarkMode)
              }
              onMouseLeave={(e) => WindowsAnimation.removeHoverAnimation(e)}
              className='group flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 bg-gray-50 p-4 hover:bg-white dark:border-neutral-700 dark:bg-darkPrimary hover:dark:bg-darkSecondary sm:justify-start md:origin-top'
            >
              <div className='pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100'>
                <Icon className='h-8 w-8' />
              </div>
              <p className='pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base'>
                {skill.name}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

/* To choose the Icon according to the Name */
function chooseIcon(title) {
  let Icon;
  switch (title) {
    case 'python':
      Icon = SiPython;
      break;
    case 'javascript':
      Icon = SiJavascript;
      break;
    case 'html':
      Icon = SiHtml5;
      break;
    case 'css':
      Icon = SiCss3;
      break;
    case 'next.js':
      Icon = SiNextdotjs;
      break;
    case 'react.js':
      Icon = FaReact;
      break;
    case 'tailwind css':
      Icon = SiTailwindcss;
      break;
    case 'firebase':
      Icon = SiFirebase;
      break;
    case 'git':
      Icon = SiGit;
      break;
    case 'git':
      Icon = SiGit;
      break;
    case 'mysql':
      Icon = SiMysql;
      break;
    default:
      break;
  }
  return Icon;
}
