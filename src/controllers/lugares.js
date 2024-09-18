import Lugares from "../models/lugares.js"


export const createLugar = async (req, res) => {
    try {
      const { nombre, descripcion, direccion } = req.body;
      const nuevoLugar = await Lugares.create({
        nombre,
        descripcion,
        direccion
      });
  
      return res.status(201).json({ message: 'Lugar creado con éxito', lugar: nuevoLugar });
    } catch (error) {
      console.error('Error al crear el lugar:', error);
      return res.status(500).json({ message: 'Error al crear el lugar' });
    }
  };
  
  export const getLugarById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const lugar = await Lugares.findById(id);
  
      if (lugar) {
        return res.status(200).json({ lugar });
      } else {
        return res.status(404).json({ message: 'Lugar no encontrado' });
      }
    } catch (error) {
      console.error('Error al obtener el lugar por ID:', error);
      return res.status(500).json({ message: 'Error al obtener el lugar' });
    }
  };
  


  export const getAllLugar = async (req, res) => {
    try {
      const lugares = await Lugares.find();
  
      if (lugares && lugares.length > 0) {
        return res.status(200).json({ lugares });
      } else {
        return res.status(404).json({ message: 'No se encontraron lugares' });
      }
    } catch (error) {
      console.error('Error al obtener los lugares:', error);
      return res.status(500).json({ message: 'Error al obtener los lugares' });
    }
  };
  
  