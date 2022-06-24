// import autocannon from "autocannon";
// import { PassThrough } from "stream";
// import logger from "./src/utils/loggers.js";

// function run(url) {
//     const buffer = [];
//     const stream = new PassThrough();
//     const inst = autocannon({
//         url,
//         connections: 100,
//         duration: 20
//     });
//     autocannon.track(inst, {outputStream})
//     outputStream.on('data', data => buffer.push(data));
//     inst.on('done', () => {
//         process.stdout.write(Buffer.concat(buffer));
//     });
// }

// logger.info("Iniciando prueba");
// run("http://localhost:8080/info");



import autocannon from "autocannon"
import { PassThrough } from 'stream'

function run(url){
    const buf = []
    const outputStream = new PassThrough()
    const inst = autocannon({
        url,
        connections: 100,
        duration: 20,
    })
    autocannon.track(inst, {outputStream})
    outputStream.on('data', data => buf.push(data))
    inst.on('done', () => {
        process.stdout.write(Buffer.concat(buf))
    })
}

run("http://localhost:8080/info");