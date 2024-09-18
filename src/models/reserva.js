import mongoose from "mongoose";

const schemaReserva =mongoose.Schema(
{
      fechaInicio: {
        type:Date,
        require:true,
        trim:true
      },
      fechaFin: {
        type:Date,
        require:true,
        trim:true
      },
      lugar: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'lugares'
      },
      usuario: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
      },
    },
    {
        timestamps:true
    }
)

const Reserva = mongoose.model('reserva', schemaReserva)

export default Reserva