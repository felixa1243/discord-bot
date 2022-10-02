import {client} from './index.js'
export const commands = [
    {
      name: 'ping',
      description: 'Test if bot correctly added',
    },{
        name:'hot',
        description:'look for weekly trending movie'
    },{
      name:'find',
      description:'find more information for a movie',
      options:[
        {
          name:'movie',
          description:'name of movie',
          type:'3',
          required:true
        }
      ]
    }
  ];  
