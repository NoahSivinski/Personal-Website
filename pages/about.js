import Layout from '../components/layout'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Layout>
      <motion.div
        key="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-4"
      >
        <div className="mb-6 text-center text-gray-800 dark:text-white">
          Hi, I&apos;m Noah! I am a Software Engineer at Fiserv with a passion for cutting-edge tech and 
          developing software that makes a positive impact on people&apos;s lives.
        </div>
        <div className="text-center text-gray-800 dark:text-white">
          In addition to coding and learning new tech, I enjoy playing soccer, boxing, 
          reading, and hanging with my dog. If any of these things interest you too,
          I&apos;d love to chat!
        </div>
      </motion.div>
    </Layout>
  )
}
