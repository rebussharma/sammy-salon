import React from 'react';
type Props = {
  setArtistType(service:string[]): void;
}
const Artist:React.FC<Props> = (props: Props) => {

  
    // const handleChange = (e) => {
    //   props.setSearchTerm(e.target.value.toLowerCase());
    // };
    
  return (
    <div className="artist-service">
      <div className='artist'>
        Select an Artist
      </div>
    </div>
  )
}

export default Artist