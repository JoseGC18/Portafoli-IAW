import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Habilidades y Tecnologías
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
       
Tengo experiencia sólida en JavaScript, utilizando su versatilidad para desarrollar aplicaciones web dinámicas. Además, he trabajado extensivamente con React, aprovechando su eficiencia en la creación de interfaces de usuario interactivas. He utilizado Next.js para construir aplicaciones React de manera optimizada y escalable.

En el lado del servidor, tengo habilidades en Node.js, permitiéndome desarrollar aplicaciones web eficientes y escalables. También he trabajado con GraphQL para gestionar eficientemente las solicitudes y respuestas de la API, optimizando la transferencia de datos.

Mi experiencia en el diseño de interfaces incluye el uso de Material UI, una biblioteca que facilita la creación de componentes atractivos y coherentes. En conjunto, estas tecnologías me permiten abordar proyectos de desarrollo web de manera integral y eficaz.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}