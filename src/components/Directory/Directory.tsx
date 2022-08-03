import React from 'react';

const Reworth = require('@reworthrewards/reworth-directory');  
const { ReworthDirectory } = Reworth;

export const DirectoryComponent = () => {
    return (
      <ReworthDirectory 
        accentColor={'#2E58FF'} 
        lang={'ES'} 
        fontFamily={'Poppins'} 
      />
    )
}