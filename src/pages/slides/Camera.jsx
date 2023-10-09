import {PerspectiveCamera} from '@react-three/drei'
const Camera = ()=>{
    return(
        <PerspectiveCamera
         makeDefault 
         
         position={[45,10, 15]}
         zoom={2}
         
         fov={5}
         />

    )
}
export default Camera