import { Outlet, Link, useLocation } from "react-router-dom";
import { Home, MessageSquare, Target, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const MainLayout = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: "Início", path: "/" },
    { icon: MessageSquare, label: "Chat", path: "/chat" },
    { icon: Target, label: "Metas", path: "/metas" },
    { icon: BarChart3, label: "Relatórios", path: "/relatorios" },
  ];

  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-display font-bold text-primary">
            FinanÇa
          </h1>
          <p className="text-sm text-muted-foreground">Seu assistente financeiro pessoal</p>
        </div>
      </header>

      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>

      <nav className="border-t border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="flex justify-around py-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-smooth",
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-xs font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainLayout;
