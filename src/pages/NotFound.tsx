import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Mountain } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
        "404 Error: User attempted to access non-existent route:",
        location.pathname
    );
  }, [location.pathname]);

  return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-hero px-4">
        <Card className="max-w-lg w-full shadow-warm">
          <CardContent className="p-8 text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                <Mountain className="w-12 h-12 text-primary-foreground" />
              </div>
              <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Страницата не е намерена
              </h2>
              <p className="text-muted-foreground mb-6">
                Търсената от вас страница не съществува или е била преместена.
              </p>
            </div>

            <div className="space-y-3">
              <Button asChild className="w-full" size="lg">
                <Link to="/">
                  <Home className="w-4 h-4 mr-2" />
                  Начална страница
                </Link>
              </Button>
              <Button variant="outline" onClick={() => window.history.back()} className="w-full" size="lg">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Назад
              </Button>
            </div>

            <div className="mt-8 text-sm text-muted-foreground">
              <p>Ако мислите, че това е грешка, моля свържете се с нас.</p>
            </div>
          </CardContent>
        </Card>
      </div>
  );
};

export default NotFound;