import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, PieChart } from "lucide-react";

const Relatorios = () => {
  const categories = [
    { name: "Alimentação", amount: 850, percentage: 46, color: "bg-chart-1" },
    { name: "Transporte", amount: 420, percentage: 23, color: "bg-chart-2" },
    { name: "Entretenimento", amount: 280, percentage: 15, color: "bg-chart-3" },
    { name: "Saúde", amount: 200, percentage: 11, color: "bg-chart-4" },
    { name: "Outros", amount: 100, percentage: 5, color: "bg-chart-5" },
  ];

  const monthlyComparison = [
    { month: "Set", income: 4300, expenses: 2100 },
    { month: "Out", income: 4300, expenses: 1950 },
    { month: "Nov", income: 4300, expenses: 1850 },
    { month: "Dez", income: 4300, expenses: 1700 },
  ];

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <div>
        <h2 className="text-2xl font-display font-bold text-foreground mb-1">
          Relatórios
        </h2>
        <p className="text-sm text-muted-foreground">
          Visualize seus dados financeiros em detalhes
        </p>
      </div>

      <Tabs defaultValue="gastos" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="gastos">Gastos por Categoria</TabsTrigger>
          <TabsTrigger value="evolucao">Evolução Mensal</TabsTrigger>
        </TabsList>

        <TabsContent value="gastos" className="space-y-4">
          <Card className="p-6 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <PieChart className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground text-lg">
                  Distribuição de Gastos
                </h3>
                <p className="text-sm text-muted-foreground">
                  Total gasto este mês: R$ 1.850,00
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {categories.map((category) => (
                <div key={category.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">
                      {category.name}
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground">
                      {category.amount.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${category.color} transition-smooth`}
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {category.percentage}% do total
                  </p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 shadow-soft bg-gradient-to-br from-success/5 to-success/10 border-success/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                <TrendingDown className="h-6 w-6 text-success" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                  Análise Positiva
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Você reduziu seus gastos em 8% comparado ao mês passado. 
                  A categoria "Alimentação" teve a maior redução. Continue assim!
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="evolucao" className="space-y-4">
          <Card className="p-6 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground text-lg">
                  Evolução dos Últimos Meses
                </h3>
                <p className="text-sm text-muted-foreground">
                  Comparativo de receitas e despesas
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {monthlyComparison.map((data) => {
                const balance = data.income - data.expenses;
                const savingsRate = ((balance / data.income) * 100).toFixed(0);

                return (
                  <div key={data.month} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-display font-semibold text-foreground">
                        {data.month}
                      </span>
                      <span className="text-sm font-medium text-success">
                        {savingsRate}% poupado
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                        <p className="text-xs text-muted-foreground mb-1">Receitas</p>
                        <p className="text-lg font-semibold text-success">
                          {data.income.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-muted/50 border border-border">
                        <p className="text-xs text-muted-foreground mb-1">Despesas</p>
                        <p className="text-lg font-semibold text-foreground">
                          {data.expenses.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground">Saldo do mês</p>
                        <p className="text-xl font-bold font-display text-primary">
                          {balance.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card className="p-6 shadow-soft bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                  Tendência Positiva
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Suas despesas estão diminuindo consistentemente. Nos últimos 4 meses, 
                  você economizou R$ 1.800 a mais do que esperava!
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Relatorios;
