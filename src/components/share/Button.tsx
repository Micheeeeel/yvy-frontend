import React from "react";

type ButtonProps = {
  text: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const Button: React.FC<ButtonProps> = ({ text, Icon }) => {
  return (
    <div>
      <button className="btn btn-primary text-secondary text-xl border-3 border-secondary flex items-center justify-center">
        {/* Afficher le texte seulement pour les écrans >= sm */}
        <span className="hidden sm:block text-outline-black">{text}</span>

        {/* Si le texte est visible, ajouter une marge à l'icône */}
        {Icon && (
          <Icon className="h-5 w-5 icon-outline-black" strokeWidth={3} />
        )}
      </button>
    </div>
  );
};

export default Button;
