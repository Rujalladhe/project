import { useEffect, useRef } from "react"
import { ArrowRight, Award, Clock, Globe, Users } from "lucide-react"
import { motion, useInView, useAnimation } from "framer-motion"
import Navbar from "../nav/nav"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const AnimatedSection = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={staggerContainer} className={className}>
      {children}
    </motion.div>
  )
}

const Button = ({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) => (
  <button className={`inline-flex items-center justify-center ${className}`} onClick={onClick}>
    {children}
  </button>
)

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar/>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="4.jpeg"
            alt="Background texture"
            className="object-cover w-full "
          />
        </div>
        <div className="container px-4 mx-auto z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            >
              About Our Vision
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-gray-300 mb-8">
              We create digital experiences that transform businesses and inspire people
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg">
                Our Work 
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight className="h-8 w-8 rotate-90 text-gray-400" />
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 mx-auto">
          <AnimatedSection className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn} className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6">
              The Graphology Research Institute (TGRI), based in Mumbai, is a specialized organization dedicated to the study and application of graphology—the science of handwriting analysis. TGRI offers a wide range of training and certification programs aimed at helping individuals understand personality traits, emotional patterns, and behavioral tendencies through handwriting. The institute provides personal consultations, educational workshops, and corporate training sessions that apply graphology in areas such as recruitment, relationship counseling, career guidance, and self-development. With a strong focus on psychological insights and practical applications, TGRI empowers individuals and professionals alike to explore human behavior in a unique and impactful way.
              </p>
             
              <div className="flex gap-4 mt-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-white">8+</p>
                  <p className="text-gray-400">Years</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-white">200+</p>
                  <p className="text-gray-400">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-white">50+</p>
                  <p className="text-gray-400">Team Members</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="order-1 md:order-2 relative">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <img
                  src="bsb3.jpg"
                  alt="Our team at work"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl -z-10"></div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeIn} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
              <p className="text-gray-300">
                These principles guide everything we do, from how we work together to how we serve our clients.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Users className="h-10 w-10" />,
                  title: "Collaboration",
                  description: "We believe great ideas come from diverse perspectives working together.",
                },
                {
                  icon: <Award className="h-10 w-10" />,
                  title: "Excellence",
                  description: "We pursue the highest standards in everything we create.",
                },
                {
                  icon: <Globe className="h-10 w-10" />,
                  title: "Innovation",
                  description: "We constantly explore new possibilities and push boundaries.",
                },
                {
                  icon: <Clock className="h-10 w-10" />,
                  title: "Integrity",
                  description: "We build relationships based on trust, transparency and respect.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-gray-900 bg-opacity-50 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all"
                >
                  <div className="bg-gradient-to-br from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
     

      {/* Timeline Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeIn} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
              <p className="text-gray-300">
                From humble beginnings to industry leadership, our path has been defined by continuous growth and
                innovation.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 transform md:translate-x-[-0.5px]"></div>

              {[
                { year: "2015", title: "Founded", description: "Started with a team of 3 in a small office space." },
                {
                  year: "2017",
                  title: "First Major Client",
                  description: "Landed our first enterprise client and expanded the team.",
                },
                {
                  year: "2019",
                  title: "International Expansion",
                  description: "Opened our first international office in London.",
                },
                {
                  year: "2021",
                  title: "Award Recognition",
                  description: "Received industry recognition for our innovative work.",
                },
                {
                  year: "2023",
                  title: "50 Team Members",
                  description: "Reached a milestone of 50 talented professionals.",
                },
              ].map((event, index) => (
                <AnimatedSection key={index} className="relative mb-12 md:mb-24">
                  <motion.div
                    variants={fadeIn}
                    className={`flex flex-col md:flex-row items-start gap-8 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                      <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 inline-block">
                        <span className="text-purple-400 font-bold">{event.year}</span>
                        <h3 className="text-xl font-bold mt-2 mb-3">{event.title}</h3>
                        <p className="text-gray-400">{event.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:block w-1/2"></div>

                    {/* Timeline dot */}
                    <div className="absolute left-[-8px] md:left-1/2 top-6 w-4 h-4 rounded-full bg-purple-600 border-2 border-black md:transform md:translate-x-[-50%]"></div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 mx-auto">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={fadeIn}
              className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 p-12 md:p-16 rounded-3xl border border-gray-800"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work together?</h2>
              <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
                Let's create something extraordinary together. Reach out to discuss how we can help bring your vision to
                life.
              </p>
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg" onClick={() => window.location.href = '/contact'}>
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default AboutUs