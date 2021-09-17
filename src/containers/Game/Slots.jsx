import React, { useEffect } from 'react';
import { useAuth } from '../../Context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import Unity, { UnityContent, UnityContext } from 'react-unity-webgl';
import './Bingo_unity.css'

// const unityContext = new UnityContext({
//     loaderUrl: "build/myunityapp.loader.js",
//     dataUrl: "build/myunityapp.data",
//     frameworkUrl: "build/myunityapp.framework.js",
//     codeUrl: "build/myunityapp.wasm",
//   });

function Slots() {

    const { users } = useAuth();


    const history = useHistory();

    // make sure you the this this black of code for each game with their respective paths
        const unityContent = new UnityContent(
            '../../Slots/WebGLversion.json',
            '../../Slots/UnityLoader.js'
        )
    // make sure you the this this black of code for each game with their respective paths

    // this block of code is EXTREMELY important
    const onLoaded = () => {
        // e.preventDefault()
        unityContent.send(
          "MainCamera",
          "ReactToUnity",
          JSON.stringify({
          "id": `${users.mong_id}`,
          }),
        )}

        unityContent.on("GameLoaded", (params) => {
            onLoaded();
        })
    // this block of code is EXTREMELY important

    return (
        <>
        <div className="bingo">
            {/* updated slots */}
                <div className="game_container">
                    <Unity className="canvas" unityContent={unityContent} width="100%" height="100%" /> 
                
                </div>
            {/* updated slots */}
        </div>
        </>
    )
}

export default Slots;
