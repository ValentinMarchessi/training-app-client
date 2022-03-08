/*
    PROPS
    on: boolean             condición que se tiene que cumplir para que se renderizen los nodos hijos de Fallback
    element: JSX.Element    elemento que se renderiza cuando no se cumple la condición
*/

export default function Fallback({ on, element, children }) {
	return on ? children : element || null;
}