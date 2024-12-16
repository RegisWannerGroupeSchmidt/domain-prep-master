import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GetStarted = () => {
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
            Commencer avec notre plateforme
          </h1>

          <div className="grid gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Étape 1: Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">
                  Commencez par configurer votre environnement de travail. Suivez notre guide détaillé pour une installation rapide.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Étape 2: Personnalisation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">
                  Personnalisez votre espace de travail selon vos besoins spécifiques.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Étape 3: Déploiement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">
                  Déployez votre première application en quelques clics.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild>
              <Link to="/">Retourner à l'accueil</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GetStarted;