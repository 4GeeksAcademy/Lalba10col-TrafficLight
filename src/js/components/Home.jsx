import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

    const [contador, setContador] = useState(0);
    const [nombre, setNombre] = useState("Juan");
    const [edad, setEdad] = useState(20);
    const [hora, setHora] = useState(new Date());

    const [claseCSS, setClaseCSS] = useState("bg-primary")

    const [color, setColor] = useState('text-white');

    const [seleccionado, setSelecionado] = useState('text-white');

    useEffect(() => {
        console.log("useEffect sin dependencia - 'Renderizado");
    })

    useEffect(() => {
        // const idInterval = setInterval(() => {
        //     setHora(new Date())
        // }, 1000);
        // return () => clearInterval(idInterval);

        console.log("useEffect con dependencia Vacia - 'Componente Montado'");

    }, [])

    useEffect(() => {

        console.log("useEffect con dependencia 'Contador'", contador);
    }, [contador]);



    return (
        <div className="text-center">PROYECTO SEMAFORO


            {/* <p>NOMBRE: {nombre}</p>
            <p>EDAD: {edad}</p>
            <p>CONTADOR: {contador}</p>
            <p>LA HORA ACTUAL ES: {hora.toLocaleTimeString()}</p>


            <button onClick={() => { setContador(contador + 1) }}>Incrementar</button>
            <button onClick={() => { setContador(contador - 1) }}>Decrementar</button> */}



            {/* CODIGO FINAL DE SEMAFORO CON ESTILO MODIFICADO */}

            <div className="mt-5 d-flex justify-content-center">
                <div className={`d-flex flex-column align-items-center gap-3 p-4 bg-dark rounded-4 ${claseCSS}`} style={{ width: '120px' }}>

                    <div
                        className={`bg-danger rounded-circle`}
                        style={{
                            width: '60px',
                            height: '60px',
                            cursor: 'pointer',
                            boxShadow: seleccionado === 'bg-danger' ? '0 0 20px 5px white' : 'none'
                        }}
                        onClick={() => { setSelecionado('bg-danger') }}
                    ></div>

                    <div
                        className={`bg-warning rounded-circle`}
                        style={{
                            width: '60px',
                            height: '60px',
                            cursor: 'pointer',
                            boxShadow: seleccionado === 'bg-warning' ? '0 0 20px 5px white' : 'none'
                        }}
                        onClick={() => { setSelecionado('bg-warning') }}
                    ></div>

                    <div
                        className={`bg-success rounded-circle`}
                        style={{
                            width: '60px',
                            height: '60px',
                            cursor: 'pointer',
                            boxShadow: seleccionado === 'bg-success' ? '0 0 20px 5px white' : 'none'
                        }}
                        onClick={() => { setSelecionado('bg-success') }}
                    ></div>

                </div>
            </div>


            {/* CODIGO INICIAL DESARROLLADO EN CLASE */}
            {/* <div className={`mt-5 $(claseCSS)`}>
                <div className={`bg-danger ${seleccionado == 'bg-danger' ? 'text-white' : ''}`} onClick={() => { setSelecionado('bg-danger') }}>LUZ ROJA</div>
                <div className={`bg-warning ${seleccionado == 'bg-warning' ? 'text-white' : ''}`} onClick={() => { setSelecionado('bg-warning') }}>LUZ AMARILLA</div>
                <div className={`bg-success ${seleccionado == 'bg-success' ? 'text-white' : ''}`} onClick={() => { setSelecionado('bg-success') }}>LUZ VERDE</div>

            </div> */}

            {/* <div>

                <button onClick={() => { setClaseCSS('bg-danger') }}>Cambiar Background a Rojo</button>
                <br />
                <button onClick={() => { setClaseCSS('bg-warning') }}>Cambiar Background a Amarillo</button>
                <br />
                <button onClick={() => { setClaseCSS('bg-success') }}>Cambiar Background a Verde</button>

            </div> */}


        </div>
    );
};

export default Home;