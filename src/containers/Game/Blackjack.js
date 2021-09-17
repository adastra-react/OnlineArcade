import React from 'react'
import Unity, { UnityContent, UnityContext } from 'react-unity-webgl'

const InGame = () => {
  const unityContent = new UnityContent(
    '../../../blackjack/WebGLversion.json',
    '../../../blackjack/UnityLoader.js'
  )
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

  const onLoaded = () => {
    // e.preventDefault()
    unityContent.send(
      "MainCamera",
      "ReactToUnity",
      JSON.stringify({
        "id": "6101e7c2e9d3e60022b86a12",
      }),
    )
  }


  unityContent.on("GameLoaded", (params) => {
    console.log('Game Loadedd', params)

    onLoaded()
  })

  return (
    <div>
      <p>black jack</p>
      <Unity unityContent={unityContent} width="100%" height="100%" />
    </div>
  )
}

export default InGame