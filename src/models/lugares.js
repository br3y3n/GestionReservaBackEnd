import mongoose from "mongoose";

const schemaLugar =mongoose.Schema(
{

      nombre: {
        type:String,
        require:true,
        trim:true
      },
      descripcion: {
        type:String,
        require:true,
        trim:true
      },
      direccion: {
        type:String,
        require:true,
        trim:true
      },
    },
    {
        timestamps:true
    }
)

const Lugares = mongoose.model('lugares', schemaLugar)

export default Lugares