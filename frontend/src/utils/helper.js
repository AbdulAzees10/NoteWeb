

export const shortName = (name) =>{

   if(!name) return "";
    
     const [firstname,lastname] =name.trim().split(' ')

     let word =firstname[0] +lastname[0]

 return word.toUpperCase();

}