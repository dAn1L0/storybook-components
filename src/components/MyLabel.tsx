
import './mylabel.css'


export interface MyLabelProps {
  /**
  * Contenido de la etiqueta.
  */
  label: string
  /**
  * Tamaño de la etiqueta.
  */
  size: 'normal'|'h1'|'h2'|'h3'
  /**
   * Convertir todo mayúsculas
  */
  allCaps?: boolean,
  /**
   * Color de la etiqueta
  */
  color?: 'primary'|'secondary'|'tertiary',
  /**
   * Permite escoger el color de letra.
  */
  fontColor?: string
}

export const MyLabel = ({
  label = 'No label',
  size = 'normal',
  allCaps,
  fontColor,
  color = 'primary'
}: MyLabelProps) => {

  return (
    <span 
      className={`label ${ size } text-${color} `}
      style={{ textTransform:`${ allCaps ? 'uppercase' : 'lowercase' }`, color: `${fontColor}` }}
    >
      { label }
    </span>
  )

}

export default MyLabel;