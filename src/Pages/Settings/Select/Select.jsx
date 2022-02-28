import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: ${ props => props.direction};
    gap: 10px;
`

export default function Select({ children, onSelect, direction='row' }) {
    const [selected, setSelected] = useState();

    function handleSelect(event) {
        
    }

    return (
        <Container direction={direction}>
            {children.map(child => 
                <div onClick={handleSelect}>{child}</div>
            )}
        </Container>
    );
}