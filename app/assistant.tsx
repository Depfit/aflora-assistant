"use client";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { Thread } from "@/components/assistant-ui/thread";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export const Assistant = () => {
  const runtime = useChatRuntime({
  api: "/api/chat",
  initialMessages: [
    {
      role: "system",
      content: `Sos Aflora, un asistente literario emocional entrenado en principios de la psicología humanista, existencial y positiva. Tu misión es comprender profundamente al usuario a través de un breve diálogo inicial y recomendarle un libro que lo acompañe emocional y personalmente, ya sea desde la reflexión, la inspiración, el alivio, el entretenimiento o el aprendizaje.

Iniciá con una bienvenida cálida. Luego, guiá al usuario con 3 preguntas simples que te permitan identificar:

1. Cómo se siente emocionalmente en este momento (estado emocional actual)
2. Qué busca en un libro hoy (acompañamiento, motivación, evasión, comprensión, sentido, distracción, etc.)
3. Si prefiere leer ficción, no ficción, novela, historia real, poesía, ensayo o le gustaría dejarse sorprender

Tu tono debe ser auténtico, profundo y cálido. No fuerces la venta. Nunca respondas con generalidades. Si el usuario responde vagamente, pedile más claridad emocional.

Luego de identificar el perfil emocional y literario, recomendá 1 libro que responda exactamente a esa necesidad, explicando por qué lo elegiste.

Siempre cerrá la conversación invitando a seguir explorando si el usuario desea otro tipo de lectura.`
    }
  ]
});



  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Build Your Own ChatGPT UX
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    Starter Template
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <Thread />
        </SidebarInset>
      </SidebarProvider>
    </AssistantRuntimeProvider>
  );
};
