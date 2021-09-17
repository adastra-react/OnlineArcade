import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import Unity, { UnityContent, UnityContext } from 'react-unity-webgl';
// import './Bingo_unity.css'

// const unityContext = new UnityContext({
//     loaderUrl: "build/myunityapp.loader.js",
//     dataUrl: "build/myunityapp.data",
//     frameworkUrl: "build/myunityapp.framework.js",
//     codeUrl: "build/myunityapp.wasm",
//   });

function Roulette() {

    const { users } = useAuth();

    // make sure you the this this black of code for each game with their respective paths
        const unityContent = new UnityContent(
            '../../../Roulette/WebGLversion.json',
            '../../../Roulette/UnityLoader.js',
        )
    // make sure you the this this black of code for each game with their respective paths

    unityContent.on("quitted", () => {
        console.log('Game quit')
      })
      unityContent.on("loaded", () => {
        console.log('Game loaded')
      })
      unityContent.on("progress", progression => {
        console.log('Game loading', progression)
      })
      unityContent.on("error", message => {
        console.log('Game errored', message)
      })

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
                <div className="game_container">
                    <Unity className="canvas" unityContent={unityContent} width="100%" height="100%" /> 
                
                </div>
        </div>
        </>
    )
}

export default Roulette
