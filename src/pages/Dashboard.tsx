import { Card } from "@/components/ui/card";
import { TrendingDown, TrendingUp, Wallet, DollarSign, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    {
      label: "Saldo Atual",
      value: "R$ 2.450,00",
      icon: Wallet,
      trend: "+12%",
      isPositive: true,
    },
    {
      label: "Gastos do Mês",
      value: "R$ 1.850,00",
      icon: TrendingDown,
      trend: "-5%",
      isPositive: true,
    },
    {
      label: "Receitas",
      value: "R$ 4.300,00",
      icon: TrendingUp,
      trend: "+8%",
      isPositive: true,
    },
    {
      label: "Economia",
      value: "R$ 600,00",
      icon: DollarSign,
      trend: "+15%",
      isPositive: true,
    },
  ];

  const recentTransactions = [
    { id: 1, description: "Supermercado Extra", amount: -125.50, category: "Alimentação", date: "Hoje" },
    { id: 2, description: "Salário", amount: 4300.00, category: "Receita", date: "Ontem" },
    { id: 3, description: "Netflix", amount: -39.90, category: "Entretenimento", date: "02/12" },
    { id: 4, description: "Uber", amount: -28.00, category: "Transporte", date: "01/12" },
  ];

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <div>
        <h2 className="text-2xl font-display font-bold text-foreground mb-1">
          Olá! 👋
        </h2>
        <p className="text-muted-foreground">
          Aqui está um resumo das suas finanças
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="p-4 shadow-soft hover:shadow-card transition-smooth">
              <div className="flex items-start justify-between mb-2">
                <Icon className="h-5 w-5 text-muted-foreground" />
                <span className={cn(
                  "text-xs font-medium",
                  stat.isPositive ? "text-success" : "text-destructive"
                )}>
                  {stat.trend}
                </span>
              </div>
              <p className="text-2xl font-bold font-display text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </Card>
          );
        })}
      </div>

      <Card className="p-6 shadow-soft">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-display font-semibold text-foreground">
            Transações Recentes
          </h3>
          <Link to="/chat">
            <Button variant="ghost" size="sm" className="text-primary">
              Ver todas
            </Button>
          </Link>
        </div>
        
        <div className="space-y-3">
          {recentTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-smooth"
            >
              <div className="flex-1">
                <p className="font-medium text-foreground text-sm">
                  {transaction.description}
                </p>
                <p className="text-xs text-muted-foreground">
                  {transaction.category} • {transaction.date}
                </p>
              </div>
              <p className={cn(
                "font-semibold text-sm",
                transaction.amount > 0 ? "text-success" : "text-foreground"
              )}>
                {transaction.amount > 0 ? "+" : ""}
                {transaction.amount.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Link to="/metas">
          <Card className="p-6 shadow-soft hover:shadow-card transition-smooth cursor-pointer bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <Target className="h-8 w-8 text-primary mb-3" />
            <h3 className="text-lg font-display font-semibold text-foreground mb-2">
              Suas Metas
            </h3>
            <p className="text-sm text-muted-foreground">
              Defina e acompanhe suas metas financeiras
            </p>
          </Card>
        </Link>

        <Link to="/relatorios">
          <Card className="p-6 shadow-soft hover:shadow-card transition-smooth cursor-pointer bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
            <TrendingUp className="h-8 w-8 text-accent mb-3" />
            <h3 className="text-lg font-display font-semibold text-foreground mb-2">
              Relatórios
            </h3>
            <p className="text-sm text-muted-foreground">
              Visualize gráficos e insights detalhados
            </p>
          </Card>
        </Link>
      </div>
    </div>
  );
};

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default Dashboard;
