import { useState } from 'react';
import './SearchBar.scss'

export default function SearchBar() {

    const [search, newSearch] = useState('')
    const [input, newInput] = useState('')
	return (
		<div className='searchBar'>
            
			
            <form onSubmit={event=>{
                event.preventDefault()
                newSearch(input)
            }}>
                <div className='searchField'>
                    <div className='searchInput'>
                        <input type='text' id='addInput' onChange={event=>{
                            newInput(event.target.value)
                        }}/>
                        <input type='submit' id='submitInput' value='submit'/>
                    </div>
                    <div className='filters'>
                        <button>
                            A - Z
                        </button>
                        <button>
                            Score
                        </button>
                        <button>
                            Price
                        </button>
                    </div>
                </div>
            </form>
            
            <div><h2 style={{height:'2rem', marginLeft:'10px'}}>{search?`Resultados para ${search}`:''}</h2></div>
		</div>
	);
}