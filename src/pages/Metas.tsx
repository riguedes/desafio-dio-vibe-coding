import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Plus, Target, TrendingUp } from "lucide-react";

const Metas = () => {
  const goals = [
    {
      id: 1,
      title: "Fundo de Emergência",
      target: 10000,
      current: 4500,
      deadline: "Dez 2025",
      category: "Economia",
    },
    {
      id: 2,
      title: "Viagem",
      target: 5000,
      current: 2100,
      deadline: "Jul 2025",
      category: "Lazer",
    },
    {
      id: 3,
      title: "Reduzir Gastos com Delivery",
      target: 300,
      current: 180,
      deadline: "Este mês",
      category: "Economia",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-display font-bold text-foreground mb-1">
            Minhas Metas
          </h2>
          <p className="text-sm text-muted-foreground">
            Acompanhe o progresso dos seus objetivos financeiros
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Nova Meta
        </Button>
      </div>

      <div className="grid gap-4">
        {goals.map((goal) => {
          const progress = (goal.current / goal.target) * 100;
          const remaining = goal.target - goal.current;

          return (
            <Card key={goal.id} className="p-6 shadow-soft hover:shadow-card transition-smooth">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-lg">
                      {goal.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {goal.category} • {goal.deadline}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-muted-foreground">
                    Progresso
                  </p>
                  <p className="text-2xl font-bold font-display text-primary">
                    {progress.toFixed(0)}%
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <Progress value={progress} className="h-3" />

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Atual</p>
                    <p className="text-lg font-semibold text-foreground">
                      {goal.current.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Faltam</p>
                    <p className="text-lg font-semibold text-accent">
                      {remaining.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Meta</p>
                    <p className="text-lg font-semibold text-foreground">
                      {goal.target.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-6 shadow-soft bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <TrendingUp className="h-6 w-6 text-accent" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-semibold text-foreground text-lg mb-2">
              Dica do Assistente
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Com seu ritmo atual, você atingirá seu Fundo de Emergência em 8 meses! 
              Considere aumentar em R$ 200/mês para alcançar sua meta 2 meses mais cedo.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Metas;
