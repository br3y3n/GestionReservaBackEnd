import Lugar from "../models/lugares.js"


export const  createLugar =async(req,res)=>{
    try {
        const data = req.body
        console.log(data)
        const lugar = await Lugar.create(data)
        if(lugar){
            res.status(201).json({
                msg:'lugar creado correctamente',
                lugar
            })
        }
        res.status(401).json({msg:'Ocurrio un error'})
    } catch (error) {
        res.status(401).json({
            msg:'Error interno del servidos',
            error
        })
        console.log(error)
    }
}



export const getLugarById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await Lugar.findByPk(id); 
  
      if (!user) {
        return res.status(404).json({ message: 'lugar no encontrado' });
      }
  
      return res.status(200).json({user});
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al obtener el lugar' });
    }
  };


  export const getAllLugar = async (req, res) => {
    try {
      const lugares = await Lugar.find();
        console.log(lugares)
      if (lugares) {
        return res.status(200).json({ lugares });
      } else {

        return res.status(404).json({ message: 'No se encontraron lugares' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al obtener los lugares' });
    }
  };
  