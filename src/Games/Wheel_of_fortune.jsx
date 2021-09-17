import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import Unity, { UnityContent } from 'react-unity-webgl';
import './Wheel_of_fortune.css';

function Wheel_of_fortune() {

    const { users } = useAuth();

    const unityContent = new UnityContent(
        '../../WOF/WebGLversion.json',
        '../../WOF/UnityLoader.js',
    )

    // this block of code is EXTREMELY important
    unityContent.on("GameLoaded", (params) => {
        onLoaded();
    })

    const onLoaded = () => {
        // e.preventDefault()
        unityContent.send(
          "MainCamera",
          "ReactToUnity",
          JSON.stringify({
          "id": `${users.mong_id}`
          }),
        )}
    // this block of code is EXTREMELY important

    return (
        <div className="bingo">
            {/* updated wheel_of_fortune */}
                <div className="game_container">
                    <Unity className="unity_loader" unityContent={unityContent} width="100%" height="100%" /> 
                
                </div>
            {/* updated wheel_of_fortune */}
        </div>
    )
}

export default Wheel_of_fortune
//
