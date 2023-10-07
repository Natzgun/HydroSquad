import { useRef } from 'react';
import { useFrame, useThree } from "@react-three/fiber";
import { useNavigate } from 'react-router-dom';

function InteractivePoint({ position, to }) {
  const meshRef = useRef();
  const navigate = useNavigate(); // Usar useNavigate en lugar de useHistory
  const { camera } = useThree();

  const alertRef = useRef(); // Referencia para la alerta de círculo

  // Rotar el punto para hacerlo más visible
  useFrame(() => {
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.005;
    alertRef.current.rotation.x += 0.055;
    alertRef.current.rotation.y += 0.05;
  });

  const handleClick = () => {
    // Aquí puedes agregar lógica adicional antes de navegar
    // Si deseas realizar alguna acción específica al hacer clic en el punto.

    // Por ejemplo, puedes hacer zoom al punto antes de navegar:
    const initialCameraPosition = camera.position.clone();
    camera.position.set(position[0], position[1], position[2] + 2); // Cambiar la posición de la cámara
    camera.lookAt(position[0], position[1], position[2]);

    // Después de un retraso, navega a la URL especificada
    setTimeout(() => {
      camera.position.copy(initialCameraPosition); // Restaurar la posición de la cámara
      camera.lookAt(0, 0, 0);
      // Luego, navega a la URL deseada
      navigate(to); // Usar navigate en lugar de history.push
    }, 0); // 1000 ms (1 segundo)
  };

  return (
    <group>

      <mesh
        ref={meshRef}
        position={position}
        onClick={handleClick}
      >
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshBasicMaterial color="#0174DF" />
      </mesh>
      {/* Alerta de círculo */}
      <mesh
        ref={alertRef}
        position={position}
        onClick={handleClick}
      >
        <sphereGeometry args={[0.16, 16, 8]} />
        <meshBasicMaterial color="red" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

export default InteractivePoint;
