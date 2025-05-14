function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Koli Go</h3>
            <p className="text-gray-400">
              Solutions de transport professionnel pour vos besoins logistiques.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="text-gray-400">
              <li>Email: contact@koligo.com</li>
              <li>Tél: +221 XX XXX XX XX</li>
              <li>Adresse: Dakar, Sénégal</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="text-gray-400">
              <li><a href="#" className="hover:text-white">Accueil</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#about" className="hover:text-white">À propos</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Koli Go. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;