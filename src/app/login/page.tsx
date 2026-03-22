import { login, signup } from "./actions";
import { Shield } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-[100dvh] bg-gradient-to-b from-background to-muted/20 items-center justify-center p-4">
      <div className="w-full max-w-md bg-background/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        
        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary/20 rounded-full blur-[40px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 bg-blue-500/20 rounded-full blur-[40px] pointer-events-none" />

        <div className="flex flex-col items-center mb-8 relative z-10">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
            <Shield className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Bienvenido</h2>
          <p className="text-sm text-muted-foreground text-center mt-2">
            Ingresa con tu correo y contraseña o crea una cuenta nueva en un solo clic.
          </p>
        </div>

        <form className="flex flex-col gap-5 relative z-10">
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium leading-none">
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="tu@email.com"
              className="flex h-11 w-full rounded-xl border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="text-sm font-medium leading-none">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="••••••••"
              className="flex h-11 w-full rounded-xl border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <button
              formAction={login}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded-xl h-11"
            >
              Iniciar Sesión
            </button>
            <button
              formAction={signup}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground rounded-xl h-11"
            >
              Crear cuenta nueva
            </button>
          </div>
          <div className="text-center mt-4">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Volver al inicio
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
