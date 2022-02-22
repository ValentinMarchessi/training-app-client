import { useEffect, useState } from 'react';
import style from './Dropdown.module.scss';
import clickAwayEventListener from '../../helpers/clickAwayEventListener';

/*
	USO DE <Dropdown/>

	ToggleElement es algun JSX.Element en el que se hace click para expandir el dropdown, como un ícono o un texto
	los hijos de dropdown son los items que se van a mostrar cuando se expanda el contenedor

	Ej:
	<Dropdown ToggleElement={<IconoMenu/>}/>
		<Link to=...>...</Link>
		<Link to=...>...</Link>
		<Link to=...>...</Link>
	</Dropdown>

	la propiedad align se usa para alinear el borde del dropdown con el borde del elemento padre,
	por defecto se alinean los bordes izquierdos del padre y del dropdown
*/

export default function Dropdown({ ToggleElement, align = 'left', children }) {
	const [active, setActive] = useState(false);
	
	useEffect(() => {
		const dropdown = document.getElementsByClassName(style.container);
		clickAwayEventListener(dropdown[0], () => setActive(false));
	}, [clickAwayEventListener]);

    function handleExpand() {setActive(!active);}
	
	const dropdownStyle = {[align]: 0}

    return (
		<div className={style.container}>
			<a id={style.expand} onClick={handleExpand}>
				{ToggleElement}
			</a>
			<div style={dropdownStyle} id={style.dropdown} className={active ? style.active : null}>
				{children}
			</div>
		</div>
	);
}