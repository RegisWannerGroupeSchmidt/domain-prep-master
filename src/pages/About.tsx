import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-neutral-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Link to="/" className="text-primary hover:underline mb-8 inline-block">
            ← Retour à l'accueil
          </Link>

          <h1 className="text-4xl font-bold text-neutral-900 mb-8">
            À propos de notre plateforme
          </h1>

          <div className="prose prose-lg max-w-none">
            <p>
              Notre plateforme est conçue pour vous offrir une expérience utilisateur
              exceptionnelle. Nous nous efforçons de fournir des outils innovants et
              faciles à utiliser.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Notre Mission</h2>
            <p>
              Nous nous engageons à simplifier le développement web et à rendre la
              technologie accessible à tous. Notre mission est de fournir des outils
              puissants et intuitifs.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Notre Équipe</h2>
            <p>
              Notre équipe est composée d'experts passionnés par la technologie et
              dévoués à votre réussite. Nous travaillons constamment pour améliorer
              nos services.
            </p>
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/">Retourner à l'accueil</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;