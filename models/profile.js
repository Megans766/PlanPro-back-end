import mongoose from 'mongoose'

const Schema = mongoose.Schema


const profileSchema = new Schema({
  name: String,
  photo: String,
  goals: [{ type: Schema.Types.ObjectId, ref: 'GoalList' }],
  isComplete: { 
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
})



const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
