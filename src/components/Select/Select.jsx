import style from './Select.module.scss';

/*
	PROPS

	options: Option[] (un arreglo de objetos Option, definidos abajo)

	interface Option{
		display: string,   //display es el valor que se muestra en la UI
		value: string
	}

	callback: function
	callback es algún handler que se pasa desde el componente padre para que Select pueda devolver el value elegido.
	Ej de callback:

	function handleSelect(event){
		const {value} = event.target
		.
		.
		.
	}
*/

export default function Select({ options, callback }) {
	return (
		<div className={style.container}>
			<div className={style.select}>
				<select defaultValue={options[0].value ?? options[0]} onChange={callback}>
					{options.length
						? options.map((option, index) => (
								<option key={index} value={option.value ?? option}>
									{option.display ?? option.value ?? option}
								</option>
						))
						: null}
				</select>
			</div>
		</div>
	);
}