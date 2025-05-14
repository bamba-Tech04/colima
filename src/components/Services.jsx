import { motion } from 'framer-motion';
import { FaTruck, FaWarehouse, FaShippingFast } from 'react-icons/fa';

function Services() {
  const services = [
    {
      icon: <FaTruck className="h-12 w-12 text-primary" />,
      title: "Transport Routier",
      description: "Service de transport routier fiable et sécurisé pour vos marchandises."
    },
    {
      icon: <FaWarehouse className="h-12 w-12 text-primary" />,
      title: "Logistique",
      description: "Solutions logistiques complètes pour optimiser votre chaîne d'approvisionnement."
    },
    {
      icon: <FaShippingFast className="h-12 w-12 text-primary" />,
      title: "Livraison Express",
      description: "Service de livraison rapide pour vos envois urgents."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Des solutions de transport adaptées à vos besoins
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="mt-6 text-xl font-medium text-gray-900 text-center">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-600 text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;