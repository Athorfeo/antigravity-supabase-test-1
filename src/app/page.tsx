import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { createClient } from "@/shared/utils/supabase/server";
import { Database, Zap, Shield, ArrowRight, User } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";
    const supabase = await createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return (
    <main className="flex flex-1 flex-col items-center justify-center min-h-[100dvh] bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-1/4 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header/Nav */}
      <header className="absolute top-0 w-full p-6 flex justify-between items-center z-50">
        <div className="flex items-center gap-2">
          {user && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground border border-border bg-background/50 px-4 py-2 rounded-full shadow-sm backdrop-blur-md">
              <User className="h-4 w-4" />
              <span className="font-mono text-xs">{user.email}</span>
              <div className="w-px h-4 bg-border mx-2" />
              <form action={signOut} className="flex items-center">
                <button type="submit" className="text-red-500 hover:text-red-600 font-medium transition-colors">Salir</button>
              </form>
            </div>
          )}
        </div>
        <ThemeToggle />
      </header>

      {/* Hero Content */}
      <div className="container max-w-4xl px-4 md:px-6 flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 z-10">
        <div className="inline-flex items-center rounded-full border border-border bg-background/50 px-3 py-1 text-sm font-medium backdrop-blur-md shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
          Todo configurado y conectado
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          Antigravity <br /> <span className="text-primary italic">Supabase</span> Stack
        </h1>
        
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Prueba el flujo de inicio de sesión de Supabase Auth sin middlewares complicados y con diseño espectacular.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          {!user ? (
            <Link href="/login">
              <Button size="lg" className="rounded-full shadow-lg h-12 px-8 gap-2 group">
                Iniciar Sesión
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          ) : (
            <Button variant="default" size="lg" className="rounded-full shadow-lg h-12 px-8 gap-2 group pointer-events-none bg-emerald-600/90 hover:bg-emerald-700 text-white border-transparent">
              Estás Autenticado
              <Shield className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}
