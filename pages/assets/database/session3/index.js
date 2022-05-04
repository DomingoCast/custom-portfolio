const importAll = (r) => {
      return r.keys().map(r);
}
//export const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

//export const info = {
    //name: "session1",
    //description: "mira que fotos mas guapas que me he sacado lmaoooooooooooo",
//}

//export default images
//
const data = {
    images : importAll(require.context('./', false, /\.(png|jpe?g|svg)$/)),
    info : {
        name: "cuarentena",
        description: "mira que fotos mas guapas que me he sacado lmaoooooooooooo",
    }
}

export default data
