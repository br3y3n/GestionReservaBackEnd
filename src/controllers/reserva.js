import Reserva from "../models/reserva.js";
export const createReserva = async (req, res) => {
    try {
      const data = req.body;
 
      const reservas = await Reserva.find({ lugar: data.lugar });
      console.log(reservas);
      if (reservas){
        console.log(true);
        }
  
    } catch (error) {
      console.error('Error al crear el reserva:', error);
      return res.status(500).json({ message: 'Error al crear el reserva' });
    }
  };
  
  export const getReservaById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const reserva = await Reserva.findById(id).populate('usuario').populate('lugar');
  
      if (reserva) {
        return res.status(200).json({ reserva });
      } else {
        return res.status(404).json({ message: 'reserva no encontrada' });
      }
    } catch (error) {
      console.error('Error al obtener la reserva por ID:', error);
      return res.status(500).json({ message: 'Error al obtener la reserva' });
    }
  };


  export const getReservaByIdUser = async (req, res) => {
    const { id } = req.params;
  
    try {
      const reserva = await Reserva.findOne({usuario:id}).populate('usuario').populate('lugar');
  
      if (reserva) {
        return res.status(200).json({ reserva });
      } else {
        return res.status(404).json({ message: 'reserva no encontrada' });
      }
    } catch (error) {
      console.error('Error al obtener la reserva por ID:', error);
      return res.status(500).json({ message: 'Error al obtener la reserva' });
    }
  };
  


  export const getAllReservas = async (req, res) => {
    try {
      const reserva = await Reserva.find().populate('usuario').populate('lugar');
  
      if (reserva) {
        return res.status(200).json(reserva);
      } else {
        return res.status(404).json({ message: 'No se encontraron reserva' });
      }
    } catch (error) {
      console.error('Error al obtener los reserva:', error);
      return res.status(500).json({ message: 'Error al obtener los reserva' });
    }
  };
  
  