import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              À Propos de Nous
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Koli Go est votre partenaire de confiance pour tous vos besoins en transport et logistique. 
              Avec des années d'expérience dans le secteur, nous nous engageons à fournir des services 
              de qualité supérieure à nos clients.
            </p>
            <div className="mt-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Service Fiable</h4>
                  <p className="mt-2 text-base text-gray-600">
                    Une équipe dévouée à votre service 24/7
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10 lg:mt-0"
          >
            <img
              className="rounded-lg shadow-lg"
              src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
              alt="Transport professionnel"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;