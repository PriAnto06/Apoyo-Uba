import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function ApunteView() {
  const { materia } = useParams(); // Ej: "programacionweb"
  const [contenido, setContenido] = useState("");

  useEffect(() => {
    // Ruta dinámica: busca el .md en /src/markdowns
    import(`../markdowns/${materia}.md`)
      .then((res) => fetch(res.default))
      .then((res) => res.text())
      .then((text) => setContenido(text))
      .catch(() => setContenido("# Apunte no encontrado 😢"));
  }, [materia]);

  return (
    <div className="prose mx-auto p-6">
      <ReactMarkdown
        children={contenido}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter language={match[1]} PreTag="div" {...props}>
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
}
