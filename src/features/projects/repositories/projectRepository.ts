"use server"

import { createClient } from "@/shared/utils/supabase/server"

// 1. Tipados estrictos de la feature
export type Project = {
  id: string;
  name: string;
  status: "planning" | "in_progress" | "completed";
  location: string;
};

// 2. Funciones Repository (Capa de Acceso a Datos)
export async function getProjects(): Promise<Project[]> {
  const supabase = await createClient();

  // En el futuro leeremos desde la base de datos real:
  // const { data, error } = await supabase.from('projects').select('*').limit(3);
  // if (error) throw new Error(error.message);
  
  // Por ahora, simulamos unos datos dummy tipados:
  const dummyProjects: Project[] = [
    { id: "1", name: "Torre Reforma 432", status: "in_progress", location: "CDMX" },
    { id: "2", name: "Residencial Los Cabos", status: "completed", location: "BCS" },
    { id: "3", name: "Plaza Galerías Sur", status: "planning", location: "Jalisco" }
  ];

  return dummyProjects;
}
