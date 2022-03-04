import React from "react";
import { baseUrlDev } from "../../../../config/requestMethod/publicRequest";
import s from './SearchInput.module.scss';

const Searchinput = ({ callback, type, setInput})=>{

      const handlerChange = async input =>{
            let result
            //En el caso de que input no tenga nada
            setInput( input );
            if(input.length && (!type || type === 'Diets') ){
                  result = await baseUrlDev.get(`search/${input}?diets=true`);
                  callback(result.data);

            }else if(input.length && type === 'Routines') {
                  result = await baseUrlDev.get(`search/${input}?routines=true`);
                  callback(result.data);

            }else if(input.length && type === 'Nutritionists'){
                  result = await baseUrlDev.get(`search/${input}?nutritionist=true`);
                  callback(result.data);

            }else if(input.length && type === 'Personal Trainers'){
                  result = await baseUrlDev.get(`search/${input}?PTrainers=true`);
                  callback(result.data);
            }
            console.log(result)
      }

      return (
      <div className={s.searchInput}>
            <input type='text' className={s.addInput} placeholder={'Search items'} onChange={e => handlerChange(e.target.value)}/>
            <input type='submit' className={s.submitInput} value='Submit'/>
      </div>
      )
}

export default Searchinput;