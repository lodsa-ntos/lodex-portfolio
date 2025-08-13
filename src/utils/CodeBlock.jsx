import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import python from "highlight.js/lib/languages/python";
import "../styles/dracula-custom.css";
import xml from "highlight.js/lib/languages/xml";
import { PiCopy } from "react-icons/pi";
import { RxCheck } from "react-icons/rx";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("xml", xml);

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("css", css);
hljs.registerLanguage("python", python);

export default function CodeBlock({ code = "", language = "javascript" }) {
  const ref = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (ref.current) hljs.highlightElement(ref.current);
  }, [code, language]);

  const handleCopy = () => {
    if (ref.current) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div style={{ position: "relative", marginBottom: "1rem" }}>
      <button
        onClick={handleCopy}
        style={{
          position: "absolute",
          right: "0.5rem",
          top: "0.5rem",
          color: "#282a36",
          border: "none",
          borderRadius: "16px",
          padding: "0.25em 0.5em",
          cursor: "pointer",
        }}
      >
        {copied ? (
          <span className="flex items-center justify-end text-sm">
            <RxCheck className="text-green-500 size-5" />
            Copiado
          </span>
        ) : (
          <span className="flex items-center justify-end gap-0.5 text-sm">
            <PiCopy className="text-gray-500 size-5" />
            Copiar
          </span>
        )}
      </button>
      <pre>
        <code ref={ref} className={`hljs language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
