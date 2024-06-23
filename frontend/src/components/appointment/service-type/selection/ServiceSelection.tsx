import Checkbox from '@mui/material/Checkbox';
import React, { useEffect, useState } from 'react';
import data from '../../../../assets/data/services.json';
import '../../../../css/appointment/service-type/selection/ServiceSelection.css';

type Props = {
  service: string
}

const ServiceSelection:React.FC<Props> = (prop:Props) => {  

  const mini_content = data.filter((item)=>item.title==prop.service)[0].mini_content;
  const mini_service_id = mini_content[0].mini_service_id

  
  let indices:any=[]


  console.log("indx",indices);
  console.log('-------------------------------------------------');
  
  const [checked, setChecked] = useState(
    new Array(mini_content.length)
    .fill(false)
  );  
  indices.forEach((idx:number)=>checked[idx]=true)
      
  useEffect(()=>{
    const allIndxFrmChecked = ((checked.map((item, index)=>(item?index:-1))));  
    const onlyCheckedIndx = allIndxFrmChecked.filter((idx)=>idx !== -1) 
    const checkedServices = onlyCheckedIndx.map((items)=>mini_content[items])    

    
    // prop.setAllServiceType({main_service:prop.service, sub_service:checkedServices, checked_indx:onlyCheckedIndx})    
  },[checked])
  
  const handleChange = (position:number) => {
    setChecked(checked.map((item, index) =>
      index === position ? !item : item
    ));
  }
  
  return (
    <div className='service-selection'>
      {
        mini_content.map(({mini_service_id, title,cost, time}, index) =>{
          return(
              <div className='select-wrapper' key={mini_service_id}>
                <div className='service-details'>
                  <div className='title'>
                    {title}
                  </div>
                  <div className='cost'>
                    {cost}
                  </div>
                  <div className='time'>
                    {time}
                  </div>
                </div>
                <div className='select-box'>
                    <Checkbox 
                      key={index}
                      checked={checked[index]}
                      onChange={() => handleChange(index)}/>
                </div>
            </div>
          )
        }
        )
      }

    </div>
  )
}

export default ServiceSelection