/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
    * Contenido de la etiqueta.
    */
    label: string;
    /**
    * Tamaño de la etiqueta.
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Convertir todo mayúsculas
    */
    allCaps?: boolean;
    /**
     * Color de la etiqueta
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Permite escoger el color de letra.
    */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, fontColor, color }: MyLabelProps) => JSX.Element;
