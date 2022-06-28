import api from '../service/api';
export async function postScreenAccess(screenId, userId){
  try{
    await api.post("screens", {screenId, userId});
  }catch(error){
    console.log(error)
  }
}