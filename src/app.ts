import Ffmpeg from 'fluent-ffmpeg';

process.on('uncaughtException', err => console.error('uncaughtException', err));
process.on('unhandledRejection', reason => console.error('unhandledRejection', reason));

Ffmpeg({ logger: console })
    .input('video=USB Camera')
    .inputFormat('dshow')
    .outputFormat('rtsp')
    .save('rtsp://127.0.0.1:5554/webcam')
    .run();
