import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryResponse } from './cloudinary-response';

const streamifier = require('streamifier');

@Injectable()
export class CloudinaryService {
    uploadFile(file: Express.Multer.File): Promise<CloudinaryResponse> {
        return new Promise<CloudinaryResponse>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
            {
                transformation: {
                    width: 1000,
                    crop: 'scale',
                    quality: 'auto',
                    fetch_format: 'webp'
                }
            },
                (error, result) => {
                    if (error) return reject(error);
                    resolve(result);
                }
            )

            streamifier.createReadStream(file.buffer).pipe(uploadStream)
        })
    }
}
