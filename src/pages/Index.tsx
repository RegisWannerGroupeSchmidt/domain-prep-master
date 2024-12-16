import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-accent rounded-full text-neutral-700">
            Bienvenue
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            Site de Test
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 mb-8">
            Cette page est prête à être déployée sur votre domaine personnel.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-x-4"
          >
            <button className="px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors">
              Commencer
            </button>
            <button className="px-6 py-3 bg-accent text-neutral-700 rounded-lg hover:bg-accent-dark transition-colors">
              En savoir plus
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;